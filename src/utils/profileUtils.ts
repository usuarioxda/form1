import { UserProfile } from '../types';

export const getProfileType = (profile: Partial<UserProfile>) => {
  const { interestArea } = profile;
  
  if (interestArea === 'visual_arts' || interestArea === 'multimedia') {
    return 'creative';
  } else if (interestArea === 'tech_science' || interestArea === 'business') {
    return 'technical';
  }
  return 'intermediate';
};

export const getRecommendations = (profileType: string) => {
  const recommendations = {
    creative: {
      tools: ['DALL-E', 'Midjourney', 'Soundraw'],
      suggestion: 'Practica mejorando tus prompts describiendo las emociones que deseas evocar en la pieza'
    },
    technical: {
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      suggestion: 'Explora cómo usar IA en proyectos de optimización de procesos'
    },
    intermediate: {
      tools: ['ChatGPT', 'Canva con IA', 'Copy.ai'],
      suggestion: 'Comienza a explorar ChatGPT para mejorar la redacción de tus prompts'
    }
  };

  return recommendations[profileType as keyof typeof recommendations];
};