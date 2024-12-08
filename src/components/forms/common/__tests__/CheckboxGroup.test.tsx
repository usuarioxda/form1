import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxGroup } from '../CheckboxGroup';
import { describe, it, expect, vi } from 'vitest';

describe('CheckboxGroup', () => {
  const defaultProps = {
    label: 'Test Options',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    selectedValues: ['option1'],
    onChange: vi.fn()
  };

  it('renders correctly with label and options', () => {
    render(<CheckboxGroup {...defaultProps} />);
    
    expect(screen.getByText('Test Options')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('shows correct checked state for selected values', () => {
    render(<CheckboxGroup {...defaultProps} />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
  });

  it('calls onChange when checkbox is clicked', () => {
    render(<CheckboxGroup {...defaultProps} />);
    
    const checkbox = screen.getByLabelText('Option 2');
    fireEvent.click(checkbox);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(['option1', 'option2']);
  });

  it('removes value when unchecking', () => {
    render(<CheckboxGroup {...defaultProps} />);
    
    const checkbox = screen.getByLabelText('Option 1');
    fireEvent.click(checkbox);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith([]);
  });

  it('applies correct CSS classes', () => {
    render(<CheckboxGroup {...defaultProps} />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveClass(
        'rounded',
        'border-gray-300',
        'text-indigo-600',
        'focus:ring-indigo-500'
      );
    });
  });
});