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

## Estado actual

Ya existen 3 secciones (`s1`, `s2`, `s3`), que son las **secciones 1-3 del
Bloque 1**:

| Sección | Título actual | Lecciones | Palabras nuevas |
|---|---|---|---|
| s1 | ¡Hola, Eslovaquia! | 7 + test | 54 |
| s2 | El mundo a tu alrededor | 7 + test | 49 |
| s3 | La vida diaria | 8 + test | 57 |

Gramática ya cubierta: pronombres personales, verbo *byť*, géneros
gramaticales, saludos formales/informales, números 1-100, presente de
indicativo (patrones regulares + *mať*/*robiť*), concordancia de adjetivos,
palabras interrogativas, *rád/rada/radi*.

Al Bloque 1 le faltan las **secciones 4 y 5**.

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

El **vocabulario por sección** sigue la curva anterior, repartido entre las
~7-8 lecciones de la sección (en bloques avanzados, cada lección introduce
solo 1-3 palabras nuevas, frente a las 6-8 actuales).

## Cómo usar este documento

Antes de crear contenido para una nueva sección (sección N, bloque
`ceil(N/5)`):

1. Consultar la fila del bloque correspondiente para el **nombre**, **dominio
   temático** y **ancla gramatical**.
2. Consultar la curva de vocabulario para el **número objetivo de palabras
   nuevas** de esa sección.
3. Consultar la plantilla interna (sección 1-5 dentro del bloque) para saber
   qué proporción de tablas de gramática deben ser nuevas vs. repaso, y qué
   anclas anteriores conviene combinar.

Este documento es la referencia viva para mantener la progresión uniforme;
debe consultarse y, si es necesario, refinarse cada vez que se planifique un
nuevo bloque o sección.
