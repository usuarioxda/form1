import React from 'react';
import { SelectField } from '../../common/SelectField';
import { aiKnowledgeOptions } from '../../../../constants/options';
import { AIKnowledgeLevel } from '../../../../types';

interface AIKnowledgeSelectorProps {
  value: string;
  onChange: (value: AIKnowledgeLevel) => void;
}

export const AIKnowledgeSelector: React.FC<AIKnowledgeSelectorProps> = ({
  value,
  onChange
}) => {
  return (
    <SelectField
      label="Conocimiento previo sobre IA"
      value={value}
      onChange={onChange}
      options={aiKnowledgeOptions}
      placeholder="Selecciona tu nivel de conocimiento en IA"
    />
  );
};