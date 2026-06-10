# Migración de la Sección 2 a "El cuerpo humano" — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescribir la Sección 2 (`s2` en `data/curriculum.js`) del modelo antiguo (~49 palabras nuevas) al estándar de 11 palabras/sección (1-2 por lección), re-enfocada en el tema "El cuerpo humano", siguiendo el spec [2026-06-10-secciones-2-5-migracion-design.md](../specs/2026-06-10-secciones-2-5-migracion-design.md).

**Architecture:** Edición directa de `data/curriculum.js` (sección `s2`: bloque `gr` + 7 lecciones `s2l1`-`s2l7` + `s2test`), siguiendo la estructura ya validada en `s1`/`s6`. Las ~38 palabras retiradas se documentan en `docs/superpowers/specs/vocab-bank-pendiente.md` para reuso futuro.

**Tech Stack:** JavaScript (CommonJS module, `data/curriculum.js`), Node.js para verificación (`node -e "require(...)"` y `scripts/audit_vocab.js`).

---

## Contexto importante para quien ejecute este plan

- `data/curriculum.js` exporta `module.exports = { CURRICULUM }`. La sección `s2` actual ocupa las líneas 159-309 (puede variar tras ediciones previas — usa los `old_string` de cada tarea, que son únicos en el archivo, no números de línea).
- El runtime (`index.html`, función `buildGrammarMap`) construye la "Gramática" acumulada iterando `CURRICULUM` en orden y aplicando `gr.patches`:
  - `{op:'newTable', category, tableId, ...}` crea una tabla.
  - `{op:'addRows', category, tableId, r}` añade filas a una tabla EXISTENTE (creada por una sección anterior). Si la tabla no existe, la operación es un no-op silencioso (sin error, pero la fila se pierde).
- **Dependencia crítica resuelta en este plan:** la tabla `{category:'frazy', tableId:'prezivanie'}` (Frases de supervivencia) creada actualmente por `s2` recibe `addRows` desde `s6` (línea ~853) y `s7` (línea ~1019). La nueva `s2` **debe seguir creando esta tabla con el mismo `tableId:'prezivanie'`** (contenido sin cambios) para no romper esas dos secciones. Temáticamente encaja bien: incluye la frase "Bolí ma [parte]." (Me duele [parte]), que es el patrón gramatical central del nuevo tema.
- **Dependencia NO resuelta aquí (fuera de alcance, para el ciclo de `s5`):** la tabla `{category:'cisla-cas', tableId:'dni-tyzdna'}` (Días de la semana), también creada actualmente por `s2`, recibe `addRows` desde `s5` (línea ~670). Como `s2` cede los días de la semana a `s5` (ver spec), la nueva `s2` **NO** debe crear esta tabla — pero eso significa que cuando se migre `s5`, su patch para `dni-tyzdna` deberá cambiar de `addRows` a `newTable`. **Anota esto explícitamente al iniciar el ciclo de `s5`** (Tarea 6 de este plan deja una nota en el spec de migración).
- Para evitar colisión con la tabla `{category:'pady', tableId:'rody'}` que `s6` ya crea (titulada "Géneros gramaticales (repaso)"), la nueva tabla de géneros de `s2` usa un `tableId` distinto: `'rody-zaklady'`. Así `s6` puede seguir llamándose "(repaso)" sin tocar nada de `s6`.
- Las 11 palabras canónicas de la nueva `s2`: `hlava` (f), `oko` (n), `ucho` (n), `nos` (m), `ruka` (f), `noha` (f), `srdce` (n), `krk` (m), `zub` (m), `tvár` (f, excepción), `brucho` (n) — distribución 1-2/lección: `2,2,1,2,1,2,1`.
- Reglas de español latinoamericano (CLAUDE.md) ya están aplicadas en todo el contenido nuevo de este plan.

---

### Task 1: Reescribir el bloque `gr` de `s2` (intro, patches, tips)

**Files:**
- Modify: `data/curriculum.js` (bloque `gr:` de la sección `s2`, líneas ~160-185)

- [ ] **Step 1: Reemplazar el bloque `gr` completo de `s2`**

Busca este bloque exacto (el `gr:` actual de `s2`, desde `gr:{` hasta el `},` que cierra `gr`, justo antes de `ls:[`):

```javascript
gr:{
  intro:'La Sección 2 amplía tu eslovaco con tiempo, ciudad, cuerpo humano, clima, restaurante y frases de supervivencia.',
  patches:[
    {op:'newTable', category:'cisla-cas', tableId:'dni-tyzdna',
     title:'Días de la semana',note:'Se escriben en minúsculas en eslovaco, al contrario que en inglés.',
     h:['Día','Eslovaco','Origen / tip'],
     r:[['Lunes','pondelok','Del antiguo concepto de inicio de semana'],['Martes','utorok',"De 'utor' = segundo"],['Miércoles','streda',"De 'stred' = centro de la semana"],['Jueves','štvrtok',"De 'štvrtý' = cuarto"],['Viernes','piatok',"De 'piaty' = quinto"],['Sábado','sobota',"Del hebreo 'Shabbat'"],['Domingo','nedeľa',"De 'ne-deľa' = sin trabajo"]]},
    {op:'newTable', category:'cisla-cas', tableId:'mesiace',
     title:'Meses del año',
     h:['Mes','Eslovaco','Mes','Eslovaco'],
     r:[['Enero','január','Julio','júl'],['Febrero','február','Agosto','august'],['Marzo','marec','Septiembre','september'],['Abril','apríl','Octubre','október'],['Mayo','máj','Noviembre','november'],['Junio','jún','Diciembre','december']]},
    {op:'newTable', category:'cisla-cas', tableId:'rocne-obdobia',
     title:'Las estaciones',
     h:['Estación','Eslovaco','Descripción'],
     r:[['Primavera','jar','Marzo–Mayo. Flores y temperaturas suaves.'],['Verano','leto','Junio–Agosto. Ideal para senderismo en los Tatras.'],['Otoño','jeseň','Septiembre–Noviembre. Bosques de colores.'],['Invierno','zima','Diciembre–Febrero. Nieve en los Alpes eslovacos.']]},
    {op:'newTable', category:'cisla-cas', tableId:'casove-vyrazy',
     title:'Expresiones de tiempo',
     h:['Español','Eslovaco','Ejemplo'],
     r:[['hoy','dnes','Dnes je pondelok. → Hoy es lunes.'],['mañana (día sig.)','zajtra','Zajtra idem. → Mañana voy.'],['ayer','včera','Včera bol piatok. → Ayer fue viernes.'],['esta mañana','dnes ráno','—'],['esta tarde/noche','dnes večer','—'],['esta semana','tento týždeň','—']]},
    {op:'newTable', category:'frazy', tableId:'prezivanie',
     title:'Frases de supervivencia esenciales',note:'Aprende estas frases de memoria. Pueden salvarte en cualquier situación.',
     h:['Español','Eslovaco','Pronunciación'],
     r:[['No entiendo.','Nerozumiem.','ne-ro-ZU-myem'],['¿Habla inglés?','Hovoríte po anglicky?','ho-vo-REE-te'],['¿Dónde está...?','Kde je...?','kde ye'],['¿Cuánto cuesta?','Koľko stojí?','KOL-ko STO-yi'],['¡Ayuda!','Pomoc!','PO-mots'],['Me duele [parte].','Bolí ma [parte].','bo-LEE ma'],['Llame a la policía.','Zavolajte políciu.','za-vo-LAY-te']]}
  ],
  tips:["🔑 Los días y los meses se escriben en minúscula en eslovaco.","🔑 Para expresar tiempo, usa el sustantivo temporal directamente, sin preposición: 'Dnes ráno', 'Zajtra večer'.","🔑 'Nerozumiem' (No entiendo) y 'Pomoc!' (¡Ayuda!) son las frases más importantes si viajas a Eslovaquia.","🔑 Para preguntar la hora: 'Koľko je hodín?' Para responder: 'Je [una hora]' / 'Sú [dos o más] hodiny'."]
},
```

