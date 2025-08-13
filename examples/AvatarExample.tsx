import React from 'react'
import { Avatar, Typography } from '../src'

export function AvatarExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Avatar Sizes</h2>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <Avatar size="sm" fallback="JD" />
            <Typography variant="caption" className="block mt-2">Small</Typography>
          </div>
          <div className="text-center">
            <Avatar size="md" fallback="JD" />
            <Typography variant="caption" className="block mt-2">Medium</Typography>
          </div>
          <div className="text-center">
            <Avatar size="lg" fallback="JD" />
            <Typography variant="caption" className="block mt-2">Large</Typography>
          </div>
          <div className="text-center">
            <Avatar size="xl" fallback="JD" />
            <Typography variant="caption" className="block mt-2">Extra Large</Typography>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Avatar with Images</h2>
        <div className="flex items-center space-x-4">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="John Doe"
            size="lg"
            fallback="JD"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Jane Smith"
            size="lg"
            fallback="JS"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="Mike Johnson"
            size="lg"
            fallback="MJ"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Avatar with Fallbacks</h2>
        <div className="flex items-center space-x-4">
          <Avatar fallback="JD" size="lg" />
          <Avatar fallback="JS" size="lg" />
          <Avatar fallback="MJ" size="lg" />
          <Avatar fallback="AB" size="lg" />
          <Avatar fallback="CD" size="lg" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Avatar in Context</h2>
        <div className="space-y-4 max-w-md">
          <div className="flex items-center space-x-3">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="User"
              size="md"
              fallback="U"
            />
            <div>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="caption" color="gray">Online</Typography>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Avatar
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              alt="User"
              size="md"
              fallback="U"
            />
            <div>
              <Typography variant="h6">Jane Smith</Typography>
              <Typography variant="caption" color="gray">Last seen 2 hours ago</Typography>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Avatar fallback="MJ" size="md" />
            <div>
              <Typography variant="h6">Mike Johnson</Typography>
              <Typography variant="caption" color="gray">Away</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
