# Diseño: Sistema modular de gramática (kostra + pop-up incremental)

## Problema actual

La pantalla "Gramática" (`sc-grammar` en `index.html`) muestra una pestaña por
**sección** desbloqueada (`renderGrammar`), y cada sección tiene su propio
bloque autocontenido `sections.grammar_ref` = `{intro, tables:[...], tips}`.

Esto genera dos problemas a medida que crecen las 90 secciones:

1. **Navegación confusa**: para encontrar "todo sobre los meses" o "todo sobre
   el acusativo", el alumno tiene que recordar en qué sección apareció y
   recorrer pestañas nombradas por secciones, no por temas gramaticales.
2. **Sin crecimiento incremental**: si una tabla (p. ej. "Meses del año")
   necesita ampliarse más adelante (más formas, más casos), no hay mecanismo
   para "añadir filas a una tabla ya existente" — cada sección es una isla.

## Objetivo

1. Reorganizar la gramática en una **"Hlavná gramatika"** navegable por
   **categoría gramatical** (no por sección), donde las tablas se acumulan
   progresivamente a medida que se desbloquean secciones.
2. Mostrar, justo al completar una sección, un **pop-up temporal** con
   *solo* la gramática nueva de esa sección (tablas nuevas y/o filas añadidas
   a tablas existentes).
3. Definir un **formato de salida** que el asistente usará después de cada
   lección/sección, para que el contenido se pueda copiar directamente al
   pop-up y, a la vez, se sepa exactamente dónde encaja en la Hlavná
   gramatika.

## Modelo de datos

### Esqueleto estático de categorías (`GRAMMAR_CATEGORIES`)

Nueva constante en `index.html`, define las pestañas de la Hlavná gramatika.
Solo contiene `id`, emoji y título — es metadato de presentación, no datos de
contenido:

```js
const GRAMMAR_CATEGORIES = [
  {id:'zamena',        em:'🙋', title:'Pronombres y posesivos'},
  {id:'byt-pritomny',  em:'🟢', title:'Ser/estar y presente'},
  {id:'slovesa-casy',  em:'⏳', title:'Modos y tiempos verbales'},
  {id:'pady',          em:'📐', title:'Casos y sustantivos'},
  {id:'pridavne',      em:'🎨', title:'Adjetivos'},
  {id:'cisla-cas',     em:'🔢', title:'Números, hora y calendario'},
  {id:'otazky-spojky', em:'❓', title:'Preguntas y conjunciones'},
  {id:'predlozky',     em:'🧭', title:'Preposiciones y dirección'},
  {id:'frazy',         em:'🤝', title:'Frases y cortesía'}
];
```

Una pestaña solo se muestra si al menos una tabla de esa categoría ya está
desbloqueada.

### `sections.grammar_ref` reestructurado

De `{intro, tables:[...], tips}` pasa a:

```js
gr: {
  intro: '...',     // texto narrativo de la sección, se muestra en el pop-up
  patches: [ ... ], // ver abajo
  tips: ['...']     // se muestra solo en el pop-up ("Kľúčové body")
}
```

Cada elemento de `patches` es uno de dos tipos:

- **`newTable`** — introduce una tabla nueva en una categoría:
  ```js
  {op:'newTable', category:'pady', tableId:'genitiv',
   title:'Genitív (2. pád)', note:'...' /* opcional */,
   h:['Rod','Nominatív','Genitív sg.'],
   r:[['Mužský','dom','domu'], ...]}
  ```
- **`addRows`** — añade filas a una tabla ya existente (misma `category` +
  `tableId`, mismas columnas `h` que la tabla original):
  ```js
  {op:'addRows', category:'cisla-cas', tableId:'cislovky-11-100',
   r:[['200','dvesto','1000','tisíc']]}
  ```

No se contempla `addColumns` (decisión consciente, ver "Decisiones"). Si una
tabla necesita una dimensión nueva (p. ej. un caso gramatical más), se crea
como tabla nueva (`newTable`) en la misma categoría, en vez de añadir columnas
a una existente.

### Función de fusión (Hlavná gramatika)

Función cliente en `index.html` que recorre las secciones desbloqueadas en
orden y construye, por categoría, la lista de tablas con sus filas
acumuladas:

