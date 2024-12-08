import React from 'react';
import { SelectField } from './SelectField';
import { educationOptions } from '../../constants/options';
import { EducationLevel } from '../../types';

interface EducationSelectorProps {
  value: string;
  onChange: (value: EducationLevel) => void;
}

export const EducationSelector: React.FC<EducationSelectorProps> = ({
  value,
  onChange
}) => {
  return (
    <SelectField
      label="Nivel educativo"
      value={value}
      onChange={onChange}
      options={educationOptions}
      placeholder="Selecciona tu nivel educativo"
    />
  );
};