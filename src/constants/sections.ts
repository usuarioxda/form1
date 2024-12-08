import { Section1Basic } from '../components/sections/basic/Section1Basic';
import { Section2Prompts } from '../components/sections/prompts/Section2Prompts';
import { Section3Areas } from '../components/sections/Section3Areas';
import { Section4Results } from '../components/sections/Section4Results';

export const sections = [
  { component: Section1Basic, title: 'Perfil Básico' },
  { component: Section2Prompts, title: 'Capacidad de Prompts' },
  { component: Section3Areas, title: 'Áreas de Aplicación' },
  { component: Section4Results, title: 'Resultados' },
] as const;