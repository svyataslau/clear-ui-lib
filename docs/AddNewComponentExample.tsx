import React from 'react'
import { registerComponent, ComponentDoc } from '../src'

// Example of how to add a new component to the documentation
export function AddNewComponentExample() {
  // This is an example of how to register a new component
  // In real usage, you would do this in your component file or a separate registry file
  
  const newComponentDoc: ComponentDoc = {
    name: 'NewComponent',
    description: 'A new component that was added to the library.',
    examples: (
      <div className="space-y-4">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="font-semibold">Basic Usage</h3>
          <p>This is an example of the new component in action.</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg">
          <h3 className="font-semibold">Advanced Usage</h3>
          <p>This shows more complex usage patterns.</p>
        </div>
      </div>
    ),
    props: [
      {
        name: 'title',
        type: 'string',
        required: true,
        description: 'The title of the component'
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        defaultValue: "''",
        description: 'Optional description text'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Callback function when component is clicked'
      }
    ]
  }

  // Register the new component
  // registerComponent(newComponentDoc)

  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">How to Add New Components</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Step 1: Create Your Component</h3>
          <p className="text-gray-600 mb-4">
            Create your component in the <code className="bg-gray-200 px-1 rounded">src/components/</code> directory.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Step 2: Create an Example</h3>
          <p className="text-gray-600 mb-4">
            Create an example file in the <code className="bg-gray-200 px-1 rounded">examples/</code> directory 
            to showcase your component's usage.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Step 3: Register in Documentation</h3>
          <p className="text-gray-600 mb-4">
            Add your component to the documentation registry by importing it and calling 
            <code className="bg-gray-200 px-1 rounded">registerComponent()</code>.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import { registerComponent } from '@clear/ui'
import { NewComponentExample } from './examples/NewComponentExample'

const newComponentDoc = {
  name: 'NewComponent',
  description: 'Description of your component',
  examples: <NewComponentExample />,
  props: [
    {
      name: 'propName',
      type: 'string',
      required: true,
      description: 'Description of the prop'
    }
  ]
}

registerComponent(newComponentDoc)`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Step 4: Export from Library</h3>
          <p className="text-gray-600 mb-4">
            Add your component to the main <code className="bg-gray-200 px-1 rounded">src/index.ts</code> file 
            so it can be imported by users.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">✨ Automatic Documentation</h4>
          <p className="text-blue-800">
            Once you register your component, it will automatically appear in the documentation 
            page with examples, props table, and descriptions!
          </p>
        </div>
      </div>
    </div>
  )
}
