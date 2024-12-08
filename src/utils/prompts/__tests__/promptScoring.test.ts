import { describe, it, expect } from 'vitest';
import { evaluatePromptScore } from '../promptScoring';

describe('evaluatePromptScore', () => {
  it('should return a score between 0 and 10', () => {
    const prompt = 'Generate an image';
    const score = evaluatePromptScore(prompt);
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(10);
  });

  it('should give higher scores to detailed prompts', () => {
    const simplePrompt = 'Create an image';
    const detailedPrompt = 'Create a vibrant digital painting with warm colors, showing a peaceful sunset over mountains, with a style similar to impressionism';
    
    const simpleScore = evaluatePromptScore(simplePrompt);
    const detailedScore = evaluatePromptScore(detailedPrompt);
    
    expect(detailedScore).toBeGreaterThan(simpleScore);
  });

  it('should reward prompts with specific details', () => {
    const prompt = 'Create specifically a 4K resolution image with exactly 3 subjects in the foreground';
    const score = evaluatePromptScore(prompt);
    expect(score).toBeGreaterThan(5);
  });

  it('should consider clarity in scoring', () => {
    const unclearPrompt = 'Make something nice etc...';
    const clearPrompt = 'Create a portrait photo, with soft lighting, neutral background, professional pose';
    
    const unclearScore = evaluatePromptScore(unclearPrompt);
    const clearScore = evaluatePromptScore(clearPrompt);
    
    expect(clearScore).toBeGreaterThan(unclearScore);
  });
});