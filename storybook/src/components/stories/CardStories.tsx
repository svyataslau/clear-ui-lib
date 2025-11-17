import React from 'react';
import { Card, Typography, Button } from '@clear/ui';

export function CardStories() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Variants</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" padding="md">
            <Typography variant="h5" className="mb-2">Default Card</Typography>
            <Typography variant="body" color="secondary">
              This is a default card with subtle styling.
            </Typography>
          </Card>

          <Card variant="outlined" padding="md">
            <Typography variant="h5" className="mb-2">Outlined Card</Typography>
            <Typography variant="body" color="secondary">
              This card has a more prominent border.
            </Typography>
          </Card>
        </div>
      </Card>

      {/* Padding Sizes */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Padding Sizes</Typography>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card variant="default" padding="sm">
            <Typography variant="body">Small padding</Typography>
          </Card>
          <Card variant="default" padding="md">
            <Typography variant="body">Medium padding</Typography>
          </Card>
          <Card variant="default" padding="lg">
            <Typography variant="body">Large padding</Typography>
          </Card>
          <Card variant="default" padding="xl">
            <Typography variant="body">Extra large padding</Typography>
          </Card>
        </div>
      </Card>

      {/* Content Examples */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Content Examples</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" padding="lg">
            <Typography variant="h4" className="mb-3">Card with Image</Typography>
            <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <Typography variant="body" color="secondary">Image Placeholder</Typography>
            </div>
            <Typography variant="body" color="secondary" className="mb-4">
              This card contains an image placeholder and some descriptive text.
            </Typography>
            <Button variant="primary">Learn More</Button>
          </Card>
          
          <Card variant="default" padding="lg">
            <Typography variant="h4" className="mb-3">Card with List</Typography>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Feature one
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Feature two
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Feature three
              </li>
            </ul>
            <Button variant="outline">View Details</Button>
          </Card>
        </div>
      </Card>

      {/* Interactive Cards */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Interactive Cards</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            variant="default" 
            padding="lg" 
            className="cursor-pointer hover:shadow-neumorphism transition-shadow"
            onClick={() => alert('Card clicked!')}
          >
            <Typography variant="h5" className="mb-2">Clickable Card</Typography>
            <Typography variant="body" color="secondary">
              Click this card to see an alert.
            </Typography>
          </Card>
          
          <Card variant="default" padding="lg" className="hover:shadow-neumorphism transition-shadow">
            <Typography variant="h5" className="mb-2">Hover Effect</Typography>
            <Typography variant="body" color="secondary">
              Hover over this card to see the shadow effect.
            </Typography>
          </Card>
          
          <Card variant="default" padding="lg" className="border-2 border-accent-500">
            <Typography variant="h5" className="mb-2">Custom Border</Typography>
            <Typography variant="body" color="secondary">
              This card has a custom accent border.
            </Typography>
          </Card>
        </div>
      </Card>

      {/* Rounded Cards */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Rounded Cards</Typography>
        <div className="flex flex-wrap gap-4">
          <Card variant="default" padding="md" rounded>
            <Typography variant="h4">Rounded Card</Typography>
            <Typography variant="body" color="secondary">
              This card has rounded corners
            </Typography>
          </Card>
          <Card variant="default" padding="md">
            <Typography variant="h4">Regular Card</Typography>
            <Typography variant="body" color="secondary">
              This card has regular corners
            </Typography>
          </Card>
        </div>
      </Card>


    </div>
  );
}
