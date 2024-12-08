import { describe, it, expect } from 'vitest';
import { generateRecommendations } from '../recommendations';
import { UserProfile } from '../../types';

describe('generateRecommendations', () => {
  const createProfile = (overrides: Partial<UserProfile>): UserProfile => ({
    educationLevel: 'university',
    interestArea: 'visual_arts',
    aiKnowledge: 'intermediate',
    projectPreferences: ['digital_art'],
    preferredTools: ['image_creation'],
    ...overrides
  });

  it('generates creative recommendations for visual arts profile', () => {
    const profile = createProfile({
      interestArea: 'visual_arts',
      projectPreferences: ['digital_art']
    });

    const recommendations = generateRecommendations(profile);
    expect(recommendations.tools).toContain('DALL-E');
    expect(recommendations.tools).toContain('Midjourney');
    expect(recommendations.suggestion).toContain('Practica mejorando tus prompts');
  });

  it('generates technical recommendations for tech profile', () => {
    const profile = createProfile({
      educationLevel: 'tech_experienced',
      interestArea: 'tech_science',
      projectPreferences: ['scientific_research'],
      preferredTools: ['data_analysis']
    });

    const recommendations = generateRecommendations(profile);
    expect(recommendations.tools).toContain('TensorFlow');
    expect(recommendations.tools).toContain('PyTorch');
    expect(recommendations.suggestion).toContain('Explora cómo usar IA');
  });

  it('generates intermediate recommendations for business profile', () => {
    const profile = createProfile({
      educationLevel: 'professional_non_tech',
      interestArea: 'business',
      aiKnowledge: 'basic',
      projectPreferences: ['business_apps']
    });

    const recommendations = generateRecommendations(profile);
    expect(recommendations.tools).toContain('ChatGPT');
    expect(recommendations.suggestion).toContain('Comienza a explorar');
  });
});