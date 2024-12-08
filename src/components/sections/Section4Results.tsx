import React from 'react';
import { useStore } from '../../store/useStore';
import { generateRecommendations } from '../../utils/recommendations';

export const Section4Results: React.FC = () => {
  const { userProfile } = useStore();
  const recommendations = generateRecommendations(userProfile);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Resultados y Recomendaciones</h2>
      
      <div className="space-y-6">
        <div className="bg-white/50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            Herramientas recomendadas
          </h3>
          <p className="text-gray-700">
            {recommendations.tools.join(', ')}
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            Sugerencia personalizada
          </h3>
          <p className="text-gray-700">
            {recommendations.suggestion}
          </p>
        </div>

        {userProfile.promptingSkill !== undefined && (
          <div className="bg-white/50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              Nivel de habilidad con prompts
            </h3>
            <p className="text-gray-700">
              {userProfile.promptingSkill}/10
            </p>
          </div>
        )}
      </div>
    </div>
  );
};