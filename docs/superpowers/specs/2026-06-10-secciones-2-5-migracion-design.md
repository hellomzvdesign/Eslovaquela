# Diseño: Migración de las Secciones 2-5 al estándar de ritmo de vocabulario

## Contexto y problema

[2026-06-10-exercise-pacing-standard-design.md](2026-06-10-exercise-pacing-standard-design.md)
define el estándar vigente para **todas** las 90 secciones: **11 palabras
nuevas por sección**, repartidas **1-2 por lección** (`w` con 1-2 entradas),
test final (8ª unidad) sin palabras nuevas.

Estado real verificado (palabras nuevas totales por sección, sumando `w` de
todas las lecciones):

| Sección | Palabras (`w`) | Estado |
|---|---|---|
| s1 ¡Hola, Eslovaquia! | 11 | ✅ ya migrada |
| s2 El mundo a tu alrededor | ~49 | ❌ modelo antiguo |
| s3 La vida diaria | ~57 | ❌ modelo antiguo |
| s4 ¿Cómo estás? | ~47 | ❌ modelo antiguo |
| s5 Mi semana | ~48 | ❌ modelo antiguo |
| s6 Mi casa | 11 | ✅ ya migrada |
| s7 Mis cosas | 11 | ✅ ya migrada |
| s8 ¿Qué comes? | 11 | ✅ ya migrada |

Las secciones 2-5 muestran hasta 7-8 palabras nuevas en los slides de
vocabulario de una sola lección (ej. `s5l4 "El tiempo libre"`: 7 palabras),
muy por encima del 1-2 objetivo. Además, varias palabras introducidas en
`w` nunca se practican en `p`/`mc` de esa lección, y aparecen palabras en
`p`/`mc` que nunca fueron introducidas (ver auditoría con
`scripts/audit_vocab.js`).

Las secciones 6-8 (creadas/migradas después del estándar) sí cumplen las
11 palabras/sección, y de hecho se construyeron usando palabras del "fondo
de palabras pendientes" generado al migrar la Sección 1
([vocab-bank-pendiente.md](vocab-bank-pendiente.md)). Este diseño aplica el
mismo patrón a las secciones 2-5.

## Objetivo

Migrar las secciones **s2, s3, s4, s5** al estándar de 11 palabras/sección
(1-2/lección), siguiendo el patrón ya validado en s6-s8: cada sección se
re-enfoca en **un único tema léxico cohesivo**, cubierto en profundidad a lo
largo de sus 7-8 lecciones, y el resto del vocabulario actual (~150 palabras)
se traslada al fondo de palabras pendientes para nutrir secciones futuras
(9+).

Los roles de cada sección dentro del Bloque 1 (según
[2026-06-09-curriculum-roadmap-design.md](2026-06-09-curriculum-roadmap-design.md))
y sus anclas gramaticales **no cambian**:

- s2: rol 2 — "Ampliar el ancla"
- s3: rol 3 — "Ancla en contexto" (presente + concordancia de género)
- s4: rol 4 — "Cruce" (negación + ancla anterior)
- s5: rol 5 — "Consolidación + Test" (sloveso "ísť" + repaso espiral)

## Asignación de temas léxicos

| Sección | Nuevo tema | Origen de las palabras | Ancla gramatical (sin cambios) |
|---|---|---|---|
| **s2** | **El cuerpo humano** | `s2l4` ya aporta 8 (hlava, oko, ucho, nos, ruka, noha, srdce, krk) + 3 nuevas (ej. ústa, vlasy, brucho) | Ampliación de byť/pronombres en nuevos contextos |
| **s3** | **La ropa + adjetivos descriptivos** | `s3l4` (8 palabras de ropa) + 2-3 de `s3l8` (pekný, veľký, nový...) + 1-2 formas de presente (mám/robím) si hacen falta para completar 11 | Presente (patrón regular) + concordancia de género de adjetivos |
| **s4** | **Las profesiones** | `s4l4` + `s4l5` (lekár, učiteľ, študent, kuchár, vodič, policajt, právnik, umelec, inžinier, povolanie, pracovať ako...) | Negación + género masc/fem de profesiones |
| **s5** | **Mi semana / los días de la semana** | Los 7 días de la semana (`pondelok`-`nedeľa`, actualmente en `s2l1`) + 4 palabras del actual `s5l1` (deň, týždeň, víkend, ísť) | Sloveso "ísť" + repaso espiral (byť, mať, negación, rád/rada/radi) |

