import { render, screen } from '@testing-library/react';
import { Section2Prompts } from '../sections/prompts/Section2Prompts';
import { describe, it, expect, vi } from 'vitest';
import { createStoreMock } from '../../test/mocks/storeMock';

// Mock the store with visual arts profile
vi.mock('../../store/useStore', () => 
  createStoreMock({
    userProfile: { interestArea: 'visual_arts' }
  })
);

describe('Section2Prompts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the prompts section title', () => {
    render(<Section2Prompts />);
    expect(screen.getByText('Capacidad para Comunicarse con la IA')).toBeInTheDocument();
  });

  it('shows visual arts prompts when interest area is visual_arts', () => {
    render(<Section2Prompts />);
    expect(screen.getByText(/Describe una obra de arte/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Describe detalladamente la obra/i)).toBeInTheDocument();
  });

  it('displays evaluation button', () => {
    render(<Section2Prompts />);
    expect(screen.getByText('Evaluar habilidad')).toBeInTheDocument();
  });
});