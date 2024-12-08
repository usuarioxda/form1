import React from 'react';
import { useStore } from '../../../store/useStore';
import { CheckboxGroup } from '../../forms/CheckboxGroup';

const projectOptions = [
  { value: 'market_analysis', label: 'Análisis de mercado' },
  { value: 'process_automation', label: 'Automatización de procesos' },
  { value: 'customer_insights', label: 'Insights de clientes' },
  { value: 'sales_prediction', label: 'Predicción de ventas' },
  { value: 'risk_assessment', label: 'Evaluación de riesgos' },
];

const toolOptions = [
  { value: 'tableau', label: 'Tableau con IA' },
  { value: 'power_bi', label: 'Power BI con IA' },
  { value: 'salesforce', label: 'Salesforce Einstein' },
  { value: 'automation_anywhere', label: 'Automation Anywhere' },
  { value: 'dataiku', label: 'Dataiku' },
];

export const BusinessAreas: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <CheckboxGroup
          label="¿Qué tipos de proyectos de negocio te interesan?"
          options={projectOptions}
          selectedValues={userProfile.projectPreferences || []}
          onChange={(values) => updateProfile({ projectPreferences: values })}
        />

        <CheckboxGroup
          label="¿Qué herramientas de IA para negocios te gustaría explorar?"
          options={toolOptions}
          selectedValues={userProfile.preferredTools || []}
          onChange={(values) => updateProfile({ preferredTools: values })}
        />
      </div>
    </div>
  );
};