interface PromptEvaluationResult {
  score: number;
  details: {
    detailLevel: number;
    clarity: number;
    specificity: number;
  };
  feedback: string[];
}

export const evaluatePrompt = (prompt: string): PromptEvaluationResult => {
  const details = {
    detailLevel: evaluateDetailLevel(prompt),
    clarity: evaluateClarity(prompt),
    specificity: evaluateSpecificity(prompt),
  };

  const score = calculateOverallScore(details);
  const feedback = generateFeedback(details);

  return {
    score,
    details,
    feedback,
  };
};

const evaluateDetailLevel = (prompt: string): number => {
  let score = 0;
  
  if (prompt.length > 50) score += 2;
  if (prompt.includes('color') || prompt.includes('estilo')) score += 1;
  if (prompt.includes('ambiente') || prompt.includes('emoción')) score += 1;
  
  return Math.min(5, score);
};

const evaluateClarity = (prompt: string): number => {
  let score = 0;
  
  if (prompt.split(',').length > 2) score += 1;
  if (!prompt.includes('etc') && !prompt.includes('...')) score += 1;
  if (prompt.split('.').length > 1) score += 1;
  
  return Math.min(5, score);
};

const evaluateSpecificity = (prompt: string): number => {
  let score = 0;
  
  if (prompt.includes('específicamente') || prompt.includes('exactamente')) score += 1;
  if (/\d+/.test(prompt)) score += 1;
  if (prompt.includes('como') && prompt.includes('pero')) score += 1;
  
  return Math.min(5, score);
};

const calculateOverallScore = (details: { detailLevel: number; clarity: number; specificity: number }): number => {
  const total = details.detailLevel + details.clarity + details.specificity;
  return Math.round((total / 15) * 10);
};

const generateFeedback = (details: { detailLevel: number; clarity: number; specificity: number }): string[] => {
  const feedback: string[] = [];

  if (details.detailLevel < 3) {
    feedback.push('Intenta agregar más detalles sobre colores, estilos o ambiente');
  }
  if (details.clarity < 3) {
    feedback.push('Estructura tu prompt con comas y puntos para mayor claridad');
  }
  if (details.specificity < 3) {
    feedback.push('Sé más específico en tus instrucciones');
  }

  return feedback;
};