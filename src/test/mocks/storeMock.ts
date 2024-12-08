import { vi } from 'vitest';

export const createStoreMock = (initialState = {}) => ({
  useStore: () => ({
    userProfile: {},
    currentSection: 0,
    updateProfile: vi.fn(),
    setCurrentSection: vi.fn(),
    ...initialState,
  }),
});