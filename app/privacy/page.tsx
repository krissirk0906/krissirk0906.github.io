import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Remindly",
  description: "Privacy Policy for Remindly mobile application",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <Card className="p-8 shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">Privacy Policy</h1>
            <p className="text-muted-foreground">Effective Date: June 15, 2025</p>
          </div>
          
          <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
            June 9 Studio respects your privacy. This policy explains how we collect, use, and safeguard your information when you use the Remindly application developed by June 9 Studio.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Information We Collect
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Personal Information:</strong>
                      <p className="text-muted-foreground mt-1">When you voluntarily provide your name, email address, or phone number (e.g., for profile setup).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <strong className="text-foreground">Usage Data:</strong>
                      <p className="text-muted-foreground mt-1">Anonymous usage data, such as how you interact with reminders and app screens, may be collected for improving app functionality.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                How We Use Your Information
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">To display and manage your reminders</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">To improve the app's performance and user experience</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">To personalize features based on user preferences</p>
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                Data Storage
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  All personal data is stored locally on your device and never shared with third parties. No data is uploaded to cloud servers unless explicitly stated or supported via external backup options.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                Data Retention
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  We retain your reminders and related data only for as long as you keep the app installed on your device. Once the app is uninstalled, all locally stored data is permanently deleted.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                Data Deletion Policy
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  You have the right to delete your data at any time. You can do this by:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <strong>Uninstalling the app:</strong> This immediately and permanently deletes all locally saved reminders and associated data on your device.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <strong>Contacting us:</strong> If you have provided us with any personal information (via email or support inquiries) and would like it deleted, you can request data deletion by emailing us at junenine.dev@gmail.com. We will process your request within 14 days.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                Permissions
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  Remindly may request permissions such as location (for location-based reminders) and notifications (to deliver alerts). These are strictly used to support core app functionality.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
                Third-Party Services
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  We do not use or share your information with third-party advertisers or analytics services.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
                Security
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  We implement reasonable security practices to protect your data stored on the device. However, no method of storage is 100% secure.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">9</span>
                Changes to This Policy
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. We encourage you to review this page for any changes.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">10</span>
                Contact Us
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  If you have questions or concerns about this Privacy Policy or Data Deletion requests, please contact us at:{" "}
                  <a href="mailto:junenine.dev@gmail.com" className="text-primary hover:underline font-medium">
                    junenine.dev@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Thank you for using Remindly!</p>
          </div>
        </Card>
      </div>
    </div>
  )
} 