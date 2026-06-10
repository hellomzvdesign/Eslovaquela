# Štandard: Šablóna 25 testových otázok na sekciu

## Cieľ

Každá z 90 sekcií kurzu (pozri
[2026-06-09-curriculum-roadmap-design.md](2026-06-09-curriculum-roadmap-design.md))
bude mať na konci test/opakovací blok s **presne 25 otázkami**, zložený podľa
pevných pravidiel nižšie. Cieľ je rovnomerná kombinácia nového učiva,
opakovania a personalizovanej nápravy chýb.

## Zloženie 25 otázok

| # | Kategória (`category`) | Počet | Pôvod otázok |
|---|---|---|---|
| 1 | `new` | 15 | Statický obsah, autorsky napísaný pre danú sekciu (gramatika + slovná zásoba) |
| 2 | `old_review` | 5 | Statický obsah — nové vety/kontexty, ale gramatika z predošlých sekcií |
| 3 | `random_review` | 3 | Statický obsah — doslovne recyklované otázky zo starších sekcií |
| 4 | `error_pattern` | 2 | **Dynamické** — vyberané za behu z histórie chýb konkrétneho študenta (pozri nižšie) |

**Poradie:** Kategórie určujú len *zloženie* 25 otázok. Finálne poradie sa pri
generovaní testu **náhodne premieša** (shuffle) — otázky `error_pattern` teda
**nie sú vždy posledné dve**, ale objavia sa na náhodnej pozícii medzi
ostatnými 23.

## Formáty otázok (`type`)

- **`mc`** — výber z možností
- **`fill`** — doplňovanie slova/frázy
- **`listen`** 🎧 — prehrá sa audio (TTS), vždy s tlačidlom **„Preskočiť"** (`skippable: true`)
- **`type`** ⌨️ — voľné písanie, vyhodnotenie s toleranciou preklepov (fuzzy match)

Tieto formáty sa kombinujú naprieč všetkými 4 kategóriami, nie sú viazané na
konkrétnu kategóriu.

## Dátový model jednej otázky

```json
{
  "id": "s1t-01",
  "category": "new",
  "type": "mc",
  "skill": "vocab",
  "concept_tag": "greetings_formal_informal",
  "question": "Ako sa povie 'Hola' (informálne)?",
  "options": ["Ahoj", "Dobrý deň", "Dovidenia", "Prosím"],
  "answer": 0,
  "audio": null,
  "skippable": false,
  "accept": [],
  "explanation": "'Ahoj' = Hola (informal)."
}
```

- `concept_tag` má **každá** otázka, ktorá testuje gramatiku alebo opakovane
  problematickú slovnú zásobu. Slúži ako kľúč na párovanie s históriou chýb
  študenta.
- `audio` (text pre TTS) a `skippable` sa používajú len pre `type: "listen"`.
- `accept` obsahuje alternatívne správne odpovede (preklepy, diakritika) pre
  `type: "type"`.

## Personalizácia kategórie `error_pattern`

Tieto 2 otázky sa **negenerujú vopred ako pevný obsah sekcie** — vyberá ich
runtime na základe konceptov, v ktorých sa daný študent najčastejšie mýli.

### Dátový model: história chýb

```sql
CREATE TABLE user_mistakes (
  username text REFERENCES users(username),
  concept_tag text NOT NULL,
  wrong_count integer NOT NULL DEFAULT 0,
  last_wrong_at bigint NOT NULL,
  PRIMARY KEY (username, concept_tag)
);
```

Pri každej nesprávnej odpovedi na otázku s `concept_tag` sa `wrong_count`
inkrementuje a `last_wrong_at` aktualizuje.

### Algoritmus výberu (pri generovaní testu)

1. Nájdi pre študenta 2 koncepty s najvyšším `wrong_count`
   (tie-break: najnovší `last_wrong_at`).
2. Pre každý koncept vyber zo **globálnej banky otázok** (naprieč všetkými
   sekciami) **NOVÚ** otázku s rovnakým `concept_tag`, ktorú študent v
   poslednom čase nedostal — t.j. iná veta/slovo, rovnaký gramatický/slovný
   princíp. Toto vyžaduje, aby ku každému `concept_tag` existovalo viac
   variantov otázok v rámci celého kurzu.
3. **Fallback** (študent nemá ešte žiadnu históriu chýb, napr. úplne prvý
   test): použijú sa 2 statické **generické A1 chyby** pripravené autorom pre
   danú sekciu (rovnaký formát, `category: "error_pattern"`,
   `concept_tag` nastavený na typický začiatočnícky problém danej sekcie).

### Dôsledok pre autorov obsahu

- Každá sekcia obsahuje aj **2 fallback otázky** typu `error_pattern`
  (generické A1 chyby) — tie sa použijú len pri prvom teste / bez histórie.
- Pri písaní otázok kategórií `new` a `old_review` je užitočné pokryť rovnaké
  `concept_tag`y vo viacerých variantoch naprieč sekciami, aby mal runtime z
  čoho vyberať pri opakovaní.

## Vzorová sekcia: Sekcia 1 „¡Hola, Eslovaquia!" — TEST (25 otázok)

