import { useState } from 'react';
import { useTheme, Button, Card, Typography, Input, Switch } from '@clear/ui';

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Helper function to lighten/darken color
function adjustColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const adjust = (value: number) => {
    if (percent > 0) {
      // Lighten: increase towards 255
      const adjusted = Math.round(value + (255 - value) * (percent / 100));
      return Math.min(255, Math.max(0, adjusted));
    } else {
      // Darken: decrease towards 0
      const adjusted = Math.round(value * (1 + percent / 100));
      return Math.min(255, Math.max(0, adjusted));
    }
  };

  const r = adjust(rgb.r).toString(16).padStart(2, '0');
  const g = adjust(rgb.g).toString(16).padStart(2, '0');
  const b = adjust(rgb.b).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

function ThemeDemoContent() {
  const { theme, setTheme } = useTheme();
  const [accentColor, setAccentColor] = useState(theme.accentColor);

  const handleColorChange = (color: string) => {
    console.log('🎨 [ThemeDemo] Changing color to:', color);
    setAccentColor(color);
    
    const newTheme = {
      accentColor: color,
      accentColorLight: adjustColor(color, 40), // Lighter version
      accentColorDark: adjustColor(color, -20), // Darker version
    };
    
    console.log('🎨 [ThemeDemo] Computed theme:', newTheme);
    setTheme(newTheme);
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
            <Switch checked/>
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
  // ThemeProvider теперь живет на уровне всего storybook (в App),
  // поэтому здесь достаточно просто отрендерить контент.
  return <ThemeDemoContent />;
}
