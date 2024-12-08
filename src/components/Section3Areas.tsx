import React from 'react';
import { useStore } from '../store/useStore';
import { ProjectType, AITool } from '../types';

const projectOptions: { value: ProjectType; label: string }[] = [
  { value: 'digital_art', label: 'Creación de arte digital o ilustraciones' },
  { value: 'music_audio', label: 'Generación de música y audio' },
  { value: 'multimedia', label: 'Desarrollo de contenido multimedia' },
  { value: 'social_tools', label: 'Herramientas para bienestar social' },
  { value: 'business_apps', label: 'Aplicaciones comerciales de IA' },
  { value: 'scientific_research', label: 'Investigación científica o médica' },
];

const toolOptions: { value: AITool; label: string }[] = [
  { value: 'image_creation', label: 'Herramientas de creación de imágenes' },
  { value: 'text_voice', label: 'Herramientas de texto a voz' },
  { value: 'music_generation', label: 'Generación de música' },
  { value: 'multimedia_content', label: 'Generación de contenido multimedia' },
  { value: 'data_analysis', label: 'Análisis de datos o modelado' },
];

export const Section3Areas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  const handleProjectChange = (value: ProjectType) => {
    const currentProjects = userProfile.projectPreferences || [];
    const updatedProjects = currentProjects.includes(value)
      ? currentProjects.filter(p => p !== value)
      : [...currentProjects, value];
    updateProfile({ projectPreferences: updatedProjects });
  };

  const handleToolChange = (value: AITool) => {
    const currentTools = userProfile.preferredTools || [];
    const updatedTools = currentTools.includes(value)
      ? currentTools.filter(t => t !== value)
      : [...currentTools, value];
    updateProfile({ preferredTools: updatedTools });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Áreas de Aplicación de la IA</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿En qué tipo de proyectos te gustaría involucrarte?
          </label>
          <div className="space-y-2">
            {projectOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={(userProfile.projectPreferences || []).includes(option.value)}
                  onChange={() => handleProjectChange(option.value)}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Qué herramientas de IA te interesan más?
          </label>
          <div className="space-y-2">
            {toolOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={(userProfile.preferredTools || []).includes(option.value)}
                  onChange={() => handleToolChange(option.value)}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};