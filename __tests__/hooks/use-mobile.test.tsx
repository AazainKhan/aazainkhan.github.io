import { renderHook } from '@testing-library/react';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock the window.matchMedia function
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  
  // Mock window.innerWidth
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    value: 1024, // Desktop width
  });
});

describe('useIsMobile hook', () => {
  it('returns false for desktop screens', () => {
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });
}); 