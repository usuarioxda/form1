import { create } from 'zustand';
import { UserProfile } from '../types';

interface Store {
  currentSection: number;
  userProfile: Partial<UserProfile>;
  setCurrentSection: (section: number) => void;
  updateProfile: (update: Partial<UserProfile>) => void;
}

export const useStore = create<Store>((set) => ({
  currentSection: 0,
  userProfile: {},
  setCurrentSection: (section) => set({ currentSection: section }),
  updateProfile: (update) => 
    set((state) => ({
      userProfile: { ...state.userProfile, ...update }
    }))
}));