```js
function buildGrammarMap(unlockedSectionIds) {
  const map = {};   // category -> { tableId -> {title, note, h, r} }
  const order = {}; // category -> [tableId en orden de primera aparición]
  C.filter(sec => unlockedSectionIds.includes(sec.id)).forEach(sec => {
    (sec.gr.patches || []).forEach(p => {
      map[p.category] = map[p.category] || {};
      order[p.category] = order[p.category] || [];
      if (p.op === 'newTable') {
        map[p.category][p.tableId] = {title: p.title, note: p.note, h: p.h, r: [...p.r]};
        order[p.category].push(p.tableId);
      } else if (p.op === 'addRows') {
        const t = map[p.category][p.tableId];
        if (t) t.r.push(...p.r);
      }
    });
  });
  return {map, order};
}
```

El orden de las tablas dentro de una categoría es el orden de **primera
aparición** entre las secciones desbloqueadas — no hace falta un orden
predefinido aparte.

## Kostra: categorías y tablas planificadas

Tabla de referencia para autoría de contenido. ✅ = ya existe en s1–s3 (se
migra). El resto indica el bloque (1-18, ver
`2026-06-09-curriculum-roadmap-design.md`) donde probablemente aparecerá por
primera vez. La lista no es cerrada: pueden añadirse nuevos `tableId` a una
categoría cuando un bloque futuro lo requiera, especialmente en **Frázy a
zdvorilosť**, que crecerá con frases temáticas de cada bloque (saludos,
supervivencia, cortesía, instrucciones, etc.).

| Categoría (id) | tableId | Título | Origen |
|---|---|---|---|
| 🙋 Pronombres y posesivos (`zamena`) | `zamena-osobne` | Osobné zámená | ✅ s1 |
| | `zamena-privlastnovacie` | Privlastňovacie zámená (môj/tvoj/jeho...) | Block 4 |
| | `zamena-ukazovacie` | Ukazovacie zámená (tento/tá/to...) | Block 4 |
| 🟢 Ser/estar y presente (`byt-pritomny`) | `byt` | Sloveso byť | ✅ s1 |
| | `pritomny-vzory` | Vzory prítomného času (mať/robiť/-ovať...) | ✅ s3, +addRows Bloky 2-5 |
| | `negacia` | Zápor (nie/ne-) | Block 1 |
| ⏳ Modos y tiempos verbales (`slovesa-casy`) | `modalne-infinitiv` | Modálne slovesá + infinitív | Block 5 |
| | `minuly-cas` | Minulý čas | Block 7 |
| | `buduci-cas` | Budúci čas | Block 8 |
| | `zvratne-slovesa` | Zvratné slovesá (sa/si) | Block 11 |
| | `imperativ` | Rozkazovací spôsob | Block 13 |
| | `kondicional` | Podmieňovací spôsob | Block 15 |
| 📐 Casos y sustantivos (`pady`) | `rody` | Rody podstatných mien | ✅ s1 |
| | `mnozne-cislo` | Množné číslo | Block 2 |
| | `akuzativ` | Akuzatív (4. pád) | Block 2 |
| | `lokal` | Lokál (6. pád) | Block 3 |
| | `genitiv` | Genitív (2. pád) | Block 6 |
| | `dativ` | Datív (3. pád) | Block 9 |
| | `instrumental` | Inštrumentál (7. pád) | Block 10 |
| | `prehlad-padov` | Prehľad skloňovania (vzorové slovo) | Block 2, +addRows Bloky 6,9,10,16-17 |
| 🎨 Adjetivos (`pridavne`) | `pridavne-zhoda` | Zhoda s podstatným menom (rod) | ✅ s3 |
| | `pridavne-sklonovanie` | Skloňovanie príd. mien podľa pádov | crece junto con `pady` |
| | `komparativ` | Stupňovanie (komparatív/superlatív) | Block 12 |
| 🔢 Números, hora y calendario (`cisla-cas`) | `cislovky-1-10` | Číslovky 1-10 | ✅ s1 |
| | `cislovky-11-100` | Číslovky 11-100 | ✅ s3, +addRows Block 6 (100+) |
| | `dni-tyzdna` | Dni v týždni | ✅ s2 |
| | `mesiace` | Mesiace v roku | ✅ s2 |
| | `rocne-obdobia` | Ročné obdobia | ✅ s2 |
| | `casove-vyrazy` | Časové výrazy (dnes/zajtra/včera) | ✅ s2, +addRows Bloky 7-8 |
| | `radove-cislovky` | Radové číslovky | Block 8 |
| | `hodiny` | Hovorenie o čase | Block 8 |
| ❓ Preguntas y conjunciones (`otazky-spojky`) | `opytovacie-zamena` | Opytovacie slová | ✅ s3 |
| | `spojky` | Spojky (a/ale/alebo/lebo) | Block 14 |
| | `zlozite-vety` | Vedľajšie vety (že/keď/aby) | Block 14 |
| 🧭 Preposiciones y dirección (`predlozky`) | `predlozky-miesto` | Predložky miesta | Block 3 |
| | `prehlad-predlozky-pady` | Prehľad predložka→pád | Block 3, +addRows Bloky 16-17 |
| 🤝 Frases y cortesía (`frazy`) | `pozdravy` | Formálne vs. neformálne | ✅ s1 |
| | `prezivanie` | Frázy na prežitie | ✅ s2 |
| | `rad-rada-radi` | rád/rada/radi | ✅ s3 |

