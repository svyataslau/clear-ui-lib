import React from 'react';
export interface ComponentDoc {
    name: string;
    description: string;
    examples: React.ReactNode;
    props?: Array<{
        name: string;
        type: string;
        required: boolean;
        defaultValue?: string;
        description: string;
    }>;
}
export declare const componentDocs: ComponentDoc[];
export declare function registerComponent(componentDoc: ComponentDoc): void;
export declare function getAllComponents(): ComponentDoc[];
export declare function getComponent(name: string): ComponentDoc | undefined;
//# sourceMappingURL=ComponentRegistry.d.ts.map