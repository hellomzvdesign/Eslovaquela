# Štandard: Vysvetlenia v gramatických kartách ('g' v `sl[]`)

## Problém

Karty typu `'g'` v poli `sl` (vstupné "slidery" na začiatku lekcie) niekedy len
**porovnávajú páry viet/slov** ("toto je toto, tamto je tamto") bez toho, aby
pomenovali **pravidlo**, prečo sa tvar slova mení. Pre používateľa, ktorý
prichádza zo španielčiny — jazyka **bez pádov a bez tejto morfológie
podstatných mien** — to môže pôsobiť ako svojvoľné, nezapamätateľné zmeny.

Konkrétny príklad problému (pred opravou): karta `s6l1` "El acusativo: lo que
TIENES" ukázala dvojice `To je dom.`/`Mám dom.` a `To je izba.`/`Mám izbu.`
bez vysvetlenia, čo je vôbec "pád" a prečo sa "izba" mení na "izbu", kým "dom"
ostáva rovnaké. Podobne karta `s7l5` o pluráli ukázala 4 príklady (`dom→domy`,
`izba→izby`, `okno→okná`, `auto→autá`) bez toho, aby spomenula, že tvar plurálu
závisí od rodu.

## Pravidlo

Pri tvorbe alebo úprave **akejkoľvek `'g'` karty, ktorá zavádza nový
gramatický jav** (nie `'Repaso rápido'`/zhrnutie), musí platiť:

1. **Vysvetli PREČO, nielen ČO.** Opisný text karty musí pomenovať pravidlo
   alebo kritérium, podľa ktorého sa tvar mení (rod, životnosť, zakončenie,
   pozícia vo vete...) — nielen ukázať hotové páry príkladov, z ktorých si má
   používateľ pravidlo sám odvodiť.
2. **Ak ide o jav bez obdoby v španielčine** (pády/skloňovanie podstatných
   mien, plurál podľa rodu, životnosť...), text musí explicitne pomenovať ten
   kontrast, napr. *"Na rozdiel od španielčiny, v slovenčine sa podstatné
   mená menia podľa svojej funkcie vo vete — toto sa volá pád."* Toto
   zarámovanie stačí urobiť pri **prvom** výskyte konceptu v celom kurze
   (napr. `s6l1` pre pády); ďalšie sekcie naň môžu len nadväzovať
   ("Ako už vieš, ...").
3. **Príklady zoraď tak, aby vzor bol viditeľný hneď.** Prvý pár by mal
   demonštrovať SKUTOČNÚ ZMENU tvaru, nie výnimku/prípad bez zmeny. (Príklad
   bez zmeny môže nasledovať ako kontrast: "...a porovnaj s X, ktoré sa
   nemení.")
4. **Ak existuje viac vzorov podľa kategórie (rod, životnosť...)**, musia byť
   buď:
   - explicitne pomenované v texte ("ženský rod -a → -u, mužský/stredný sa
     nemení"), alebo
   - vizuálne odlíšené v zozname párov (napr. predpona "Mužský: ...",
     "Ženský: ...", "Stredný: ..." pri každom páre).
5. **Konjugácia slovies podľa osoby je výnimka** — toto existuje aj v
   španielčine (yo tengo / tú tienes...), takže tabuľka konjugácie nepotrebuje
   extra "prečo" rámcovanie. Ak je sloveso nepravidelné, stačí to spomenúť
   ("'ísť' je nepravidelné") — to JE to "prečo" (žiadny vzor na odvodenie,
   treba sa naučiť naspamäť).

Karty `'Repaso rápido'` (zhrnutie na konci sekcie/pred testom) sú z bodov 1-4
**vyňaté** — slúžia na opakovanie už vysvetleného, nie na prvé vysvetlenie.

## Vzťah k ostatným štandardom

- Plné, kumulatívne tabuľky a pravidlá patria do `gr.patches` /
  `gr.tips` (pozri
  [2026-06-10-grammar-skeleton-system-design.md](2026-06-10-grammar-skeleton-system-design.md))
  a zobrazujú sa v pop-upe po dokončení sekcie / v Hlavnej gramatike.
- Tento štandard sa týka **inej veci**: krátkeho `'g'` slidera, ktorý
  používateľ vidí **na začiatku lekcie**, predtým než dostane prvé cvičenie.
  Aj tento kratší text musí byť sám osebe zrozumiteľný — používateľ sa k
  pop-upu s plným vysvetlením dostane až neskôr.
