import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with fallback text', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with image when src is provided', () => {
    render(<Avatar src="/test-image.jpg" alt="Test avatar" fallback="John Doe" />);
    const img = screen.getByAltText('Test avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders fallback when src is not provided', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Avatar size="sm" fallback="John Doe" />);
    expect(screen.getByText('JD').parentElement).toHaveClass('w-8', 'h-8', 'text-sm');

    rerender(<Avatar size="md" fallback="John Doe" />);
    expect(screen.getByText('JD').parentElement).toHaveClass('w-10', 'h-10', 'text-base');

    rerender(<Avatar size="lg" fallback="John Doe" />);
    expect(screen.getByText('JD').parentElement).toHaveClass('w-12', 'h-12', 'text-lg');

    rerender(<Avatar size="xl" fallback="John Doe" />);
    expect(screen.getByText('JD').parentElement).toHaveClass('w-16', 'h-16', 'text-xl');
  });

  it('generates initials correctly from fallback', () => {
    const { rerender } = render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();

    rerender(<Avatar fallback="Jane Smith" />);
    expect(screen.getByText('JS')).toBeInTheDocument();

    rerender(<Avatar fallback="A" />);
    expect(screen.getByText('A')).toBeInTheDocument();

    rerender(<Avatar fallback="Alice Bob Charlie" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('shows question mark when no fallback is provided', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Avatar className="custom-class" fallback="John Doe" />);
    expect(screen.getByText('JD').parentElement).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Avatar
        data-testid="test-avatar"
        aria-label="Test avatar"
        fallback="John Doe"
      />
    );
    const avatar = screen.getByTestId('test-avatar');
    expect(avatar).toHaveAttribute('aria-label', 'Test avatar');
  });

  it('renders with image and fallback correctly', () => {
    render(
      <Avatar
        src="/test-image.jpg"
        alt="Test avatar"
        fallback="John Doe"
        size="lg"
      />
    );
    const img = screen.getByAltText('Test avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('w-full', 'h-full', 'object-cover');
    expect(img.parentElement).toHaveClass('w-12', 'h-12', 'text-lg');
  });

  it('handles empty fallback gracefully', () => {
    render(<Avatar fallback="" />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles special characters in fallback', () => {
    render(<Avatar fallback="José María" />);
    expect(screen.getByText('JM')).toBeInTheDocument();
  });
});
