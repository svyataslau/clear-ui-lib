import React, { useState } from 'react';
import { ThemeProvider, useTheme, Button, Card, Typography, Input, Switch } from '@clear/ui';

function ThemeDemoContent() {
  const { theme, setTheme } = useTheme();
  const [accentColor, setAccentColor] = useState(theme.accentColor);

  const handleColorChange = (color: string) => {
    setAccentColor(color);
    setTheme({
      accentColor: color,
      accentColorLight: color + '40', // 25% opacity
      accentColorDark: color + '80', // 50% opacity
    });
  };

  const presetColors = [
    '#a855f7', // purple
    '#3b82f6', // blue
    '#10b981', // green
    '#f59e0b', // amber
    '#ef4444', // red
    '#8b5cf6', // violet
  ];

  return (
    <div className="space-y-8">
      {/* Color Picker */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Accent Color Customization</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="body" className="mb-2">Current accent color: {theme.accentColor}</Typography>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
            />
          </div>
          
          <div>
            <Typography variant="body" className="mb-2">Preset colors:</Typography>
            <div className="flex gap-2">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className="w-8 h-8 rounded border-2 border-gray-300 hover:border-gray-400 transition-colors"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Component Examples */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Components with Custom Accent Color</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="body" className="mb-2">Buttons:</Typography>
            <div className="flex gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="concave">Concave</Button>
            </div>
          </div>
          
          <div>
            <Typography variant="body" className="mb-2">Input:</Typography>
            <Input placeholder="Type something..." />
          </div>
          
          <div>
            <Typography variant="body" className="mb-2">Switch:</Typography>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Theme Info */}
      <Card variant="default" padding="lg">
        <Typography variant="h3" className="mb-4">Current Theme</Typography>
        <div className="space-y-2 text-sm">
          <div>Accent Color: <span className="font-mono">{theme.accentColor}</span></div>
          <div>Light: <span className="font-mono">{theme.accentColorLight}</span></div>
          <div>Dark: <span className="font-mono">{theme.accentColorDark}</span></div>
        </div>
      </Card>
    </div>
  );
}

export function ThemeDemo() {
  return (
    <ThemeProvider>
      <ThemeDemoContent />
    </ThemeProvider>
  );
}
