import type React from 'react';
interface ComponentDoc {
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
interface DocGeneratorProps {
    components: ComponentDoc[];
    title?: string;
    description?: string;
}
export declare function DocGenerator({ components, title, description, }: DocGeneratorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DocGenerator.d.ts.map