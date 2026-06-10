# Eslovaquela — kľúčové fakty o kurikule

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
