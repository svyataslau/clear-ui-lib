import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders when open', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Test Modal">
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()} title="Test Modal">
        Modal content
      </Modal>
    );
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        Modal content
      </Modal>
    );
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        Modal content
      </Modal>
    );
    
    // Find the backdrop by looking for the element with the backdrop classes
    const backdrop = document.querySelector('[class*="absolute inset-0 bg-black"]');
    fireEvent.click(backdrop!);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders with custom title', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Custom Title">
        Content
      </Modal>
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders without title', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        Content
      </Modal>
    );
    
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} className="custom-modal">
        Content
      </Modal>
    );
    
    const modal = screen.getByText('Content').closest('[class*="bg-neumorphism-background"]');
    expect(modal).toHaveClass('custom-modal');
  });

  it('passes through additional props', () => {
    render(
      <Modal
        isOpen={true}
        onClose={vi.fn()}
        data-testid="test-modal"
        aria-label="Test modal"
      >
        Content
      </Modal>
    );
    
    const modal = screen.getByTestId('test-modal');
    expect(modal).toHaveAttribute('aria-label', 'Test modal');
  });

  it('renders complex content', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Complex Modal">
        <div>
          <h3>Subtitle</h3>
          <p>Description</p>
          <button>Action</button>
        </div>
      </Modal>
    );
    
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('prevents backdrop click when clicking on modal content', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        <div data-testid="modal-content">Modal content</div>
      </Modal>
    );
    
    const modalContent = screen.getByTestId('modal-content');
    fireEvent.click(modalContent);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={vi.fn()} size="sm">
        Small modal
      </Modal>
    );
    expect(screen.getByText('Small modal').closest('[class*="bg-neumorphism-background"]')).toHaveClass('max-w-md');

    rerender(
      <Modal isOpen={true} onClose={vi.fn()} size="md">
        Medium modal
      </Modal>
    );
    expect(screen.getByText('Medium modal').closest('[class*="bg-neumorphism-background"]')).toHaveClass('max-w-lg');

    rerender(
      <Modal isOpen={true} onClose={vi.fn()} size="lg">
        Large modal
      </Modal>
    );
    expect(screen.getByText('Large modal').closest('[class*="bg-neumorphism-background"]')).toHaveClass('max-w-2xl');

    rerender(
      <Modal isOpen={true} onClose={vi.fn()} size="xl">
        Extra large modal
      </Modal>
    );
    expect(screen.getByText('Extra large modal').closest('[class*="bg-neumorphism-background"]')).toHaveClass('max-w-4xl');
  });
});
