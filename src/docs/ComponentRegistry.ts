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

// Function to get component examples
function getButtonExample() {
  return React.createElement(
    'div',
    { className: 'p-8 space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        { className: 'text-2xl font-bold mb-4' },
        'Button Variants'
      ),
      React.createElement(
        'div',
        { className: 'flex flex-wrap gap-4' },
        React.createElement(
          'button',
          {
            type: 'button',
            className:
              'px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600',
          },
          'Primary'
        ),
        React.createElement(
          'button',
          {
            type: 'button',
            className:
              'px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200',
          },
          'Secondary'
        ),
        React.createElement(
          'button',
          {
            type: 'button',
            className:
              'px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50',
          },
          'Outline'
        ),
        React.createElement(
          'button',
          {
            type: 'button',
            className:
              'px-4 py-2 bg-transparent text-gray-700 rounded-lg hover:bg-gray-100',
          },
          'Ghost'
        )
      )
    )
  );
}

// Component documentation registry
export const componentDocs: ComponentDoc[] = [
  {
    name: 'Button',
    description:
      'A versatile button component with multiple variants, sizes, and states for user interactions.',
    examples: getButtonExample(),
    props: [
      {
        name: 'variant',
        type: "'primary' | 'ghost' | 'concave' | 'gradient'",
        required: false,
        defaultValue: "'primary'",
        description: 'The visual style variant of the button',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        defaultValue: "'md'",
        description: 'The size of the button',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the button is disabled',
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Callback function when button is clicked',
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        required: false,
        defaultValue: "'button'",
        description: 'The HTML button type',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'The content to display inside the button',
      },
    ],
  },
  {
    name: 'Input',
    description:
      'A flexible input component supporting various types, sizes, and states with built-in error handling.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4 max-w-md' },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Enter your name',
        className:
          'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
      }),
      React.createElement('input', {
        type: 'email',
        placeholder: 'Enter your email',
        className:
          'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
      }),
      React.createElement('input', {
        type: 'password',
        placeholder: 'Enter your password',
        className:
          'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
      })
    ),
    props: [
      {
        name: 'type',
        type: "'text' | 'password' | 'email' | 'search'",
        required: false,
        defaultValue: "'text'",
        description: 'The HTML input type',
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text for the input',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'The current value of the input',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        required: false,
        description: 'Callback function when input value changes',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the input is disabled',
      },
      {
        name: 'error',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether to show error styling',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        defaultValue: "'md'",
        description: 'The size of the input',
      },
    ],
  },
  {
    name: 'Textarea',
    description:
      'A multi-line text input component with configurable rows, sizes, and error states.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4 max-w-md' },
      React.createElement('textarea', {
        placeholder: 'Write your message here...',
        rows: 4,
        className:
          'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-vertical',
      })
    ),
    props: [
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text for the textarea',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'The current value of the textarea',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        required: false,
        description: 'Callback function when textarea value changes',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the textarea is disabled',
      },
      {
        name: 'error',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether to show error styling',
      },
      {
        name: 'rows',
        type: 'number',
        required: false,
        defaultValue: '4',
        description: 'Number of visible text lines',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        defaultValue: "'md'",
        description: 'The size of the textarea',
      },
    ],
  },
  {
    name: 'Card',
    description:
      'A container component for content with different styling variants and padding options.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'bg-white border border-gray-200 rounded-xl p-4' },
        React.createElement(
          'h3',
          { className: 'text-lg font-semibold mb-2' },
          'Card Title'
        ),
        React.createElement(
          'p',
          { className: 'text-gray-600' },
          'This is a card with content.'
        )
      ),
      React.createElement(
        'div',
        { className: 'bg-white shadow-soft rounded-xl p-4' },
        React.createElement(
          'h3',
          { className: 'text-lg font-semibold mb-2' },
          'Elevated Card'
        ),
        React.createElement(
          'p',
          { className: 'text-gray-600' },
          'This card has a shadow.'
        )
      )
    ),
    props: [
      {
        name: 'variant',
        type: "'default' | 'elevated' | 'outlined'",
        required: false,
        defaultValue: "'default'",
        description: 'The visual style variant of the card',
      },
      {
        name: 'padding',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        defaultValue: "'md'",
        description: 'The padding size inside the card',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'The content to display inside the card',
      },
    ],
  },
  {
    name: 'Avatar',
    description:
      'A circular image component with fallback support for user profiles and avatars.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'flex items-center space-x-4' },
        React.createElement(
          'div',
          {
            className:
              'w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center',
          },
          React.createElement(
            'span',
            { className: 'text-gray-600 font-medium' },
            'JD'
          )
        ),
        React.createElement(
          'div',
          {
            className:
              'w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center',
          },
          React.createElement(
            'span',
            { className: 'text-gray-600 font-medium' },
            'JS'
          )
        ),
        React.createElement(
          'div',
          {
            className:
              'w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center',
          },
          React.createElement(
            'span',
            { className: 'text-gray-600 font-medium' },
            'MJ'
          )
        )
      )
    ),
    props: [
      {
        name: 'src',
        type: 'string',
        required: false,
        description: 'URL of the avatar image',
      },
      {
        name: 'alt',
        type: 'string',
        required: false,
        description: 'Alt text for the avatar image',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        defaultValue: "'md'",
        description: 'The size of the avatar',
      },
      {
        name: 'fallback',
        type: 'string',
        required: false,
        description:
          'Text to display when image fails to load (usually initials)',
      },
    ],
  },
  {
    name: 'Typography',
    description:
      'A comprehensive text component with various styles, colors, and weights for consistent typography.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4' },
      React.createElement(
        'h1',
        { className: 'text-4xl font-bold text-gray-900' },
        'Heading 1'
      ),
      React.createElement(
        'h2',
        { className: 'text-3xl font-bold text-gray-900' },
        'Heading 2'
      ),
      React.createElement(
        'h3',
        { className: 'text-2xl font-semibold text-gray-900' },
        'Heading 3'
      ),
      React.createElement(
        'p',
        { className: 'text-lg text-gray-600' },
        'Subtitle text'
      ),
      React.createElement(
        'p',
        { className: 'text-base text-gray-900' },
        'Body text'
      ),
      React.createElement(
        'span',
        { className: 'text-sm text-gray-500' },
        'Caption text'
      )
    ),
    props: [
      {
        name: 'variant',
        type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption'",
        required: false,
        defaultValue: "'body'",
        description: 'The typography variant to use',
      },
      {
        name: 'color',
        type: "'primary' | 'secondary' | 'accent' | 'gray'",
        required: false,
        defaultValue: "'primary'",
        description: 'The color of the text',
      },
      {
        name: 'weight',
        type: "'normal' | 'medium' | 'semibold' | 'bold'",
        required: false,
        description: 'The font weight of the text',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'The text content to display',
      },
    ],
  },
  {
    name: 'Modal',
    description:
      'A modal dialog component with backdrop, keyboard support, and multiple sizes for overlays.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4' },
      React.createElement(
        'div',
        {
          className: 'bg-white border border-gray-200 rounded-xl p-6 max-w-md',
        },
        React.createElement(
          'h3',
          { className: 'text-xl font-semibold mb-4' },
          'Modal Example'
        ),
        React.createElement(
          'p',
          { className: 'text-gray-600 mb-4' },
          'This is an example of a modal dialog.'
        ),
        React.createElement(
          'div',
          { className: 'flex justify-end space-x-3' },
          React.createElement(
            'button',
            {
              type: 'button',
              className:
                'px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50',
            },
            'Cancel'
          ),
          React.createElement(
            'button',
            {
              type: 'button',
              className:
                'px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600',
            },
            'Confirm'
          )
        )
      )
    ),
    props: [
      {
        name: 'isOpen',
        type: 'boolean',
        required: true,
        description: 'Whether the modal is currently open',
      },
      {
        name: 'onClose',
        type: '() => void',
        required: true,
        description: 'Callback function to close the modal',
      },
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'The title displayed in the modal header',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        defaultValue: "'md'",
        description: 'The size of the modal',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'The content to display inside the modal',
      },
    ],
  },
  {
    name: 'Navbar',
    description:
      'A responsive navigation bar component with mobile menu, logo, navigation links, and actions.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-4' },
      React.createElement(
        'nav',
        { className: 'bg-white border-b border-gray-200 px-4 py-3' },
        React.createElement(
          'div',
          { className: 'flex items-center justify-between' },
          React.createElement(
            'div',
            { className: 'flex items-center' },
            React.createElement(
              'span',
              { className: 'text-xl font-bold' },
              'Logo'
            )
          ),
          React.createElement(
            'div',
            { className: 'hidden md:flex space-x-4' },
            React.createElement(
              'a',
              { href: '#', className: 'text-gray-600 hover:text-gray-900' },
              'Home'
            ),
            React.createElement(
              'a',
              { href: '#', className: 'text-gray-600 hover:text-gray-900' },
              'About'
            ),
            React.createElement(
              'a',
              { href: '#', className: 'text-gray-600 hover:text-gray-900' },
              'Contact'
            )
          ),
          React.createElement('button', { type: 'button', className: 'md:hidden' }, '☰')
        )
      )
    ),
    props: [
      {
        name: 'logo',
        type: 'ReactNode',
        required: false,
        description: 'The logo or brand element to display',
      },
      {
        name: 'links',
        type: 'Array<{ label: string; href: string; active?: boolean }>',
        required: false,
        defaultValue: '[]',
        description: 'Array of navigation links to display',
      },
      {
        name: 'actions',
        type: 'ReactNode',
        required: false,
        description:
          'Action elements to display on the right side (buttons, avatars, etc.)',
      },
    ],
  },
  {
    name: 'Switch',
    description:
      'A toggle switch component with neumorphic design, supporting controlled and uncontrolled states.',
    examples: React.createElement(
      'div',
      { className: 'p-8 space-y-6' },
      React.createElement(
        'div',
        { className: 'flex items-center space-x-8' },
        React.createElement(
          'div',
          { className: 'text-center' },
          React.createElement(
            'div',
            {
              className: 'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
            },
            React.createElement('input', {
              type: 'checkbox',
              className: 'hidden',
              defaultChecked: false,
            }),
            React.createElement(
              'label',
              { className: 'absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer' },
              React.createElement(
                'div',
                {
                  className: 'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[5px] bg-gradient-to-br from-[#d2d2d2] to-[#ffffff] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#c8c8c8] transition-all duration-300 ease-in-out flex items-center justify-start pl-[10px]',
                },
                React.createElement(
                  'div',
                  { className: 'w-[10px] h-[10px] rounded-full bg-gray-500 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out' }
                )
              )
            )
          ),
          React.createElement(
            'span',
            { className: 'block mt-2 text-sm text-gray-600' },
            'OFF'
          )
        ),
        React.createElement(
          'div',
          { className: 'text-center' },
          React.createElement(
            'div',
            {
              className: 'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
            },
            React.createElement('input', {
              type: 'checkbox',
              className: 'hidden',
              defaultChecked: true,
            }),
            React.createElement(
              'label',
              { className: 'absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer' },
              React.createElement(
                'div',
                {
                  className: 'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[65px] bg-gradient-to-tl from-[#ffffff] to-[#d2d2d2] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#c8c8c8] transition-all duration-300 ease-in-out flex items-center justify-start pl-[10px]',
                },
                React.createElement(
                  'div',
                  { className: 'w-[10px] h-[10px] rounded-full bg-[#ffff00] shadow-[0_0_15px_4px_#ffff00] transition-all duration-300 ease-in-out' }
                )
              )
            )
          ),
          React.createElement(
            'span',
            { className: 'block mt-2 text-sm text-gray-600' },
            'ON'
          )
        )
      )
    ),
    props: [
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the switch is in the ON position',
      },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        required: false,
        description: 'Callback function when switch state changes',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the switch is disabled',
      },
    ],
  },
];

// Function to add new components to the registry
export function registerComponent(componentDoc: ComponentDoc) {
  componentDocs.push(componentDoc);
}

// Function to get all components
export function getAllComponents(): ComponentDoc[] {
  return componentDocs;
}

// Function to get a specific component by name
export function getComponent(name: string): ComponentDoc | undefined {
  return componentDocs.find(
    (comp) => comp.name.toLowerCase() === name.toLowerCase()
  );
}
