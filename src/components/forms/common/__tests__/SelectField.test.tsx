import { render, screen, fireEvent } from '@testing-library/react';
import { SelectField } from '../SelectField';
import { describe, it, expect, vi } from 'vitest';

describe('SelectField', () => {
  const defaultProps = {
    label: 'Test Label',
    value: '',
    onChange: vi.fn(),
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' }
    ],
    placeholder: 'Select an option'
  };

  it('renders correctly with label and options', () => {
    render(<SelectField {...defaultProps} />);
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    render(<SelectField {...defaultProps} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option1' } });
    
    expect(defaultProps.onChange).toHaveBeenCalledWith('option1');
  });

  it('displays the selected value', () => {
    render(<SelectField {...defaultProps} value="option1" />);
    
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('option1');
  });

  it('applies the correct CSS classes', () => {
    render(<SelectField {...defaultProps} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass(
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