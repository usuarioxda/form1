import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { evaluatePromptSkill } from '../utils/promptUtils';

export const Section2Prompts: React.FC = () => {
  const { updateProfile } = useStore();
  const [prompt, setPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  const handleEvaluate = () => {
    const score = evaluatePromptSkill(prompt);
    updateProfile({ promptingSkill: score });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Capacidad para Comunicarse con la IA</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ejercicio: Escribe un prompt para generar una ilustración
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe cómo generarías una ilustración usando IA..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mejora este prompt básico: "Genera una imagen de una ciudad moderna"
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            value={improvedPrompt}
            onChange={(e) => setImprovedPrompt(e.target.value)}
            placeholder="Escribe una versión mejorada del prompt..."
          />
        </div>

        <button
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleEvaluate}
        >
          Evaluar habilidad
        </button>
      </div>
    </div>
  );
};