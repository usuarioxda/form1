import React from 'react';
import { useStore } from '../../../store/useStore';
import { CheckboxGroup } from '../../forms/CheckboxGroup';

const projectOptions = [
  { value: 'behavioral_analysis', label: 'Análisis conductual' },
  { value: 'social_research', label: 'Investigación social' },
  { value: 'mental_health', label: 'Salud mental' },
  { value: 'education', label: 'Educación' },
  { value: 'social_impact', label: 'Impacto social' },
];

const toolOptions = [
  { value: 'spss', label: 'SPSS con IA' },
  { value: 'nvivo', label: 'NVivo con IA' },
  { value: 'qualtrics', label: 'Qualtrics' },
  { value: 'maxqda', label: 'MAXQDA' },
  { value: 'atlas_ti', label: 'ATLAS.ti con IA' },
];

export const SocialScienceAreas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <CheckboxGroup
          label="¿Qué tipos de proyectos de ciencias sociales te interesan?"
          options={projectOptions}
          selectedValues={userProfile.projectPreferences || []}
          onChange={(values) => updateProfile({ projectPreferences: values })}
        />

        <CheckboxGroup
          label="¿Qué herramientas de IA para ciencias sociales te gustaría explorar?"
          options={toolOptions}
          selectedValues={userProfile.preferredTools || []}
          onChange={(values) => updateProfile({ preferredTools: values })}
        />
      </div>
    </div>
  );
};