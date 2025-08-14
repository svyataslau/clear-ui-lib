import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText('Card content');
    expect(card).toBeInTheDocument();
    expect(card.closest('div')).toHaveClass('rounded-2xl', 'transition-all', 'duration-200');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Card variant="default">Default Card</Card>);
    expect(screen.getByText('Default Card').closest('div')).toHaveClass('bg-neumorphism-background', 'shadow-neumorphism-card');

    rerender(<Card variant="outlined">Outlined Card</Card>);
    expect(screen.getByText('Outlined Card').closest('div')).toHaveClass('bg-neumorphism-background', 'shadow-neumorphism-inset');
  });

  it('renders with different padding sizes', () => {
    const { rerender } = render(<Card padding="sm">Small Padding</Card>);
    expect(screen.getByText('Small Padding').closest('div')).toHaveClass('p-3');

    rerender(<Card padding="md">Medium Padding</Card>);
    expect(screen.getByText('Medium Padding').closest('div')).toHaveClass('p-4');

    rerender(<Card padding="lg">Large Padding</Card>);
    expect(screen.getByText('Large Padding').closest('div')).toHaveClass('p-6');

    rerender(<Card padding="xl">Extra Large Padding</Card>);
    expect(screen.getByText('Extra Large Padding').closest('div')).toHaveClass('p-8');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>);
    expect(screen.getByText('Custom Card').closest('div')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Card
        data-testid="test-card"
        aria-label="Test card"
        role="article"
      >
        Test Card
      </Card>
    );
    const card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('aria-label', 'Test card');
    expect(card).toHaveAttribute('role', 'article');
  });

  it('renders complex content', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card description</p>
        <button>Action</button>
      </Card>
    );
    
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('handles empty content', () => {
    render(<Card />);
    const card = document.querySelector('[class*="rounded-2xl"]');
    expect(card).toBeInTheDocument();
    expect(card).toBeEmptyDOMElement();
  });
});
