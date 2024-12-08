import React from 'react';
import { SelectField } from '../SelectField';
import { CheckboxGroup } from '../CheckboxGroup';
import { VisualArtsFormData } from '../../../types/forms';

const styleOptions = [
  { value: 'digital_painting', label: 'Pintura Digital' },
  { value: '3d_modeling', label: '3D Modeling' },
  { value: 'concept_art', label: 'Concept Art' },
  { value: 'illustration', label: 'Ilustración' },
  { value: 'character_design', label: 'Diseño de Personajes' },
];

const toolsOptions = [
  { value: 'photoshop', label: 'Adobe Photoshop' },
  { value: 'illustrator', label: 'Adobe Illustrator' },
  { value: 'blender', label: 'Blender' },
  { value: 'procreate', label: 'Procreate' },
  { value: 'midjourney', label: 'Midjourney' },
];

interface Props {
  data: VisualArtsFormData;
  onChange: (data: Partial<VisualArtsFormData>) => void;
}

export const VisualArtsForm: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-primary">Perfil Artístico Visual</h3>
      
      <CheckboxGroup
        label="Estilos Preferidos"
        options={styleOptions}
        selectedValues={data.preferredStyles || []}
        onChange={(values) => onChange({ preferredStyles: values })}
      />

      <CheckboxGroup
        label="Experiencia con Herramientas"
        options={toolsOptions}
        selectedValues={data.toolsExperience || []}
        onChange={(values) => onChange({ toolsExperience: values })}
      />

      <SelectField
        label="Tipo de Portfolio"
        value={data.portfolioType || ''}
        onChange={(value) => onChange({ portfolioType: value })}
        options={[
          { value: 'concept_art', label: 'Arte Conceptual' },
          { value: 'illustration', label: 'Ilustración' },
          { value: 'character', label: 'Diseño de Personajes' },
          { value: 'environment', label: 'Diseño de Entornos' },
          { value: 'mixed', label: 'Portfolio Mixto' },
        ]}
      />

      <SelectField
        label="Dirección Artística"
        value={data.artDirection || ''}
        onChange={(value) => onChange({ artDirection: value })}
        options={[
          { value: 'realistic', label: 'Realista' },
          { value: 'stylized', label: 'Estilizado' },
          { value: 'abstract', label: 'Abstracto' },
          { value: 'minimalist', label: 'Minimalista' },
          { value: 'mixed', label: 'Mixto' },
        ]}
      />
    </div>
  );
};