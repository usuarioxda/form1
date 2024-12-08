import React from 'react';
import { InterestArea } from '../../types/forms';
import { VisualArtsForm } from './specialized/VisualArtsForm';
import { useStore } from '../../store/useStore';

export const FormSelector: React.FC = () => {
  const { userProfile, updateProfile } = useStore();
  const { interestArea } = userProfile;

  const renderSpecializedForm = () => {
    switch (interestArea as InterestArea) {
      case 'visual_arts':
        return (
          <VisualArtsForm
            data={userProfile}
            onChange={(data) => updateProfile(data)}
          />
        );
      // Otros casos se implementarán próximamente
      default:
        return (
          <div className="text-center py-4">
            <p className="text-gray-600">
              Selecciona un área de interés para continuar
            </p>
          </div>
        );
    }
  };

  return (
    <div className="mt-6">
      {renderSpecializedForm()}
    </div>
  );
};