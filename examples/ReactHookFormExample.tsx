import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Switch, FormField, Button, Card, Typography } from '@clear/ui';

interface FormData {
  name: string;
  email: string;
  message: string;
  notifications: boolean;
}

export function ReactHookFormExample() {
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
    <div className="max-w-md mx-auto p-6 space-y-6">
      {/* Name Field */}
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

      {/* Email Field */}
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

      {/* Message Field */}
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

      {/* Switch Field */}
      <FormField
        label="Enable Notifications"
        htmlFor="notifications"
      >
        <Switch
          id="notifications"
          checked={notificationsEnabled}
          {...register('notifications')}
        />
        {notificationsEnabled && (
          <p className="text-sm text-gray-600 mt-1">
            You will receive email notifications
          </p>
        )}
      </FormField>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
      >
        Submit Form
      </Button>
    </div>
  );
}
