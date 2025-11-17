import { forwardRef, Children, cloneElement, isValidElement } from 'react';
import { clsx } from 'clsx';
import type { FormFieldProps } from './FormField.types';

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, required = false, className, children, htmlFor }, ref) => {
    // Generate id if not provided
    const fieldId = htmlFor || `field-${Math.random().toString(36).substr(2, 9)}`;

    // Clone children and add id to the first input/textarea element
    const enhancedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        // Check if this is an input or textarea
        const childType = child.type;
        const isInputOrTextarea = 
          childType === 'input' || 
          childType === 'textarea' || 
          (typeof childType === 'function' && 
           ('displayName' in childType && 
            (childType.displayName === 'Input' || childType.displayName === 'Textarea')));
        
        if (isInputOrTextarea) {
          return cloneElement(child, {
            id: fieldId,
            ...child.props,
          });
        }
      }
      return child;
    });

    return (
      <div ref={ref} className={clsx('space-y-2', className)}>
        {label && (
          <label 
            htmlFor={fieldId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {enhancedChildren}
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
