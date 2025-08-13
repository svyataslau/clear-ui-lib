import React, { useState } from 'react'
import { DocGenerator, getAllComponents, Typography, Card, Button } from '../src'

export function EnhancedDocumentationPage() {
  const allComponents = getAllComponents()
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  const scrollToComponent = (componentName: string) => {
    setSelectedComponent(componentName)
    const element = document.getElementById(componentName.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Typography variant="h1" className="text-3xl font-bold text-gray-900">
              @clear/ui Documentation
            </Typography>
            <Typography variant="subtitle" color="secondary" className="mt-2">
              Complete component library documentation with examples and API reference
            </Typography>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-32">
              <Card variant="elevated" padding="md">
                <Typography variant="h4" className="mb-4">Components</Typography>
                <nav className="space-y-2">
                  {allComponents.map((component) => (
                    <button
                      key={component.name}
                      onClick={() => scrollToComponent(component.name)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedComponent === component.name
                          ? 'bg-accent-100 text-accent-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {component.name}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Typography variant="h5" className="mb-3">Quick Stats</Typography>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Total Components: {allComponents.length}</div>
                    <div>Last Updated: {new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Section */}
            <section className="mb-12">
              <Typography variant="h2" className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </Typography>
              <Card variant="elevated" padding="lg">
                <Typography variant="body" className="mb-4">
                                  @clear/ui is a Neumorphism UI component library designed specifically for social network applications. 
                It provides a comprehensive set of React components built with TypeScript and Tailwind CSS, featuring soft shadows and depth effects.
                </Typography>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{allComponents.length}</div>
                    <div className="text-sm text-blue-800">Components</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-green-800">TypeScript</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-purple-800">Categories</div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Components Section */}
            <section>
              <Typography variant="h2" className="text-2xl font-bold text-gray-900 mb-8">
                Components
              </Typography>
              
              <div className="space-y-12">
                {allComponents.map((component) => (
                  <div key={component.name} id={component.name.toLowerCase()}>
                    <div className="mb-8">
                      <Typography variant="h3" className="text-xl font-bold text-gray-900 mb-2">
                        {component.name}
                      </Typography>
                      <Typography variant="body" color="secondary">
                        {component.description}
                      </Typography>
                    </div>

                    {/* Examples */}
                    <Card variant="elevated" padding="lg" className="mb-8">
                      <Typography variant="h4" className="mb-4">Examples</Typography>
                      {component.examples}
                    </Card>

                    {/* Props Table */}
                    {component.props && component.props.length > 0 && (
                      <Card variant="outlined" padding="lg">
                        <Typography variant="h4" className="mb-4">Props</Typography>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Prop
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Required
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Default
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {component.props.map((prop) => (
                                <tr key={prop.name}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {prop.name}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                    {prop.type}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {prop.required ? (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        Required
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        Optional
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                    {prop.defaultValue || '-'}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-500">
                                    {prop.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
