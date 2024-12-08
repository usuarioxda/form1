import { DependencyMap } from './DependencyMap';
import { DependencyType } from './types';

export class DependencyAnalyzer {
  private dependencyMap: DependencyMap;

  constructor() {
    this.dependencyMap = new DependencyMap();
    this.initializeDependencies();
  }

  private initializeDependencies(): void {
    // Mapeo de dependencias del sistema de evaluación de prompts
    this.mapPromptEvaluationSystem();
    
    // Mapeo de dependencias de componentes
    this.mapComponentDependencies();
    
    // Mapeo de dependencias de utilidades
    this.mapUtilityDependencies();
  }

  private mapPromptEvaluationSystem(): void {
    // Dependencias del evaluador de prompts
    this.dependencyMap.addDependency(
      'src/utils/prompts/evaluation/promptEvaluator.ts',
      'src/utils/prompts/evaluation/scoreCalculator.ts',
      'util'
    );
    this.dependencyMap.addDependency(
      'src/utils/prompts/evaluation/promptEvaluator.ts',
      'src/utils/prompts/evaluation/feedbackGenerator.ts',
      'util'
    );
    this.dependencyMap.addDependency(
      'src/utils/prompts/evaluation/promptEvaluator.ts',
      'src/utils/prompts/types.ts',
      'type'
    );
  }

  private mapComponentDependencies(): void {
    // Dependencias de componentes de formulario
    this.dependencyMap.addDependency(
      'src/components/forms/prompts/PromptEvaluationForm.tsx',
      'src/utils/prompts/evaluation/promptEvaluator.ts',
      'util'
    );
    this.dependencyMap.addDependency(
      'src/components/forms/prompts/PromptEvaluationForm.tsx',
      'src/store/useStore.ts',
      'store'
    );
  }

  private mapUtilityDependencies(): void {
    // Dependencias de utilidades
    this.dependencyMap.addDependency(
      'src/utils/recommendations.ts',
      'src/utils/prompts/evaluation/promptEvaluator.ts',
      'util'
    );
  }

  getImpactAnalysis(file: string): {
    directDependencies: string[];
    directDependents: string[];
    indirectDependencies: string[];
    indirectDependents: string[];
  } {
    return this.dependencyMap.getImpactAnalysis(file);
  }

  getDependencies(file: string): string[] {
    return this.dependencyMap.getDependencies(file).map(d => d.file);
  }

  getDependents(file: string): string[] {
    return this.dependencyMap.getDependents(file).map(d => d.file);
  }
}