import React from 'react'
import { Card, Avatar, Typography, Button } from '../src'

export function CardExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default" padding="md">
            <Typography variant="h5" className="mb-2">Default Card</Typography>
            <Typography variant="body" color="secondary">
              This is a default card with a subtle border.
            </Typography>
          </Card>

          <Card variant="elevated" padding="md">
            <Typography variant="h5" className="mb-2">Elevated Card</Typography>
            <Typography variant="body" color="secondary">
              This card has a soft shadow for elevation.
            </Typography>
          </Card>

          <Card variant="outlined" padding="md">
            <Typography variant="h5" className="mb-2">Outlined Card</Typography>
            <Typography variant="body" color="secondary">
              This card has a more prominent border.
            </Typography>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Card Padding Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card variant="default" padding="sm">
            <Typography variant="h6" className="mb-2">Small Padding</Typography>
            <Typography variant="body" color="secondary">
              Minimal padding for compact layouts.
            </Typography>
          </Card>

          <Card variant="default" padding="md">
            <Typography variant="h6" className="mb-2">Medium Padding</Typography>
            <Typography variant="body" color="secondary">
              Standard padding for most use cases.
            </Typography>
          </Card>

          <Card variant="default" padding="lg">
            <Typography variant="h6" className="mb-2">Large Padding</Typography>
            <Typography variant="body" color="secondary">
              Generous padding for spacious layouts.
            </Typography>
          </Card>

          <Card variant="default" padding="xl">
            <Typography variant="h6" className="mb-2">Extra Large</Typography>
            <Typography variant="body" color="secondary">
              Maximum padding for premium feel.
            </Typography>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Social Network Post Card</h2>
        <div className="max-w-2xl">
          <Card variant="elevated" padding="lg">
            <div className="flex items-center mb-4">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="User avatar"
                size="md"
                fallback="JD"
              />
              <div className="ml-3">
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="caption">2 hours ago</Typography>
              </div>
            </div>
            
            <Typography variant="body" className="mb-4">
              Just had an amazing day exploring the city! The weather was perfect and I discovered some incredible new places. 
              Can't wait to share more photos with you all. #citylife #exploring #photography
            </Typography>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
                alt="City view"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  ❤️ Like
                </Button>
                <Button variant="ghost" size="sm">
                  💬 Comment
                </Button>
                <Button variant="ghost" size="sm">
                  🔄 Share
                </Button>
              </div>
              <Typography variant="caption" color="gray">
                24 likes • 8 comments
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
