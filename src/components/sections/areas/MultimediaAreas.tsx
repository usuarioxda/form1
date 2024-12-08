import React from 'react';
import { useStore } from '../../../store/useStore';
import { CheckboxGroup } from '../../forms/CheckboxGroup';

const projectOptions = [
  { value: 'video_generation', label: 'Generación de videos' },
  { value: 'music_production', label: 'Producción musical' },
  { value: 'audio_processing', label: 'Procesamiento de audio' },
  { value: 'motion_graphics', label: 'Motion graphics' },
  { value: 'interactive_media', label: 'Medios interactivos' },
];

const toolOptions = [
  { value: 'runway', label: 'Runway ML' },
  { value: 'soundraw', label: 'Soundraw' },
  { value: 'mubert', label: 'Mubert' },
  { value: 'descript', label: 'Descript' },
  { value: 'synthesia', label: 'Synthesia' },
];

export const MultimediaAreas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <CheckboxGroup
          label="¿Qué tipos de proyectos multimedia te interesan?"
          options={projectOptions}
          selectedValues={userProfile.projectPreferences || []}
          onChange={(values) => updateProfile({ projectPreferences: values })}
        />

        <CheckboxGroup
          label="¿Qué herramientas de IA para multimedia te gustaría explorar?"
          options={toolOptions}
          selectedValues={userProfile.preferredTools || []}
          onChange={(values) => updateProfile({ preferredTools: values })}
        />
      </div>
    </div>
  );
};