## Cambios de UI

### Hlavná gramatika (`sc-grammar`, `renderGrammar`)

- Las pestañas pasan de "una por sección desbloqueada" a "una por categoría
  con contenido desbloqueado" (`GRAMMAR_CATEGORIES` filtrado).
- Para la categoría activa, se renderizan todas sus tablas (`buildGrammarMap`)
  en orden de primera aparición, con sus filas acumuladas.
- `gr.intro` y `gr.tips` ya no se muestran aquí (se movieron al pop-up).

### Pop-up "Nová gramatika" (nuevo)

- Se muestra automáticamente en la pantalla `sc-complete` cuando
  `gramUnlocked === true` (justo después del confetti), como overlay modal.
- Contenido:
  - Cabecera con `gr.intro` de la sección recién completada.
  - Por cada patch de esa sección:
    - `newTable` → tabla completa (título, nota, filas).
    - `addRows` → "📌 Doplnené do: `<categoría> → <título de tabla>`" + mini
      tabla solo con las filas nuevas. El título de la tabla se obtiene del
      `buildGrammarMap` ya construido (incluye la sección actual), no se
      duplica en el patch.
  - Pie con `gr.tips` ("🔑 Kľúčové body").
  - Botón de cierre. El banner existente "Gramatika odomknutá" permanece como
    acceso directo a la Hlavná gramatika completa.

## Migración de s1-s3

Todas las tablas existentes en `gr.tables` se convierten en patches
`op:'newTable'`, sin reformatear su contenido (columnas/filas se mantienen
igual). Ajuste menor al esqueleto: `dni-mesiace` se divide en dos slots
(`dni-tyzdna` y `mesiace`), ya que s2 ya las tiene como tablas separadas.

| Tabla original (sección) | → categoría / tableId |
|---|---|
| s1 Pronombres personales | `zamena` / `zamena-osobne` |
| s1 Verbo byť | `byt-pritomny` / `byt` |
| s1 Saludos formal/informal | `frazy` / `pozdravy` |
| s1 Números 1–10 | `cisla-cas` / `cislovky-1-10` |
| s1 Géneros gramaticales | `pady` / `rody` |
| s2 Días de la semana | `cisla-cas` / `dni-tyzdna` |
| s2 Meses del año | `cisla-cas` / `mesiace` |
| s2 Las estaciones | `cisla-cas` / `rocne-obdobia` |
| s2 Expresiones de tiempo | `cisla-cas` / `casove-vyrazy` |
| s2 Frases de supervivencia | `frazy` / `prezivanie` |
| s3 Verbos en presente — patrones | `byt-pritomny` / `pritomny-vzory` |
| s3 Números 11–100 | `cisla-cas` / `cislovky-11-100` |
| s3 Adjetivos: concordancia de género | `pridavne` / `pridavne-zhoda` |
| s3 Palabras interrogativas | `otazky-spojky` / `opytovacie-zamena` |
| s3 rád/rada/radi | `frazy` / `rad-rada-radi` |

Tras la migración, 7 de 9 categorías tienen contenido; `slovesa-casy` y
`predlozky` aparecerán cuando se añada contenido de Bloques 5+ / 3+.