Reemplázalo por:

```javascript
gr:{
  intro:'La Sección 2 amplía tu eslovaco con las partes del cuerpo humano y los tres géneros gramaticales del eslovaco (masculino, femenino, neutro). También conoces el pronombre "ona" (ella) y repasas frases de supervivencia esenciales.',
  patches:[
    {op:'addRows', category:'zamena', tableId:'zamena-osobne-basico',
     r:[['3ª sing. fem.','ona','ella']]},
    {op:'addRows', category:'byt-pritomny', tableId:'byt-basico',
     r:[['ona','je','Ona je doma. → Ella está en casa.']]},
    {op:'newTable', category:'pady', tableId:'rody-zaklady',
     title:'Géneros gramaticales (básico)', note:'Cada sustantivo eslovaco tiene un género: masculino, femenino o neutro. La terminación de la palabra suele indicarlo.',
     h:['Género','Terminación típica','Ejemplos (cuerpo)'],
     r:[['Mužský (masculino)','consonante','nos, krk, zub'],['Ženský (femenino)','-a (o excepción)','hlava, ruka, noha, tvár'],['Stredný (neutro)','-o / -e','oko, ucho, srdce, brucho']]},
    {op:'newTable', category:'frazy', tableId:'prezivanie',
     title:'Frases de supervivencia esenciales',note:'Aprende estas frases de memoria. Pueden salvarte en cualquier situación.',
     h:['Español','Eslovaco','Pronunciación'],
     r:[['No entiendo.','Nerozumiem.','ne-ro-ZU-myem'],['¿Habla inglés?','Hovoríte po anglicky?','ho-vo-REE-te'],['¿Dónde está...?','Kde je...?','kde ye'],['¿Cuánto cuesta?','Koľko stojí?','KOL-ko STO-yi'],['¡Ayuda!','Pomoc!','PO-mots'],['Me duele [parte].','Bolí ma [parte].','bo-LEE ma'],['Llame a la policía.','Zavolajte políciu.','za-vo-LAY-te']]}
  ],
  tips:["🔑 'Ona' (ella) usa la misma forma de byť que 'on': 'Ona je doma' = Ella está en casa.","🔑 En eslovaco cada sustantivo tiene un género: las palabras en -a suelen ser femeninas, en -o/-e neutras, y en consonante masculinas.","🔑 'Bolí ma [parte]' = Me duele [parte]. Es una frase fija: solo cambia la parte del cuerpo.","🔑 'tvár' (cara) termina en consonante pero es femenina — una excepción que verás más adelante con otras palabras terminadas en '-ár', '-ň', '-ť'."]
},
```

- [ ] **Step 2: Verificación rápida**

Run: `node -e "require('./data/curriculum.js')"`
Expected: sin output (sin errores de sintaxis).

- [ ] **Step 3: Commit**

```bash
git add data/curriculum.js
git commit -m "Rewrite s2 grammar block for El cuerpo humano theme"
```

---

### Task 2: Reescribir las lecciones `s2l1` a `s2l3`

**Files:**
- Modify: `data/curriculum.js` (lecciones `s2l1`, `s2l2`, `s2l3`)

- [ ] **Step 1: Reemplazar `s2l1`, `s2l2`, `s2l3`**

Busca este bloque exacto (las tres lecciones completas, desde `{id:'s2l1',...` hasta el `},` que cierra `s2l3`):

