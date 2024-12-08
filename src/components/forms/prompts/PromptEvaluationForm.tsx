import React from 'react';
import { useStore } from '../../../store/useStore';
import { VisualArtsPrompts } from './areas/VisualArtsPrompts';
import { TechSciencePrompts } from './areas/TechSciencePrompts';
import { MultimediaPrompts } from './areas/MultimediaPrompts';
import { BusinessPrompts } from './areas/BusinessPrompts';
import { SocialSciencePrompts } from './areas/SocialSciencePrompts';

export const PromptEvaluationForm: React.FC = () => {
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

  return <div className="space-y-6">{renderPromptSection()}</div>;
};