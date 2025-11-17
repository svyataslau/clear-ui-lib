import React, { useState } from 'react';
import { Input, Card, Typography } from '@clear/ui';

export function InputStories() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="space-y-8">
      {/* Types */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Types</Typography>
        <div className="space-y-4 max-w-md">
          <Input type="text" placeholder="Text input" />
          <Input type="email" placeholder="Email input" />
          <Input type="password" placeholder="Password input" />
          <Input type="search" placeholder="Search input" />
        </div>
      </Card>

      {/* Sizes */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Sizes</Typography>
        <div className="space-y-4 max-w-md">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
          <Input size="xl" placeholder="Extra large input" />
        </div>
      </Card>

      {/* States */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">States</Typography>
        <div className="space-y-4 max-w-md">
          <Input placeholder="Normal input" />
          <Input placeholder="Disabled input" disabled />
          <Input placeholder="Error input" error />
        </div>
      </Card>

      {/* Controlled Input */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Controlled Input</Typography>
        <div className="space-y-4 max-w-md">
          <Input
            placeholder="Type something..."
            value={inputValue}
            onChange={setInputValue}
          />
          <Typography variant="body" color="secondary">
            Current value: "{inputValue}"
          </Typography>
        </div>
      </Card>

      {/* Rounded Inputs */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Rounded Inputs</Typography>
        <div className="space-y-4 max-w-md">
          <Input
            placeholder="Rounded input"
            rounded
          />
          <Input
            placeholder="Regular input"
          />
        </div>
      </Card>

      {/* Custom Styles */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Custom Styles</Typography>
        <div className="space-y-4 max-w-md">
          <Input
            placeholder="Custom styled input"
            className="border-2 border-accent-500 focus:border-accent-600"
          />
          <Input
            placeholder="Original neumorphic input"
            neumorphic
          />
          <Input
            placeholder="Rounded neumorphic input"
            neumorphic
            rounded
          />
        </div>
      </Card>
    </div>
  );
}
