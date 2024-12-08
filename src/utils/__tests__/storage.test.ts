import { describe, it, expect, beforeEach, vi } from 'vitest';
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from '../storage';

describe('Storage Utils', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const createTestData = () => ({
    userProfile: { name: 'Test' },
    currentSection: 1,
    lastUpdated: new Date().toISOString()
  });

  it('saves data to localStorage', () => {
    const testData = createTestData();
    saveToLocalStorage(testData);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'ai-profile-questionnaire',
      expect.any(String)
    );

    const storedData = JSON.parse(
      localStorage.setItem.mock.calls[0][1]
    );
    expect(storedData).toMatchObject({
      userProfile: testData.userProfile,
      currentSection: testData.currentSection
    });
  });

  it('loads data from localStorage', () => {
    const testData = createTestData();
    localStorage.getItem.mockReturnValue(JSON.stringify(testData));

    const loaded = loadFromLocalStorage();
    expect(loaded).toMatchObject(testData);
    expect(localStorage.getItem).toHaveBeenCalledWith('ai-profile-questionnaire');
  });

  it('returns null when no data exists', () => {
    localStorage.getItem.mockReturnValue(null);
    const loaded = loadFromLocalStorage();
    expect(loaded).toBeNull();
  });

  it('clears data from localStorage', () => {
    clearLocalStorage();
    expect(localStorage.removeItem).toHaveBeenCalledWith('ai-profile-questionnaire');
  });

  it('handles storage errors gracefully', () => {
    localStorage.setItem.mockImplementation(() => {
      throw new Error('Storage error');
    });

    const testData = createTestData();
    saveToLocalStorage(testData);
    // Should not throw error
    expect(true).toBe(true);
  });
});