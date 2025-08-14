import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CirclePlate } from './CirclePlate';

describe('CirclePlate', () => {
  it('renders with default props', () => {
    render(<CirclePlate>Test</CirclePlate>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
    expect(element.closest('div')).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'rounded-full',
      'transition-all',
      'duration-200',
      'w-20',
      'h-20',
      'bg-neumorphism-background',
      'shadow-neumorphism-card'
    );
  });

  it('renders with different variants', () => {
    const { rerender } = render(<CirclePlate variant="primary">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('bg-neumorphism-background', 'shadow-neumorphism-card');

    rerender(<CirclePlate variant="concave">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('bg-neumorphism-classic', 'shadow-neumorphism-concave');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<CirclePlate size="sm">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('w-16', 'h-16');

    rerender(<CirclePlate size="md">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('w-20', 'h-20');

    rerender(<CirclePlate size="lg">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('w-24', 'h-24');

    rerender(<CirclePlate size="xl">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('w-32', 'h-32');
  });

  it('applies custom className', () => {
    render(<CirclePlate className="custom-class">Test</CirclePlate>);
    expect(screen.getByText('Test').closest('div')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <CirclePlate data-testid="test-circleplate" aria-label="Test CirclePlate">
        Test
      </CirclePlate>
    );
    const element = screen.getByTestId('test-circleplate');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('aria-label', 'Test CirclePlate');
  });

  it('renders children correctly', () => {
    render(<CirclePlate>Hello World</CirclePlate>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
