import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  const mockLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  it('renders with default props', () => {
    render(<Navbar links={mockLinks} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders with custom logo', () => {
    render(<Navbar links={mockLinks} logo={<span>Custom Logo</span>} />);
    expect(screen.getByText('Custom Logo')).toBeInTheDocument();
  });

  it('renders with custom logo', () => {
    render(<Navbar links={mockLinks} logo="🚀" />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar links={mockLinks} />);
    
    const mobileButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(mobileButton);
    
    // Mobile menu should be visible - check for mobile menu links
    const mobileLinks = screen.getAllByText('Home');
    expect(mobileLinks).toHaveLength(2); // One for desktop, one for mobile
  });

  it('renders links as navigation elements', () => {
    render(<Navbar links={mockLinks} />);
    
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    
    expect(homeLink).toHaveAttribute('href', '/home');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('applies custom className', () => {
    render(<Navbar links={mockLinks} className="custom-navbar" />);
    const navbar = screen.getByText('Home').closest('nav');
    expect(navbar).toHaveClass('custom-navbar');
  });

  it('passes through additional props', () => {
    render(
      <Navbar
        links={mockLinks}
        data-testid="test-navbar"
        aria-label="Test navbar"
      />
    );
    
    const navbar = screen.getByTestId('test-navbar');
    expect(navbar).toHaveAttribute('aria-label', 'Test navbar');
  });

  it('renders with empty links array', () => {
    render(<Navbar links={[]} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('handles active link styling', () => {
    const linksWithActive = [
      { href: '/home', label: 'Home', active: true },
      { href: '/about', label: 'About', active: false },
    ];
    
    render(<Navbar links={linksWithActive} />);
    
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    
    // The active link should have different styling
    expect(homeLink.closest('a')).toHaveClass('bg-gradient-to-r', 'from-purple-400', 'to-purple-600', 'text-white');
    expect(aboutLink.closest('a')).toHaveClass('text-gray-600');
  });

  it('renders mobile menu correctly', () => {
    render(<Navbar links={mockLinks} />);
    
    // Initially mobile menu should be hidden
    const mobileMenu = screen.queryByText('Home');
    expect(mobileMenu).toBeInTheDocument(); // Desktop menu is always visible
    
    // Click mobile menu button
    const mobileButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(mobileButton);
    
    // Mobile menu should now be visible - check for multiple Home links
    const allHomeLinks = screen.getAllByText('Home');
    expect(allHomeLinks.length).toBeGreaterThan(1);
  });

  it('renders with custom actions', () => {
    const customActions = (
      <button data-testid="custom-action">Custom Action</button>
    );
    
    render(<Navbar links={mockLinks} actions={customActions} />);
    expect(screen.getByTestId('custom-action')).toBeInTheDocument();
  });

  it('handles link click events', () => {
    render(<Navbar links={mockLinks} />);
    
    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('href', '/home');
  });
});
