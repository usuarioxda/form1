import React from 'react';
import { useStore } from '../../store/useStore';

interface NavigationProps {
  sections: Array<{ title: string }>;
}

export const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const { currentSection, setCurrentSection } = useStore();

  return (
    <nav className="flex flex-wrap gap-3 justify-center" aria-label="Progress">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => setCurrentSection(index)}
          className={`nav-button ${
            currentSection === index ? 'nav-button-active' : 'text-primary'
          }`}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}