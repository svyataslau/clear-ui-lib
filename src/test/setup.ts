import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock CSS modules
vi.mock('*.css', () => ({}));
vi.mock('*.scss', () => ({}));

// Mock Tailwind classes
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
  }),
});

// Mock ResizeObserver
(global as any).ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
