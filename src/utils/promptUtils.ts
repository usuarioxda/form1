export const evaluatePromptSkill = (prompt: string): number => {
  let score = 0;
  
  // Evaluate detail level
  if (prompt.length > 50) score += 2;
  if (prompt.includes('color') || prompt.includes('estilo')) score += 1;
  if (prompt.includes('ambiente') || prompt.includes('emoción')) score += 1;
  
  // Evaluate clarity
  if (prompt.split(',').length > 2) score += 1;
  if (!prompt.includes('etc') && !prompt.includes('...')) score += 1;
  
  // Evaluate specificity
  if (prompt.includes('específicamente') || prompt.includes('exactamente')) score += 1;
  if (/\d+/.test(prompt)) score += 1;
  
  return Math.min(10, score);
};