import { render, screen, fireEvent } from '@testing-library/react';
import { PromptInput } from '../PromptInput';
import { describe, it, expect, vi } from 'vitest';

describe('PromptInput', () => {
  const defaultProps = {
    label: 'Test Prompt',
    value: '',
    onChange: vi.fn(),
    placeholder: 'Enter your prompt here'
  };

  it('renders correctly with label and placeholder', () => {
    render(<PromptInput {...defaultProps} />);
    
    expect(screen.getByText('Test Prompt')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your prompt here')).toBeInTheDocument();
  });

  it('calls onChange when text is entered', () => {
    render(<PromptInput {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New prompt' } });
    
    expect(defaultProps.onChange).toHaveBeenCalledWith('New prompt');
  });

  it('displays the provided value', () => {
    render(<PromptInput {...defaultProps} value="Initial prompt" />);
    
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Initial prompt');
  });

  it('applies correct CSS classes', () => {
    render(<PromptInput {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass(
      'mt-1',
      'block',
      'w-full',
      'rounded-md',
      'border-gray-300',
      'shadow-sm',
      'focus:border-indigo-500',
      'focus:ring-indigo-500'
    );
  });

  it('renders with correct number of rows', () => {
    render(<PromptInput {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '4');
  });
});