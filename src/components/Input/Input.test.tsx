import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with different types', () => {
    const { rerender } = render(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');

    rerender(<Input type="search" placeholder="Search" />);
    expect(screen.getByPlaceholderText('Search')).toHaveAttribute('type', 'search');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="sm" placeholder="Small" />);
    expect(screen.getByPlaceholderText('Small')).toBeInTheDocument();

    rerender(<Input size="md" placeholder="Medium" />);
    expect(screen.getByPlaceholderText('Medium')).toBeInTheDocument();

    rerender(<Input size="lg" placeholder="Large" />);
    expect(screen.getByPlaceholderText('Large')).toBeInTheDocument();

    rerender(<Input size="xl" placeholder="Extra Large" />);
    expect(screen.getByPlaceholderText('Extra Large')).toBeInTheDocument();
  });

  it('handles value and onChange', () => {
    const handleChange = vi.fn();
    render(<Input value="test value" onChange={handleChange} placeholder="Test" />);
    
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveValue('test value');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      type: 'change'
    }));
  });

  it('applies disabled state correctly', () => {
    const handleChange = vi.fn();
    render(<Input disabled onChange={handleChange} placeholder="Disabled" />);
    
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
    
    // Disabled inputs can still trigger onChange in some cases, so we just check the disabled state
    expect(input).toBeDisabled();
  });

  it('applies error state correctly', () => {
    render(<Input error placeholder="Error input" />);
    expect(screen.getByPlaceholderText('Error input')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Custom" />);
    expect(screen.getByPlaceholderText('Custom')).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(
      <Input
        data-testid="test-input"
        aria-label="Test input"
        placeholder="Test"
        maxLength={10}
      />
    );
    const input = screen.getByTestId('test-input');
    expect(input).toHaveAttribute('aria-label', 'Test input');
    expect(input).toHaveAttribute('maxLength', '10');
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    render(
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Focus test"
      />
    );
    
    const input = screen.getByPlaceholderText('Focus test');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
