import { EducationLevel, InterestArea, AIKnowledgeLevel, ProjectType, AITool } from '../types';

export const educationOptions: { value: EducationLevel; label: string }[] = [
  { value: 'adolescent', label: 'Adolescente (secundario)' },
  { value: 'university', label: 'Estudiante universitario' },
  { value: 'professional_non_tech', label: 'Profesional en área no tecnológica' },
  { value: 'tech_experienced', label: 'Técnico experimentado en tecnología' },
  { value: 'advanced_professional', label: 'Profesional con estudios avanzados' },
];

export const interestOptions: { value: InterestArea; label: string }[] = [
  { value: 'visual_arts', label: 'Artes visuales' },
  { value: 'multimedia', label: 'Música, cine, multimedia' },
  { value: 'tech_science', label: 'Ciencias y tecnología' },
  { value: 'social_science', label: 'Psicología, medicina, y ciencias sociales' },
  { value: 'business', label: 'Negocios, marketing, gestión' },
  { value: 'other', label: 'Otros' },
];

export const aiKnowledgeOptions: { value: AIKnowledgeLevel; label: string }[] = [
  { value: 'none', label: 'Ninguno' },
  { value: 'basic', label: 'Básico' },
  { value: 'intermediate', label: 'Intermedio' },
  { value: 'advanced', label: 'Avanzado' },
];

export const projectOptions: { value: ProjectType; label: string }[] = [
  { value: 'digital_art', label: 'Creación de arte digital o ilustraciones' },
  { value: 'music_audio', label: 'Generación de música y audio' },
  { value: 'multimedia', label: 'Desarrollo de contenido multimedia' },
  { value: 'social_tools', label: 'Herramientas para bienestar social' },
  { value: 'business_apps', label: 'Aplicaciones comerciales de IA' },
  { value: 'scientific_research', label: 'Investigación científica o médica' },
];

export const toolOptions: { value: AITool; label: string }[] = [
  { value: 'image_creation', label: 'Herramientas de creación de imágenes' },
  { value: 'text_voice', label: 'Herramientas de texto a voz' },
  { value: 'music_generation', label: 'Generación de música' },
  { value: 'multimedia_content', label: 'Generación de contenido multimedia' },
  { value: 'data_analysis', label: 'Análisis de datos o modelado' },
];