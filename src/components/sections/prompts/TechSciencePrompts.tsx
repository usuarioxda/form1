import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { TextArea } from '../../forms/TextArea';
import { evaluatePrompt } from '../../../utils/promptEvaluation';

export const TechSciencePrompts: React.FC = () => {
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
          label="Ejercicio: Describe un problema técnico que quieras resolver con IA"
          value={prompt}
          onChange={setPrompt}
          placeholder="Describe el problema técnico, requisitos, restricciones y resultados esperados..."
        />

        <TextArea
          label='Mejora este prompt básico: "Optimiza este código"'
          value={improvedPrompt}
          onChange={setImprovedPrompt}
          placeholder="Escribe una versión mejorada del prompt incluyendo contexto técnico específico..."
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