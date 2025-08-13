import React from 'react'
import { DocGenerator, getAllComponents } from '../src'

export function DocumentationPage() {
  const allComponents = getAllComponents()

  return (
    <DocGenerator 
      components={allComponents}
      title="@clear/ui Documentation"
      description="Complete component library documentation with examples and API reference"
    />
  )
}
