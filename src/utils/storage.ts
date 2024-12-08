const STORAGE_KEY = 'ai-profile-questionnaire';

export interface StorageData {
  userProfile: any;
  currentSection: number;
  lastUpdated: string;
}

export const saveToLocalStorage = (data: StorageData): void => {
  try {
    const serializedData = JSON.stringify({
      ...data,
      lastUpdated: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, serializedData);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromLocalStorage = (): StorageData | null => {
  try {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

export const clearLocalStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};