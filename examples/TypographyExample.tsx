import React from 'react'
import { Typography } from '../src'

export function TypographyExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Variants</h2>
        <div className="space-y-4">
          <Typography variant="h1">Heading 1 - Main Title</Typography>
          <Typography variant="h2">Heading 2 - Section Title</Typography>
          <Typography variant="h3">Heading 3 - Subsection</Typography>
          <Typography variant="h4">Heading 4 - Card Title</Typography>
          <Typography variant="h5">Heading 5 - Small Title</Typography>
          <Typography variant="h6">Heading 6 - Micro Title</Typography>
          <Typography variant="subtitle">Subtitle - Descriptive text</Typography>
          <Typography variant="body">Body - Regular paragraph text</Typography>
          <Typography variant="caption">Caption - Small helper text</Typography>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Colors</h2>
        <div className="space-y-4">
          <Typography variant="h4" color="primary">Primary Color Text</Typography>
          <Typography variant="h4" color="secondary">Secondary Color Text</Typography>
          <Typography variant="h4" color="accent">Accent Color Text</Typography>
          <Typography variant="h4" color="gray">Gray Color Text</Typography>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Weights</h2>
        <div className="space-y-4">
          <Typography variant="h4" weight="normal">Normal Weight Text</Typography>
          <Typography variant="h4" weight="medium">Medium Weight Text</Typography>
          <Typography variant="h4" weight="semibold">Semibold Weight Text</Typography>
          <Typography variant="h4" weight="bold">Bold Weight Text</Typography>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Typography in Context</h2>
        <div className="max-w-2xl space-y-6">
          <div>
            <Typography variant="h2" className="mb-2">Article Title</Typography>
            <Typography variant="subtitle" color="secondary" className="mb-4">
              Published on March 15, 2024 • 5 min read
            </Typography>
            <Typography variant="body" className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="body" className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="caption" color="gray">
              Tags: #design #typography #web
            </Typography>
          </div>

          <div className="border-t pt-6">
            <Typography variant="h4" className="mb-3">User Profile</Typography>
            <div className="space-y-2">
              <Typography variant="h5" weight="semibold">John Doe</Typography>
              <Typography variant="subtitle" color="secondary">Software Engineer</Typography>
              <Typography variant="body" color="secondary">
                Passionate about creating beautiful and functional user interfaces. 
                Specialized in React and TypeScript development.
              </Typography>
              <Typography variant="caption" color="gray">
                Member since January 2023
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
