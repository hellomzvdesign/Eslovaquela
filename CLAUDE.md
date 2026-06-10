# Eslovaquela — kľúčové fakty o kurikule

Celá aplikácia je určená pre **španielsky hovoriacich** používateľov, ktorí sa
učia slovenčinu. Všetky vysvetlenia, popisy, UI texty a názvy kategórií
(napr. `GRAMMAR_CATEGORIES` v `index.html`) musia byť v **španielčine**.
Slovenčina sa používa len ako jazykový obsah, ktorý sa študuje (slovíčka,
vety, gramatické tabuľky).

## Pravidlo: latinoamerická španielčina (TVRDÉ PRAVIDLO)

Všetka španielčina v aplikácii (UI, vysvetlenia, príklady, preklady) musí byť
**latinoamerická španielčina**, NIE peninsulárna (kastílska zo Španielska).
Pred pridaním akéhokoľvek nového obsahu skontroluj, že nepoužívaš:

- **`vosotros` a jeho tvary** (`estáis`, `sois`, `habéis`, `tenéis`, `vais`,
  `vuestro/a`, ...). Slovenské `vy` (2. os. pl.) sa prekladá ako
  `ustedes` (množné číslo, formálne aj neformálne) alebo `usted`
  (formálne jednotné číslo). Slovesá pri `ustedes` majú tvar 3. os. pl.
  (`están`, `son`, `tienen`, `van`, ...).
- **Peninsulárnu slovnú zásobu** — namiesto nej použiť latinoamerické
  ekvivalenty, napr.:
  - `coche` → `auto` (univerzálne zrozumiteľné v LatAm; pekne sa zhoduje aj
    so slovenským `auto`)
  - `ordenador` → `computadora`
  - `móvil` → `celular`
  - `coger` (v LatAm vulgárne) → `tomar` / `agarrar`
  - `vale` (súhlas) → `dale` / `bueno` / `está bien`
  - `tío/tía` (slang pre "chlap/baba") → nepoužívať
  - `patata` → `papa`
  - `zumo` → `jugo`
  - `piso` (byt) → `departamento` / `apartamento`
  - `nevera` → `refrigerador` / `heladera`
  - `fontanero` → `plomero`
  - `billete` (cestovný lístok) → `boleto`
  - `conducir` (auto) → `manejar` (v LatAm bežnejšie ako `conducir`)
  - `calcetines` → `medias` (calcetines je výrazne španielske; medias je
    bežnejšie naprieč LatAm)

Ak si neistý, či je slovo/tvar peninsulárny, over si to a použij
latinoamerický ekvivalent.

Pred plánovaním/tvorbou akejkoľvek sekcie si over tieto čísla (časté zdroje
zámeny v minulosti):

- Kurz má **18 blokov × 5 sekcií = 90 sekcií** celkovo (NIE 4 sekcie na blok).
- Blok N obsahuje sekcie `(N-1)*5 + 1` až `N*5`. Napr. **Blok 1 = sekcie 1-5**.
- Pre danú sekciu číslo N je číslo bloku `ceil(N/5)`.
- Rola sekcie v rámci bloku (1-5):
  1. Introducir el ancla
  2. Ampliar el ancla
  3. Ancla en contexto (tema léxico)
  4. Cruce (ancla + ancla anterior)
  5. Consolidación + Test final bloku

Plný dizajn pozri [docs/superpowers/specs/2026-06-09-curriculum-roadmap-design.md](docs/superpowers/specs/2026-06-09-curriculum-roadmap-design.md).
Pred novou sekciou skontroluj aj formát gramatiky
([2026-06-10-grammar-skeleton-system-design.md](docs/superpowers/specs/2026-06-10-grammar-skeleton-system-design.md))
a formát testov
([2026-06-10-question-template-standard.md](docs/superpowers/specs/2026-06-10-question-template-standard.md)).
