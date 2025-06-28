"use client"

import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export const metadata: Metadata = {
  title: "Terms and Conditions - Remindly",
  description: "Terms and Conditions for Remindly mobile application",
}

export default function TermsAndConditions() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('backToHome')}
        </Link>
        
        <Card className="p-8 shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">{t('termsTitle')}</h1>
            <p className="text-muted-foreground">{t('effectiveDate')}</p>
          </div>
          
          <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
            {t('termsIntro')}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Acceptance of Terms
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  By using Remindly, you agree to be bound by these terms. If you do not agree with any part of the terms, you must not use the app.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                Use of the App
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">You must be at least 13 years old to use Remindly.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">Use the app in a lawful manner and for its intended purpose only.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">Do not attempt to reverse engineer, decompile, or hack the app.</p>
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                User Content
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  Any reminders or notes you create in the app are your own. We do not access or share your personal data without your consent.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                Privacy
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our{" "}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">
                    {t('privacyPolicy')}
                  </Link>{" "}
                  to understand how we collect and use information.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                Limitation of Liability
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  Remindly is provided "as is". We are not responsible for missed reminders, data loss, or other issues caused by device limitations or user error.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                Modifications
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  We reserve the right to modify or terminate the app or these terms at any time. Continued use after changes means you accept the new terms.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
                Termination
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  We may suspend or terminate your access to Remindly if you violate these terms or use the app inappropriately.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
                Governing Law
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  These terms shall be governed by and interpreted in accordance with the laws of your jurisdiction.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">9</span>
                Disclaimer
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">No Warranties:</strong> Remindly is provided "as is" without any warranties, express or implied. We do not guarantee that the app will be error-free or uninterrupted.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Accuracy of Information:</strong> While we strive to provide accurate and up-to-date information, we make no representations or warranties about the accuracy, reliability, or completeness of any information provided through the app.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Third-Party Content:</strong> The app may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Limitation of Liability:</strong> In no event shall Remindly, its developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the app.
                    </p>
                  </li>
                </ul>
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
                  If you have any questions about these Terms, contact us at:{" "}
                  <a href="mailto:junenine.dev@gmail.com" className="text-primary hover:underline font-medium">
                    junenine.dev@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">{t('thankYou')}</p>
          </div>
        </Card>
      </div>
    </div>
  )
} 