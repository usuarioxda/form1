import React from 'react';
import { BasicProfileForm } from '../forms/BasicProfileForm';

export const Section1Basic: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">
        Perfil Básico del Participante
      </h2>
      
      <BasicProfileForm />
    </div>
  );
};