interface StructureAnalysis {
  format: string;
  complexity: number;
  organization: number;
  completeness: number;
}

export const analyzeStructure = (prompt: string): StructureAnalysis => {
  return {
    format: detectFormat(prompt),
    complexity: calculateComplexity(prompt),
    organization: evaluateOrganization(prompt),
    completeness: evaluateCompleteness(prompt)
  };
};

const detectFormat = (prompt: string): string => {
  if (prompt.includes('\n') && /^\d\.|\-|\*/.test(prompt)) {
    return 'list';
  }
  if (prompt.split('.').length > 3) {
    return 'paragraph';
  }
  if (prompt.split(',').length > 3) {
    return 'compound';
  }
  return 'simple';
};

const calculateComplexity = (prompt: string): number => {
  let score = 0;
  
  // Longitud y estructura
  score += Math.min(3, prompt.split(' ').length / 20);
  
  // Puntuación y formato
  score += (prompt.match(/[.,;:]|(\n)/g) || []).length / 3;
  
  // Vocabulario técnico
  const technicalTerms = /algoritmo|parámetro|configuración|metodología|proceso/g;
  score += (prompt.match(technicalTerms) || []).length;
  
  return Math.min(5, score);
};

const evaluateOrganization = (prompt: string): number => {
  let score = 0;
  
  // Estructura jerárquica
  if (/^\d\.|\-|\*/.test(prompt)) score += 2;
  
  // Separación de conceptos
  if (prompt.includes('\n') || prompt.includes(';')) score += 1;
  
  // Agrupación lógica
  if (/primero|segundo|finalmente/.test(prompt)) score += 1;
  
  // Transiciones claras
  if (/además|también|por otro lado/.test(prompt)) score += 1;
  
  return Math.min(5, score);
};

const evaluateCompleteness = (prompt: string): number => {
  let score = 0;
  
  // Elementos esenciales
  const hasContext = /para|en el contexto de|con el fin de/.test(prompt);
  const hasAction = /crear|generar|analizar|desarrollar/.test(prompt);
  const hasDetails = /usando|mediante|con las siguientes/.test(prompt);
  
  if (hasContext) score += 2;
  if (hasAction) score += 2;
  if (hasDetails) score += 1;
  
  return Math.min(5, score);
};