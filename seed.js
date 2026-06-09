// Run: DATABASE_URL=<your-neon-url> node seed.js
const { execute } = require('./api/db');

const CURRICULUM = [
{id:'s1',ti:'¡Hola, Eslovaquia!',em:'🇸🇰',col:'#FF6B35',
gr:{
  intro:'La Sección 1 cubre los fundamentos del eslovaco: saludos, identidad, números, colores, familia y vocabulario cotidiano.',
  tables:[
    {title:'Pronombres personales',note:'En eslovaco los pronombres a menudo se omiten porque el verbo indica la persona.',
     h:['Persona','Eslovaco','Español'],
     r:[['1ª singular','ja','yo'],['2ª singular','ty','tú'],['3ª sing. masc.','on','él'],['3ª sing. fem.','ona','ella'],['3ª sing. neutro','ono','ello'],['1ª plural','my','nosotros/as'],['2ª plural','vy','vosotros / Usted (formal)'],['3ª plural','oni / ony','ellos / ellas']]},
    {title:'Verbo byť — ser / estar',note:"A diferencia del español, 'byť' cumple las funciones de ser Y estar.",
     h:['Pronombre','Forma','Ejemplo'],
     r:[['ja','som','Ja som Martin. → Yo soy Martín.'],['ty','si','Ty si priateľ. → Tú eres amigo.'],['on/ona/ono','je','On je doma. → Él está en casa.'],['my','sme','My sme Slováci. → Somos eslovacos.'],['vy','ste','Vy ste tu. → Vosotros estáis aquí.'],['oni/ony','sú','Oni sú tam. → Ellos están allí.']]},
    {title:'Saludos: formal vs. informal',
     h:['Situación','Saludo','Despedida'],
     r:[['Con amigos / familia','Ahoj · Čau · Servus','Čau · Dovidenia'],['Con adultos / desconocidos','Dobrý deň','Dovidenia'],['Mañana (formal)','Dobré ráno','Dovidenia'],['Tarde/noche (formal)','Dobrý večer','Dobrú noc']]},
    {title:'Números 1–10',
     h:['Número','Eslovaco','Pronunciación'],
     r:[['1','jeden (m.) / jedna (f.)','YE-den'],['2','dva (m.) / dve (f./n.)','dva / dve'],['3','tri','tri'],['4','štyri','SHTY-ri'],['5','päť','pyach'],['6','šesť','shest'],['7','sedem','SE-dem'],['8','osem','O-sem'],['9','deväť','DE-vyach'],['10','desať','DE-sach']]},
    {title:'Géneros gramaticales',note:'El eslovaco tiene 3 géneros. Conocerlos ayuda a usar los adjetivos correctamente.',
     h:['Género','Terminaciones típicas','Ejemplos'],
     r:[['Masculino','consonante (mayoría)','muž, pes, brat'],['Femenino','-a, -ia, -esť','žena, mama, sestra'],['Neutro','-o, -e, -ie','auto, srdce, more']]}
  ],
  tips:["🔑 El eslovaco NO tiene artículos definidos ni indefinidos. 'Pes' = el perro / un perro / perro.","🔑 Usa 'Dobrý deň' con personas mayores o desconocidas. 'Ahoj' es solo para amigos.","🔑 Los números 1–4 cambian de forma según el género del sustantivo que acompañan. Del 5 en adelante son invariables.","🔑 'byť' equivale a ser Y estar del español. El contexto indica cuál usar."]
},
ls:[
 {id:'s1l1',ti:'Primeros saludos',em:'👋',
  sl:[
   ['v','Saludos básicos',[['Ahoj','Hola (informal)','a-hoy'],['Dobrý deň','Buenos días','dob-ree deñ'],['Čau','Chau','chau'],['Dovidenia','Adiós','do-vi-de-nia']]],
   ['v','Palabras esenciales',[['Ďakujem','Gracias','dya-ku-yem'],['Prosím','Por favor','pro-seem'],['Áno','Sí','a-no'],['Nie','No','nie']]],
   ['g','Formal vs. Informal','En eslovaco el nivel de formalidad cambia el saludo completamente.',[['Hola (amigos)','Ahoj / Čau'],['Buenos días (formal)','Dobrý deň'],['Adiós (formal)','Dovidenia'],['Chau (informal)','Čau']]]
  ],
  w:[['Ahoj','Hola','👋'],['Ďakujem','Gracias','🙏'],['Prosím','Por favor','🤲'],['Áno','Sí','✅'],['Nie','No','❌'],['Dovidenia','Adiós','🚶']],
  p:[
   ['Buenos días','Dobrý deň',[['Dobrý','Buenos'],['deň','días']],['Áno','Nie'],"'Dobrý'=bueno, 'deň'=día. Juntos forman el saludo formal."],
   ['Gracias, por favor','Ďakujem, prosím',[['Ďakujem','Gracias'],['prosím','por favor']],['Ahoj','Čau'],'Estas dos palabras juntas son muy útiles en cualquier situación.']
  ],
  mc:[
   ['¿Cuál es el saludo FORMAL?',['Ahoj','Čau','Dobrý deň','Servus'],2,"'Dobrý deň' es el saludo formal. 'Ahoj' y 'Čau' son informales."],
   ['¿Cómo se dice "Gracias"?',['Prosím','Áno','Nie','Ďakujem'],3,"'Ďakujem' = Gracias. 'Prosím' = Por favor."],
   ['¿Qué significa "Áno"?',['No','Adiós','Por favor','Sí'],3,"'Áno' = Sí. 'Nie' = No."]
  ]
 },
 {id:'s1l2',ti:'¿Quién eres tú?',em:'🆔',
  sl:[
   ['v','Personas',[['muž','hombre','mush'],['žena','mujer','zhe-na'],['chlapec','chico','chla-pets'],['dievča','chica','dyev-cha']]],
   ['v','Identidad',[['meno','nombre','me-no'],['krajina','país','kra-yi-na'],['priateľ','amigo','prya-tel'],['ja som','yo soy','ya som']]],
   ['t','Presentarse','Para presentarte di: "Ja som [nombre]." (Yo soy [nombre]). Para preguntar: "Ako sa voláš?" (¿Cómo te llamas?).']
  ],
  w:[['muž','hombre','👨'],['žena','mujer','👩'],['chlapec','chico','👦'],['dievča','chica','👧'],['priateľ','amigo','🤝'],['krajina','país','🌍']],
  p:[
   ['Yo soy amigo','Ja som priateľ',[['Ja','Yo'],['som','soy'],['priateľ','amigo']],['muž','žena'],'La estructura es igual al español: sujeto + verbo + sustantivo.'],
   ['Él es hombre','On je muž',[['On','Él'],['je','es'],['muž','hombre']],['žena','chlapec'],"'On'=él, 'je'=es. El verbo 'byť'(ser) cambia según la persona."]
  ],
  mc:[
   ['¿Cómo se dice "mujer"?',['muž','chlapec','žena','dievča'],2,"'žena' = mujer. 'muž' = hombre."],
   ['¿Qué significa "krajina"?',['nombre','amigo','chico','país'],3,"'krajina' = país. ¡Eslovaquia se dice 'Slovensko'!"],
   ['¿Cómo dices "Yo soy"?',['On je','Ja som','Ty si','My sme'],1,"'Ja som' = Yo soy. 'Ty si' = Tú eres."]
  ]
 },
 {id:'s1l3',ti:'Los números 1–10',em:'🔢',
  sl:[
   ['v','Números 1-5',[['jeden','uno','ye-den'],['dva','dos','dva'],['tri','tres','tri'],['štyri','cuatro','shtee-ri'],['päť','cinco','pyach']]],
   ['v','Números 6-10',[['šesť','seis','shest'],['sedem','siete','se-dem'],['osem','ocho','o-sem'],['deväť','nueve','de-vyach'],['desať','diez','de-sach']]],
   ['t','Curiosidad numérica','Los números eslovacos 1-4 cambian de forma según el género del sustantivo. Por ahora aprende la forma básica y ya estás listo para contar.']
  ],
  w:[['jeden','uno','1️⃣'],['dva','dos','2️⃣'],['tri','tres','3️⃣'],['štyri','cuatro','4️⃣'],['päť','cinco','5️⃣'],['šesť','seis','6️⃣'],['sedem','siete','7️⃣'],['osem','ocho','8️⃣'],['deväť','nueve','9️⃣'],['desať','diez','🔟']],
  p:[
   ['Uno, dos, tres','jeden, dva, tri',[['jeden','uno'],['dva','dos'],['tri','tres']],['štyri','päť'],'Cuenta como en español pero con palabras eslovacas.']
  ],
  mc:[
   ['¿Qué número es "päť"?',['3','7','5','9'],2,"'päť' = 5 (cinco)."],
   ['¿Cómo se dice "ocho"?',['sedem','osem','deväť','šesť'],1,"'osem' = 8 (ocho)."],
   ['¿Qué número es "deväť"?',['6','8','9','10'],2,"'deväť' = 9 (nueve)."]
  ]
 },
 {id:'s1l4',ti:'Los colores',em:'🎨',
  sl:[
   ['v','Colores básicos',[['červená','rojo','cher-ve-na'],['modrá','azul','mod-ra'],['zelená','verde','ze-le-na'],['žltá','amarillo','zhel-ta']]],
   ['v','Más colores',[['biela','blanco','bye-la'],['čierna','negro','chyer-na'],['oranžová','naranja','o-ran-zho-va'],['ružová','rosa','ru-zho-va']]],
   ['g','Géneros en los colores','Los colores cambian según el género. La forma mostrada es femenina. Para masculino cambia la terminación: -á → -ý, para neutro: -á → -é.',[['Rojo (masc.)','červený'],['Rojo (fem.)','červená'],['Rojo (neutro)','červené'],['Azul (masc.)','modrý'],['Azul (fem.)','modrá'],['Azul (neutro)','modré']]]
  ],
  w:[['červená','rojo','🔴'],['modrá','azul','🔵'],['zelená','verde','🟢'],['žltá','amarillo','🟡'],['biela','blanco','⚪'],['čierna','negro','⚫'],['oranžová','naranja','🟠'],['ružová','rosa','🌸']],
  p:[
   ['Rojo y azul','červená a modrá',[['červená','rojo'],['a','y'],['modrá','azul']],['zelená','žltá'],"'a' = y. Muy fácil de recordar."]
  ],
  mc:[
   ['¿Qué color es "zelená"?',['azul','rojo','amarillo','verde'],3,"'zelená' = verde. 'zelen' está relacionado con vegetación."],
   ['¿Cómo se dice "negro"?',['biela','ružová','čierna','oranžová'],2,"'čierna' = negro. 'biela' = blanco."],
   ['¿Qué color es "žltá"?',['naranja','rosa','verde','amarillo'],3,"'žltá' = amarillo. ¡El sol es žltý!"]
  ]
 },
 {id:'s1l5',ti:'Mi familia',em:'👨‍👩‍👧‍👦',
  sl:[
   ['v','Familia cercana',[['mama','mamá','ma-ma'],['otec','papá','o-tets'],['brat','hermano','brat'],['sestra','hermana','ses-tra']]],
   ['v','Familia extendida',[['babička','abuela','ba-bich-ka'],['dedko','abuelo','ded-ko'],['syn','hijo','sin'],['dcéra','hija','dtse-ra']]],
   ['t','Vocabulario familiar','¡"Mama" suena igual en español y eslovaco! "Otec" es similar al latín "pater". Los idiomas indoeuropeos comparten raíces.']
  ],
  w:[['mama','mamá','👩'],['otec','papá','👨'],['brat','hermano','👦'],['sestra','hermana','👧'],['babička','abuela','👵'],['dedko','abuelo','👴'],['syn','hijo','🧒'],['dcéra','hija','👶']],
  p:[
   ['Mi mamá y papá','Moja mama a otec',[['Moja','Mi'],['mama','mamá'],['a','y'],['otec','papá']],['brat','sestra'],"'Moja' = Mi (femenino). 'Môj' = Mi (masculino)."],
   ['Mi hermano y hermana','Môj brat a sestra',[['Môj','Mi'],['brat','hermano'],['a','y'],['sestra','hermana']],['mama','otec'],"'Môj' se usa antes de sustantivos masculinos como 'brat'."]
  ],
  mc:[
   ['¿Cómo se dice "abuela"?',['dedko','sestra','syn','babička'],3,"'babička' = abuela. 'dedko' = abuelo."],
   ['¿Qué significa "brat"?',['hermana','hijo','hermano','hija'],2,"'brat' = hermano. 'sestra' = hermana."],
   ['¿Cómo se dice "hija"?',['syn','dcéra','brat','mama'],1,"'dcéra' = hija. 'syn' = hijo."]
  ]
 },
 {id:'s1l6',ti:'Animales y objetos',em:'🐾',
  sl:[
   ['v','Animales',[['pes','perro','pes'],['mačka','gato','mach-ka'],['vták','pájaro','vtak'],['ryba','pez','ri-ba']]],
   ['v','Objetos cotidianos',[['dom','casa','dom'],['auto','coche','au-to'],['kniha','libro','kni-ha'],['telefón','teléfono','te-le-fon']]],
   ['t','¡Palabras similares!','¿Notaste que "auto" y "telefón" son casi iguales al español? El eslovaco tomó préstamos del latín, griego e inglés.']
  ],
  w:[['pes','perro','🐶'],['mačka','gato','🐱'],['vták','pájaro','🐦'],['ryba','pez','🐟'],['dom','casa','🏠'],['auto','coche','🚗'],['kniha','libro','📚'],['telefón','teléfono','📱']],
  p:[
   ['El perro en casa','Pes je doma',[['Pes','El perro'],['je','está'],['doma','en casa']],['mačka','vták'],"'doma' = en casa (forma adverbial de 'dom')."]
  ],
  mc:[
   ['¿Qué significa "mačka"?',['perro','pájaro','gato','pez'],2,"'mačka' = gato. 'pes' = perro."],
   ['¿Cómo se dice "libro"?',['auto','dom','telefón','kniha'],3,"'kniha' = libro. Los libros son muy valorados en la cultura eslovaca."],
   ['¿Qué significa "vták"?',['pez','pájaro','gato','perro'],1,"'vták' = pájaro. Los bosques eslovacos están llenos de pájaros."]
  ]
 },
 {id:'s1l7',ti:'Comida y bebidas',em:'🍽️',
  sl:[
   ['v','Comida',[['chlieb','pan','chlyeb'],['mäso','carne','mye-so'],['jablko','manzana','yab-lko'],['syr','queso','sir']]],
   ['v','Bebidas',[['voda','agua','vo-da'],['mlieko','leche','mlye-ko'],['káva','café','ka-va'],['čaj','té','chai']]],
   ['t','La cocina eslovaca','El plato nacional es "bryndzové halušky" (ñoquis con queso de oveja). El "syr" (queso) es fundamental. ¡El "pivo" (cerveza) también es muy popular!']
  ],
  w:[['chlieb','pan','🍞'],['mäso','carne','🥩'],['jablko','manzana','🍎'],['voda','agua','💧'],['mlieko','leche','🥛'],['káva','café','☕'],['pivo','cerveza','🍺'],['čaj','té','🍵']],
  p:[
   ['Pan y queso','Chlieb a syr',[['Chlieb','Pan'],['a','y'],['syr','queso']],['mäso','jablko'],'Una combinación clásica eslovaca.'],
   ['Café con leche','Káva s mliekom',[['Káva','Café'],['s','con'],['mliekom','leche']],['voda','čaj'],"'s' = con. 'mliekom' es la forma instrumental de 'mlieko'."]
  ],
  mc:[
   ['¿Qué significa "voda"?',['leche','café','té','agua'],3,"'voda' = agua. Muy similar al ruso 'вода'."],
   ['¿Cómo se dice "pan"?',['mäso','syr','chlieb','jablko'],2,"'chlieb' = pan. El pan es básico en la dieta eslovaca."],
   ['¿Qué bebida es "pivo"?',['café','leche','té','cerveza'],3,"'pivo' = cerveza. ¡Eslovaquia tiene excelentes cervezas!"]
  ]
 },
 {id:'s1test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Hora del examen!','Vas a responder 15 preguntas de toda la Sección 1. Necesitas 12 correctas (80%) para desbloquear la Sección 2. ¡Tú puedes!'],
   ['g','Repaso rápido','Todo lo que aprendiste en la Sección 1:',[['Saludos','Ahoj, Dobrý deň, Ďakujem'],['Números','jeden...desať'],['Familia','mama, otec, brat, sestra'],['Comida','chlieb, voda, káva, pivo']]],
   ['t','Consejo final','Lee con calma. Si no sabes, piensa en el sonido de la palabra. ¡Muchas palabras suenan similar a cómo se escriben!']
  ],
  w:[],p:[],mc:[]
 }
]},
{id:'s2',ti:'El mundo a tu alrededor',em:'🌍',col:'#4361EE',
gr:{
  intro:'La Sección 2 amplía tu eslovaco con tiempo, ciudad, cuerpo humano, clima, restaurante y frases de supervivencia.',
  tables:[
    {title:'Días de la semana',note:'Se escriben en minúsculas en eslovaco, al contrario que en inglés.',
     h:['Día','Eslovaco','Origen / tip'],
     r:[['Lunes','pondelok','Del antiguo concepto de inicio de semana'],['Martes','utorok',"De 'utor' = segundo"],['Miércoles','streda',"De 'stred' = centro de la semana"],['Jueves','štvrtok',"De 'štvrtý' = cuarto"],['Viernes','piatok',"De 'piaty' = quinto"],['Sábado','sobota',"Del hebreo 'Shabbat'"],['Domingo','nedeľa',"De 'ne-deľa' = sin trabajo"]]},
    {title:'Meses del año',
     h:['Mes','Eslovaco','Mes','Eslovaco'],
     r:[['Enero','január','Julio','júl'],['Febrero','február','Agosto','august'],['Marzo','marec','Septiembre','september'],['Abril','apríl','Octubre','október'],['Mayo','máj','Noviembre','november'],['Junio','jún','Diciembre','december']]},
    {title:'Las estaciones',
     h:['Estación','Eslovaco','Descripción'],
     r:[['Primavera','jar','Marzo–Mayo. Flores y temperaturas suaves.'],['Verano','leto','Junio–Agosto. Ideal para senderismo en los Tatras.'],['Otoño','jeseň','Septiembre–Noviembre. Bosques de colores.'],['Invierno','zima','Diciembre–Febrero. Nieve en los Alpes eslovacos.']]},
    {title:'Expresiones de tiempo',
     h:['Español','Eslovaco','Ejemplo'],
     r:[['hoy','dnes','Dnes je pondelok. → Hoy es lunes.'],['mañana (día sig.)','zajtra','Zajtra idem. → Mañana voy.'],['ayer','včera','Včera bol piatok. → Ayer fue viernes.'],['esta mañana','dnes ráno','—'],['esta tarde/noche','dnes večer','—'],['esta semana','tento týždeň','—']]},
    {title:'Frases de supervivencia esenciales',note:'Aprende estas frases de memoria. Pueden salvarte en cualquier situación.',
     h:['Español','Eslovaco','Pronunciación'],
     r:[['No entiendo.','Nerozumiem.','ne-ro-ZU-myem'],['¿Habla inglés?','Hovoríte po anglicky?','ho-vo-REE-te'],['¿Dónde está...?','Kde je...?','kde ye'],['¿Cuánto cuesta?','Koľko stojí?','KOL-ko STO-yi'],['¡Ayuda!','Pomoc!','PO-mots'],['Me duele [parte].','Bolí ma [parte].','bo-LEE ma'],['Llame a la policía.','Zavolajte políciu.','za-vo-LAY-te']]}
  ],
  tips:["🔑 Los días y los meses se escriben en minúscula en eslovaco.","🔑 Para expresar tiempo, usa el sustantivo temporal directamente, sin preposición: 'Dnes ráno', 'Zajtra večer'.","🔑 'Nerozumiem' (No entiendo) y 'Pomoc!' (¡Ayuda!) son las frases más importantes si viajas a Eslovaquia.","🔑 Para preguntar la hora: 'Koľko je hodín?' Para responder: 'Je [una hora]' / 'Sú [dos o más] hodiny'."]
},
ls:[
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
 {id:'s2test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Gran examen!','Vas a responder 15 preguntas de toda la Sección 2. Necesitas 12 correctas (80%) para pasar. ¡Eres capaz!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 2:',[['Días','pondelok...nedeľa'],['Ciudad','banka, škola, letisko'],['Cuerpo','hlava, oko, srdce'],['Restaurante','jedlo, účet, chcem']]],
   ['t','¡Eres increíble!','Has aprendido más de 80 palabras en eslovaco. ¡Muy pocos hispanohablantes llegan tan lejos!']
  ],
  w:[],p:[],mc:[]
 }
]},
{id:'s3',ti:'La vida diaria',em:'🗓️',col:'#00A86B',
gr:{
  intro:'La Sección 3 introduce los verbos en presente, los números hasta 100, la ropa, las compras, los pasatiempos, las preguntas, las direcciones y los adjetivos con concordancia de género.',
  tables:[
    {title:'Verbos en presente — patrones principales',note:'"mať" y "robiť" son irregulares e imprescindibles. Los verbos en "-ovať" (como "pracovať") siguen un patrón muy productivo.',
     h:['Pronombre','mať (tener)','robiť (hacer)','pracovať (-ovať)'],
     r:[['ja','mám','robím','pracujem'],['ty','máš','robíš','pracuješ'],['on/ona/ono','má','robí','pracuje'],['my','máme','robíme','pracujeme'],['vy','máte','robíte','pracujete'],['oni/ony','majú','robia','pracujú']]},
    {title:'Números 11–100',
     h:['Número','Eslovaco','Número','Eslovaco'],
     r:[['11','jedenásť','17','sedemnásť'],['12','dvanásť','18','osemnásť'],['13','trinásť','19','devätnásť'],['14','štrnásť','20','dvadsať'],['15','pätnásť','30','tridsať'],['16','šestnásť','40','štyridsať'],['50','päťdesiat','80','osemdesiat'],['60','šesťdesiat','90','deväťdesiat'],['70','sedemdesiat','100','sto']]},
    {title:'Adjetivos: concordancia de género',note:'La mayoría de adjetivos siguen el patrón -ý (masculino) / -á (femenino) / -é (neutro). Esta es la base de la declinación de adjetivos en eslovaco — vuelve aquí cuando necesites repasar las terminaciones.',
     h:['Masculino','Femenino','Neutro','Español'],
     r:[['veľký','veľká','veľké','grande'],['malý','malá','malé','pequeño'],['pekný','pekná','pekné','bonito'],['starý','stará','staré','viejo'],['nový','nová','nové','nuevo'],['dobrý','dobrá','dobré','bueno']]},
    {title:'Palabras interrogativas',
     h:['Eslovaco','Español'],
     r:[['kto','quién'],['čo','qué'],['kde','dónde'],['kedy','cuándo'],['prečo','por qué'],['ako','cómo'],['koľko','cuánto']]},
    {title:'Expresar gustos: rád / rada / radi',note:'"Rád" (hombre), "rada" (mujer) o "radi" (plural/grupo) + verbo en presente = "me/nos gusta hacer algo".',
     h:['Sujeto','Forma','Ejemplo'],
     r:[['Yo (hombre)','rád + verbo','Rád čítam. = Me gusta leer.'],['Yo (mujer)','rada + verbo','Rada tancujem. = Me gusta bailar.'],['Nosotros','radi + verbo','Radi plávame. = Nos gusta nadar.']]}
  ],
  tips:["🔑 'mať' (tener) y 'robiť' (hacer) son los verbos más usados — apréndelos primero.","🔑 Los números del 11 al 19 terminan en '-násť'; las decenas (20, 30...) terminan en '-dsať' o '-desiat'.","🔑 Los adjetivos cambian su terminación según el género: -ý (m), -á (f), -é (n). Este patrón se aplica a la mayoría de adjetivos.","🔑 'Rád/rada/radi' + verbo es la forma eslovaca de decir 'me gusta hacer algo'."]
},
ls:[
 {id:'s3l1',ti:'Tener y hacer',em:'🤲',
  sl:[
   ['v','Verbos esenciales',[['mať','tener','mat'],['robiť','hacer','ro-bit'],['vedieť','saber','ve-dyet'],['môcť','poder','mohts']]],
   ['g','Presente: mať (tener)','El verbo "mať" es uno de los más usados. Apréndelo bien.',[['ja','mám'],['ty','máš'],['on/ona/ono','má'],['my','máme'],['vy','máte'],['oni/ony','majú']]],
   ['g','Presente: robiť (hacer)','"Robiť" sigue el patrón regular de los verbos en -iť.',[['ja','robím'],['ty','robíš'],['on/ona/ono','robí'],['my','robíme'],['vy','robíte'],['oni/ony','robia']]]
  ],
  w:[['mám','tengo','🤲'],['máš','tienes','👉'],['má','tiene','☝️'],['robím','hago','🛠️'],['robíš','haces','🔨'],['robí','hace','⚙️'],['vieme','sabemos','🧠'],['môžem','puedo','💪']],
  p:[
   ['Tengo tiempo','Mám čas',[['Mám','Tengo'],['čas','tiempo']],['robím','môžem'],"'čas' = tiempo. 'Mám čas' es una frase muy útil."],
   ['¿Qué haces?','Čo robíš?',[['Čo','Qué'],['robíš','haces']],['máš','vieš'],"'Čo' = qué. Pregunta muy común para iniciar conversación."]
  ],
  mc:[
   ['¿Cómo se dice "tengo"?',['máš','má','mám','majú'],2,"'mám' = tengo (yo). 'máš' = tienes (tú)."],
   ['¿Qué significa "robíš"?',['hago','haces','hace','hacemos'],1,"'robíš' = haces (tú). 'robím' = hago (yo)."],
   ['¿Cómo se dice "ellos tienen"?',['máme','máte','majú','má'],2,"'majú' = tienen (ellos/ellas). 'máme' = tenemos."]
  ]
 },
 {id:'s3l2',ti:'Mi rutina diaria',em:'⏰',
  sl:[
   ['v','Rutina - mañana',[['vstávať','levantarse','vsta-vat'],['raňajkovať','desayunar','ra-nyay-ko-vat'],['umývať sa','lavarse','u-mi-vat sa'],['obliekať sa','vestirse','ob-lye-kat sa']]],
   ['v','Rutina - resto del día',[['pracovať','trabajar','pra-tso-vat'],['obedovať','almorzar','o-be-do-vat'],['večerať','cenar','ve-che-rat'],['spať','dormir','spat']]],
   ['g','Presente: pracovať (-ovať)','Los verbos terminados en "-ovať" siguen este patrón en presente.',[['ja','pracujem'],['ty','pracuješ'],['on/ona/ono','pracuje'],['my','pracujeme'],['vy','pracujete'],['oni/ony','pracujú']]]
  ],
  w:[['vstávam','me levanto','⏰'],['raňajkujem','desayuno','🥐'],['pracujem','trabajo','💼'],['obedujem','almuerzo','🍲'],['večeriam','ceno','🍝'],['spím','duermo','😴']],
  p:[
   ['Me levanto a las siete','Vstávam o siedmej',[['Vstávam','Me levanto'],['o siedmej','a las siete']],['pracujem','spím'],"'o siedmej' = a las siete (forma de hora)."],
   ['Trabajo y luego ceno','Pracujem a potom večeriam',[['Pracujem','Trabajo'],['a potom','y luego'],['večeriam','ceno']],['raňajkujem','obedujem'],"'a potom' = y luego/después."]
  ],
  mc:[
   ['¿Qué significa "vstávať"?',['dormir','levantarse','cenar','trabajar'],1,"'vstávať' = levantarse."],
   ['¿Cómo se dice "yo trabajo"?',['pracuje','pracujem','pracujeme','pracuješ'],1,"'pracujem' = trabajo (yo)."],
   ['¿Qué significa "večerať"?',['desayunar','almorzar','cenar','dormir'],2,"'večerať' = cenar. 'večer' = tarde/noche."]
  ]
 },
 {id:'s3l3',ti:'Números 11–100',em:'🔢',
  sl:[
   ['v','Números 11-19',[['jedenásť','once','ye-de-nasty'],['dvanásť','doce','dva-nasty'],['trinásť','trece','tri-nasty'],['pätnásť','quince','pyat-nasty'],['dvadsať','veinte','dvad-sat']]],
   ['v','Decenas',[['tridsať','treinta','trid-sat'],['štyridsať','cuarenta','shti-rid-sat'],['päťdesiat','cincuenta','pyat-de-syat'],['sto','cien','sto']]],
   ['g','El patrón -násť','Los números del 11 al 19 se forman añadiendo "-násť" a la base del número (con pequeñas excepciones).',[['11 = jeden + násť','jedenásť'],['12 = dva + násť','dvanásť'],['13 = tri + násť','trinásť'],['20 = dva + dsať','dvadsať'],['30 = tri + dsať','tridsať']]]
  ],
  w:[['jedenásť','once','1️⃣1️⃣'],['dvanásť','doce','1️⃣2️⃣'],['dvadsať','veinte','2️⃣0️⃣'],['tridsať','treinta','3️⃣0️⃣'],['päťdesiat','cincuenta','5️⃣0️⃣'],['sto','cien','💯']],
  p:[
   ['Tengo veinte años','Mám dvadsať rokov',[['Mám','Tengo'],['dvadsať','veinte'],['rokov','años']],['tridsať','štyridsať'],"'rokov' = años. La estructura es igual: tener + número + años."],
   ['Cuesta cincuenta euros','Stojí päťdesiat eur',[['Stojí','Cuesta'],['päťdesiat','cincuenta'],['eur','euros']],['sto','dvadsať'],"'eur' es la forma del genitivo plural de 'euro'."]
  ],
  mc:[
   ['¿Qué número es "dvadsať"?',['12','20','30','100'],1,"'dvadsať' = 20 (veinte)."],
   ['¿Cómo se dice "cien"?',['desať','sto','tisíc','sto desať'],1,"'sto' = 100 (cien)."],
   ['¿Qué número es "trinásť"?',['3','13','30','33'],1,"'trinásť' = 13 (trece). El sufijo '-násť' indica 'diez más'."]
  ]
 },
 {id:'s3l4',ti:'La ropa',em:'👕',
  sl:[
   ['v','Ropa básica',[['tričko','camiseta','trich-ko'],['nohavice','pantalones','no-ha-vi-tse'],['topánky','zapatos','to-pan-ki'],['bunda','chaqueta','bun-da']]],
   ['v','Más ropa',[['šaty','vestido','sha-ti'],['sukňa','falda','suk-nya'],['čiapka','gorro','chyap-ka'],['ponožky','calcetines','po-nozh-ki']]],
   ['t','Plurales en eslovaco','Muchas prendas son siempre plurales en eslovaco: "nohavice" (pantalones), "topánky" (zapatos), "ponožky" (calcetines). ¡Como en español!']
  ],
  w:[['tričko','camiseta','👕'],['nohavice','pantalones','👖'],['topánky','zapatos','👟'],['bunda','chaqueta','🧥'],['šaty','vestido','👗'],['čiapka','gorro','🧢'],['sukňa','falda','👚'],['ponožky','calcetines','🧦']],
  p:[
   ['Tengo una chaqueta nueva','Mám novú bundu',[['Mám','Tengo'],['novú','nueva'],['bundu','chaqueta']],['tričko','topánky'],"'novú' es la forma femenina acusativa de 'nový' (nuevo), porque concuerda con 'bundu'."],
   ['Los zapatos son bonitos','Topánky sú pekné',[['Topánky','Los zapatos'],['sú','son'],['pekné','bonitos']],['nohavice','ponožky'],"'sú' = son (plural de 'byť'). 'pekné' concuerda en plural."]
  ],
  mc:[
   ['¿Qué significa "nohavice"?',['camiseta','pantalones','zapatos','calcetines'],1,"'nohavice' = pantalones. Viene de 'noha' = pierna."],
   ['¿Cómo se dice "zapatos"?',['topánky','ponožky','sukňa','čiapka'],0,"'topánky' = zapatos. 'ponožky' = calcetines."],
   ['¿Qué prenda es "čiapka"?',['vestido','falda','gorro','chaqueta'],2,"'čiapka' = gorro. Muy útil en el invierno eslovaco."]
  ]
 },
 {id:'s3l5',ti:'De compras',em:'🛍️',
  sl:[
   ['v','En la tienda',[['obchod','tienda','ob-chod'],['peniaze','dinero','pe-nya-ze'],['cena','precio','tse-na'],['pokladňa','caja','po-klad-nya']]],
   ['v','Verbos de compra',[['kupovať','comprar','ku-po-vat'],['platiť','pagar','pla-tit'],['drahý','caro','dra-hee'],['lacný','barato','lats-nee']]],
   ['g','Preguntar el precio','Para preguntar cuánto cuesta algo:',[['¿Cuánto cuesta?','Koľko to stojí?'],['Cuesta diez euros','Stojí to desať eur'],['Es muy caro','Je to veľmi drahé'],['Es barato','Je to lacné']]]
  ],
  w:[['obchod','tienda','🏪'],['peniaze','dinero','💰'],['cena','precio','🏷️'],['kupovať','comprar','🛒'],['platiť','pagar','💳'],['drahý','caro','💎'],['lacný','barato','🪙']],
  p:[
   ['¿Cuánto cuesta esto?','Koľko to stojí?',[['Koľko','Cuánto'],['to','esto'],['stojí','cuesta']],['drahé','lacné'],"'Koľko' = cuánto. Frase clave para ir de compras."],
   ['Es muy caro','Je to veľmi drahé',[['Je to','Es'],['veľmi','muy'],['drahé','caro']],['lacné','pekné'],"'veľmi' = muy. 'drahé' concuerda con 'to' (neutro)."]
  ],
  mc:[
   ['¿Cómo preguntas el precio?',['Kde je obchod?','Koľko to stojí?','Čo robíš?','Mám peniaze'],1,"'Koľko to stojí?' = ¿Cuánto cuesta esto?"],
   ['¿Qué significa "lacný"?',['caro','barato','gratis','nuevo'],1,"'lacný' = barato. 'drahý' = caro."],
   ['¿Cómo se dice "comprar"?',['platiť','predávať','kupovať','mať'],2,"'kupovať' = comprar. 'platiť' = pagar."]
  ]
 },
 {id:'s3l6',ti:'Pasatiempos',em:'🎯',
  sl:[
   ['v','Actividades',[['čítať','leer','chee-tat'],['hrať','jugar','hrat'],['spievať','cantar','spye-vat'],['tancovať','bailar','tan-tso-vat']]],
   ['v','Más actividades',[['plávať','nadar','pla-vat'],['behať','correr','be-hat'],['kresliť','dibujar','kres-lit'],['variť','cocinar','va-rit']]],
   ['g','Expresar gustos: rád / rada','En eslovaco, para decir que algo te gusta hacer, usas "rád" (hombres) o "rada" (mujeres) + verbo en presente.',[['(M) Me gusta leer','Rád čítam'],['(F) Me gusta leer','Rada čítam'],['(M) Me gusta nadar','Rád plávam'],['(F) Me gusta bailar','Rada tancujem']]]
  ],
  w:[['čítať','leer','📖'],['hrať','jugar','🎮'],['spievať','cantar','🎤'],['tancovať','bailar','💃'],['plávať','nadar','🏊'],['behať','correr','🏃'],['kresliť','dibujar','🎨'],['variť','cocinar','👨‍🍳']],
  p:[
   ['Me gusta leer libros','Rád čítam knihy',[['Rád','Me gusta (m.)'],['čítam','leo'],['knihy','libros']],['hrám','spievam'],"'Rád' lo usa un hombre. Una mujer diría 'Rada'. Estructura única del eslovaco."],
   ['Me gusta nadar y correr','Rád plávam a behám',[['Rád','Me gusta (m.)'],['plávam','nado'],['a','y'],['behám','corro']],['tancujem','kreslím'],"Se pueden encadenar varias actividades con 'a' (y)."]
  ],
  mc:[
   ['¿Qué significa "tancovať"?',['cantar','bailar','jugar','dibujar'],1,"'tancovať' = bailar."],
   ['¿Cómo dice un hombre "me gusta"?',['Rada','Rád','Mám','Som'],1,"Un hombre usa 'Rád', una mujer 'Rada'."],
   ['¿Qué significa "variť"?',['leer','nadar','cocinar','correr'],2,"'variť' = cocinar."]
  ]
 },
 {id:'s3l7',ti:'Preguntas y direcciones',em:'🧭',
  sl:[
   ['v','Palabras de pregunta',[['kto','quién','kto'],['čo','qué','cho'],['kde','dónde','kde'],['kedy','cuándo','ke-di'],['prečo','por qué','pre-cho'],['ako','cómo','a-ko']]],
   ['v','Direcciones',[['vľavo','a la izquierda','vlya-vo'],['vpravo','a la derecha','vpra-vo'],['rovno','recto','rov-no'],['blízko','cerca','bleez-ko'],['ďaleko','lejos','dya-le-ko']]],
   ['t','Pidiendo direcciones','Frase clave: "Choďte rovno a potom vľavo." (Vaya recto y luego a la izquierda). "Choďte" es la forma formal de "ir" en imperativo.']
  ],
  w:[['kto','quién','🙋'],['čo','qué','❓'],['kde','dónde','📍'],['kedy','cuándo','⏰'],['prečo','por qué','🤔'],['vľavo','izquierda','⬅️'],['vpravo','derecha','➡️'],['rovno','recto','⬆️']],
  p:[
   ['¿Dónde está el banco?','Kde je banka?',[['Kde','Dónde'],['je','está'],['banka','el banco']],['čo','kedy'],"Repaso de 'Kde je...?' con vocabulario nuevo."],
   ['Vaya recto y luego a la derecha','Choďte rovno a potom vpravo',[['Choďte','Vaya'],['rovno','recto'],['a potom','y luego'],['vpravo','a la derecha']],['vľavo','ďaleko'],"'Choďte' = vaya (formal/imperativo)."]
  ],
  mc:[
   ['¿Qué significa "kedy"?',['quién','cuándo','dónde','por qué'],1,"'kedy' = cuándo."],
   ['¿Cómo se dice "a la izquierda"?',['vpravo','rovno','vľavo','blízko'],2,"'vľavo' = a la izquierda. 'vpravo' = a la derecha."],
   ['¿Qué significa "ďaleko"?',['cerca','lejos','recto','aquí'],1,"'ďaleko' = lejos. 'blízko' = cerca."]
  ]
 },
 {id:'s3l8',ti:'Adjetivos y descripciones',em:'🎭',
  sl:[
   ['v','Adjetivos comunes (masc.)',[['veľký','grande','vel-kee'],['malý','pequeño','ma-lee'],['pekný','bonito','pek-nee'],['starý','viejo','sta-ree'],['nový','nuevo','no-vee'],['dobrý','bueno','dob-ree']]],
   ['g','Concordancia de género','Los adjetivos cambian su terminación según el género del sustantivo: masculino -ý, femenino -á, neutro -é.',[['grande (m./f./n.)','veľký / veľká / veľké'],['nuevo (m./f./n.)','nový / nová / nové'],['Un perro grande (m.)','veľký pes'],['Una habitación grande (f.)','veľká izba'],['Un coche grande (n.)','veľké auto']]],
   ['t','Truco para recordar','-ý → masculino, -á → femenino, -é → neutro. ¡Es el mismo patrón que viste con los colores en la Sección 1!']
  ],
  w:[['veľký','grande','🐘'],['malý','pequeño','🐭'],['pekný','bonito','✨'],['starý','viejo','👴'],['nový','nuevo','🆕'],['dobrý','bueno','👍']],
  p:[
   ['Tengo una habitación grande','Mám veľkú izbu',[['Mám','Tengo'],['veľkú','grande'],['izbu','habitación']],['malú','novú'],"'veľkú' es la forma femenina acusativa, porque 'izba' (habitación) es femenino."],
   ['El perro es viejo','Pes je starý',[['Pes','El perro'],['je','es'],['starý','viejo']],['nový','malý'],"'starý' concuerda con 'pes' (masculino)."]
  ],
  mc:[
   ['¿Cómo se dice "grande" con un sustantivo masculino?',['veľká','veľké','veľký','veľkí'],2,"'veľký' = grande (masculino). '-ý' es la terminación masculina."],
   ['¿Qué significa "starý"?',['nuevo','viejo','bonito','pequeño'],1,"'starý' = viejo. 'nový' = nuevo."],
   ['¿Cuál es la forma femenina de "pekný"?',['pekné','pekná','pekný','pekní'],1,"'pekná' = bonita (femenino). Termina en '-á'."]
  ]
 },
 {id:'s3test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Tercer examen!','Vas a responder 15 preguntas de toda la Sección 3. Necesitas 12 correctas (80%) para desbloquear la Sección 4. ¡Sigue así!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 3:',[['Verbos','mám, robím, pracujem'],['Números','jedenásť...sto'],['Ropa','tričko, nohavice, topánky'],['Adjetivos','veľký, malý, pekný, nový']]],
   ['t','¡Vas genial!','Ya dominas verbos en presente, números hasta cien y adjetivos básicos. ¡La base de tu eslovaco es cada vez más sólida!']
  ],
  w:[],p:[],mc:[]
 }
]}
];

async function seed() {
  console.log('Seeding curriculum...');

  await execute('DELETE FROM lessons');
  await execute('DELETE FROM sections');

  for (let si = 0; si < CURRICULUM.length; si++) {
    const sec = CURRICULUM[si];
    await execute(
      'INSERT INTO sections (id, sort_order, title, emoji, color, grammar_ref) VALUES ($1, $2, $3, $4, $5, $6)',
      [sec.id, si + 1, sec.ti, sec.em, sec.col, JSON.stringify(sec.gr || {})]
    );
    for (let li = 0; li < sec.ls.length; li++) {
      const les = sec.ls[li];
      await execute(
        `INSERT INTO lessons (id, section_id, sort_order, title, emoji, is_test, slides, words, phrases, multiple_choice)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          les.id,
          sec.id,
          li + 1,
          les.ti,
          les.em,
          !!les.isTest,
          JSON.stringify(les.sl || []),
          JSON.stringify(les.w || []),
          JSON.stringify(les.p || []),
          JSON.stringify(les.mc || [])
        ]
      );
    }
    console.log(`  ✓ Section ${sec.id}: ${sec.ls.length} lessons`);
  }

  console.log('Done.');
}

if (require.main === module) {
  seed().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
}
module.exports = { seed };
