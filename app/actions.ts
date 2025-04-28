"use server"

import nodemailer from "nodemailer"
import { emailConfig } from "@/lib/email-config"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!emailConfig.auth.user || !emailConfig.auth.pass) {
    console.error("Email configuration is missing")
    return {
      message: "Email service is not configured. Please try again later.",
    }
  }

  try {
    const transporter = nodemailer.createTransport(emailConfig)

    const mailOptions = {
      from: emailConfig.from,
      to: emailConfig.to,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      message: "Something went wrong while sending your message. Please try again later.",
    }
  }
}
