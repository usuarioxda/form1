import React from 'react';
import { ValidationError } from '../../utils/validation/formValidation';

interface ValidationFeedbackProps {
  errors: ValidationError[];
}

export const ValidationFeedback: React.FC<ValidationFeedbackProps> = ({ errors }) => {
  if (errors.length === 0) return null;

  return (
    <div className="space-y-2 mt-4">
      {errors.map((error, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg ${
            error.type === 'error' 
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
          }`}
        >
          <p className="text-sm font-medium">{error.message}</p>
        </div>
      ))}
    </div>
  );
};