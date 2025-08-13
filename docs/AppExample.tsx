import React from 'react'
import { EnhancedDocumentationPage } from './EnhancedDocumentationPage'

// This is an example of how to use the documentation in your app
export function AppExample() {
  return (
    <div>
      {/* You can wrap the documentation page in your app layout */}
      <EnhancedDocumentationPage />
    </div>
  )
}

// Alternative: Simple documentation page without sidebar
export function SimpleAppExample() {
  return (
    <div>
      {/* Import the simple documentation page */}
      {/* <DocumentationPage /> */}
    </div>
  )
}

// Example of how to integrate documentation into an existing app
export function IntegrationExample() {
  const [showDocs, setShowDocs] = React.useState(false)

  return (
    <div className="min-h-screen">
      {/* Your app header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">My App</h1>
          <button
            onClick={() => setShowDocs(!showDocs)}
            className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600"
          >
            {showDocs ? 'Hide Docs' : 'Show Docs'}
          </button>
        </div>
      </header>

      {/* Conditional documentation */}
      {showDocs ? (
        <EnhancedDocumentationPage />
      ) : (
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to My App</h2>
          <p className="text-gray-600">
            This is your main app content. Click "Show Docs" to view the component documentation.
          </p>
        </div>
      )}
    </div>
  )
}
