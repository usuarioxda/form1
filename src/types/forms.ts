export type InterestArea = 
  | 'visual_arts'
  | 'multimedia'
  | 'tech_science'
  | 'social_science'
  | 'business'
  | 'other';

export interface BaseFormData {
  educationLevel: string;
  aiKnowledge: string;
}

export interface VisualArtsFormData extends BaseFormData {
  preferredStyles: string[];
  toolsExperience: string[];
  portfolioType: string;
  artDirection: string;
}

export interface TechScienceFormData extends BaseFormData {
  programmingLanguages: string[];
  mlFrameworks: string[];
  dataExperience: string;
  researchAreas: string[];
}

export interface BusinessFormData extends BaseFormData {
  industryFocus: string;
  businessSize: string;
  automationNeeds: string[];
  analyticsExperience: string;
}

export interface SocialScienceFormData extends BaseFormData {
  researchMethods: string[];
  dataAnalysisTools: string[];
  ethicalConsiderations: string[];
  applicationAreas: string[];
}

export interface MultimediaFormData extends BaseFormData {
  contentTypes: string[];
  editingTools: string[];
  platformExperience: string[];
  targetAudience: string;
}