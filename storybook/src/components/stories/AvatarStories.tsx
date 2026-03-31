import { Avatar, Card, Typography } from '@clear/ui';

export function AvatarStories() {
  return (
    <div className="space-y-8">
      {/* Sizes */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Sizes</Typography>
        <div className="flex items-center space-x-4">
          <Avatar size="sm" fallback="JD" />
          <Avatar size="md" fallback="JD" />
          <Avatar size="lg" fallback="JD" />
          <Avatar size="xl" fallback="JD" />
        </div>
      </Card>

      {/* With Images */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">With Images</Typography>
        <div className="flex items-center space-x-4">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
            alt="John Doe"
            fallback="JD"
          />
          <Avatar 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
            alt="Jane Smith"
            fallback="JS"
          />
        </div>
      </Card>

      {/* Fallbacks */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Fallbacks</Typography>
        <div className="flex items-center space-x-4">
          <Avatar fallback="John Doe" />
          <Avatar fallback="Jane Smith" />
          <Avatar fallback="Mike Johnson" />
          <Avatar fallback="?" />
        </div>
      </Card>
    </div>
  );
}