```javascript
 {id:'s2l1',ti:'Los días y los meses',em:'📅',
  sl:[
   ['v','Días de la semana',[['pondelok','lunes','pon-de-lok'],['utorok','martes','u-to-rok'],['streda','miércoles','stre-da'],['štvrtok','jueves','shtver-tok'],['piatok','viernes','pya-tok'],['sobota','sábado','so-bo-ta'],['nedeľa','domingo','ne-de-lya']]],
   ['v','Meses seleccionados',[['január','enero','ya-nu-ar'],['február','febrero','feb-ru-ar'],['jún','junio','yun'],['december','diciembre','de-tsem-ber']]],
   ['t','Curiosidad','Los días de la semana no van en mayúscula en eslovaco. "Pondelok" (lunes) viene de un concepto antiguo de inicio de semana.']
  ],
  w:[['pondelok','lunes','😴'],['utorok','martes','💼'],['streda','miércoles','⚡'],['štvrtok','jueves','🚀'],['piatok','viernes','🎉'],['sobota','sábado','🏖️'],['nedeľa','domingo','⛪']],
  p:[
   ['Hoy es lunes','Dnes je pondelok',[['Dnes','Hoy'],['je','es'],['pondelok','lunes']],['utorok','streda'],"'Dnes' = hoy. Estructura igual al español."]
  ],
  mc:[
   ['¿Qué día es "piatok"?',['miércoles','jueves','sábado','viernes'],3,"'piatok' = viernes."],
   ['¿Cómo se dice "domingo"?',['sobota','pondelok','nedeľa','štvrtok'],2,"'nedeľa' = domingo. 'sobota' = sábado."],
   ['¿Qué significa "streda"?',['martes','miércoles','jueves','lunes'],1,"'streda' = miércoles. Viene de 'stred' = centro."]
  ]
 },
 {id:'s2l2',ti:'¿Qué hora es?',em:'🕐',
  sl:[
   ['v','Partes del día',[['ráno','mañana','ra-no'],['poludnie','mediodía','po-lud-nie'],['večer','tarde/noche','ve-cher'],['noc','noche','nots']]],
   ['v','Tiempo',[['hodina','hora','ho-di-na'],['minúta','minuto','mi-nu-ta'],['dnes','hoy','dnes'],['zajtra','mañana (día)','zay-tra']]],
   ['g','Preguntar la hora','Para preguntar la hora: "Koľko je hodín?" Para responder: "[número] hodín".',[['Son las dos','Sú dve hodiny'],['Son las cinco','Je päť hodín'],['¿Qué hora es?','Koľko je hodín?'],['A las tres','O tretej']]]
  ],
  w:[['ráno','mañana','🌅'],['poludnie','mediodía','☀️'],['večer','tarde','🌆'],['noc','noche','🌙'],['hodina','hora','🕐'],['minúta','minuto','⏱️']],
  p:[
   ['Hoy por la mañana','Dnes ráno',[['Dnes','Hoy'],['ráno','mañana']],['večer','noc'],'Las expresiones de tiempo van sin preposición en eslovaco.'],
   ['Mañana por la noche','Zajtra večer',[['Zajtra','Mañana'],['večer','noche']],['dnes','ráno'],"'Zajtra' = mañana (día siguiente). No confundir con 'ráno' = mañana (momento)."]
  ],
  mc:[
   ['¿Qué significa "noc"?',['mañana','mediodía','tarde','noche'],3,"'noc' = noche. 'večer' = tarde/noche temprana."],
   ['¿Cómo se dice "hora"?',['minúta','hodina','dnes','zajtra'],1,"'hodina' = hora. 'minúta' = minuto."],
   ['¿Qué significa "zajtra"?',['hoy','ayer','mañana','ahora'],2,"'zajtra' = mañana (día siguiente). 'dnes' = hoy."]
  ]
 },
 {id:'s2l3',ti:'En la ciudad',em:'🏙️',
  sl:[
   ['v','Lugares esenciales',[['obchod','tienda','ob-chod'],['banka','banco','ban-ka'],['nemocnica','hospital','ne-mots-ni-tsa'],['škola','escuela','shko-la']]],
   ['v','Más lugares',[['reštaurácia','restaurante','resh-tau-ra-tsya'],['hotel','hotel','ho-tel'],['letisko','aeropuerto','le-tis-ko'],['stanica','estación','sta-ni-tsa']]],
   ['t','Bratislava','La capital eslovaca tiene un hermoso casco histórico. El "hrad" (castillo) domina la ciudad. Se puede ir a pie desde el centro en 15 minutos.']
  ],
  w:[['obchod','tienda','🏪'],['banka','banco','🏦'],['nemocnica','hospital','🏥'],['škola','escuela','🏫'],['reštaurácia','restaurante','🍽️'],['hotel','hotel','🏨'],['letisko','aeropuerto','✈️'],['stanica','estación','🚉']],
  p:[
   ['¿Dónde está el banco?','Kde je banka?',[['Kde','Dónde'],['je','está'],['banka','el banco']],['obchod','hotel'],"'Kde' = dónde. 'je' = está. ¡Frase esencial para turistas!"]
  ],
  mc:[
   ['¿Qué significa "letisko"?',['estación','hospital','banco','aeropuerto'],3,"'letisko' = aeropuerto. Viene de 'lietať' = volar."],
   ['¿Cómo se dice "hospital"?',['banka','škola','nemocnica','obchod'],2,"'nemocnica' = hospital. 'nemocný' = enfermo."],
   ['¿Qué lugar es "stanica"?',['aeropuerto','hotel','estación','restaurante'],2,"'stanica' = estación de tren o autobús."]
  ]
 },
```

Reemplázalo por:

