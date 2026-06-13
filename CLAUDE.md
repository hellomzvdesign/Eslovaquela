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
- **1 sekcia = presne 7 lekcií + 1 test** (`isTest:true`, 15-20 `tq` otázok,
  0 nových slov).
- **11 nových slov na sekciu**, rozdelených 1-2 na lekciu (rovnomerné tempo
  podľa [2026-06-10-exercise-pacing-standard-design.md](docs/superpowers/specs/2026-06-10-exercise-pacing-standard-design.md);
  klesajúca krivka v roadmape je zrušená). Cieľ kurzu: 90 × 11 ≈ 1000 slov
  + kompletná gramatika A1.
- Rola sekcie v rámci bloku (1-5):
  1. Introducir el ancla
  2. Ampliar el ancla
  3. Ancla en contexto (tema léxico)
  4. Cruce (ancla + ancla anterior)
  5. Consolidación + Test final bloku

Plný dizajn pozri [docs/superpowers/specs/2026-06-09-curriculum-roadmap-design.md](docs/superpowers/specs/2026-06-09-curriculum-roadmap-design.md).
Pred novou sekciou skontroluj aj formát gramatiky
([2026-06-10-grammar-skeleton-system-design.md](docs/superpowers/specs/2026-06-10-grammar-skeleton-system-design.md)),
formát testov
([2026-06-10-question-template-standard.md](docs/superpowers/specs/2026-06-10-question-template-standard.md))
a štandard vysvetlení v gramatických kartách `'g'`
([2026-06-11-grammar-card-explanation-standard.md](docs/superpowers/specs/2026-06-11-grammar-card-explanation-standard.md)) —
každá nová `'g'` karta, ktorá zavádza nový gramatický jav, musí vysvetliť
PREČO sa tvar mení (pravidlo/kritérium), nielen ukázať hotové páry príkladov.

## Pravidlá pre nové lekcie a otázky (TVRDÉ PRAVIDLÁ)

Vznikli po audite 2026-06-11, ktorý našiel desiatky otázok testujúcich
neučený obsah (dni v týždni, čísla 1–10, farby, pozdravy, sme/ste/sú —
nič z toho sa v s1–s8 neučí, hoci to staré testy predpokladali).

1. **Otázka smie testovať len obsah už ukázaný v slajdoch (`sl`)** — v tej
   istej lekcii alebo v ktorejkoľvek skoršej. Platí pre KAŽDÝ token: vety
   v `p`, správnu odpoveď aj citovanú slovenskú frázu v `mc`, a všetky
   `tq`. POZOR: sekčné gramatické tabuľky (`gr.patches`) sa odomykajú AŽ
   PO dokončení sekcie — NEPOČÍTAJÚ sa ako učenie. Frázu z `gr.patches`
   (napr. "Bolí ma...", "Mám hlad") treba pred použitím v otázke naučiť
   aj v slajde lekcie.
2. **Každé slovo vo `w` musí byť v niektorom slajde tej istej lekcie**
   (typicky `v` slajd) — `w` generuje otázky priamo.
3. **Ohýbané tvary len po naučení pravidla.** Akuzatív až od s6, plurál až
   od s7. Vyčasovaný tvar sa smie testovať, len ak bol tvar alebo jeho
   vzor (tabuľka časovania) ukázaný v slajde — učiť infinitív a testovať
   vyčasovaný tvar bez vzoru je chyba (historicky: vstávam, večeriam,
   spím, vieme, môžem).
4. **`concept_tag` v `tq` smie odkazovať len na učivo reálne naučené do
   danej sekcie.** `findReviewQuestion` v `index.html` ťahá otázky podľa
   tagu z CELÉHO kurzu (aj z neodomknutých sekcií) — tag zdieľaný medzi
   sekciami preto musí byť naučený už v tej najskoršej z nich. Žiadne
   `random_review`/`old_review` otázky na koncepty, ktoré kurikulum
   (zatiaľ) neobsahuje.
5. **Krížové odkazy "(s1)", "(s3l7)" over proti aktuálnemu kurikulu.**
   Sekcia 1 bola prepísaná — staré odkazy na pozdravy, farby, rodinu či
   čísla "zo sekcie 1" sú neplatné.
