import React from 'react';
import { useStore } from '../../store/useStore';

interface NavigationButtonsProps {
  totalSections: number;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ totalSections }) => {
  const { currentSection, setCurrentSection } = useStore();

  return (
    <div className="flex justify-between gap-4">
      <button
        onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
        disabled={currentSection === 0}
        className="flex-1 bg-gradient-primary text-white disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 transition-all duration-200"
      >
        Anterior
      </button>
      <button
        onClick={() => setCurrentSection(Math.min(totalSections - 1, currentSection + 1))}
        disabled={currentSection === totalSections - 1}
        className="flex-1 bg-gradient-primary text-white disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 transition-all duration-200"
      >
        Siguiente
      </button>
    </div>
  );
}