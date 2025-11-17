import { useState } from 'react';
import {Card, Switch, Typography} from '@clear/ui';

export function SwitchStories() {
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="space-y-8">
      {/* Interactive Demo */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Interactive Demo</Typography>
        <div className="space-y-4">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <Switch checked={switch3} onChange={setSwitch3} />
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

      {/* Disabled Switch */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Disabled Switch</Typography>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <Switch disabled />
            <Typography variant="body" color="secondary" className="mt-2">
              Disabled
            </Typography>
          </div>
          <div className="text-center">
            <Switch checked disabled />
            <Typography variant="body" color="secondary" className="mt-2">
              Disabled (ON)
            </Typography>
          </div>
        </div>
      </Card>

      {/* Custom Styled Switch */}
      <Card  padding="lg">
        <Typography variant="h3" className="mb-4">Custom Styled Switch</Typography>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <Switch className="scale-75" />
            <Typography variant="body" color="secondary" className="mt-2">
              Smaller
            </Typography>
          </div>
          <div className="text-center">
            <Switch className="scale-125" />
            <Typography variant="body" color="secondary" className="mt-2">
              Larger
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}
