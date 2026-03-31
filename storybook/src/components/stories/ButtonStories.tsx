import { Button, Card, Typography } from '@clear/ui';

export function ButtonStories() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Variants</Typography>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="concave">Concave</Button>
          <Button variant="gradient">Gradient</Button>
        </div>
      </Card>

      {/* Sizes */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Sizes</Typography>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </Card>



      {/* States */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">States</Typography>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Card>

      {/* Interactive Demo */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Interactive Demo</Typography>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => alert('Button clicked!')}>
              Click me!
            </Button>
            <Button variant="ghost" onClick={() => console.log('Ghost clicked')}>
              Console log
            </Button>
          </div>
          <Typography variant="body" color="secondary">
            Try clicking the buttons above to see interactions.
          </Typography>
        </div>
      </Card>
    </div>
  );
}
