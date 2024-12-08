import React from 'react';
import { EducationSelector } from './EducationSelector';
import { InterestAreaSelector } from './InterestAreaSelector';
import { AIKnowledgeSelector } from './AIKnowledgeSelector';
import { FormSelector } from './FormSelector';
import { useStore } from '../../store/useStore';

export const BasicProfileForm: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-4">
      <EducationSelector
        value={userProfile.educationLevel || ''}
        onChange={(value) => updateProfile({ educationLevel: value })}
      />

      <InterestAreaSelector
        value={userProfile.interestArea || ''}
        onChange={(value) => updateProfile({ interestArea: value })}
      />

      <AIKnowledgeSelector
        value={userProfile.aiKnowledge || ''}
        onChange={(value) => updateProfile({ aiKnowledge: value })}
      />

      <FormSelector />
    </div>
  );
};