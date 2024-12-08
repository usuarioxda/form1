export type EducationLevel = 
  | 'adolescent'
  | 'university'
  | 'professional_non_tech'
  | 'tech_experienced'
  | 'advanced_professional';

export type InterestArea = 
  | 'visual_arts'
  | 'multimedia'
  | 'tech_science'
  | 'social_science'
  | 'business'
  | 'other';

export type AIKnowledgeLevel = 
  | 'none'
  | 'basic'
  | 'intermediate'
  | 'advanced';

export type ProjectType = 
  | 'digital_art'
  | 'music_audio'
  | 'multimedia'
  | 'social_tools'
  | 'business_apps'
  | 'scientific_research';

export type AITool = 
  | 'image_creation'
  | 'text_voice'
  | 'music_generation'
  | 'multimedia_content'
  | 'data_analysis';

export interface UserProfile {
  educationLevel: EducationLevel;
  interestArea: InterestArea;
  aiKnowledge: AIKnowledgeLevel;
  projectPreferences: ProjectType[];
  preferredTools: AITool[];
  promptingSkill?: number;
}