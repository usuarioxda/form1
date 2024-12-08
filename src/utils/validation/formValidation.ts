import { UserProfile } from '../../types';

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  type: 'error' | 'warning';
}

export const validateUserProfile = (profile: Partial<UserProfile>): ValidationResult => {
  const errors: ValidationError[] = [];

  // Validación de educationLevel
  if (!profile.educationLevel) {
    errors.push({
      field: 'educationLevel',
      message: 'El nivel educativo es requerido',
      type: 'error'
    });
  }

  // Validación de interestArea
  if (!profile.interestArea) {
    errors.push({
      field: 'interestArea',
      message: 'El área de interés es requerida',
      type: 'error'
    });
  }

  // Validación de aiKnowledge
  if (!profile.aiKnowledge) {
    errors.push({
      field: 'aiKnowledge',
      message: 'El conocimiento en IA es requerido',
      type: 'error'
    });
  }

  // Validación de projectPreferences
  if (!profile.projectPreferences || profile.projectPreferences.length === 0) {
    errors.push({
      field: 'projectPreferences',
      message: 'Selecciona al menos un tipo de proyecto',
      type: 'warning'
    });
  }

  // Validación de preferredTools
  if (!profile.preferredTools || profile.preferredTools.length === 0) {
    errors.push({
      field: 'preferredTools',
      message: 'Selecciona al menos una herramienta',
      type: 'warning'
    });
  }

  return {
    isValid: errors.filter(e => e.type === 'error').length === 0,
    errors
  };
};