```javascript
 {id:'s2l1',ti:'La cabeza',em:'🧠',
  sl:[
   ['v','La cabeza',[['hlava','cabeza','hla-va'],['oko','ojo','o-ko']]],
   ['g','Género: hlava y oko','"hlava" termina en -a → femenino. "oko" termina en -o → neutro. El género determina cómo cambian las palabras en eslovaco.',[['La cabeza (femenino)','hlava'],['El ojo (neutro)','oko']]],
   ['t','Ona = ella','Ahora puedes decir "ona" (ella), igual que "on" (él). "Ona je doma." = Ella está en casa.']
  ],
  w:[['hlava','cabeza','🧠'],['oko','ojo','👁️']],
  p:[
   ['Me duele la cabeza','Bolí ma hlava',[['Bolí ma','Me duele'],['hlava','la cabeza']],['oko','ucho'],"'Bolí ma' = me duele. Es una frase fija: solo cambia la parte del cuerpo."],
   ['Ella está en casa','Ona je doma',[['Ona','Ella'],['je','está'],['doma','en casa']],['On','Ty'],"'Ona' usa 'je', igual que 'on'."]
  ],
  mc:[
   ['¿Qué significa "hlava"?',['ojo','cabeza','oído','nariz'],1,"'hlava' = cabeza."],
   ['¿Cómo se dice "ojo"?',['hlava','oko','ucho','nos'],1,"'oko' = ojo. Termina en -o → género neutro."],
   ['¿Cómo se dice "ella"?',['on','ona','ono','ja'],1,"'ona' = ella. 'on' = él."]
  ]
 },
 {id:'s2l2',ti:'Los oídos y la nariz',em:'👂',
  sl:[
   ['v','La cara',[['ucho','oído','u-cho'],['nos','nariz','nos']]],
   ['g','Género: ucho y nos','"ucho" termina en -o → neutro, igual que "oko". "nos" termina en consonante → masculino.',[['El oído (neutro)','ucho'],['La nariz (masculino)','nos']]],
   ['t','Plural curioso','El plural de "ucho" (oído) es "uši" y el de "oko" (ojo) es "oči" — formas especiales que no siguen la regla normal.']
  ],
  w:[['ucho','oído','👂'],['nos','nariz','👃']],
  p:[
   ['Me duele el oído','Bolí ma ucho',[['Bolí ma','Me duele'],['ucho','el oído']],['nos','hlava'],"'Bolí ma' no cambia, solo cambia la parte del cuerpo."]
  ],
  mc:[
   ['¿Qué significa "ucho"?',['ojo','oído','nariz','cabeza'],1,"'ucho' = oído."],
   ['¿Cómo se dice "nariz"?',['ucho','oko','nos','hlava'],2,"'nos' = nariz. Muy parecido al español 'nasal'."],
   ['¿Qué significa "Bolí ma nos"?',['Me duele la cabeza','Me duele el oído','Me duele la nariz','Me duele el ojo'],2,"'Bolí ma nos' = Me duele la nariz."]
  ]
 },
 {id:'s2l3',ti:'El brazo',em:'💪',
  sl:[
   ['v','Brazos y manos',[['ruka','brazo/mano','ru-ka']]],
   ['g','Género: ruka','"ruka" termina en -a → femenino, igual que "hlava".',[['El brazo/la mano (femenino)','ruka'],['La cabeza (femenino)','hlava']]],
   ['t','Una palabra, dos significados','"ruka" significa tanto "brazo" como "mano" — el eslovaco no distingue estas dos partes con palabras diferentes.']
  ],
  w:[['ruka','brazo/mano','💪']],
  p:[
   ['Me duele el brazo','Bolí ma ruka',[['Bolí ma','Me duele'],['ruka','el brazo']],['noha','hlava'],"'ruka' también significa 'mano'."]
  ],
  mc:[
   ['¿Qué significa "ruka"?',['pierna','brazo/mano','cuello','corazón'],1,"'ruka' = brazo/mano."],
   ['¿Qué género tiene "ruka"?',['Masculino','Femenino','Neutro','No tiene género'],1,"Termina en -a → femenino, como 'hlava'."],
   ['¿Cómo se dice "ella" en eslovaco?',['on','ona','ja','ty'],1,"'ona' = ella (Sección 2)."]
  ]
 },
```

- [ ] **Step 2: Verificación rápida**

Run: `node -e "require('./data/curriculum.js')"`
Expected: sin output.

- [ ] **Step 3: Commit**

```bash
git add data/curriculum.js
git commit -m "Rewrite s2l1-s2l3 for El cuerpo humano theme"
```

---

### Task 3: Reescribir las lecciones `s2l4` a `s2l7`

**Files:**
- Modify: `data/curriculum.js` (lecciones `s2l4`, `s2l5`, `s2l6`, `s2l7`)

- [ ] **Step 1: Reemplazar `s2l4`, `s2l5`, `s2l6`, `s2l7`**

Busca este bloque exacto (las cuatro lecciones completas, desde `{id:'s2l4',...` hasta el `},` que cierra `s2l7`):

