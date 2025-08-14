import React, { useState } from 'react';
import { Card, Typography } from '@clear/ui';
import './SwitchStories.css';

// Custom Switch component for demo
const CustomSwitch = ({ checked = false, onChange, disabled = false, className = '' }) => {
  const handleChange = (e) => {
    if (!disabled) {
      onChange?.(e.target.checked);
    }
  };

  const handleLabelClick = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <div className={`switch-container ${className}`}>
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label className="switch" onClick={handleLabelClick}>
        <div className="toggle">
          <div className="led"></div>
        </div>
      </label>
    </div>
  );
};

export function SwitchStories() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="space-y-8">
      {/* Basic Switches */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Basic Switches</Typography>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <CustomSwitch checked={switch1} onChange={setSwitch1} />
            <Typography variant="body" color="secondary" className="mt-2">
              {switch1 ? 'ON' : 'OFF'}
            </Typography>
          </div>
          <div className="text-center">
            <CustomSwitch checked={switch2} onChange={setSwitch2} />
            <Typography variant="body" color="secondary" className="mt-2">
              {switch2 ? 'ON' : 'OFF'}
            </Typography>
          </div>
        </div>
      </Card>

      {/* Disabled Switch */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Disabled Switch</Typography>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <CustomSwitch disabled />
            <Typography variant="body" color="secondary" className="mt-2">
              Disabled
            </Typography>
          </div>
          <div className="text-center">
            <CustomSwitch checked disabled />
            <Typography variant="body" color="secondary" className="mt-2">
              Disabled (ON)
            </Typography>
          </div>
        </div>
      </Card>

      {/* Interactive Demo */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Interactive Demo</Typography>
        <div className="space-y-4">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <CustomSwitch checked={switch3} onChange={setSwitch3} />
              <Typography variant="body" color="secondary" className="mt-2">
                Feature Toggle
              </Typography>
            </div>
          </div>
          <Typography variant="body" color="secondary">
            Current state: {switch3 ? 'Enabled' : 'Disabled'}
          </Typography>
        </div>
      </Card>

      {/* Custom Styled Switch */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Custom Styled Switch</Typography>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <CustomSwitch className="scale-75" />
            <Typography variant="body" color="secondary" className="mt-2">
              Smaller
            </Typography>
          </div>
          <div className="text-center">
            <CustomSwitch className="scale-125" />
            <Typography variant="body" color="secondary" className="mt-2">
              Larger
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}
