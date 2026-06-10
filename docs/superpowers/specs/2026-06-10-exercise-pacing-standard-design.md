# Diseño: Estándar de ritmo de ejercicios y vocabulario (11 palabras/sección)

## Objetivo

Sustituir el modelo actual —cada sección introduce ~50 palabras nuevas
repartidas en 7 lecciones de 3 preguntas cada una, más un test final de 25
preguntas— por un modelo de **micro-aprendizaje**: lecciones más cortas,
mejor proporción nuevo/repaso, y un ritmo de vocabulario uniforme que
permita alcanzar ~1000 palabras al final de las 90 secciones sin sobrecargar
al alumno.

Este documento sustituye, para el ritmo de vocabulario, la curva
decreciente de
[2026-06-09-curriculum-roadmap-design.md](2026-06-09-curriculum-roadmap-design.md)
y, para el formato de preguntas, el modelo de 25 preguntas de
[2026-06-10-question-template-standard.md](2026-06-10-question-template-standard.md).
La numeración de bloques/secciones (18×5=90) y el rol de cada sección dentro
de un bloque (1-5, ver curriculum-roadmap-design.md) **no cambian**.

## 1. Ritmo de vocabulario uniforme

- **11 palabras nuevas por sección**, para las **90 secciones** (90×11 = 990
  ≈ objetivo de ~1000).
- Dentro de una sección, las 7 lecciones (`ls`) se reparten esas 11 palabras
  a razón de **1-2 palabras nuevas por lección** (promedio 11/7 ≈ 1.6).
- La 8ª unidad (test) **no introduce palabras nuevas**.

### Estado actual y migración

Las secciones 1-5 ya existen y usan el modelo antiguo (~50 palabras/sección,
test de 25 preguntas). Al migrarlas al nuevo estándar:

- Cada sección migrada conserva **11 palabras "canónicas"** (las más
  centrales/frecuentes para ese tema).
- Las palabras restantes (~39/sección) se registran como **fondo de
  palabras pendientes** y se reasignan como vocabulario nuevo de las
  secciones siguientes que aún no se han migrado/creado, hasta agotar el
  fondo. La asignación exacta se decide sección por sección durante la
  migración (no se fija de antemano en este documento).
- La migración avanza **sección por sección, empezando por la Sección 1**
  (por el patrón "Punto Cero", ver sección 4).

## 2. Estándar por lección (unidades 1-7 de cada sección)

Cada lección (`ls[i]`) mantiene su estructura actual (`sl`, `w`, `p`, `mc`)
pero con estos tamaños:

- **`w` (vocabulario nuevo)**: 1-2 entradas (antes ~7).
- **`sl`/`p`**: ajustados al vocabulario reducido — sin relleno de palabras
  que no se introducen en esa lección.
- **`mc` (preguntas)**: **10-12 preguntas** (antes 3), usando los formatos ya
  soportados por el runtime: `mc`, `fill`, `listen`, `type`.

### Composición de las 10-12 preguntas

| Categoría | % | Cantidad | Origen |
|---|---|---|---|
| `new` | ~15-20% | 1-2 | Las palabras/gramática introducidas en ESTA lección |
| `old_review` | ~60% | 6-7 | Vocabulario/gramática de esta sección y secciones anteriores, en formatos variados, cada una con `concept_tag` |
| `error_pattern` | ~20% | 2 | Estático (fallback) + reemplazable en runtime según historial de errores (mecanismo ya implementado en `api/mistakes.js` / `index.html`) |

Cada pregunta de `old_review` y `error_pattern` debe llevar `concept_tag`
para alimentar la personalización por errores.

## 3. Estándar para la 8ª unidad (test de sección)

- **15-20 preguntas**, 0 palabras nuevas.
- Recicla vocabulario/gramática de **toda la sección** (y, donde aplique,
  secciones cercanas vía `concept_tag`).
- Incluye **2 preguntas `error_pattern`** de fallback.
- Umbral de aprobación: **80%** (se mantiene).

## 4. "Punto Cero" — Sección 1, lecciones 1-5

Patrón especial, válido **solo para la primera sección del curso**, que
sustituye la proporción 15/60/20 de la sección 2 mientras el alumno aún no
tiene vocabulario en memoria:

| Lección | Rol | Palabras nuevas | Formato de preguntas |
|---|---|---|---|
| 1 | Exposición pasiva — primer bloque de palabras (ej. `ja`, `ty`, `som`) | 2-3 | Sin posibilidad de error: ver palabra, escuchar audio, confirmar traducción |
| 2 | Exposición pasiva — completa el paquete inicial (ej. `si`, `dobre`/`študent`) | 2-3 (total acumulado 4-5) | Igual que lección 1 |
| 3 | Combinatoria — combina las 4-5 palabras del paquete | 0 | 10-12 preguntas, todas sobre combinaciones (`Ja som.` → `Ty si.` → `Si ty?`) |
| 4 | Combinatoria — más combinaciones/variantes (negación, pregunta) | 0 | 10-12 preguntas, igual que lección 3 |
| 5+ | Vuelve al ritmo estándar | 1-2/lección | Proporción 15/60/20 normal |

Suma de palabras nuevas en la Sección 1: 5 (lecciones 1-2) + 0 + 0 + 2 + 2 +
2 (lecciones 5-7) = **11**, igual que cualquier otra sección.

## 5bis. Nota de implementación (lecciones 1-7 vs. test)

El runtime (`index.html`) NO usa un array estático `tq` con `concept_tag`
para las lecciones 1-7 — genera los ejercicios dinámicamente a partir de
`w`/`p`/`mc` de la lección actual + una muestra de lecciones anteriores
(`buildExercises`). Para aplicar el estándar de la sección 2 sin reescribir
ese motor:

- `LESSON_EXERCISE_COUNT` (antes 20) → **11**: tamaño objetivo de la cola de
  ejercicios de una lección.
- `PREVIOUS_LESSON_EXERCISE_COUNT` (antes 5) → **6**: ítems tomados de
  lecciones anteriores (aproxima el ~60% `old_review`).
- Reducir `w`/`p`/`mc` de cada lección a 1-2 palabras nuevas + unas pocas
  frases/preguntas hace que el "pool propio" de la lección sea pequeño
  (~15-20% `new`), y el resto lo completa el pool de lecciones anteriores.
- La categoría `error_pattern` (20%, personalización por errores) **solo
  existe a nivel de test** (`tq` + `findReviewQuestion` + `user_mistakes`),
  no por lección. Añadirla a las lecciones 1-7 requeriría dar a cada lección
  su propio array `tq` y hacer asíncrona `buildExercises` — **fuera de
  alcance de esta migración**, queda como mejora futura.

Para la 8ª unidad (test), el array `tq` (formato rico con `concept_tag`,
`category`, etc.) se mantiene, y el cap de selección baja de 25 a **18**
(`buildTestExercises` y `buildLegacyTestExercises`).

## 5. Qué NO cambia

- Numeración de bloques/secciones (18×5=90) y roles 1-5 dentro del bloque.
- Formatos de pregunta (`mc`, `fill`, `listen`, `type`) y modelo de datos de
  pregunta (`concept_tag`, `audio`, `skippable`, `accept`, `explanation`).
- Mecanismo de personalización por errores (`error_pattern`,
  `user_mistakes`, `findReviewQuestion`).
- Reglas de español latinoamericano (CLAUDE.md).
