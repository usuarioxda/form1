import React, { useState } from 'react';
import { useStore } from '../../../../store/useStore';
import { PromptInput } from '../common/PromptInput';
import { EvaluateButton } from '../common/EvaluateButton';
import { evaluatePrompt } from '../../../../utils/prompts/promptEvaluation';

export const BusinessPrompts: React.FC = () => {
  const { updateProfile } = useStore();
  const [prompt, setPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  const handleEvaluate = () => {
    const evaluation = evaluatePrompt(prompt);
    updateProfile({ promptingSkill: evaluation.score });
  };

  return (
    <div className="space-y-4">
      <PromptInput
        label="Ejercicio: Describe un proceso de negocio que quieras optimizar con IA"
        value={prompt}
        onChange={setPrompt}
        placeholder="Describe el proceso actual, objetivos de mejora, métricas de éxito..."
      />

      <PromptInput
        label='Mejora este prompt básico: "Analiza los datos de ventas"'
        value={improvedPrompt}
        onChange={setImprovedPrompt}
        placeholder="Escribe una versión mejorada del prompt incluyendo KPIs específicos y objetivos de negocio..."
      />

      <EvaluateButton onClick={handleEvaluate} />
    </div>
  );
};