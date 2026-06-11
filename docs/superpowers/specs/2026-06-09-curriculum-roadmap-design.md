# Diseño: Hoja de ruta del curso A1 (90 secciones / 18 bloques)

## Objetivo

El curso completo tendrá **90 secciones** (registros `sections` en la base de
datos, cada una con varias lecciones `ls`), agrupadas en **18 bloques**
temáticos de **5 secciones** cada uno. Al terminar el curso el alumno debe:

- Conocer las ~1000 palabras más importantes del eslovaco (objetivo flexible,
  rango realista 1000-1300).
- Dominar la gramática completa de nivel A1 (y algunos puentes hacia A2:
  dativo, instrumental, condicional).
- Experimentar un aumento de dificultad **suave y uniforme** a lo largo de
  las 90 secciones.

## Estado actual (actualizado 2026-06-11)

Ya existen 8 secciones (`s1`-`s8`): el Bloque 1 completo (s1-s5) y las
secciones 1-3 del Bloque 2 (s6-s8). El estándar vigente de ritmo es
**11 palabras nuevas por sección, 7 lecciones + 1 test** (ver
[2026-06-10-exercise-pacing-standard-design.md](2026-06-10-exercise-pacing-standard-design.md)):

| Sección | Título actual | Lecciones | Palabras `w` | Estándar de 11 palabras |
|---|---|---|---|---|
| s1 | ¡Hola, Eslovaquia! | 7 + test | 11 | ✅ migrada |
| s2 | El cuerpo humano | 7 + test | 11 | ✅ migrada |
| s3 | La vida diaria | 8 + test | 57 | ❌ pendiente de migración |
| s4 | ¿Cómo estás? | 7 + test | 47 | ❌ pendiente de migración |
| s5 | Mi semana | 7 + test | 48 | ❌ pendiente de migración |
| s6 | Mi casa | 7 + test | 11 | ✅ |
| s7 | Mis cosas | 7 + test | 11 | ✅ |
| s8 | ¿Qué comes? | 7 + test | 11 | ✅ |

Gramática ya cubierta: pronombres personales (ja/ty/on/ona), verbo *byť*
(singular), géneros gramaticales, presente de indicativo (*mať*/*robiť* +
patrón *-ovať*), números 11-100, concordancia de adjetivos, palabras
interrogativas, *rád/rada/radi* (+ negación con *nerád*), negación verbal
(*ne-*/*nie som*), verbo *ísť*, acusativo singular (femenino -a→-u,
masculino animado -Ø→-a, inanimado/neutro sin cambio) y plural nominativo.

**OJO**: saludos, números 1-10, colores, días de la semana, familia y
*sme/ste/sú* todavía NO se enseñan en ninguna sección — están en el
[fondo de palabras pendientes](vocab-bank-pendiente.md) esperando ser
asignados (los días de la semana van a s5 en su migración). Ninguna
pregunta de test debe evaluarlos hasta entonces.

La migración de s3-s5 está diseñada en
[2026-06-10-secciones-2-5-migracion-design.md](2026-06-10-secciones-2-5-migracion-design.md)
(orden: s3 → s4 → s5).

## Arquitectura general (enfoque híbrido)

Cada uno de los 18 bloques tiene:

1. Un **nombre amplio y universal** (dominio de vida), no una situación
   demasiado específica.
2. Un **"ancla" gramatical** — el gran tema gramatical de A1 que ese bloque
   introduce.

Dentro de un bloque, el ancla se introduce en las secciones 1-2 y se
**profundiza en espiral** en las secciones 3-5, combinándose con anclas de
bloques anteriores en nuevos contextos. Así, sin repetir contenido idéntico,
se llenan de forma natural las ~5 tablas de gramática por sección (~450 en
total) sin generar 450 temas gramaticales distintos (algo poco realista para
A1).

## Mapa de bloques (1-18)

