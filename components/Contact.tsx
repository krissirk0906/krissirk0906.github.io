"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/LanguageContext"
import emailjs from '@emailjs/browser'

type FormSchema = {
  name: { required: boolean; minLength: number }
  email: { required: boolean; pattern: RegExp }
  message: { required: boolean; minLength: number }
}

const formSchema: FormSchema = {
  name: { required: true, minLength: 2 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  message: { required: true, minLength: 10 }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    Object.entries(formSchema).forEach(([field, rules]) => {
      const value = formData[field as keyof typeof formData]
      
      if (rules.required && !value) {
        newErrors[field] = `${t(field as 'name' | 'email' | 'message')} is required`
      } else if ('minLength' in rules && value.length < rules.minLength) {
        newErrors[field] = `${t(field as 'name' | 'email' | 'message')} must be at least ${rules.minLength} characters`
      } else if ('pattern' in rules && !rules.pattern.test(value)) {
        newErrors[field] = `Please enter a valid ${t(field as 'name' | 'email' | 'message')}`
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Initialize EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
      
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      )
      
      console.log('Email sent successfully:', result)
      
      toast({
        title: "Success",
        description: t('messageSent'),
      })
      
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      
    } catch (error) {
      console.error('Error sending email:', error)
      
      toast({
        title: "Error",
        description: t('errorSending'),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">{t('contactTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('name')}
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
                placeholder={t('name')}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('email')}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
                placeholder={t('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('message')}
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={errors.message ? 'border-red-500' : ''}
                placeholder={t('message')}
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? t('sending') : t('sendMessage')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 