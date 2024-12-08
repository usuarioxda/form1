import React, { useState } from 'react';
import { useStore } from '../../../../store/useStore';
import { PromptInput } from '../common/PromptInput';
import { EvaluateButton } from '../common/EvaluateButton';
import { evaluatePrompt } from '../../../../utils/prompts/promptEvaluation';

export const VisualArtsPrompts: React.FC = () => {
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
        label="Ejercicio: Describe una obra de arte que quieras crear"
        value={prompt}
        onChange={setPrompt}
        placeholder="Describe detalladamente la obra, incluyendo estilo, colores, composición, ambiente..."
      />

      <PromptInput
        label='Mejora este prompt básico: "Crea un retrato artístico"'
        value={improvedPrompt}
        onChange={setImprovedPrompt}
        placeholder="Escribe una versión mejorada del prompt incluyendo detalles artísticos específicos..."
      />

      <EvaluateButton onClick={handleEvaluate} />
    </div>
  );
};