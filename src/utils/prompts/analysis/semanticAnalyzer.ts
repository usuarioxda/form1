interface SemanticAnalysis {
  clarity: number;
  coherence: number;
  relevance: number;
  intentionality: number;
}

export const analyzeSemantics = (prompt: string): SemanticAnalysis => {
  return {
    clarity: analyzeClarityScore(prompt),
    coherence: analyzeCoherenceScore(prompt),
    relevance: analyzeRelevanceScore(prompt),
    intentionality: analyzeIntentionalityScore(prompt)
  };
};

const analyzeClarityScore = (prompt: string): number => {
  let score = 0;
  
  // Estructura gramatical
  if (prompt.includes('.')) score += 2;
  if (prompt.includes(',')) score += 1;
  
  // Palabras clave claras
  if (/quiero|necesito|busco/.test(prompt)) score += 1;
  
  // Ausencia de ambigüedad
  if (!/(tal vez|quizás|posiblemente)/.test(prompt)) score += 1;
  
  return Math.min(5, score);
};

const analyzeCoherenceScore = (prompt: string): number => {
  let score = 0;
  
  // Conexión lógica
  if (/porque|ya que|debido a/.test(prompt)) score += 2;
  
  // Secuencia coherente
  if (/primero|luego|finalmente/.test(prompt)) score += 2;
  
  // Consistencia temática
  const sentences = prompt.split('.');
  const hasConsistentTheme = sentences.every(s => 
    sentences[0].split(' ').some(word => 
      s.includes(word) && word.length > 4
    )
  );
  if (hasConsistentTheme) score += 1;
  
  return Math.min(5, score);
};

const analyzeRelevanceScore = (prompt: string): number => {
  let score = 0;
  
  // Especificidad
  if (/específicamente|en particular|concretamente/.test(prompt)) score += 2;
  
  // Contextualización
  if (/para|con el fin de|con el objetivo de/.test(prompt)) score += 2;
  
  // Detalles relevantes
  if (/usando|mediante|a través de/.test(prompt)) score += 1;
  
  return Math.min(5, score);
};

const analyzeIntentionalityScore = (prompt: string): number => {
  let score = 0;
  
  // Objetivo claro
  if (/para|con el fin de|busco|quiero/.test(prompt)) score += 2;
  
  // Expectativas definidas
  if (/debe|necesita|requiere/.test(prompt)) score += 2;
  
  // Criterios de éxito
  if (/similar a|como|siguiendo el estilo de/.test(prompt)) score += 1;
  
  return Math.min(5, score);
};