| # | Nombre del bloque | Dominio temático (amplio) | Ancla gramatical |
|---|---|---|---|
| 1 | Primeros pasos | Identidad, interacciones básicas | Pronombres, *byť*, presente, géneros, negación *(secciones 1-3 hechas)* |
| 2 | Mi mundo y mis cosas | Casa, pertenencias, objetos cotidianos | Acusativo (objeto directo) |
| 3 | Lugares y espacios | Ciudad, casa, naturaleza, ubicaciones | Locativo (v/na + lugar) |
| 4 | Esto es mío | Familia, descripciones, posesión | Posesivos y demostrativos |
| 5 | Quiero, puedo, debo | Deseos, capacidades, permisos | Verbos modales + infinitivo |
| 6 | Cantidades y posesión | Compras, comida, cantidades | Genitivo |
| 7 | Ayer y antes | Experiencias pasadas, relatos | Pretérito (pasado) |
| 8 | Mañana y planes | Planes, predicciones | Futuro |
| 9 | Dar y compartir | Relaciones, comunicación | Dativo |
| 10 | Herramientas y oficios | Trabajo, transporte, medios | Instrumental |
| 11 | Mi día a día | Rutinas, cuerpo, autocuidado | Verbos reflexivos (sa/si) |
| 12 | Comparando todo | Opiniones, cualidades, diferencias | Comparativo / superlativo |
| 13 | Órdenes y consejos | Instrucciones, recetas, consejos | Imperativo |
| 14 | Conectando ideas | Narración, razonamiento | Conjunciones y oraciones complejas |
| 15 | Si pudiera... | Deseos, hipótesis, cortesía | Condicional |
| 16 | De viaje | Viajes, direcciones, transporte | Preposiciones de movimiento + repaso de casos |
| 17 | Sociedad y tecnología | Vida moderna, medios, entorno | Repaso en espiral de todos los casos |
| 18 | Repaso final: todo en eslovaco | Integración, escenarios reales | Repaso integral |

## Curva de ritmo de vocabulario

> **⚠️ SUPERSEDIDA (2026-06-10).** Esta curva decreciente fue sustituida por
> el ritmo **uniforme de 11 palabras nuevas por sección** (90 × 11 = 990 ≈
> objetivo de ~1000), definido en
> [2026-06-10-exercise-pacing-standard-design.md](2026-06-10-exercise-pacing-standard-design.md).
> Se conserva la tabla solo como registro histórico — NO usarla para
> planificar secciones nuevas.

| Bloques | Secciones | Palabras nuevas / sección (promedio) | Subtotal |
|---|---|---|---|
| 1 (secciones 1-5) | 5 | ~50 *(1-3 ya hechas: 160 en total)* | ~260 |
| 2-3 (secciones 6-15) | 10 | ~30 | ~300 |
| 4-6 (secciones 16-30) | 15 | ~18 | ~270 |
| 7-10 (secciones 31-50) | 20 | ~10 | ~200 |
| 11-14 (secciones 51-70) | 20 | ~7 | ~140 |
| 15-18 (secciones 71-90) | 20 | ~5 (mayormente reciclaje) | ~100 |
| **Total** | **90** | | **~1270** |

La curva es decreciente y sin saltos bruscos: los temas con "conjuntos
cerrados" de vocabulario (familia, colores, comida, casa, cuerpo, ropa) se
cubren pronto con más palabras nuevas; más adelante predomina la
profundización gramatical y el reciclaje de vocabulario ya visto.

## Plantilla interna de cada bloque (5 secciones)

| Sección del bloque | Rol | Tablas de gramática (de ~5) |
|---|---|---|
| 1 | Introducir el ancla — formas/casos más comunes | 3 tablas nuevas del ancla + 2 de repaso (anclas anteriores en nuevo contexto) |
| 2 | Ampliar el ancla — más formas/personas/géneros | 2-3 nuevas + 2 de repaso |
| 3 | Ancla en contexto — combinarla con el tema léxico de la sección | 2 nuevas (excepciones/matices) + 3 de repaso |
| 4 | Cruce — ancla actual + ancla anterior más relevante juntas | 1-2 nuevas + 3-4 de repaso/combinación |
| 5 | Consolidación + Test — vocabulario reciclado, repaso mixto, lección de test final | 0-1 nuevas + 4-5 de repaso de varias anclas |

El **vocabulario por sección** es de 11 palabras nuevas (estándar de ritmo),
repartidas entre las **7 lecciones** de la sección a razón de 1-2 por
lección; la 8ª unidad es siempre el test y no introduce palabras nuevas.

## Cómo usar este documento

Antes de crear contenido para una nueva sección (sección N, bloque
`ceil(N/5)`):

1. Consultar la fila del bloque correspondiente para el **nombre**, **dominio
   temático** y **ancla gramatical**.
2. El número objetivo de palabras nuevas es siempre **11 por sección**
   (1-2 por lección), según el
   [estándar de ritmo](2026-06-10-exercise-pacing-standard-design.md).
3. Consultar la plantilla interna (sección 1-5 dentro del bloque) para saber
   qué proporción de tablas de gramática deben ser nuevas vs. repaso, y qué
   anclas anteriores conviene combinar.

Este documento es la referencia viva para mantener la progresión uniforme;
debe consultarse y, si es necesario, refinarse cada vez que se planifique un
nuevo bloque o sección.
