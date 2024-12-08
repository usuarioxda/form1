import { PromptScore } from '../types';

export const generatePromptFeedback = (score: PromptScore): string[] => {
  const feedback: string[] = [];

  if (score.detail < 3) {
    feedback.push('Intenta agregar más detalles sobre colores, estilos o ambiente');
  }

  if (score.clarity < 3) {
    feedback.push('Estructura tu prompt con comas y puntos para mayor claridad');
  }

  if (score.specificity < 3) {
    feedback.push('Sé más específico en tus instrucciones');
  }

  return feedback;
};