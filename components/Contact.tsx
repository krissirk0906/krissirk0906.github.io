'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { init, send } from '@emailjs/browser';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Initialize EmailJS
  useEffect(() => {
    try {
      init("9SNdF1v3w0KmF-aKd");
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Your Name',
        reply_to: data.email,
      };

      console.log('Sending email with params:', templateParams);

      const response = await send(
        'service_snzfc97',
        'template_jawqjt4',
        templateParams
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully!',
        });
        reset();
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Your Message"
            rows={5}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {submitStatus.type && (
          <p className={`text-sm text-center mt-4 ${
            submitStatus.type === 'success' 
              ? 'text-green-500' 
              : 'text-red-500'
          }`}>
            {submitStatus.message}
          </p>
        )}
      </form>
    </Card>
  );
} 