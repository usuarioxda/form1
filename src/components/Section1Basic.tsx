import React from 'react';
import { useStore } from '../store/useStore';
import { EducationLevel, InterestArea, AIKnowledgeLevel } from '../types';

const educationOptions: { value: EducationLevel; label: string }[] = [
  { value: 'adolescent', label: 'Adolescente (secundario)' },
  { value: 'university', label: 'Estudiante universitario' },
  { value: 'professional_non_tech', label: 'Profesional en área no tecnológica' },
  { value: 'tech_experienced', label: 'Técnico experimentado en tecnología' },
  { value: 'advanced_professional', label: 'Profesional con estudios avanzados' },
];

const interestOptions: { value: InterestArea; label: string }[] = [
  { value: 'visual_arts', label: 'Artes visuales' },
  { value: 'multimedia', label: 'Música, cine, multimedia' },
  { value: 'tech_science', label: 'Ciencias y tecnología' },
  { value: 'social_science', label: 'Psicología, medicina, y ciencias sociales' },
  { value: 'business', label: 'Negocios, marketing, gestión' },
  { value: 'other', label: 'Otros' },
];

const aiKnowledgeOptions: { value: AIKnowledgeLevel; label: string }[] = [
  { value: 'none', label: 'Ninguno' },
  { value: 'basic', label: 'Básico' },
  { value: 'intermediate', label: 'Intermedio' },
  { value: 'advanced', label: 'Avanzado' },
];

export const Section1Basic: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Perfil Básico del Participante</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nivel educativo
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={userProfile.educationLevel || ''}
            onChange={(e) => updateProfile({ educationLevel: e.target.value as EducationLevel })}
          >
            <option value="">Selecciona una opción</option>
            {educationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Área principal de interés
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={userProfile.interestArea || ''}
            onChange={(e) => updateProfile({ interestArea: e.target.value as InterestArea })}
          >
            <option value="">Selecciona una opción</option>
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Conocimiento previo sobre IA
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={userProfile.aiKnowledge || ''}
            onChange={(e) => updateProfile({ aiKnowledge: e.target.value as AIKnowledgeLevel })}
          >
            <option value="">Selecciona una opción</option>
            {aiKnowledgeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};