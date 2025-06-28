"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations, languages } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
  availableLanguages: Record<Language, string>
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isClient, setIsClient] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Load language from localStorage on mount
    try {
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && languages[savedLanguage]) {
        setLanguageState(savedLanguage)
      }
    } catch (error) {
      console.warn('Failed to load language from localStorage:', error)
    }
    setIsLoaded(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (isClient) {
      try {
        localStorage.setItem('language', lang)
      } catch (error) {
        console.warn('Failed to save language to localStorage:', error)
      }
    }
  }

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    availableLanguages: languages,
    isLoaded
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 