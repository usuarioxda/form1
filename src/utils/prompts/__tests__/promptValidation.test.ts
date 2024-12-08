import { describe, it, expect } from 'vitest';
import { validatePrompt } from '../promptValidation';

describe('validatePrompt', () => {
  it('should validate empty prompts', () => {
    const result = validatePrompt('');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('El prompt no puede estar vacío');
  });

  it('should validate short prompts', () => {
    const result = validatePrompt('hi');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('El prompt es demasiado corto para ser efectivo');
  });

  it('should warn about very long prompts', () => {
    const longPrompt = 'a'.repeat(501);
    const result = validatePrompt(longPrompt);
    expect(result.warnings).toContain('El prompt es muy largo, considera hacerlo más conciso');
  });

  it('should validate prompts with special characters', () => {
    const result = validatePrompt('Create an <image> with {parameters}');
    expect(result.warnings).toContain('Evita usar caracteres especiales que puedan confundir al modelo');
  });

  it('should validate valid prompts correctly', () => {
    const result = validatePrompt('Create a beautiful landscape image with mountains');
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });
});