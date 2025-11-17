import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked = false, onChange, disabled = false, className = '', id, 'aria-label': ariaLabel, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={clsx('switch-container', className)}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
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
          aria-label={ariaLabel}
          aria-checked={checked}
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
