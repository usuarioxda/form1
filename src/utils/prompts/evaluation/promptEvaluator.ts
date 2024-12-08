import { calculatePromptScore } from './scoreCalculator';
import { generatePromptFeedback } from './feedbackGenerator';
import { PromptEvaluationResult } from '../types';

export const evaluatePrompt = (prompt: string): PromptEvaluationResult => {
  const score = calculatePromptScore(prompt);
  const feedback = generatePromptFeedback(score);

  return {
    score: score.total,
    details: {
      detailLevel: score.detail,
      clarity: score.clarity,
      specificity: score.specificity
    },
    feedback
  };
};