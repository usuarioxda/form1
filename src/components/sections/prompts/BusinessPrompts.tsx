import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { TextArea } from '../../forms/TextArea';
import { evaluatePrompt } from '../../../utils/promptEvaluation';

export const BusinessPrompts: React.FC = () => {
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
          label="Ejercicio: Describe un proceso de negocio que quieras optimizar con IA"
          value={prompt}
          onChange={setPrompt}
          placeholder="Describe el proceso actual, objetivos de mejora, métricas de éxito..."
        />

        <TextArea
          label='Mejora este prompt básico: "Analiza los datos de ventas"'
          value={improvedPrompt}
          onChange={setImprovedPrompt}
          placeholder="Escribe una versión mejorada del prompt incluyendo KPIs específicos y objetivos de negocio..."
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