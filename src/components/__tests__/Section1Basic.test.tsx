import { render, screen } from '@testing-library/react';
import { Section1Basic } from '../sections/basic/Section1Basic';
import { describe, it, expect, vi } from 'vitest';
import { createStoreMock } from '../../test/mocks/storeMock';

// Mock the store
vi.mock('../../store/useStore', () => createStoreMock());

describe('Section1Basic', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the basic profile form', () => {
    render(<Section1Basic />);
    expect(screen.getByText('Perfil Básico del Participante')).toBeInTheDocument();
  });

  it('displays all education level options', () => {
    render(<Section1Basic />);
    
    const educationOptions = [
      'Adolescente (secundario)',
      'Estudiante universitario',
      'Profesional en área no tecnológica',
      'Técnico experimentado en tecnología',
      'Profesional con estudios avanzados'
    ];

    educationOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('displays all interest area options', () => {
    render(<Section1Basic />);
    
    const interestOptions = [
      'Artes visuales',
      'Música, cine, multimedia',
      'Ciencias y tecnología',
      'Psicología, medicina, y ciencias sociales',
      'Negocios, marketing, gestión'
    ];

    interestOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});