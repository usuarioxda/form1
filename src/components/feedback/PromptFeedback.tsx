import React from 'react';

interface PromptFeedbackProps {
  score: number;
  feedback: string[];
}

export const PromptFeedback: React.FC<PromptFeedbackProps> = ({ score, feedback }) => {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Evaluación del Prompt</h3>
        <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
          {score}/10
        </span>
      </div>
      
      <div className="bg-white/50 rounded-xl p-4 space-y-2">
        <h4 className="font-medium text-gray-700">Sugerencias de mejora:</h4>
        <ul className="space-y-2">
          {feedback.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};