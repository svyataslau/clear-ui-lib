import React from 'react';
import { Typography, Card } from '@clear/ui';

export function TypographyStories() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Variants</Typography>
        <div className="space-y-2">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="subtitle">Subtitle</Typography>
          <Typography variant="body">Body text</Typography>
          <Typography variant="caption">Caption text</Typography>
        </div>
      </Card>

      {/* Colors */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Colors</Typography>
        <div className="space-y-2">
          <Typography variant="body" color="primary">Primary color</Typography>
          <Typography variant="body" color="secondary">Secondary color</Typography>
          <Typography variant="body" color="accent">Accent color</Typography>
          <Typography variant="body" color="gray">Gray color</Typography>
        </div>
      </Card>

      {/* Weights */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Weights</Typography>
        <div className="space-y-2">
          <Typography variant="body" weight="normal">Normal weight</Typography>
          <Typography variant="body" weight="medium">Medium weight</Typography>
          <Typography variant="body" weight="semibold">Semibold weight</Typography>
          <Typography variant="body" weight="bold">Bold weight</Typography>
        </div>
      </Card>
    </div>
  );
}
