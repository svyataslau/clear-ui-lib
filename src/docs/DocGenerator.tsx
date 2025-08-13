import React from 'react'
import { Typography } from '../components/Typography'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

interface ComponentDoc {
  name: string
  description: string
  examples: React.ReactNode
  props?: Array<{
    name: string
    type: string
    required: boolean
    defaultValue?: string
    description: string
  }>
}

interface DocGeneratorProps {
  components: ComponentDoc[]
  title?: string
  description?: string
}

export function DocGenerator({ 
  components, 
  title = "@clear/ui Documentation",
  description = "Complete component library documentation"
}: DocGeneratorProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Typography variant="h1" className="text-3xl font-bold text-gray-900">
              {title}
            </Typography>
            <Typography variant="subtitle" color="secondary" className="mt-2">
              {description}
            </Typography>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {components.map((component, index) => (
            <section key={component.name} id={component.name.toLowerCase()}>
              <div className="mb-8">
                <Typography variant="h2" className="text-2xl font-bold text-gray-900 mb-2">
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
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
