import React, { useState } from 'react';
import { useStore } from '../../../../store/useStore';
import { PromptInput } from '../common/PromptInput';
import { EvaluateButton } from '../common/EvaluateButton';
import { evaluatePrompt } from '../../../../utils/prompts/promptEvaluation';

export const MultimediaPrompts: React.FC = () => {
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
        label="Ejercicio: Describe un contenido multimedia que quieras generar"
        value={prompt}
        onChange={setPrompt}
        placeholder="Describe el tipo de contenido, estilo, duración, audiencia objetivo..."
      />

      <PromptInput
        label='Mejora este prompt básico: "Crea un video musical"'
        value={improvedPrompt}
        onChange={setImprovedPrompt}
        placeholder="Escribe una versión mejorada del prompt incluyendo detalles específicos de producción multimedia..."
      />

      <EvaluateButton onClick={handleEvaluate} />
    </div>
  );
};