import { forwardRef } from 'react';
import type { SwitchProps } from '../../types';
import { cn } from '../../utils/classNames';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked = false, onChange, disabled = false, className = '', id, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={cn(
          'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px]',
          'shadow-[inset_6px_6px_4px_#d1d9e6,inset_-6px_-6px_4px_#ffffff]',
          className
        )}
        {...props}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <label 
          htmlFor={inputId}
          className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer"
        >
          <div className={cn(
            'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[5px]',
            'bg-gradient-to-br from-[#d2d2d2] to-[#ffffff]',
            'shadow-[-3px_-3px_4px_#ffffff,3px_3px_4px_#c8c8c8]',
            'transition-all duration-300 ease-in-out',
            'flex items-center justify-start pl-[10px]',
            checked && 'left-[65px] bg-gradient-to-tl from-[#ffffff] to-[#d2d2d2]'
          )}>
            <div className={cn(
              'w-[10px] h-[10px] rounded-full transition-all duration-300 ease-in-out',
              disabled 
                ? 'bg-[#808080]' 
                : checked 
                  ? 'bg-[#a855f7] shadow-[0_0_15px_4px_#a855f7]' 
                  : 'bg-[#808080]'
            )}></div>
          </div>
        </label>
      </div>
    );
  }
);

Switch.displayName = 'Switch';
