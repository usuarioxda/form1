import React from 'react';
import { PromptEvaluationForm } from '../../forms/prompts/PromptEvaluationForm';

export const Section2Prompts: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">
        Capacidad para Comunicarse con la IA
      </h2>
      <PromptEvaluationForm />
    </div>
  );
};