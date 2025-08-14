import { forwardRef } from 'react';
import type { SwitchProps } from '../../types';
import { clsx } from 'clsx';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked = false, onChange, disabled = false, className = '', id, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={clsx('switch-container', className)}
        {...props}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="toggle-checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <label 
          htmlFor={inputId}
          className="switch"
        >
          <div className={clsx('toggle', checked && 'toggle-checked')}>
            <div className={clsx(
              'led',
              checked && 'led-checked',
              disabled && 'led-disabled'
            )}></div>
          </div>
        </label>
      </div>
    );
  }
);

Switch.displayName = 'Switch';
