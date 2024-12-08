import React from 'react';
import { useStore } from '../../../store/useStore';
import { CheckboxGroup } from '../../forms/CheckboxGroup';

const projectOptions = [
  { value: 'machine_learning', label: 'Proyectos de Machine Learning' },
  { value: 'data_analysis', label: 'Análisis de datos' },
  { value: 'automation', label: 'Automatización de procesos' },
  { value: 'nlp', label: 'Procesamiento de lenguaje natural' },
  { value: 'computer_vision', label: 'Visión por computadora' },
];

const toolOptions = [
  { value: 'tensorflow', label: 'TensorFlow' },
  { value: 'pytorch', label: 'PyTorch' },
  { value: 'scikit_learn', label: 'Scikit-learn' },
  { value: 'hugging_face', label: 'Hugging Face' },
  { value: 'openai_api', label: 'OpenAI API' },
];

export const TechScienceAreas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <CheckboxGroup
          label="¿Qué tipos de proyectos técnicos te interesan?"
          options={projectOptions}
          selectedValues={userProfile.projectPreferences || []}
          onChange={(values) => updateProfile({ projectPreferences: values })}
        />

        <CheckboxGroup
          label="¿Qué herramientas técnicas de IA te gustaría explorar?"
          options={toolOptions}
          selectedValues={userProfile.preferredTools || []}
          onChange={(values) => updateProfile({ preferredTools: values })}
        />
      </div>
    </div>
  );
};