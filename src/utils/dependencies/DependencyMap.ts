import { DependencyNode, DependencyType, FileDependencies } from './types';

export class DependencyMap {
  private dependencies: Map<string, DependencyNode>;

  constructor() {
    this.dependencies = new Map();
  }

  addDependency(
    sourceFile: string,
    targetFile: string,
    type: DependencyType
  ): void {
    const source = this.getOrCreateNode(sourceFile);
    const target = this.getOrCreateNode(targetFile);

    source.dependencies.set(targetFile, { file: targetFile, type });
    target.dependents.set(sourceFile, { file: sourceFile, type });
  }

  getDependencies(file: string): FileDependencies[] {
    const node = this.dependencies.get(file);
    return node 
      ? Array.from(node.dependencies.values())
      : [];
  }

  getDependents(file: string): FileDependencies[] {
    const node = this.dependencies.get(file);
    return node 
      ? Array.from(node.dependents.values())
      : [];
  }

  private getOrCreateNode(file: string): DependencyNode {
    if (!this.dependencies.has(file)) {
      this.dependencies.set(file, {
        file,
        dependencies: new Map(),
        dependents: new Map()
      });
    }
    return this.dependencies.get(file)!;
  }

  getImpactAnalysis(file: string): {
    directDependencies: string[];
    directDependents: string[];
    indirectDependencies: string[];
    indirectDependents: string[];
  } {
    const directDependencies = this.getDependencies(file).map(d => d.file);
    const directDependents = this.getDependents(file).map(d => d.file);
    
    const indirectDependencies = this.getIndirectDependencies(file);
    const indirectDependents = this.getIndirectDependents(file);

    return {
      directDependencies,
      directDependents,
      indirectDependencies,
      indirectDependents
    };
  }

  private getIndirectDependencies(file: string, visited = new Set<string>()): string[] {
    if (visited.has(file)) return [];
    visited.add(file);

    const directDeps = this.getDependencies(file);
    const indirect: string[] = [];

    for (const dep of directDeps) {
      indirect.push(...this.getIndirectDependencies(dep.file, visited));
    }

    return [...new Set(indirect)];
  }

  private getIndirectDependents(file: string, visited = new Set<string>()): string[] {
    if (visited.has(file)) return [];
    visited.add(file);

    const directDeps = this.getDependents(file);
    const indirect: string[] = [];

    for (const dep of directDeps) {
      indirect.push(...this.getIndirectDependents(dep.file, visited));
    }

    return [...new Set(indirect)];
  }
}