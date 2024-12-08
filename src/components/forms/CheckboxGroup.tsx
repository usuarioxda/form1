import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange,
}) => {
  const handleChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};