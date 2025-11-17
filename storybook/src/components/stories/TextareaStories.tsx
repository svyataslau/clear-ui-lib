import React, { useState } from 'react';
import { Textarea, Card, Typography } from '@clear/ui';

export function TextareaStories() {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="space-y-8">
      {/* Basic Textarea */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Basic Textarea</Typography>
        <div className="space-y-4 max-w-md">
          <Textarea placeholder="Enter your message..." />
        </div>
      </Card>

      {/* Sizes */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Sizes</Typography>
        <div className="space-y-4 max-w-md">
          <Textarea size="sm" placeholder="Small textarea" />
          <Textarea size="md" placeholder="Medium textarea" />
          <Textarea size="lg" placeholder="Large textarea" />
          <Textarea size="xl" placeholder="Extra large textarea" />
        </div>
      </Card>

      {/* States */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">States</Typography>
        <div className="space-y-4 max-w-md">
          <Textarea placeholder="Normal textarea" />
          <Textarea placeholder="Disabled textarea" disabled />
          <Textarea placeholder="Error textarea" error />
        </div>
      </Card>

      {/* Controlled Textarea */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Controlled Textarea</Typography>
        <div className="space-y-4 max-w-md">
          <Textarea
            placeholder="Type something..."
            value={textareaValue}
            onChange={setTextareaValue}
            rows={4}
          />
          <Typography variant="body" color="secondary">
            Character count: {textareaValue.length}
          </Typography>
        </div>
      </Card>

      {/* Rows */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Different Rows</Typography>
        <div className="space-y-4 max-w-md">
          <Textarea placeholder="2 rows" rows={2} />
          <Textarea placeholder="4 rows" rows={4} />
          <Textarea placeholder="6 rows" rows={6} />
        </div>
      </Card>
    </div>
  );
}
