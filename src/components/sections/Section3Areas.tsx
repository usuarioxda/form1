import React from 'react';
import { useStore } from '../../store/useStore';
import { VisualArtsAreas } from './areas/VisualArtsAreas';
import { TechScienceAreas } from './areas/TechScienceAreas';
import { MultimediaAreas } from './areas/MultimediaAreas';
import { BusinessAreas } from './areas/BusinessAreas';
import { SocialScienceAreas } from './areas/SocialScienceAreas';

export const Section3Areas: React.FC = () => {
  const { userProfile } = useStore();
  const { interestArea } = userProfile;

  const renderAreaSection = () => {
    switch (interestArea) {
      case 'visual_arts':
        return <VisualArtsAreas />;
      case 'tech_science':
        return <TechScienceAreas />;
      case 'multimedia':
        return <MultimediaAreas />;
      case 'business':
        return <BusinessAreas />;
      case 'social_science':
        return <SocialScienceAreas />;
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
      <h2 className="text-2xl font-bold text-primary">Áreas de Aplicación de la IA</h2>
      {renderAreaSection()}
    </div>
  );
};