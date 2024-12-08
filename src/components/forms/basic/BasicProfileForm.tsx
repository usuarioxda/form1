import React from 'react';
import { EducationSelector } from './selectors/EducationSelector';
import { InterestAreaSelector } from './selectors/InterestAreaSelector';
import { AIKnowledgeSelector } from './selectors/AIKnowledgeSelector';
import { FormSelector } from '../FormSelector';
import { useStore } from '../../../store/useStore';

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