export type DependencyType = 
  | 'import'      // Importación directa
  | 'component'   // Uso de componente
  | 'hook'        // Uso de hook
  | 'util'        // Uso de utilidad
  | 'type'        // Uso de tipo
  | 'context'     // Uso de contexto
  | 'store';      // Uso de store

export interface FileDependencies {
  file: string;
  type: DependencyType;
}

export interface DependencyNode {
  file: string;
  dependencies: Map<string, FileDependencies>;  // Archivos que este archivo usa
  dependents: Map<string, FileDependencies>;    // Archivos que usan este archivo
}