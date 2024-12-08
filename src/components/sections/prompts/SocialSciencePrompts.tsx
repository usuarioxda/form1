import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { TextArea } from '../../forms/TextArea';
import { evaluatePrompt } from '../../../utils/promptEvaluation';

export const SocialSciencePrompts: React.FC = () => {
  const { updateProfile } = useStore();
  const [prompt, setPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  const handleEvaluate = () => {
    const evaluation = evaluatePrompt(prompt);
    updateProfile({ promptingSkill: evaluation.score });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <TextArea
          label="Ejercicio: Describe un estudio o investigación social que quieras realizar con IA"
          value={prompt}
          onChange={setPrompt}
          placeholder="Describe la hipótesis, metodología, variables a considerar, aspectos éticos..."
        />

        <TextArea
          label='Mejora este prompt básico: "Analiza el comportamiento social"'
          value={improvedPrompt}
          onChange={setImprovedPrompt}
          placeholder="Escribe una versión mejorada del prompt incluyendo factores sociales específicos y consideraciones éticas..."
        />

        <button
          onClick={handleEvaluate}
          className="w-full bg-gradient-primary text-white"
        >
          Evaluar habilidad
        </button>
      </div>
    </div>
  );
};