No se ejecuta el reseed contra producción como parte de esta migración —
`seed.js` se actualiza y queda listo para que el usuario ejecute
`npm run reseed` cuando lo decida.

## Plantilla de salida tras cada sección

A partir de ahora, después de generar el contenido de una sección, el
asistente entrega tres bloques:

**A) `gr.patches`** — bloque de código JS listo para pegar en `seed.js`,
siguiendo exactamente el formato `newTable` / `addRows` definido arriba.

**B) "Kam to zapadá"** — tabla markdown: categoría → tabla → tipo de cambio
(🆕 tabla nueva / +N filas).

**C) "Náhľad pop-upu"** — vista previa en markdown de exactamente lo que verá
el alumno en el pop-up (cabecera `intro`, tablas nuevas completas, bloques
"Doplnené do: ..." con las filas nuevas, y los `tips` al final).

Ejemplo completo de los tres bloques (Sección 6 hipotética, ancla Genitivo):

```js
gr:{
  intro:'La Sección 6 introduce el genitivo y amplía las cantidades y compras.',
  patches:[
    {op:'newTable', category:'pady', tableId:'genitiv',
     title:'Genitív (2. pád)', note:'Genitív sa používa po číslovkách 5+ a po niektorých predložkách (bez, od, do).',
     h:['Rod','Nominatív','Genitív sg.'],
     r:[['Mužský','dom','domu'],['Ženský','žena','ženy'],['Stredný','mesto','mesta']]},
    {op:'addRows', category:'pady', tableId:'prehlad-padov',
     r:[['Genitív','Koľko stojí ten dom?','Koľko stojí ten dom.','— bez domu']]},
    {op:'addRows', category:'cisla-cas', tableId:'cislovky-11-100',
     r:[['200','dvesto','1000','tisíc']]}
  ],
  tips:["🔑 Po číslach 5 a viac sa podstatné meno dáva do genitívu plurálu.","🔑 Predložky 'bez', 'od', 'do' vyžadujú genitív."]
}
```

| Kategória | Tabuľka | Zmena |
|---|---|---|
| 📐 Casos y sustantivos | Genitív (2. pád) | 🆕 nová tabuľka |
| 📐 Casos y sustantivos | Prehľad skloňovania | +1 riadok (genitív) |
| 🔢 Números, hora y calendario | Číslovky 11–100 | +1 riadok (200, 1000) |

> 🎉 **Nová gramatika zo Sekcie 6**
> *La Sección 6 introduce el genitivo y amplía las cantidades y compras.*
>
> **Genitív (2. pád)**
> *Genitív sa používa po číslovkách 5+ a po niektorých predložkách (bez, od, do).*
> | Rod | Nominatív | Genitív sg. |
> |---|---|---|
> | Mužský | dom | domu |
> | Ženský | žena | ženy |
> | Stredný | mesto | mesta |
>
> 📌 *Doplnené do: Casos y sustantivos → Prehľad skloňovania*
> | ... nový riadok ... |
>
> 📌 *Doplnené do: Números, hora y calendario → Číslovky 11–100*
> | 200 | dvesto | 1000 | tisíc |
>
> 🔑 Kľúčové body
> - Po číslach 5 a viac sa podstatné meno dáva do genitívu plurálu.
> - Predložky 'bez', 'od', 'do' vyžadujú genitív.

## Decisiones de diseño

- **Sin `addColumns`**: se evaluó permitir añadir columnas a tablas
  existentes (p. ej. ampliar una tabla de declinación con un caso nuevo como
  columna), pero requiere claves de fila estables y complica la fusión. Se
  decidió que cada caso/dimensión nueva sea una tabla nueva (`newTable`) en la
  misma categoría; el crecimiento incremental real se hace con `addRows`.
- **`prehlad-padov`** es la tabla que mejor ejemplifica `addRows`: empieza con
  un par de filas (nominativo/acusativo de una palabra de muestra) y gana una
  fila nueva cada vez que se introduce un caso adicional.
- **Migración conservadora**: las tablas de números (`cislovky-1-10` /
  `cislovky-11-100`) no se fusionan en la migración porque tienen formatos de
  columna distintos (3 vs. 4 columnas). Quedan como dos tablas separadas en la
  misma categoría.
