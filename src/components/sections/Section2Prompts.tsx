import React from 'react';
import { useStore } from '../../store/useStore';
import { VisualArtsPrompts } from './prompts/VisualArtsPrompts';
import { TechSciencePrompts } from './prompts/TechSciencePrompts';
import { MultimediaPrompts } from './prompts/MultimediaPrompts';
import { BusinessPrompts } from './prompts/BusinessPrompts';
import { SocialSciencePrompts } from './prompts/SocialSciencePrompts';

export const Section2Prompts: React.FC = () => {
  const { userProfile } = useStore();
  const { interestArea } = userProfile;

  const renderPromptSection = () => {
    switch (interestArea) {
      case 'visual_arts':
        return <VisualArtsPrompts />;
      case 'tech_science':
        return <TechSciencePrompts />;
      case 'multimedia':
        return <MultimediaPrompts />;
      case 'business':
        return <BusinessPrompts />;
      case 'social_science':
        return <SocialSciencePrompts />;
      default:
        return (
          <div className="text-center py-4">
            <p className="text-gray-600">
              Por favor, selecciona primero un área de interés en la sección de Perfil Básico
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Capacidad para Comunicarse con la IA</h2>
      {renderPromptSection()}
    </div>
  );
};