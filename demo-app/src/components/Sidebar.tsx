import React from 'react';
import { Card } from '@clear/ui';

interface SidebarProps {
  selectedComponent: string;
  onComponentSelect: (component: string) => void;
}

  const components = [
    'Button',
    'Input',
    'Card',
    'Avatar',
    'Typography',
    'Modal',
    'Navbar',
    'Switch',
    'Textarea',
    'CirclePlate',
    'ThemeDemo',
  ];

export function Sidebar({ selectedComponent, onComponentSelect }: SidebarProps) {
  return (
    <div className="w-64 bg-neumorphism-background shadow-neumorphism-card min-h-screen p-4">
      <Card variant="elevated" padding="lg" className="h-full">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Components</h2>
          {components.map((component) => (
            <button
              key={component}
              onClick={() => onComponentSelect(component)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedComponent === component
                  ? 'bg-accent-100 text-accent-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {component}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