6. **Prirodzená slovenčina, žiadne kalky zo španielčiny.** "Él está bien"
   = "Má sa dobre" (NIE "On je dobre"); "¿Cómo está él/ella?" = "Ako sa
   má?" (NIE "Ako je on/ona?"); odpoveď na "Ako sa máš?" je "Mám sa
   dobre." Každú novú slovenskú vetu over, či by ju tak povedal rodený
   hovoriaci.
7. **Štruktúrna konzistencia:** rozklad `ws` v `p` musí presne
   rekonštruovať vetu `sk` (vrátane spojok a opakovaných slov — banka
   dlaždíc sa skladá z `ws`); `addRows` len do tabuľky, ktorá už vznikla
   cez `newTable` (inak sa riadky potichu zahodia); každý test sekcie
   musí mať `tq`; distraktor v `p.dis` nesmie byť identický s potrebnou
   dlaždicou.
8. **Po každej zmene kurikula spusti `node scripts/audit_questions.js`**
   a oprav všetky nové HARD a STRUCT nálezy (XSEC over podľa bodu 4;
   INFO sú netaučené distraktory — nové nepridávaj). Bonusové balíčky
   kontroluje `node scripts/audit_bonus.js`, duplicitné dlaždice
   `node scripts/audit_tiles.js`.

## Výslovnostné cvičenia (typ `speak`) — TVRDÉ PRAVIDLÁ

Hovorené cvičenie cez Web Speech API (`SpeechRecognition`). **Generuje sa
automaticky** v `addLessonItemsToPool`: každá lekcia dostane ~1 cvičenie
písania (`type`) a ~1 výslovnosti (`speak`) z náhodného slovíčka `w` —
ako spestrenie, **NIE pravidlo do každého cvičenia**. Rovnako sa
auto-generuje aj `type` (písanie) — písanie už nie je len v testoch.

Navyše sa dá pridať ručne: v lekcii poľom `sp:[['slovo','preklad',['variant',...]], ...]`
(napr. keď treba vlastné `accept`); v teste ako `tq` položka
`type:'speak'` s poľami `target` (slovenské slovo/fráza), `es` (preklad),
voliteľné `accept` a `skippable`. Auto-`speak` preskočí slová, ktoré už
majú vlastný `sp` (aby nevznikol duplikát).

1. **Cieľ (`sp`/`target`) musí byť naučený v slajde** rovnakej alebo
   skoršej lekcie — to isté pravidlo ako #1/#2. Audit kontroluje (HARD).
2. **Nikdy neuberá srdcia a je vždy preskočiteľné.** ASR sa mýli;
   netrestáme zaň. Správne/blízke = +1 do `nCorr`, nesprávne = bez
   penalizácie (retry/Continuar).
3. **Hodnotí len ZROZUMITEĽNOSŤ, nie kvalitu prízvuku.** Google ASR
   „opraví" výslovnosť na najbližšie reálne slovo (tvrdé „den" → `deň`,
   „srse" → `srdce`), takže jemné rozdiely (tvrdé/mäkké, krátke/dlhé)
   `speak` spoľahlivo nezachytí. Na tréning týchto rozdielov použiť
   radšej `listen` rozlišovanie. `speak` nevolá `postMistake`.
4. **Fonetika patrí do gramatickej kategórie `vyslovnost`**
   (`GRAMMAR_CATEGORIES`). Nové fonetické pravidlo vysvetli aj v `g`/`t`
   slajde lekcie, nielen v gramatickej tabuľke `gr.patches` (tá sa
   odomkne až po sekcii, takže sa nepočíta ako naučenie).
5. **Hodnotenie je STRIKTNÁ zhoda** prepisu s `target` alebo niektorým
   `accept` variantom — žiadna edit-distance ani auto-diakritická
   tolerancia (na rozdiel od písania, kde sa diakritika ignoruje). Bežné
   výstupy ASR (napr. bez mäkčeňa: `priatel` za `priateľ`) pridaj
   explicitne do `accept`. Formát lekciového `sp`:
   `['slovo','preklad', ['variant1', ...]]` (3. prvok je voliteľný
   zoznam akceptovaných prepisov).

Vzor dobre postavenej sekcie: **s6 (akuzatív)** — pravidlo sa vysvetlí
v `g` karte PREČO a AKO, každé nové slovo má `v` slajd, otázky používajú
len naučené tvary a test pokrýva len obsah sekcie + skutočne naučené
opakovanie.
