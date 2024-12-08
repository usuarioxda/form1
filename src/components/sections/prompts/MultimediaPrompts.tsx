import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { TextArea } from '../../forms/TextArea';
import { evaluatePrompt } from '../../../utils/promptEvaluation';

export const MultimediaPrompts: React.FC = () => {
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
          label="Ejercicio: Describe un contenido multimedia que quieras generar"
          value={prompt}
          onChange={setPrompt}
          placeholder="Describe el tipo de contenido, estilo, duración, audiencia objetivo..."
        />

        <TextArea
          label='Mejora este prompt básico: "Crea un video musical"'
          value={improvedPrompt}
          onChange={setImprovedPrompt}
          placeholder="Escribe una versión mejorada del prompt incluyendo detalles específicos de producción multimedia..."
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