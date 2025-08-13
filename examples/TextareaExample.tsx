import React, { useState } from 'react'
import { Textarea } from '../src'

export function TextareaExample() {
  const [values, setValues] = useState({
    normal: '',
    error: '',
  })

  const handleChange = (field: string) => (value: string) => {
    setValues(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Textarea Sizes</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Small Textarea
            </label>
            <Textarea
              size="sm"
              placeholder="Small textarea..."
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Medium Textarea
            </label>
            <Textarea
              size="md"
              placeholder="Medium textarea..."
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Large Textarea
            </label>
            <Textarea
              size="lg"
              placeholder="Large textarea..."
              rows={5}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Textarea States</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Normal Textarea
            </label>
            <Textarea
              placeholder="Type your message here..."
              value={values.normal}
              onChange={handleChange('normal')}
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Disabled Textarea
            </label>
            <Textarea
              placeholder="This textarea is disabled"
              disabled
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Error Textarea
            </label>
            <Textarea
              placeholder="This textarea has an error"
              value={values.error}
              onChange={handleChange('error')}
              error
              rows={4}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Textarea with Different Rows</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2 Rows
            </label>
            <Textarea placeholder="Short textarea..." rows={2} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              6 Rows
            </label>
            <Textarea placeholder="Longer textarea..." rows={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
