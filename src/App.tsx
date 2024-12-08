import React from 'react';
import { useStore } from './store/useStore';
import { sections } from './constants/sections';
import { Navigation } from './components/layout/Navigation';
import { NavigationButtons } from './components/layout/NavigationButtons';

export default function App() {
  const { currentSection } = useStore();
  const CurrentSection = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Descubre tu Perfil de IA
          </h1>
          <p className="text-secondary text-lg">
            Encuentra las herramientas perfectas para tu creatividad
          </p>
        </div>

        <div className="mb-8">
          <Navigation sections={sections} />
        </div>

        <div className="section-card">
          <CurrentSection />
          
          <div className="mt-8 border-t border-secondary/20 pt-6">
            <NavigationButtons totalSections={sections.length} />
          </div>
        </div>
      </div>
    </div>
  );
}