```javascript
 {id:'s2l4',ti:'El cuerpo humano',em:'🧍',
  sl:[
   ['v','Cabeza y cara',[['hlava','cabeza','hla-va'],['oko','ojo','o-ko'],['ucho','oído','u-cho'],['nos','nariz','nos']]],
   ['v','Cuerpo',[['ruka','brazo/mano','ru-ka'],['noha','pierna/pie','no-ha'],['srdce','corazón','srd-tse'],['krk','cuello','kerk']]],
   ['t','En el médico','Si necesitas ayuda médica di: "Bolí ma [parte]." (Me duele [parte]). "Bolí ma hlava." = Me duele la cabeza.']
  ],
  w:[['hlava','cabeza','🧠'],['oko','ojo','👁️'],['ucho','oído','👂'],['nos','nariz','👃'],['ruka','brazo','💪'],['noha','pierna','🦵'],['srdce','corazón','❤️'],['krk','cuello','🩺']],
  p:[
   ['Me duele la cabeza','Bolí ma hlava',[['Bolí','Duele'],['ma','me'],['hlava','la cabeza']],['ruka','noha'],'Frase esencial para situaciones médicas.']
  ],
  mc:[
   ['¿Qué significa "srdce"?',['cabeza','nariz','ojo','corazón'],3,"'srdce' = corazón. ¡La palabra más poética del eslovaco!"],
   ['¿Cómo se dice "ojo"?',['ucho','nos','oko','hlava'],2,"'oko' = ojo. Plural: 'oči' (ojos)."],
   ['¿Qué parte del cuerpo es "noha"?',['brazo','cabeza','pierna','cuello'],2,"'noha' = pierna/pie. 'ruka' = brazo/mano."]
  ]
 },
 {id:'s2l5',ti:'El tiempo y las estaciones',em:'🌤️',
  sl:[
   ['v','Fenómenos del tiempo',[['slnko','sol','sln-ko'],['dážď','lluvia','dazhdz'],['sneh','nieve','sneh'],['vietor','viento','vye-tor']]],
   ['v','Las estaciones',[['jar','primavera','yar'],['leto','verano','le-to'],['jeseň','otoño','ye-sen'],['zima','invierno','zi-ma']]],
   ['t','El clima eslovaco','Eslovaquia tiene 4 estaciones bien diferenciadas. Los Tatras en invierno son perfectos para esquiar. Los veranos son cálidos y perfectos para senderismo.']
  ],
  w:[['slnko','sol','☀️'],['dážď','lluvia','🌧️'],['sneh','nieve','❄️'],['vietor','viento','💨'],['jar','primavera','🌸'],['leto','verano','🏖️'],['jeseň','otoño','🍂'],['zima','invierno','⛄']],
  p:[
   ['Hoy hay sol','Dnes je slnko',[['Dnes','Hoy'],['je','hay'],['slnko','sol']],['dážď','sneh'],"Para hablar del tiempo usa 'je' + fenómeno."]
  ],
  mc:[
   ['¿Qué estación es "leto"?',['primavera','otoño','invierno','verano'],3,"'leto' = verano. 'zima' = invierno."],
   ['¿Cómo se dice "nieve"?',['dážď','vietor','slnko','sneh'],3,"'sneh' = nieve. ¡Los Tatras tienen mucha nieve en invierno!"],
   ['¿Qué significa "jar"?',['otoño','invierno','primavera','verano'],2,"'jar' = primavera. 'jeseň' = otoño."]
  ]
 },
 {id:'s2l6',ti:'En el restaurante',em:'🍽️',
  sl:[
   ['v','En la mesa',[['jedlo','comida','yed-lo'],['nápoj','bebida','na-poy'],['polievka','sopa','po-lyev-ka'],['dezert','postre','de-zert']]],
   ['v','Frases útiles',[['stôl','mesa','stol'],['účet','cuenta','u-chet'],['chcem','quiero','kh-tsem'],['prosím','por favor','pro-seem']]],
   ['g','Pedir en el restaurante','Para pedir usa: "[plato], prosím." Para pedir algo específico: "Chcem [plato]."',[['Quiero agua','Chcem vodu.'],['La cuenta','Účet, prosím.'],['¿Tiene mesa?','Máte stôl?'],['¡Buen provecho!','Dobrú chuť!']]]
  ],
  w:[['jedlo','comida','🍛'],['nápoj','bebida','🥤'],['polievka','sopa','🍜'],['dezert','postre','🍰'],['stôl','mesa','🍽️'],['účet','cuenta','🧾']],
  p:[
   ['Quiero sopa, por favor','Chcem polievku, prosím',[['Chcem','Quiero'],['polievku','sopa'],['prosím','por favor']],['jedlo','dezert'],"'polievku' es la forma acusativa de 'polievka'. Normal con verbos de querer."],
   ['La cuenta, por favor','Účet, prosím',[['Účet','La cuenta'],['prosím','por favor']],['stôl','nápoj'],'Frase indispensable en cualquier restaurante eslovaco.']
  ],
  mc:[
   ['¿Cómo pides "la cuenta"?',['Jedlo, prosím','Stôl, prosím','Účet, prosím','Chcem dezert'],2,"'Účet, prosím.' = La cuenta, por favor."],
   ['¿Qué significa "dezert"?',['sopa','bebida','comida','postre'],3,"'dezert' = postre. ¡Casi igual al español!"],
   ['¿Cómo se dice "quiero"?',['prosím','máte','chcem','ďakujem'],2,"'chcem' = quiero. 'Prosím' = por favor."]
  ]
 },
 {id:'s2l7',ti:'Frases de supervivencia',em:'🆘',
  sl:[
   ['v','Emergencias',[['pomoc','ayuda','po-mots'],['polícia','policía','po-li-tsya'],['lekár','médico','le-kar'],['záchranár','paramédico','zakh-ra-nar']]],
   ['v','Frases esenciales',[['Nerozumiem','No entiendo','ne-ro-zu-myem'],['Kde je...?','¿Dónde está...?','kde ye'],['Koľko stojí?','¿Cuánto cuesta?','kol-ko sto-yi'],['Hovorím po španielsky','Hablo español','ho-vo-reem']]],
   ['t','Frases de oro','Con "Nerozumiem" (No entiendo) y "Hovoríte po anglicky?" (¿Habla inglés?) puedes sobrevivir cualquier situación. ¡Apréndetelas de memoria!']
  ],
  w:[['pomoc','ayuda','🆘'],['polícia','policía','👮'],['nemocnica','hospital','🏥'],['lekár','médico','👨‍⚕️'],['záchranár','paramédico','🚑'],['nebezpečenstvo','peligro','⚠️']],
  p:[
   ['¡Ayuda, llama a la policía!','Pomoc, zavolajte políciu!',[['Pomoc','Ayuda'],['zavolajte','llame'],['políciu','policía']],['lekár','nemocnica'],'Frase de emergencia esencial. Apréndetela de memoria.']
  ],
  mc:[
   ['¿Cómo dices "No entiendo"?',['Nerozumiem','Neviem','Nie','Ďakujem'],0,"'Nerozumiem' = No entiendo. 'Neviem' = No sé."],
   ['¿Qué significa "pomoc"?',['policía','médico','ayuda','peligro'],2,"'pomoc' = ayuda. ¡Palabra de emergencia!"],
   ['¿Cómo preguntas el precio?',['Kde je?','Koľko stojí?','Ako sa voláš?','Čo je to?'],1,"'Koľko stojí?' = ¿Cuánto cuesta?"]
  ]
 },
```

Reemplázalo por:

