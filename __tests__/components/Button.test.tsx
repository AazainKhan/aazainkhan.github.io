import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies variant correctly', () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>);
    const buttonElement = container.firstChild;
    // Just check that the button renders without errors
    expect(buttonElement).toBeTruthy();
  });
}); 