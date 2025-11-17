import { useState } from 'react';
import { clsx } from 'clsx';
import type { NavbarProps } from './Navbar.types';

export function Navbar({
  logo,
  links = [],
  actions,
  className,
  ...props
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'bg-neumorphism-background shadow-neumorphism-card sticky top-0 z-40',
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">{logo}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                    link.active
                      ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">{actions}</div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  role="img"
                  aria-label="Close menu icon"
                >
                  <title>Close menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  role="img"
                  aria-label="Open menu icon"
                >
                  <title>Open menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neumorphism-background border-t border-gray-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                  link.active
                    ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {actions && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center space-x-4">{actions}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
