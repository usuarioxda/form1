import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from '../TextArea';
import { describe, it, expect, vi } from 'vitest';

describe('TextArea', () => {
  const defaultProps = {
    label: 'Test Label',
    value: '',
    onChange: vi.fn(),
    placeholder: 'Enter text here',
    rows: 4
  };

  it('renders correctly with label and placeholder', () => {
    render(<TextArea {...defaultProps} />);
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });

  it('calls onChange when text is entered', () => {
    render(<TextArea {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New text' } });
    
    expect(defaultProps.onChange).toHaveBeenCalledWith('New text');
  });

  it('displays the provided value', () => {
    render(<TextArea {...defaultProps} value="Initial text" />);
    
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Initial text');
  });

  it('applies the correct number of rows', () => {
    render(<TextArea {...defaultProps} rows={6} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '6');
  });

  it('applies the correct CSS classes', () => {
    render(<TextArea {...defaultProps} />);
    
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
});