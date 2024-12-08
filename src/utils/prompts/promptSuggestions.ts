export const generatePromptSuggestions = (prompt: string, context: string): string[] => {
  const suggestions: string[] = [];
  
  if (!prompt.includes('estilo')) {
    suggestions.push('Especifica el estilo deseado para obtener resultados más precisos');
  }

  if (!prompt.includes('color')) {
    suggestions.push('Menciona la paleta de colores o ambiente cromático deseado');
  }

  if (!prompt.includes('como') && !prompt.includes('similar')) {
    suggestions.push('Usa referencias o ejemplos para clarificar tu intención');
  }

  if (context === 'visual_arts' && !hasVisualDetails(prompt)) {
    suggestions.push('Añade detalles visuales específicos como texturas o composición');
  }

  if (context === 'tech_science' && !hasTechnicalDetails(prompt)) {
    suggestions.push('Incluye especificaciones técnicas o parámetros concretos');
  }

  return suggestions;
};

const hasVisualDetails = (prompt: string): boolean => {
  const visualTerms = ['textura', 'composición', 'perspectiva', 'luz', 'sombra'];
  return visualTerms.some(term => prompt.toLowerCase().includes(term));
};

const hasTechnicalDetails = (prompt: string): boolean => {
  const technicalTerms = ['algoritmo', 'parámetros', 'función', 'proceso', 'método'];
  return technicalTerms.some(term => prompt.toLowerCase().includes(term));
};