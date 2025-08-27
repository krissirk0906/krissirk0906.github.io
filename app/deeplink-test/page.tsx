'use client'

import { useEffect, useState } from 'react'

export default function DeeplinkTestPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Add Facebook App Links meta tags dynamically
    // These are the required meta tags for Facebook App Links to work properly
    const metaTags = [
      // iOS App Links
      { property: 'al:ios:url', content: 'o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b' },
      { property: 'al:ios:app_store_id', content: '6744225405' },
      { property: 'al:ios:app_name', content: 'UAT LocStoc Consumer' },
      
      // Android App Links
      { property: 'al:android:url', content: 'o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b' },
      { property: 'al:android:package', content: 'com.locstoc.consumer.internal' },
      { property: 'al:android:app_name', content: 'UAT LocStoc' },
      
      // Web fallback (when app is not installed)
      { property: 'al:web:url', content: 'https://o2o.dev.locstoc.com/product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b' },
      { property: 'al:web:should_fallback', content: 'true' },
      
      // Open Graph meta tags (required for Facebook sharing)
      { property: 'og:title', content: 'David Tate Ariana Pump - Black Suede' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://krissirk0906.github.io/deeplink-test' },
      { property: 'og:description', content: 'Check out this amazing David Tate Ariana Pump in Black Suede. Available on LocStoc!' },
      { property: 'og:image', content: 'https://krissirk0906.github.io/images/pic01.jpg' },
      { property: 'og:site_name', content: 'LocStoc' },
      
      // Twitter Card meta tags for better social sharing
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'David Tate Ariana Pump - Black Suede' },
      { name: 'twitter:description', content: 'Check out this amazing David Tate Ariana Pump in Black Suede. Available on LocStoc!' },
      { name: 'twitter:image', content: 'https://krissirk0906.github.io/images/pic01.jpg' },
    ]

    // Remove existing meta tags to avoid duplicates
    metaTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`) || 
                      document.querySelector(`meta[name="${tag.name}"]`)
      if (existing) {
        existing.remove()
      }
    })

    // Add new meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      if (tag.property) {
        meta.setAttribute('property', tag.property)
      }
      if (tag.name) {
        meta.setAttribute('name', tag.name)
      }
      meta.setAttribute('content', tag.content)
      document.head.appendChild(meta)
    })

    // Set page title
    document.title = 'David Tate Ariana Pump - Black Suede | LocStoc'
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

  const copyPageUrl = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      alert('Page URL copied to clipboard! Share this on Facebook to test App Links.')
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Page URL copied to clipboard! Share this on Facebook to test App Links.')
    })
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
            David Tate Ariana Pump - Black Suede
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Facebook App Links Configuration</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-700">
{`<!-- Facebook App Links Meta Tags -->
<!-- iOS App Links -->
<meta property="al:ios:url" content="o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b">
<meta property="al:ios:app_store_id" content="6744225405">
<meta property="al:ios:app_name" content="UAT LocStoc Consumer">

<!-- Android App Links -->
<meta property="al:android:url" content="o2o-dev://product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b">
<meta property="al:android:package" content="com.locstoc.consumer.internal">
<meta property="al:android:app_name" content="UAT LocStoc">

<!-- Web Fallback -->
<meta property="al:web:url" content="https://o2o.dev.locstoc.com/product/womenaposs-david-tate-ariana-pump-black-suede.119f26f90001b3834c980191ea5c1c2b">
<meta property="al:web:should_fallback" content="true">

<!-- Open Graph (Required for Facebook) -->
<meta property="og:title" content="David Tate Ariana Pump - Black Suede">
<meta property="og:type" content="website">
<meta property="og:url" content="https://krissirk0906.github.io/deeplink-test">
<meta property="og:description" content="Check out this amazing David Tate Ariana Pump in Black Suede. Available on LocStoc!">
<meta property="og:image" content="https://krissirk0906.github.io/images/pic01.jpg">`}
              </pre>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Facebook App Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={copyPageUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                📋 Copy Page URL for Facebook
              </button>
              
              <button
                onClick={openWebFallback}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                🌐 Open Web Fallback
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Deeplinks Directly</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => testDeeplink('ios')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                📱 Test iOS Deeplink
              </button>
              
              <button
                onClick={() => testDeeplink('android')}
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                🤖 Test Android Deeplink
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Facebook App Links Testing Instructions</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">1</span>
                <p>Click "Copy Page URL for Facebook" to copy this page's URL</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">2</span>
                <p>Share the copied URL on Facebook (post, story, or comment)</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">3</span>
                <p>Click the shared link on a mobile device with Facebook app</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">4</span>
                <p>If LocStoc app is installed, it should open with the product deeplink</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">5</span>
                <p>If app is not installed, it should redirect to the web fallback</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Facebook App Links Ready!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>This page is now properly configured with Facebook App Links. When shared on Facebook and clicked on mobile:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>✅ iOS users with the app will open LocStoc directly</li>
                    <li>✅ Android users with the app will open LocStoc directly</li>
                    <li>✅ Users without the app will see the web fallback</li>
                    <li>✅ Facebook will properly display the link preview with Open Graph meta tags</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
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
                    <li>Make sure your LocStoc app is properly configured to handle the custom scheme "o2o-dev://"</li>
                    <li>Test on both iOS and Android devices with Facebook app installed</li>
                    <li>Verify that the app store IDs and package names are correct</li>
                    <li>Check that the web fallback URL is accessible</li>
                    <li>Facebook may take some time to crawl and cache the meta tags</li>
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