```javascript
 {id:'s2l4',ti:'La pierna y el corazón',em:'❤️',
  sl:[
   ['v','Piernas y corazón',[['noha','pierna/pie','no-ha'],['srdce','corazón','srd-tse']]],
   ['g','Género: noha y srdce','"noha" termina en -a → femenino. "srdce" termina en -e → neutro.',[['La pierna/el pie (femenino)','noha'],['El corazón (neutro)','srdce']]],
   ['t','Repaso de géneros','Ya conoces ejemplos de los tres géneros: masculino (nos), femenino (hlava, ruka, noha) y neutro (oko, ucho, srdce).']
  ],
  w:[['noha','pierna/pie','🦵'],['srdce','corazón','❤️']],
  p:[
   ['Me duele la pierna','Bolí ma noha',[['Bolí ma','Me duele'],['noha','la pierna']],['ruka','srdce'],"—"],
   ['Ella está bien','Ona je dobre',[['Ona','Ella'],['je','está'],['dobre','bien']],['On','Ja'],"Repaso: 'ona je' + adjetivo (Sección 1: 'dobre' = bien)."]
  ],
  mc:[
   ['¿Qué significa "srdce"?',['cabeza','corazón','pierna','brazo'],1,"'srdce' = corazón. ¡La palabra más poética del eslovaco!"],
   ['¿Cómo se dice "pierna"?',['ruka','noha','nos','krk'],1,"'noha' = pierna/pie."],
   ['¿Qué significa "Bolí ma srdce"?',['Me duele la pierna','Me duele el corazón','Me duele el brazo','Me duele la cabeza'],1,"'srdce' = corazón."]
  ]
 },
 {id:'s2l5',ti:'El cuello',em:'🩺',
  sl:[
   ['v','El cuello',[['krk','cuello','kerk']]],
   ['g','Género: krk','"krk" termina en consonante → masculino, igual que "nos".',[['El cuello (masculino)','krk'],['La nariz (masculino)','nos']]],
   ['t','Masculino vs. neutro','Tanto "krk" como "nos" terminan en consonante y son masculinos. Pero "srdce" termina en -e y es neutro — ¡cuidado con las terminaciones en -e!']
  ],
  w:[['krk','cuello','🩺']],
  p:[
   ['Me duele el cuello','Bolí ma krk',[['Bolí ma','Me duele'],['krk','el cuello']],['hlava','nos'],"—"]
  ],
  mc:[
   ['¿Qué significa "krk"?',['oído','cuello','corazón','pierna'],1,"'krk' = cuello."],
   ['¿Qué género tiene "krk"?',['Femenino','Neutro','Masculino','No tiene género'],2,"Termina en consonante → masculino."],
   ['¿Cómo se dice "no" en eslovaco?',['áno','nie','dobre','ako'],1,"'nie' = no (Sección 1)."]
  ]
 },
 {id:'s2l6',ti:'Los dientes y la cara',em:'🦷',
  sl:[
   ['v','Dientes y cara',[['zub','diente','zub'],['tvár','cara','tvaar']]],
   ['g','La excepción: tvár','"tvár" termina en consonante pero es FEMENINO — una excepción a la regla. Existen otras palabras femeninas terminadas en consonante suave (-ár, -ň, -ť...).',[['La cara (femenino, excepción)','tvár'],['El cuello (masculino, regular)','krk']]],
   ['t','Cuida tus dientes','El plural de "zub" (diente) es "zuby" (dientes).']
  ],
  w:[['zub','diente','🦷'],['tvár','cara','😊']],
  p:[
   ['Me duele un diente','Bolí ma zub',[['Bolí ma','Me duele'],['zub','un diente']],['tvár','krk'],"—"],
   ['Mi amigo está en casa','Priateľ je doma',[['Priateľ','Amigo'],['je','está'],['doma','en casa']],['On','Ona'],"Repaso de la Sección 1: 'priateľ' = amigo, 'doma' = en casa."]
  ],
  mc:[
   ['¿Qué significa "zub"?',['cara','diente','cuello','oído'],1,"'zub' = diente."],
   ['¿Qué género tiene "tvár"?',['Masculino','Femenino (excepción)','Neutro','No tiene género'],1,"'tvár' termina en consonante pero es femenino — una excepción."],
   ['¿Cómo se dice "amigo"?',['priateľ','doma','dobre','ako'],0,"'priateľ' = amigo (Sección 1)."]
  ]
 },
 {id:'s2l7',ti:'La barriga, todo junto',em:'🫃',
  sl:[
   ['v','La barriga',[['brucho','barriga/panza','bru-cho']]],
   ['g','Repaso final de géneros','Masculino (consonante): nos, krk, zub. Femenino (-a o excepción): hlava, ruka, noha, tvár. Neutro (-o/-e): oko, ucho, srdce, brucho.',[['Masculino','nos, krk, zub'],['Femenino','hlava, ruka, noha, tvár'],['Neutro','oko, ucho, srdce, brucho']]],
   ['t','¡El cuerpo completo!','Ya conoces 11 partes del cuerpo en eslovaco. Si te sientes mal, recuerda: "Bolí ma [parte]." es tu frase de oro.']
  ],
  w:[['brucho','barriga/panza','🫃']],
  p:[
   ['Me duele la barriga','Bolí ma brucho',[['Bolí ma','Me duele'],['brucho','la barriga']],['srdce','noha'],"—"],
   ['¿Cómo está ella?','Ako je ona?',[['Ako','Cómo'],['je','está'],['ona','ella']],['on','ty'],"Repaso: 'Ako' (cómo, Sección 1) + 'je' + pronombre."]
  ],
  mc:[
   ['¿Qué significa "brucho"?',['corazón','barriga/panza','pierna','cara'],1,"'brucho' = barriga/panza."],
   ['¿Qué género tiene "brucho"?',['Masculino','Femenino','Neutro','No tiene género'],2,"Termina en -o → neutro, como 'oko' y 'ucho'."],
   ['¿Cuál es la frase para decir que algo te duele?',['Ako sa máš?','Bolí ma...','Kde je...?','Koľko stojí?'],1,"'Bolí ma [parte]' = Me duele [parte]."]
  ]
 },
```

- [ ] **Step 2: Verificación rápida**

Run: `node -e "require('./data/curriculum.js')"`
Expected: sin output.

- [ ] **Step 3: Commit**

```bash
git add data/curriculum.js
git commit -m "Rewrite s2l4-s2l7 for El cuerpo humano theme"
```

---

### Task 4: Reescribir `s2test`

**Files:**
- Modify: `data/curriculum.js` (unidad `s2test`)

- [ ] **Step 1: Reemplazar `s2test`**

Busca este bloque exacto:

```javascript
 {id:'s2test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Gran examen!','Vas a responder unas 18 preguntas de repaso de toda la Sección 2. Necesitas 80% correctas para pasar. ¡Eres capaz!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 2:',[['Días','pondelok...nedeľa'],['Ciudad','banka, škola, letisko'],['Cuerpo','hlava, oko, srdce'],['Restaurante','jedlo, účet, chcem']]],
   ['t','¡Eres increíble!','Has aprendido más de 80 palabras en eslovaco. ¡Muy pocos hispanohablantes llegan tan lejos!']
  ],
  w:[],p:[],mc:[]
 }
```

Reemplázalo por:

