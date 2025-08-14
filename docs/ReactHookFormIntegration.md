# React Hook Form Integration

Компоненты `@clear/ui` полностью совместимы с React Hook Form и поддерживают все его возможности.

## Установка

```bash
npm install react-hook-form
```

## Основные компоненты

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

## Ключевые особенности

### 1. ForwardRef поддержка

Все компоненты используют `forwardRef`, что позволяет React Hook Form правильно работать с refs:

```tsx
// ✅ Работает
<Input {...register('field')} />

// ✅ Также работает
<Input ref={register('field')} />
```

### 2. Правильная связь label с input

Компонент `FormField` автоматически связывает label с input через `htmlFor`:

```tsx
<FormField
  label="Email"
  htmlFor="email" // Связывает label с input
>
  <Input id="email" {...register('email')} />
</FormField>
```

### 3. Обработка ошибок

Компоненты поддерживают отображение ошибок:

```tsx
<FormField
  label="Email"
  error={errors.email?.message} // Отображает ошибку
>
  <Input
    error={!!errors.email} // Визуальная индикация ошибки
    {...register('email')}
  />
</FormField>
```

### 4. Валидация

Полная поддержка всех возможностей валидации React Hook Form:

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

## Полный пример

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

## Совместимость

- ✅ React Hook Form v7+
- ✅ TypeScript
- ✅ Валидация
- ✅ Обработка ошибок
- ✅ Accessibility (ARIA)
- ✅ ForwardRef
- ✅ Контролируемые компоненты
