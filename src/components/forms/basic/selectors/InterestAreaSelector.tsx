import React from 'react';
import { SelectField } from '../../common/SelectField';
import { interestOptions } from '../../../../constants/options';
import { InterestArea } from '../../../../types';

interface InterestAreaSelectorProps {
  value: string;
  onChange: (value: InterestArea) => void;
}

export const InterestAreaSelector: React.FC<InterestAreaSelectorProps> = ({
  value,
  onChange
}) => {
  return (
    <SelectField
      label="Área principal de interés"
      value={value}
      onChange={onChange}
      options={interestOptions}
      placeholder="Selecciona tu área de interés"
    />
  );
};