```javascript
 {id:'s2test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Hora del examen!','Vas a responder unas 18 preguntas de repaso de toda la Sección 2. Necesitas 80% correctas para desbloquear la Sección 3. ¡Tú puedes!'],
   ['g','Repaso rápido','Las 11 palabras de la Sección 2:',[['Cabeza/cara','hlava, oko, ucho, nos'],['Cuerpo','ruka, noha, srdce, krk'],['Más','zub, tvár, brucho'],['Pronombre','ona = ella']]],
   ['t','Consejo final',"Recuerda los géneros: -a → femenino, -o/-e → neutro, consonante → masculino (¡con la excepción de 'tvár'!)."]
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s2t-01',category:'new',type:'mc',skill:'vocab',concept_tag:'vocab_telo',question:'¿Qué significa "hlava"?',options:['ojo','cabeza','oído','nariz'],answer:1,audio:null,skippable:false,accept:[],explanation:"'hlava' = cabeza."},
   {id:'s2t-02',category:'new',type:'mc',skill:'vocab',concept_tag:'vocab_telo',question:'¿Cómo se dice "ojo"?',options:['ucho','oko','nos','krk'],answer:1,audio:null,skippable:false,accept:[],explanation:"'oko' = ojo."},
   {id:'s2t-03',category:'new',type:'fill',skill:'vocab',concept_tag:'vocab_telo',question:'Completa: "Bolí ma ___." (Me duele el oído)',options:[],answer:'ucho',audio:null,skippable:false,accept:['ucho'],explanation:"'ucho' = oído."},
   {id:'s2t-04',category:'new',type:'type',skill:'vocab',concept_tag:'vocab_telo',question:'Escribe en eslovaco: "brazo/mano"',options:[],answer:'ruka',audio:null,skippable:false,accept:['ruka'],explanation:"'ruka' = brazo/mano."},
   {id:'s2t-05',category:'new',type:'listen',skill:'vocab',concept_tag:'vocab_telo',question:'Escucha y elige la traducción correcta.',options:['Me duele la pierna','Me duele el corazón','Me duele la cabeza','Me duele el cuello'],answer:0,audio:'Bolí ma noha',skippable:true,accept:[],explanation:"'Bolí ma noha' = Me duele la pierna."},
   {id:'s2t-06',category:'new',type:'mc',skill:'grammar',concept_tag:'rody_gramaticke',question:'¿Qué género tiene "krk" (cuello)?',options:['Femenino','Neutro','Masculino','No tiene'],answer:2,audio:null,skippable:false,accept:[],explanation:"'krk' termina en consonante → masculino."},
   {id:'s2t-07',category:'new',type:'mc',skill:'grammar',concept_tag:'rody_gramaticke',question:'¿Qué terminación es típica del género neutro?',options:['consonante','-a','-o / -e','-y'],answer:2,audio:null,skippable:false,accept:[],explanation:"Las palabras neutras suelen terminar en -o o -e: oko, srdce."},
   {id:'s2t-08',category:'new',type:'mc',skill:'grammar',concept_tag:'rody_gramaticke',question:'¿Cuál de estas palabras es FEMENINA aunque termina en consonante?',options:['krk','nos','tvár','zub'],answer:2,audio:null,skippable:false,accept:[],explanation:"'tvár' (cara) es femenino, una excepción a la terminación en consonante."},
   {id:'s2t-09',category:'new',type:'mc',skill:'grammar',concept_tag:'zamena_ona',question:'¿Cómo se dice "ella"?',options:['on','ona','ono','ony'],answer:1,audio:null,skippable:false,accept:[],explanation:"'ona' = ella."},
   {id:'s2t-10',category:'new',type:'fill',skill:'grammar',concept_tag:'zamena_ona',question:'Completa: "Ona ___ doma." (Ella está en casa)',options:[],answer:'je',audio:null,skippable:false,accept:['je'],explanation:"'Ona je' = ella es/está, igual que 'on je'."},
   {id:'s2t-11',category:'new',type:'mc',skill:'grammar',concept_tag:'boli_ma',question:'¿Cómo se dice "Me duele la barriga"?',options:['Ja som brucho','Bolí ma brucho','Brucho je ja','Mám brucho'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Bolí ma [parte]' = Me duele [parte]."},
   {id:'s2t-12',category:'old_review',type:'mc',skill:'grammar',concept_tag:'byt_presente',question:'¿Cómo se dice "Yo soy / Yo estoy"?',options:['Ty si','Ja som','On je','Ona je'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ja som' = Yo soy / Yo estoy (Sección 1)."},
   {id:'s2t-13',category:'old_review',type:'fill',skill:'grammar',concept_tag:'negacion_byt',question:'Completa: "On ___ je." (Él no está)',options:[],answer:'nie',audio:null,skippable:false,accept:['nie'],explanation:"La negación 'nie' va justo antes del verbo (Sección 1)."},
   {id:'s2t-14',category:'old_review',type:'mc',skill:'vocab',concept_tag:'pronombres_personales',question:'¿Qué significa "ty"?',options:['yo','tú','él','ella'],answer:1,audio:null,skippable:false,accept:[],explanation:"'ty' = tú (Sección 1)."},
   {id:'s2t-15',category:'random_review',type:'listen',skill:'vocab',concept_tag:'preguntas_como_estas',question:'Escucha y elige la traducción correcta.',options:['¿Cómo estás?','Estoy bien','Estoy en casa','Soy amigo'],answer:0,audio:'Ako si?',skippable:true,accept:[],explanation:"'Ako si?' = ¿Cómo estás? (Sección 1)."},
   {id:'s2t-16',category:'random_review',type:'type',skill:'vocab',concept_tag:'vocab_basico_s1',question:'Escribe en eslovaco: "amigo"',options:[],answer:'priateľ',audio:null,skippable:false,accept:['priateľ','priatel'],explanation:"'priateľ' = amigo (Sección 1)."},
   {id:'s2t-17',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'rody_gramaticke',question:'Elige el género CORRECTO de "oko" (ojo)',options:['Masculino','Femenino','Neutro','No tiene género'],answer:2,audio:null,skippable:false,accept:[],explanation:"'oko' termina en -o → neutro."},
   {id:'s2t-18',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'zamena_ona',question:'Corrige el error: "Ona som doma." (debería significar "Ella está en casa")',options:[],answer:'Ona je doma',audio:null,skippable:false,accept:['Ona je doma','ona je doma'],explanation:"Con 'ona' se usa 'je', no 'som'. 'som' es solo para 'ja'."}
  ]
 }
```

- [ ] **Step 2: Verificación rápida**

Run: `node -e "require('./data/curriculum.js')"`
Expected: sin output.

- [ ] **Step 3: Commit**

```bash
git add data/curriculum.js
git commit -m "Rewrite s2test with 18-question tq array"
```

---

### Task 5: Actualizar el fondo de palabras pendientes

**Files:**
- Modify: `docs/superpowers/specs/vocab-bank-pendiente.md`