La selección final de las 11 palabras exactas y su distribución 1-2/lección
se decide **durante la implementación de cada sección**, manteniendo el tema
y el ancla de esta tabla como restricciones.

## Plantilla de sección migrada

Cada sección migrada sigue la estructura ya validada en s1/s6-s8:

- **7 lecciones (`ls`) + 1 test (`ls[7]`, `isTest:true`)**. No cambia el
  número de lecciones.
- **`w`**: 11 palabras en total, repartidas 1-2 por lección (ej. patrón
  `2,2,1,2,1,2,1` como en s6/s7).
- **`gr.patches`**: se mantienen los mismos temas de tablas gramaticales
  (la "ancla" del bloque no cambia), pero los ejemplos/oraciones de muestra
  se reescriben para usar vocabulario del nuevo tema de la sección en lugar
  de palabras retiradas. `gr.intro` se reescribe para describir el nuevo
  tema léxico.
- **`sl`/`p`/`mc`** de cada lección: reescritos completamente para el nuevo
  tema. `mc` mantiene 3 preguntas por lección (el runtime completa el resto
  vía `buildExercises`, igual que en s1/s6-s8).
- **`tq`** (test final): 15-20 preguntas, 0 palabras nuevas, recicla
  vocabulario/gramática de toda la sección (y de secciones anteriores vía
  `concept_tag` donde aplique). Umbral de aprobación 80%.

## Fondo de palabras pendientes

`vocab-bank-pendiente.md` se amplía con las ~150 palabras retiradas de
s2-s5, agrupadas temáticamente (siguiendo el formato ya usado para la
Sección 1):

- Meses del año
- Partes del día / expresiones de tiempo (ráno, poludnie, večer, noc...)
- La ciudad (obchod, banka, nemocnica, škola, reštaurácia, hotel, letisko,
  stanica...)
- El clima y las estaciones (slnko, dážď, sneh, vietor, jar, leto, jeseň,
  zima)
- El restaurante (jedlo, nápoj, polievka, dezert, stôl, účet)
- Frases de emergencia (pomoc, polícia, záchranár, nebezpečenstvo...)
- Números 11-100
- De compras (peniaze, cena, kupovať, platiť, drahý, lacný...)
- Pasatiempos (čítať, hrať, spievať, tancovať, plávať, behať, kresliť,
  variť...)
- Palabras interrogativas (kto, čo, kde, kedy, prečo...) y direcciones
  (vľavo, vpravo, rovno...)
- Sentimientos/estados (šťastný, smutný, unavený, nervózny, hladný,
  smädný, chorý...)
- Frecuencia (vždy, často, niekedy, zriedka, nikdy, obyčajne...)
- Tiempo libre (relaxovať, stretávať sa, nakupovať, upratovať, oddychovať,
  hrať, voľný čas...)
- Conectores (ale, pretože, aj, naozaj...)

Estas palabras quedan disponibles para construir las secciones 9+, igual
que s6-s8 se construyeron con el fondo dejado por la migración de la
Sección 1.

## Orden y estrategia de implementación

Migración secuencial **s2 → s3 → s4 → s5**:

- s2 primero porque cede los "días de la semana" a s5 (conviene retirarlos
  de s2 antes de añadirlos a s5).
- s3 y s4 son independientes entre sí; se mantiene el orden numérico.
- s5 al final, ya que recibe contenido de s2.

Cada sección se implementa como **un ciclo independiente** (plan de
implementación + ejecución propio), para mantener los cambios revisables y
no sobrecargar el contexto de una sola sesión. Este documento es el spec
compartido que guía los 4 ciclos.

## Qué no cambia

- Numeración de bloques/secciones (18×5=90) y roles 1-5 dentro del bloque.
- Anclas gramaticales del Bloque 1 (pronombres, byť, presente, géneros,
  negación, ísť).
- Formatos de pregunta (`mc`, `fill`, `listen`, `type`) y modelo de datos
  (`concept_tag`, `audio`, `skippable`, `accept`, `explanation`).
- Reglas de español latinoamericano (CLAUDE.md).
- `LESSON_EXERCISE_COUNT`/`PREVIOUS_LESSON_EXERCISE_COUNT` y el mecanismo de
  `buildExercises`/`buildTestExercises` (ya ajustados según
  [2026-06-10-exercise-pacing-standard-design.md](2026-06-10-exercise-pacing-standard-design.md)).
