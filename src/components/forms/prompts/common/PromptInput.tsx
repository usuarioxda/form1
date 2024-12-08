import React, { useState } from 'react';
import { ValidationFeedback } from '../../../feedback/ValidationFeedback';
import { PromptFeedback } from '../../../feedback/PromptFeedback';
import { evaluatePrompt } from '../../../../utils/prompts/promptEvaluation';
import { ValidationError } from '../../../../utils/validation/formValidation';

interface PromptInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onEvaluate?: (score: number) => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  onEvaluate
}) => {
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [evaluation, setEvaluation] = useState<{ score: number; feedback: string[] } | null>(null);

  const validatePrompt = (text: string) => {
    const newErrors: ValidationError[] = [];
    
    if (text.length < 10) {
      newErrors.push({
        field: 'prompt',
        message: 'El prompt es demasiado corto para ser efectivo',
        type: 'error'
      });
    }
    
    if (text.length > 500) {
      newErrors.push({
        field: 'prompt',
        message: 'El prompt es muy largo, considera hacerlo más conciso',
        type: 'warning'
      });
    }

    setErrors(newErrors);
    return newErrors.filter(e => e.type === 'error').length === 0;
  };

  const handleChange = (text: string) => {
    onChange(text);
    validatePrompt(text);
  };

  const handleEvaluate = () => {
    if (validatePrompt(value)) {
      const result = evaluatePrompt(value);
      setEvaluation({
        score: result.score,
        feedback: result.feedback
      });
      if (onEvaluate) {
        onEvaluate(result.score);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <textarea
          className={`mt-1 block w-full rounded-md shadow-sm transition-colors duration-200
            ${errors.some(e => e.type === 'error') 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
            }`}
          rows={4}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>

      <ValidationFeedback errors={errors} />

      <button
        onClick={handleEvaluate}
        disabled={errors.some(e => e.type === 'error')}
        className="w-full bg-gradient-primary text-white rounded-xl px-6 py-3 
                 transform hover:-translate-y-0.5 transition-all duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Evaluar prompt
      </button>

      {evaluation && (
        <PromptFeedback 
          score={evaluation.score} 
          feedback={evaluation.feedback} 
        />
      )}
    </div>
  );
};