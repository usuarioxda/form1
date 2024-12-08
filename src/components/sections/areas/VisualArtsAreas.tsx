import React from 'react';
import { useStore } from '../../../store/useStore';
import { CheckboxGroup } from '../../forms/CheckboxGroup';

const projectOptions = [
  { value: 'digital_painting', label: 'Pintura digital' },
  { value: 'character_design', label: 'Diseño de personajes' },
  { value: 'concept_art', label: 'Arte conceptual' },
  { value: 'illustration', label: 'Ilustración' },
  { value: 'animation', label: 'Animación' },
];

const toolOptions = [
  { value: 'midjourney', label: 'Midjourney' },
  { value: 'dalle', label: 'DALL-E' },
  { value: 'stable_diffusion', label: 'Stable Diffusion' },
  { value: 'photoshop', label: 'Adobe Photoshop con IA' },
  { value: 'runway', label: 'Runway ML' },
];

export const VisualArtsAreas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <CheckboxGroup
          label="¿Qué tipos de proyectos artísticos te interesan?"
          options={projectOptions}
          selectedValues={userProfile.projectPreferences || []}
          onChange={(values) => updateProfile({ projectPreferences: values })}
        />

        <CheckboxGroup
          label="¿Qué herramientas de IA para arte te gustaría explorar?"
          options={toolOptions}
          selectedValues={userProfile.preferredTools || []}
          onChange={(values) => updateProfile({ preferredTools: values })}
        />
      </div>
    </div>
  );
};