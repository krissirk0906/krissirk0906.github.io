'use client'

import { useEffect, useState } from 'react'

export default function DeeplinkTestPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Add meta tags dynamically since we can't use metadata export in client components
    const metaTags = [
      { property: 'al:ios:url', content: 'o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b' },
      { property: 'al:ios:app_store_id', content: '6744225405' },
      { property: 'al:ios:app_name', content: 'UAT LocStoc Consumer' },
      { property: 'al:android:url', content: 'o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b' },
      { property: 'al:android:package', content: 'com.locstoc.consumer.internal' },
      { property: 'al:android:app_name', content: 'UAT LocStoc' },
      { property: 'al:web:url', content: 'https://o2o.dev.locstoc.com/product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b' },
      { property: 'al:web:should_fallback', content: 'true' },
    ]

    // Remove existing meta tags to avoid duplicates
    metaTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`)
      if (existing) {
        existing.remove()
      }
    })

    // Add new meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', tag.property)
      meta.setAttribute('content', tag.content)
      document.head.appendChild(meta)
    })

    // Set page title
    document.title = 'Deeplink Test - LocStoc'
  }, [])

  const testDeeplink = (platform: 'ios' | 'android') => {
    const url = platform === 'ios' 
      ? 'o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b'
      : 'o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b'
    
    try {
      // Try to open the deeplink
      window.location.href = url
      
      // Fallback: if the deeplink doesn't work, show a message
      setTimeout(() => {
        alert(`Deeplink test for ${platform} completed. If your app didn't open, the custom scheme may not be registered.`)
      }, 1000)
    } catch (error) {
      console.error('Deeplink error:', error)
      alert(`Error testing deeplink: ${error}`)
    }
  }

  const openWebFallback = () => {
    try {
      window.open('https://o2o.dev.locstoc.com/product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b', '_blank')
    } catch (error) {
      console.error('Web fallback error:', error)
      alert(`Error opening web fallback: ${error}`)
    }
  }

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Deeplink Test Page
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Meta Tags Configuration</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-700">
{`<!-- iOS App Links (custom scheme target) -->
<meta property="al:ios:url" content="o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b">
<meta property="al:ios:app_store_id" content="6744225405">
<meta property="al:ios:app_name" content="UAT LocStoc Consumer">

<!-- Android App Links (custom scheme target) -->
<meta property="al:android:url" content="o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b">
<meta property="al:android:package" content="com.locstoc.consumer.internal">
<meta property="al:android:app_name" content="UAT LocStoc">

<!-- Web fallback (user doesn't have app installed) -->
<meta property="al:web:url" content="https://o2o.dev.locstoc.com/product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b">
<meta property="al:web:should_fallback" content="true">`}
              </pre>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Deeplinks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => testDeeplink('ios')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Test iOS Deeplink
              </button>
              
              <button
                onClick={() => testDeeplink('android')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Test Android Deeplink
              </button>
              
              <button
                onClick={openWebFallback}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Open Web Fallback
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Deeplink URL</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm text-gray-700 break-all">
                o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b
              </code>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Testing Instructions</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">1</span>
                <p>Share this page URL on Facebook or other social media platforms</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">2</span>
                <p>Click the shared link on a mobile device</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">3</span>
                <p>If the app is installed, it should open with the deeplink</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">4</span>
                <p>If the app is not installed, it should redirect to the web fallback</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Notes</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Make sure your app is properly configured to handle the custom scheme "o2o-dev://"</li>
                    <li>Test on both iOS and Android devices</li>
                    <li>Verify that the app store IDs and package names are correct</li>
                    <li>Check that the web fallback URL is accessible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