- [ ] **Step 1: Añadir la sección "De la Sección 2" al final del archivo**

Lee el archivo actual con `Read` para confirmar su contenido (termina en la línea `(Nota: "meno" del s1l2 original...)`). Añade al final (`Edit` con `old_string` = la última línea del archivo, `new_string` = esa misma línea + el nuevo bloque):

```markdown

## De la Sección 2 (s2 → "El cuerpo humano", ~38 palabras retiradas)

Canónicas (se quedan en S2): `hlava, oko, ucho, nos, ruka, noha, srdce, krk, zub,
tvár, brucho`.

Los 7 días de la semana (`pondelok, utorok, streda, štvrtok, piatok, sobota,
nedeľa`) NO van al fondo: pasan directamente a la Sección 5 ("Mi semana"),
según el plan de migración.

Pendientes (agrupadas por tema — buenos candidatos para secciones 9+):

- **Partes del día / horas**: ráno, poludnie, večer, noc, hodina, minúta
- **La ciudad**: obchod, banka, škola, hotel, letisko, stanica, nemocnica
- **El clima y las estaciones**: slnko, dážď, sneh, vietor, jar, leto, jeseň,
  zima
- **El restaurante**: jedlo, nápoj, polievka, dezert, účet, chcem, prosím
- **Frases de emergencia**: pomoc, polícia, záchranár, nebezpečenstvo
- **Meses del año**: január, február, marec, apríl, máj, jún, júl, august,
  september, október, november, december
- **Expresiones de tiempo**: dnes, zajtra, včera, tento týždeň

(Nota: "lekár", "reštaurácia" y "stôl" del s2 original NO se incluyen aquí
porque ya son palabras canónicas de otras secciones migradas (s4, s5, s6
respectivamente).)
```

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/specs/vocab-bank-pendiente.md
git commit -m "Add s2 leftover vocabulary to the pending word bank"
```

---

### Task 6: Dejar nota para el ciclo de `s5` sobre `dni-tyzdna`

**Files:**
- Modify: `docs/superpowers/specs/2026-06-10-secciones-2-5-migracion-design.md`

- [ ] **Step 1: Añadir una nota al final del documento**

Lee el archivo (termina en la sección "## Qué no cambia"). Añade al final:

```markdown

## Nota para el ciclo de s5 (dependencia de gr.patches)

La sección `s2` (ya migrada) **dejó de crear** la tabla
`{category:'cisla-cas', tableId:'dni-tyzdna'}` (Días de la semana), porque los
7 días de la semana ahora son palabras canónicas de `s5`. Actualmente `s5`
tiene un patch:

```javascript
{op:'addRows', category:'cisla-cas', tableId:'dni-tyzdna', r:[...]}
```

que dependía de que `s2` creara esa tabla primero. Al migrar `s5`, **cambia
ese patch de `addRows` a `newTable`** (con `title`, `note`, `h` y `r`
completos), ya que `s5` ahora es la primera sección que introduce los días de
la semana.
```

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/specs/2026-06-10-secciones-2-5-migracion-design.md
git commit -m "Note dni-tyzdna gr.patches dependency for the s5 migration cycle"
```

---

### Task 7: Verificación final con el script de auditoría

**Files:**
- (sin cambios — solo verificación)

- [ ] **Step 1: Ejecutar el script de auditoría de vocabulario**

Run: `node scripts/audit_vocab.js`

Expected: en el bloque `===== s2 El mundo a tu alrededor =====` (o el nuevo
título si lo cambiaste — ver nota abajo), no debe haber líneas
`NOT PRACTICED in p/mc` para `hlava, oko, ucho, nos, ruka, noha, srdce, krk,
zub, tvár, brucho` (cada palabra de `w` debe aparecer en al menos un `p`/`mc`
de su lección, vía la frase "Bolí ma [palabra]" o directamente).

Nota: este plan **no cambia** `ti:'El mundo a tu alrededor'` (el título de la
sección `s2` en sí, fuera del bloque `gr`/`ls`) — solo el contenido interno.
Si quieres que el título de la sección refleje el nuevo tema, decide y aplica
el cambio de `ti` de `s2` como parte de este paso (p.ej. `ti:'El cuerpo
humano'`), y vuelve a correr el audit.

- [ ] **Step 2: Revisar manualmente cualquier advertencia restante**

Las advertencias de `UNKNOWN tokens` para palabras de repaso de la Sección 1
(`ja, ty, on, ona, som, si, je, nie, ako, dobre, doma, priateľ`) son
esperadas y correctas — el script solo conoce vocabulario introducido vía
`w` o `gr.patches`, y los pronombres/verbos base de `byť` se enseñan en
`gr.patches` de `s1`/`s2`, no en `w`.

- [ ] **Step 3: Si decidiste cambiar `ti` de `s2`, commitea ese cambio por separado**

```bash
git add data/curriculum.js
git commit -m "Rename s2 section title to El cuerpo humano"
```

(Omite este paso si no cambiaste `ti`.)

---

## Self-Review (completado durante la redacción de este plan)

1. **Cobertura del spec**: las 11 palabras canónicas, distribución 1-2/lección
   (`2,2,1,2,1,2,1`), los 3 géneros gramaticales con ejemplos del cuerpo, el
   pronombre "ona", la dependencia `prezivanie` (resuelta manteniéndola), la
   dependencia `dni-tyzdna` (documentada para `s5`), el fondo de palabras
   pendientes y el `tq` de 18 preguntas (11 `new` + 3 `old_review` + 2
   `random_review` + 2 `error_pattern`, umbral 80% vía runtime existente) —
   todos cubiertos.
2. **Placeholders**: ninguno — todo el contenido (`sl`/`w`/`p`/`mc`/`tq`/tablas
   de gramática/fondo de palabras) está completo y listo para pegar.
3. **Consistencia de tipos**: los campos de `tq` (`id`, `category`, `type`,
   `skill`, `concept_tag`, `question`, `options`, `answer`, `audio`,
   `skippable`, `accept`, `explanation`) coinciden exactamente con el formato
   usado en `s1test`/`s6test`. Los `tableId` (`zamena-osobne-basico`,
   `byt-basico`, `rody-zaklady`, `prezivanie`) coinciden con los nombres
   existentes en `s1`/`s6`/`s7`.
