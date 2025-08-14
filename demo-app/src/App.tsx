import React, { useState } from 'react';
import { Navbar } from '@clear/ui';
import { ComponentStories } from './components/ComponentStories';
import { Sidebar } from './components/Sidebar';

const navigationLinks = [
  { label: 'Components', href: '#components', active: true },
  { label: 'Documentation', href: '#docs' },
  { label: 'GitHub', href: 'https://github.com' },
];

export function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>('Button');

  return (
    <div className="min-h-screen bg-neumorphism-background">
      <Navbar
        logo={<span className="text-xl font-bold">@clear/ui</span>}
        links={navigationLinks}
        actions={
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">v1.0.0</span>
          </div>
        }
      />
      
      <div className="flex">
        <Sidebar
          selectedComponent={selectedComponent}
          onComponentSelect={setSelectedComponent}
        />
        <main className="flex-1 p-8">
          <ComponentStories selectedComponent={selectedComponent} />
        </main>
      </div>
    </div>
  );
}

export default App;