*(vychádza z existujúceho obsahu `s1l1`–`s1l7`: pozdravy, identita, čísla 1-10,
farby, rodina, zvieratá/predmety, jedlo)*

### 🆕 `new` (1–15)

| # | Typ | Otázka | Odpoveď | concept_tag |
|---|---|---|---|---|
| 1 | mc | ¿Cómo se dice "Hola" (informal)? → Ahoj / Dobrý deň / Dovidenia / Prosím | **Ahoj** | greetings_formal_informal |
| 2 | fill | „___, prosím." (Gracias, por favor) | **Ďakujem** | basic_phrases |
| 3 | mc | ¿Qué significa "Áno"? → No / Sí / Adiós / Por favor | **Sí** | yes_no |
| 4 | type ⌨️ | Napíš po slovensky „mujer" | **žena** (akceptuj „zena") | family_people_vocab |
| 5 | mc | Ako povieš „Yo soy Martin"? → On je / Ja som / Ty si / My sme | **Ja som Martin** | byt_som_si_je |
| 6 | listen 🎧 | *(audio: „Dobrý deň")* Čo si počul/-a? | **Dobrý deň** | greetings_formal_informal |
| 7 | mc | Aké číslo je „päť"? → 3 / 7 / 5 / 9 | **5** | numbers_1_10 |
| 8 | fill | „jeden, dva, ___, štyri" | **tri** | numbers_1_10 |
| 9 | mc | Ako sa povie „verde"? → červená / zelená / žltá / modrá | **zelená** | colors |
| 10 | type ⌨️ | Napíš po slovensky „abuela" | **babička** | family_people_vocab |
| 11 | mc | Čo znamená „brat"? → hermana / hermano / hijo / hija | **hermano** | family_people_vocab |
| 12 | listen 🎧 | *(audio: „Pes je doma")* Vyber preklad | **El perro está en casa** | byt_som_si_je |
| 13 | mc | Ako sa povie „agua"? → mlieko / káva / voda / čaj | **voda** | food_drinks |
| 14 | fill | „Čierna a ___" (negro y blanco) | **biela** | colors |
| 15 | mc | Čo je „krajina"? → nombre / amigo / país / chico | **país** | family_people_vocab |

### 🔁 `old_review` (16–20)

| # | Typ | Otázka | Odpoveď | concept_tag |
|---|---|---|---|---|
| 16 | mc | „My ___ Slováci." (somos) → som / si / je / sme | **sme** | byt_som_si_je |
| 17 | type ⌨️ | Napíš slovenský preklad: „Él está en casa" | **On je doma** | byt_som_si_je |
| 18 | mc | „Vy ___ tu." (estáis) → sme / ste / sú / je | **ste** | byt_som_si_je |
| 19 | fill | „___ priateľ a sestra." (Mi hermano y hermana) | **Môj** | possessives_basic |
| 20 | mc | Aký pozdrav použiješ pri stretnutí s lekárom (formálne)? → Ahoj / Čau / Dobrý deň / Servus | **Dobrý deň** | greetings_formal_informal |

### 🎲 `random_review` (21–23) — doslovne z predošlých lekcií

| # | Typ | Otázka | Odpoveď | concept_tag |
|---|---|---|---|---|
| 21 | mc | ¿Cuál es el saludo FORMAL? → Ahoj / Čau / Dobrý deň / Servus *(z s1l1)* | **Dobrý deň** | greetings_formal_informal |
| 22 | mc | ¿Cómo se dice "Yo soy"? → On je / Ja som / Ty si / My sme *(z s1l2)* | **Ja som** | byt_som_si_je |
| 23 | mc | ¿Cómo se dice "ocho"? → sedem / osem / deväť / šesť *(z s1l3)* | **osem** | numbers_1_10 |

### ⚠️ `error_pattern` — fallback (24–25)

*Číslovanie 1-25 v tejto šablóne je len pre prehľadnosť podľa kategórie —
v reálnom teste bude poradie všetkých 25 otázok náhodne premiešané, takže
tieto dve sa môžu objaviť kdekoľvek. Použijú sa len ak študent nemá ešte
históriu chýb. Inak ich nahradí runtime novými otázkami z
najproblematickejších `concept_tag`ov daného študenta.*

| # | Typ | Otázka | Odpoveď | concept_tag |
|---|---|---|---|---|
| 24 | mc | Ktorá veta je SPRÁVNA? → „Dobrý deň, pán doktor." / „Ahoj, pán doktor." | **„Dobrý deň, pán doktor."** | greetings_formal_informal |
| 25 | type ⌨️ | Oprav chybu: „Ja je Martin." | **Ja som Martin** | byt_som_si_je |

## Použitie tejto šablóny

Pri tvorbe testu pre sekciu N:

1. Napíš 23 statických otázok (15 `new` + 5 `old_review` + 3 `random_review`)
   podľa rozdelenia vyššie, každú s `concept_tag`om.
2. Napíš 2 fallback otázky `error_pattern` pokrývajúce typické A1 chyby danej
   sekcie/úrovne.
3. Over, že kľúčové `concept_tag`y (najmä gramatické javy) majú vo viacerých
   sekciách aspoň 2-3 rôzne varianty otázok — to umožní runtime
   personalizáciu kategórie `error_pattern` pre pokročilejších študentov.
