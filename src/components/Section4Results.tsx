import React from 'react';
import { useStore } from '../store/useStore';
import { getProfileType, getRecommendations } from '../utils/profileUtils';

export const Section4Results: React.FC = () => {
  const { userProfile } = useStore();
  const profileType = getProfileType(userProfile);
  const recommendations = getRecommendations(profileType);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Resultados y Recomendaciones</h2>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Tu perfil personalizado
          </h3>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Herramientas recomendadas
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {recommendations.tools.join(', ')}
              </dd>
            </div>
            
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Sugerencia personalizada
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {recommendations.suggestion}
              </dd>
            </div>

            {userProfile.promptingSkill && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Nivel de habilidad con prompts
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {userProfile.promptingSkill}/10
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};