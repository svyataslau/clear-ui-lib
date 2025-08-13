import React, { useState } from 'react'
import { Input } from '../src'

export function InputExample() {
  const [values, setValues] = useState({
    text: '',
    email: '',
    password: '',
    search: '',
    error: '',
  })

  const handleChange = (field: string) => (value: string) => {
    setValues(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Input Types</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text Input
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={values.text}
              onChange={handleChange('text')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Input
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange('email')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Input
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange('password')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Input
            </label>
            <Input
              type="search"
              placeholder="Search..."
              value={values.search}
              onChange={handleChange('search')}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Input Sizes</h2>
        <div className="space-y-4 max-w-md">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
          <Input size="xl" placeholder="Extra large input" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Input States</h2>
        <div className="space-y-4 max-w-md">
          <Input placeholder="Normal input" />
          <Input placeholder="Disabled input" disabled />
          <Input
            placeholder="Error input"
            value={values.error}
            onChange={handleChange('error')}
            error
          />
        </div>
      </div>
    </div>
  )
}
