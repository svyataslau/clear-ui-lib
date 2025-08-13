import React from 'react'
import { Navbar, Button, Avatar } from '../src'

export function NavbarExample() {
  const navigationLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Explore', href: '#' },
    { label: 'Messages', href: '#' },
    { label: 'Profile', href: '#' },
  ]

  const logo = (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
      <span className="ml-2 text-xl font-bold text-gray-900">ClearUI</span>
    </div>
  )

  const actions = (
    <>
      <Button variant="ghost" size="sm">
        🔔
      </Button>
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="User avatar"
        size="sm"
        fallback="JD"
      />
    </>
  )

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Responsive Navbar</h2>
        <p className="text-gray-600 mb-4">
          This navbar is fully responsive and includes a mobile menu. Try resizing your browser window to see it in action.
        </p>
      </div>

      <Navbar
        logo={logo}
        links={navigationLinks}
        actions={actions}
      />

      <div className="p-8 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Page Content</h3>
        <p className="text-gray-600">
          This is the main content area. The navbar above is sticky and will remain at the top when scrolling.
          The mobile menu will automatically show on smaller screens, and the navigation links will be hidden
          behind a hamburger menu.
        </p>
        
        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Feature 1</h4>
            <p className="text-sm text-gray-600">
              The navbar automatically adapts to different screen sizes and provides a smooth user experience.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Feature 2</h4>
            <p className="text-sm text-gray-600">
              Navigation links can be marked as active to show the current page state.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Feature 3</h4>
            <p className="text-sm text-gray-600">
              Custom actions can be added to the right side of the navbar, such as notifications and user avatars.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
