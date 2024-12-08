import { render, screen, fireEvent } from '@testing-library/react';
import { EvaluateButton } from '../EvaluateButton';
import { describe, it, expect, vi } from 'vitest';

describe('EvaluateButton', () => {
  const defaultProps = {
    onClick: vi.fn()
  };

  it('renders with correct text', () => {
    render(<EvaluateButton {...defaultProps} />);
    
    expect(screen.getByText('Evaluar habilidad')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<EvaluateButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('applies correct CSS classes', () => {
    render(<EvaluateButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'w-full',
      'bg-gradient-primary',
      'text-white',
      'rounded-xl',
      'px-6',
      'py-3',
      'transform',
      'hover:-translate-y-0.5',
      'transition-all',
      'duration-200'
    );
  });

  it('has correct hover styles', () => {
    render(<EvaluateButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hover:-translate-y-0.5');
  });
});