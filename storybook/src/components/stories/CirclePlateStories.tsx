import { CirclePlate, Card, Typography } from '@clear/ui';

export function CirclePlateStories() {
  return (
    <div className="space-y-8">
      {/* Sizes */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Sizes</Typography>
        <div className="flex flex-wrap items-center gap-4">
          <CirclePlate size="sm">+</CirclePlate>
          <CirclePlate size="md">+</CirclePlate>
          <CirclePlate size="lg">+</CirclePlate>
          <CirclePlate size="xl">+</CirclePlate>
        </div>
      </Card>

      {/* Variants */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Variants</Typography>
        <div className="flex flex-wrap items-center gap-4">
          <CirclePlate variant="primary">P</CirclePlate>
          <CirclePlate variant="concave">C</CirclePlate>
        </div>
      </Card>

      {/* Content Examples */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Content Examples</Typography>
        <div className="flex flex-wrap items-center gap-4">
          <CirclePlate size="lg">1</CirclePlate>
          <CirclePlate size="lg">A</CirclePlate>
          <CirclePlate size="lg">★</CirclePlate>
          <CirclePlate size="lg">♥</CirclePlate>
        </div>
      </Card>

      {/* Interactive Demo */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Interactive Demo</Typography>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <CirclePlate 
              size="lg" 
              className="cursor-pointer"
              onClick={() => alert('CirclePlate clicked!')}
            >
              Click
            </CirclePlate>
          </div>
          <Typography variant="body" color="secondary">
            Try clicking the CirclePlate above to see interactions.
          </Typography>
        </div>
      </Card>
    </div>
  );
}
