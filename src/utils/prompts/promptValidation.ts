export const validatePrompt = (prompt: string): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!prompt.trim()) {
    errors.push('El prompt no puede estar vacío');
  }

  if (prompt.length < 10) {
    errors.push('El prompt es demasiado corto para ser efectivo');
  }

  if (prompt.length > 500) {
    warnings.push('El prompt es muy largo, considera hacerlo más conciso');
  }

  if (prompt.split(' ').length < 3) {
    errors.push('El prompt debe contener al menos 3 palabras');
  }

  if (/[<>{}]/.test(prompt)) {
    warnings.push('Evita usar caracteres especiales que puedan confundir al modelo');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}