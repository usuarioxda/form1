import { UserProfile, ProfileType } from '../types';

interface Recommendation {
  tools: string[];
  suggestion: string;
  resources: string[];
  nextSteps: string[];
}

export const generateRecommendations = (profile: UserProfile): Recommendation => {
  const profileType = determineProfileType(profile);
  return getRecommendationsByType(profileType);
};

const determineProfileType = (profile: UserProfile): ProfileType => {
  const { interestArea, aiKnowledge, projectPreferences } = profile;

  if (isCreativeProfile(interestArea, projectPreferences)) {
    return 'creative';
  } else if (isTechnicalProfile(interestArea, projectPreferences)) {
    return 'technical';
  }
  return 'intermediate';
};

const isCreativeProfile = (interestArea?: string, projectPreferences?: string[]): boolean => {
  return (
    interestArea === 'visual_arts' ||
    interestArea === 'multimedia' ||
    (projectPreferences || []).some(pref => 
      ['digital_art', 'music_audio', 'multimedia'].includes(pref)
    )
  );
};

const isTechnicalProfile = (interestArea?: string, projectPreferences?: string[]): boolean => {
  return (
    interestArea === 'tech_science' ||
    interestArea === 'business' ||
    (projectPreferences || []).some(pref => 
      ['business_apps', 'scientific_research'].includes(pref)
    )
  );
};

const getRecommendationsByType = (profileType: ProfileType): Recommendation => {
  const recommendations: Record<ProfileType, Recommendation> = {
    creative: {
      tools: ['DALL-E', 'Midjourney', 'Soundraw'],
      suggestion: 'Practica mejorando tus prompts describiendo las emociones que deseas evocar en la pieza',
      resources: [
        'Guía de estilos artísticos para IA',
        'Tutorial de composición visual',
        'Ejemplos de prompts creativos'
      ],
      nextSteps: [
        'Experimenta con diferentes estilos artísticos',
        'Crea un portafolio de arte generado por IA',
        'Participa en comunidades de arte digital'
      ]
    },
    technical: {
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      suggestion: 'Explora cómo usar IA en proyectos de optimización de procesos',
      resources: [
        'Introducción al Machine Learning',
        'Curso de análisis de datos',
        'Guía de automatización con IA'
      ],
      nextSteps: [
        'Desarrolla un proyecto de análisis predictivo',
        'Automatiza un proceso de negocio',
        'Aprende sobre APIs de IA'
      ]
    },
    intermediate: {
      tools: ['ChatGPT', 'Canva con IA', 'Copy.ai'],
      suggestion: 'Comienza a explorar ChatGPT para mejorar la redacción de tus prompts',
      resources: [
        'Guía básica de IA',
        'Tutorial de ChatGPT',
        'Introducción a la generación de imágenes'
      ],
      nextSteps: [
        'Practica con herramientas básicas de IA',
        'Crea contenido simple con IA',
        'Aprende sobre diferentes tipos de IA'
      ]
    }
  };

  return recommendations[profileType];
};