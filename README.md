# AI Profile Questionnaire

Una aplicación interactiva que ayuda a los usuarios a descubrir su perfil de uso de Inteligencia Artificial y obtener recomendaciones personalizadas para herramientas y proyectos.

## 🎯 Objetivo

Ayudar a los participantes a:
- Identificar qué herramientas de IA se adaptan mejor a su perfil
- Descubrir proyectos potenciales que pueden desarrollar
- Mejorar su capacidad para estructurar prompts efectivos
- Encontrar su camino en diferentes campos profesionales

## 🏗 Estructura del Proyecto

### Sistema de Validación y Feedback
```
src/utils/validation/
  ├── formValidation.ts    # Sistema de validación de formularios
  └── types.ts             # Tipos de validación

src/components/feedback/
  ├── ValidationFeedback.tsx # Componente de feedback de validación
  ├── PromptFeedback.tsx    # Componente de feedback de prompts
  └── __tests__/           # Tests de componentes de feedback
```

### Sistema de Análisis de Prompts
```
src/utils/prompts/
  ├── evaluation/           # Sistema de evaluación
  │   ├── promptEvaluator.ts
  │   ├── scoreCalculator.ts
  │   └── feedbackGenerator.ts
  ├── types.ts             # Definiciones de tipos
  └── __tests__/          # Pruebas unitarias
```

### Sistema de Mapeo de Dependencias
```
src/utils/dependencies/
  ├── DependencyMap.ts     # Gestión del grafo de dependencias
  ├── DependencyAnalyzer.ts # Análisis de relaciones
  ├── types.ts             # Tipos de dependencias
  └── index.ts             # Exportaciones públicas
```

### Sistema de Testing
```
src/test/
  ├── setup.ts             # Configuración global de tests
  ├── mocks/               # Mocks reutilizables
  │   └── storeMock.ts     # Mock del store
  └── __tests__/          # Tests de componentes y utilidades
```

## 🧪 Sistema de Pruebas

El proyecto incluye pruebas unitarias completas:

```bash
# Ejecutar pruebas
npm run test

# Ver cobertura de código
npm run coverage
```

### Estructura de Tests
- Tests de componentes React
- Tests de utilidades y helpers
- Tests de integración
- Mocks y configuración centralizada

## 💻 Tecnologías Utilizadas

- React + TypeScript
- Tailwind CSS
- Zustand
- Vite
- Vitest + Testing Library

## 🛠 Mejores Prácticas

### Validación y Feedback
- Validación en tiempo real
- Distinción entre errores y advertencias
- Feedback visual inmediato
- Componentes de UI reutilizables

### Principio de Responsabilidad Única
- Cada archivo tiene una única responsabilidad
- Facilita mantenimiento y testing
- Mejora la reutilización de código
- Permite escalabilidad controlada

### Sistema de Testing
- Tests unitarios completos
- Mocks centralizados
- Configuración global de tests
- Cobertura de código

## 📦 Gestión de Dependencias

El sistema incluye un analizador de dependencias que permite:

```typescript
const analyzer = new DependencyAnalyzer();

// Analizar impacto de cambios
const impact = analyzer.getImpactAnalysis('src/components/forms/BasicForm.tsx');

// Obtener dependencias
const deps = analyzer.getDependencies('src/utils/prompts/promptEvaluator.ts');
```

## 🌐 Próximas Características

- Internacionalización (ES/EN/PT)
- Despliegue en Netlify
- Optimizaciones de rendimiento
- Pruebas E2E

## 🤝 Contribución

1. Haz fork del repositorio
2. Crea una rama para tu feature
3. Asegúrate de:
   - Seguir el principio de responsabilidad única
   - Incluir pruebas unitarias
   - Actualizar el mapa de dependencias
4. Envía un pull request

## 📝 Licencia

MIT License