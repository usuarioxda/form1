import { PromptContext } from '../types';

export const analyzeContext = (prompt: string): PromptContext => {
  return {
    area: detectArea(prompt),
    level: detectComplexityLevel(prompt),
    purpose: detectPurpose(prompt)
  };
};

const detectArea = (prompt: string): string => {
  const areas = {
    visual_arts: ['diseño', 'arte', 'imagen', 'visual', 'color', 'estilo'],
    tech_science: ['código', 'algoritmo', 'sistema', 'técnico', 'proceso'],
    business: ['negocio', 'empresa', 'mercado', 'ventas', 'cliente'],
    social_science: ['social', 'comportamiento', 'psicología', 'educación'],
    multimedia: ['audio', 'video', 'música', 'contenido', 'media']
  };

  for (const [area, keywords] of Object.entries(areas)) {
    if (keywords.some(keyword => prompt.toLowerCase().includes(keyword))) {
      return area;
    }
  }

  return 'general';
};

const detectComplexityLevel = (prompt: string): string => {
  const wordCount = prompt.split(' ').length;
  const hasSpecificTerms = /específicamente|exactamente|precisamente/.test(prompt);
  const hasTechnicalTerms = /parámetros|configuración|metodología/.test(prompt);

  if (wordCount > 50 || (hasSpecificTerms && hasTechnicalTerms)) {
    return 'advanced';
  } else if (wordCount > 20 || hasSpecificTerms || hasTechnicalTerms) {
    return 'intermediate';
  }
  return 'basic';
};

const detectPurpose = (prompt: string): string => {
  if (/crear|generar|producir/.test(prompt)) return 'generation';
  if (/analizar|evaluar|estudiar/.test(prompt)) return 'analysis';
  if (/modificar|transformar|adaptar/.test(prompt)) return 'modification';
  if (/explicar|describir|detallar/.test(prompt)) return 'explanation';
  return 'general';
};