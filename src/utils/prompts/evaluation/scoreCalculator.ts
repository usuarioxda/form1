import { PromptScore } from '../types';

export const calculatePromptScore = (prompt: string): PromptScore => {
  return {
    detail: calculateDetailScore(prompt),
    clarity: calculateClarityScore(prompt),
    specificity: calculateSpecificityScore(prompt),
    total: calculateTotalScore(prompt)
  };
};

const calculateDetailScore = (prompt: string): number => {
  let score = 0;
  if (prompt.length > 50) score += 2;
  if (prompt.includes('color') || prompt.includes('estilo')) score += 1;
  if (prompt.includes('ambiente') || prompt.includes('emoción')) score += 1;
  return Math.min(5, score);
};

const calculateClarityScore = (prompt: string): number => {
  let score = 0;
  if (prompt.split(',').length > 2) score += 1;
  if (!prompt.includes('etc') && !prompt.includes('...')) score += 1;
  if (prompt.split('.').length > 1) score += 1;
  return Math.min(5, score);
};

const calculateSpecificityScore = (prompt: string): number => {
  let score = 0;
  if (prompt.includes('específicamente') || prompt.includes('exactamente')) score += 1;
  if (/\d+/.test(prompt)) score += 1;
  if (prompt.includes('como') && prompt.includes('pero')) score += 1;
  return Math.min(5, score);
};

const calculateTotalScore = (prompt: string): number => {
  const detail = calculateDetailScore(prompt);
  const clarity = calculateClarityScore(prompt);
  const specificity = calculateSpecificityScore(prompt);
  return Math.round(((detail + clarity + specificity) / 15) * 10);
};