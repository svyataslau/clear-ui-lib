import React, { useState } from 'react';
import { 
  ThemeProvider, 
  Button, 
  Input, 
  Card, 
  Switch, 
  Typography,
  useTheme 
} from '@clear/ui';

// Quick start example
export function QuickStartExample() {
  return (
    <ThemeProvider initialTheme={{ accentColor: '#a855f7' }}>
      <QuickStartApp />
    </ThemeProvider>
  );
}

function QuickStartApp() {
  const [inputValue, setInputValue] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-neumorphism-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <Typography variant="h1" color="primary" className="text-center">
          Clear UI Library
        </Typography>
        
        <Typography variant="body" color="secondary" className="text-center">
          Quick start with neumorphic design
        </Typography>

        {/* Main Form */}
        <Card padding="lg">
          <Typography variant="h3" className="mb-6">
            User Form
          </Typography>
          
          <div className="space-y-6">
            {/* Neumorphic input */}
            <div>
              <Typography variant="body" className="mb-2">
                Username
              </Typography>
              <Input
                neumorphic
                placeholder="Enter your name"
                value={inputValue}
                onChange={setInputValue}
              />
            </div>
            
            {/* Switch */}
            <div className="flex items-center gap-3">
              <Switch 
                checked={switchChecked} 
                onChange={setSwitchChecked} 
              />
              <Typography>Receive notifications</Typography>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-3">
              <Button variant="primary">Save</Button>
              <Button variant="ghost">Cancel</Button>
              <Button variant="concave">Advanced</Button>
            </div>
          </div>
        </Card>

        {/* Theme Customization */}
        <Card padding="lg">
          <Typography variant="h3" className="mb-4">
            Color Customization
          </Typography>
          
          <div className="space-y-4">
            <Typography variant="body" color="secondary">
              Choose an accent color for your application:
            </Typography>
            
            <div className="flex gap-3 flex-wrap">
              {[
                { name: 'Purple', color: '#a855f7' },
                { name: 'Blue', color: '#3b82f6' },
                { name: 'Green', color: '#10b981' },
                { name: 'Amber', color: '#f59e0b' },
                { name: 'Red', color: '#ef4444' },
                { name: 'Violet', color: '#8b5cf6' }
              ].map(({ name, color }) => (
                <button
                  key={color}
                  onClick={() => setTheme({ accentColor: color })}
                  className="flex flex-col items-center gap-1 p-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
                  style={{ backgroundColor: color + '10' }}
                >
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                  <Typography variant="caption">{name}</Typography>
                </button>
              ))}
            </div>
            
            <Typography variant="body" color="secondary">
              Current color: <span className="font-mono">{theme.accentColor}</span>
            </Typography>
          </div>
        </Card>

        {/* Component Demonstration */}
        <Card padding="lg">
          <Typography variant="h3" className="mb-6">
            All Components
          </Typography>
          
          <div className="space-y-6">
            {/* Typography */}
            <div>
              <Typography variant="h4" className="mb-3">Typography</Typography>
              <div className="space-y-2">
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="body">Body text</Typography>
                <Typography variant="caption" color="secondary">Caption text</Typography>
              </div>
            </div>
            
            {/* Buttons */}
            <div>
              <Typography variant="h4" className="mb-3">Buttons</Typography>
              <div className="flex gap-3 flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="concave">Concave</Button>
                <Button variant="gradient">Gradient</Button>
              </div>
            </div>
            
            {/* Inputs */}
            <div>
              <Typography variant="h4" className="mb-3">Inputs</Typography>
              <div className="space-y-3">
                <Input placeholder="Regular input" />
                <Input neumorphic placeholder="Neumorphic input" />
                <Input neumorphic rounded placeholder="Rounded neumorphic" />
              </div>
            </div>
            
            {/* Switches */}
            <div>
              <Typography variant="h4" className="mb-3">Switches</Typography>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Switch />
                  <Typography variant="caption">Default</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked />
                  <Typography variant="caption">Checked</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Switch disabled />
                  <Typography variant="caption">Disabled</Typography>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default QuickStartExample;
