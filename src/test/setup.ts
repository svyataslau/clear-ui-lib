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
interface ResizeObserverMock {
  observe: ReturnType<typeof vi.fn>;
  unobserve: ReturnType<typeof vi.fn>;
  disconnect: ReturnType<typeof vi.fn>;
}

(globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = vi.fn().mockImplementation((): ResizeObserverMock => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
