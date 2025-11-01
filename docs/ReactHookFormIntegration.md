# React Hook Form Integration

`@clear/ui` components are fully compatible with React Hook Form and support all its features.

## Installation

```bash
npm install @clear/ui react-hook-form
```

## Styled Components

**Use NeumorphicProvider to connect styles!** Wrap your application in `NeumorphicProvider` to automatically connect all neumorphic styles.

```tsx
import { NeumorphicProvider } from '@clear/ui';

function App() {
  return (
    <NeumorphicProvider>
      {/* Your app content */}
    </NeumorphicProvider>
  );
}
```

## Main Components

### Input

```tsx
import { useForm } from 'react-hook-form';
import { Input, FormField } from '@clear/ui';

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <FormField
      label="Email"
      error={errors.email?.message}
      required
    >
      <Input
        type="email"
        placeholder="Enter your email"
        error={!!errors.email}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
    </FormField>
  );
}
```

### Textarea

```tsx
import { useForm } from 'react-hook-form';
import { Textarea, FormField } from '@clear/ui';

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <FormField
      label="Message"
      error={errors.message?.message}
    >
      <Textarea
        placeholder="Enter your message"
        rows={4}
        error={!!errors.message}
        {...register('message', {
          maxLength: {
            value: 500,
            message: 'Message must be less than 500 characters',
          },
        })}
      />
    </FormField>
  );
}
```

### Switch

```tsx
import { useForm } from 'react-hook-form';
import { Switch, FormField } from '@clear/ui';

function MyForm() {
  const { register, watch } = useForm();
  const notificationsEnabled = watch('notifications');

  return (
    <FormField
      label="Enable Notifications"
      htmlFor="notifications"
    >
      <Switch
        id="notifications"
        checked={notificationsEnabled}
        {...register('notifications')}
      />
    </FormField>
  );
}
```

## Key Features

### 1. ForwardRef Support

All components use `forwardRef`, which allows React Hook Form to work correctly with refs:

```tsx
// ✅ Works
<Input {...register('field')} />

// ✅ Also works
<Input ref={register('field')} />
```

### 2. Automatic Label-Input Binding

The `FormField` component automatically binds label to input:

```tsx
<FormField
  label="Email"
  required
>
  <Input {...register('email')} />
</FormField>
```

**FormField automatically:**
- Generates a unique `id` for input
- Binds `label` to `input` via `htmlFor`
- No need to manually specify `id` and `htmlFor`

### 3. Error Handling

Components support error display:

```tsx
<FormField
  label="Email"
  error={errors.email?.message} // Displays error
>
  <Input
    error={!!errors.email} // Visual error indication
    {...register('email')}
  />
</FormField>
```

### 4. Validation

Full support for all React Hook Form validation features:

```tsx
<Input
  {...register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
    minLength: {
      value: 5,
      message: 'Email must be at least 5 characters',
    },
  })}
/>
```

## Complete Example

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Switch, FormField, Button, Card, Typography } from '@clear/ui';

interface FormData {
  name: string;
  email: string;
  message: string;
  notifications: boolean;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  const notificationsEnabled = watch('notifications');

  return (
    <div className="max-w-md mx-auto p-6">
      <Typography variant="h2" className="text-center mb-6">
        Contact Form
      </Typography>

      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            label="Name"
            error={errors.name?.message}
            required
            htmlFor="name"
          >
            <Input
              id="name"
              placeholder="Enter your name"
              error={!!errors.name}
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />
          </FormField>

          <FormField
            label="Email"
            error={errors.email?.message}
            required
            htmlFor="email"
          >
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              error={!!errors.email}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </FormField>

          <FormField
            label="Message"
            error={errors.message?.message}
            htmlFor="message"
          >
            <Textarea
              id="message"
              placeholder="Enter your message"
              rows={4}
              error={!!errors.message}
              {...register('message', {
                maxLength: {
                  value: 500,
                  message: 'Message must be less than 500 characters',
                },
              })}
            />
          </FormField>

          <FormField
            label="Enable Notifications"
            htmlFor="notifications"
          >
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              {...register('notifications')}
            />
          </FormField>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
}
```

## Compatibility

- ✅ React Hook Form v7+
- ✅ TypeScript
- ✅ Validation
- ✅ Error Handling
- ✅ Accessibility (ARIA)
- ✅ ForwardRef
- ✅ Controlled Components
