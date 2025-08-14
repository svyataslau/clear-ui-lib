import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders with default props', () => {
    render(<Typography>Default text</Typography>);
    const element = screen.getByText('Default text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('text-base', 'text-gray-900');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1')).toHaveClass('text-4xl', 'font-bold');
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    rerender(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2')).toHaveClass('text-3xl', 'font-bold');
    expect(screen.getByText('Heading 2').tagName).toBe('H2');

    rerender(<Typography variant="h3">Heading 3</Typography>);
    expect(screen.getByText('Heading 3')).toHaveClass('text-2xl', 'font-semibold');
    expect(screen.getByText('Heading 3').tagName).toBe('H3');

    rerender(<Typography variant="h4">Heading 4</Typography>);
    expect(screen.getByText('Heading 4')).toHaveClass('text-xl', 'font-semibold');
    expect(screen.getByText('Heading 4').tagName).toBe('H4');

    rerender(<Typography variant="h5">Heading 5</Typography>);
    expect(screen.getByText('Heading 5')).toHaveClass('text-lg', 'font-medium');
    expect(screen.getByText('Heading 5').tagName).toBe('H5');

    rerender(<Typography variant="h6">Heading 6</Typography>);
    expect(screen.getByText('Heading 6')).toHaveClass('text-base', 'font-medium');
    expect(screen.getByText('Heading 6').tagName).toBe('H6');

    rerender(<Typography variant="subtitle">Subtitle</Typography>);
    expect(screen.getByText('Subtitle')).toHaveClass('text-lg', 'text-gray-600');
    expect(screen.getByText('Subtitle').tagName).toBe('P');

    rerender(<Typography variant="body">Body text</Typography>);
    expect(screen.getByText('Body text')).toHaveClass('text-base');
    expect(screen.getByText('Body text').tagName).toBe('P');

    rerender(<Typography variant="caption">Caption</Typography>);
    expect(screen.getByText('Caption')).toHaveClass('text-sm', 'text-gray-500');
    expect(screen.getByText('Caption').tagName).toBe('SPAN');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Typography color="primary">Primary</Typography>);
    expect(screen.getByText('Primary')).toHaveClass('text-gray-900');

    rerender(<Typography color="secondary">Secondary</Typography>);
    expect(screen.getByText('Secondary')).toHaveClass('text-gray-600');

    rerender(<Typography color="accent">Accent</Typography>);
    expect(screen.getByText('Accent')).toHaveClass('text-accent-600');

    rerender(<Typography color="gray">Gray</Typography>);
    expect(screen.getByText('Gray')).toHaveClass('text-gray-500');
  });

  it('renders with different weights', () => {
    const { rerender } = render(<Typography weight="normal">Normal</Typography>);
    expect(screen.getByText('Normal')).toHaveClass('font-normal');

    rerender(<Typography weight="medium">Medium</Typography>);
    expect(screen.getByText('Medium')).toHaveClass('font-medium');

    rerender(<Typography weight="semibold">Semibold</Typography>);
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold');

    rerender(<Typography weight="bold">Bold</Typography>);
    expect(screen.getByText('Bold')).toHaveClass('font-bold');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Custom</Typography>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Typography
        data-testid="test-typography"
        aria-label="Test typography"
        id="test-id"
      >
        Test
      </Typography>
    );
    const element = screen.getByTestId('test-typography');
    expect(element).toHaveAttribute('aria-label', 'Test typography');
    expect(element).toHaveAttribute('id', 'test-id');
  });

  it('combines variant, color, and weight correctly', () => {
    render(
      <Typography
        variant="h1"
        color="accent"
        weight="bold"
        className="custom-class"
      >
        Combined
      </Typography>
    );
    const element = screen.getByText('Combined');
    expect(element).toHaveClass('text-4xl', 'font-bold', 'text-accent-600', 'font-bold', 'custom-class');
    expect(element.tagName).toBe('H1');
  });

  it('handles complex content', () => {
    render(
      <Typography>
        <strong>Bold</strong> and <em>italic</em> text
      </Typography>
    );
    expect(screen.getByText('Bold')).toBeInTheDocument();
    expect(screen.getByText('italic')).toBeInTheDocument();
  });

  it('handles empty content', () => {
    render(<Typography />);
    const element = document.querySelector('p');
    expect(element).toBeInTheDocument();
    expect(element).toBeEmptyDOMElement();
  });
});
