import { Navbar, Card, Typography } from '@clear/ui';

export function NavbarStories() {
  const links = [
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <div className="space-y-8">
      {/* Basic Navbar */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Basic Navbar</Typography>
        <div className="border rounded-lg overflow-hidden">
          <Navbar
            logo={<span className="text-xl font-bold">Brand</span>}
            links={links}
          />
        </div>
      </Card>

      {/* Navbar with Actions */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Navbar with Actions</Typography>
        <div className="border rounded-lg overflow-hidden">
          <Navbar
            logo={<span className="text-xl font-bold">Brand</span>}
            links={links}
            actions={
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">Login</button>
                <button className="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600">
                  Sign Up
                </button>
              </div>
            }
          />
        </div>
      </Card>

      {/* Custom Styled Navbar */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Custom Styled Navbar</Typography>
        <div className="border rounded-lg overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600">
          <Navbar
            logo={<span className="text-xl font-bold text-white">Gradient Brand</span>}
            links={[
              { label: 'Dashboard', href: '#', active: true },
              { label: 'Analytics', href: '#' },
              { label: 'Reports', href: '#' },
            ]}
            actions={
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">Welcome, User</span>
              </div>
            }
          />
        </div>
      </Card>
    </div>
  );
}
