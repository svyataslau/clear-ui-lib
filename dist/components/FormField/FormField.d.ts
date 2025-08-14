import type { ReactNode } from 'react';
export interface FormFieldProps {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    htmlFor?: string;
}
export declare const FormField: import("react").ForwardRefExoticComponent<FormFieldProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FormField.d.ts.map