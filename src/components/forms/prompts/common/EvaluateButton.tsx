import React from 'react';

interface EvaluateButtonProps {
  onClick: () => void;
}

export const EvaluateButton: React.FC<EvaluateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-primary text-white rounded-xl px-6 py-3 
                 transform hover:-translate-y-0.5 transition-all duration-200"
    >
      Evaluar habilidad
    </button>
  );
};