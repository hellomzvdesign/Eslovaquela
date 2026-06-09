// Run: DATABASE_URL=<your-neon-url> node seed.js
const { execute } = require('./api/db');

const CURRICULUM = [
{id:'s1',ti:'¡Hola, Eslovaquia!',em:'🇸🇰',col:'#FF6B35',ls:[
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
{id:'s2',ti:'El mundo a tu alrededor',em:'🌍',col:'#4361EE',ls:[
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
]}
];

async function seed() {
  console.log('Seeding curriculum...');

  await execute('DELETE FROM lessons');
  await execute('DELETE FROM sections');

  for (let si = 0; si < CURRICULUM.length; si++) {
    const sec = CURRICULUM[si];
    await execute(
      'INSERT INTO sections (id, sort_order, title, emoji, color) VALUES ($1, $2, $3, $4, $5)',
      [sec.id, si + 1, sec.ti, sec.em, sec.col]
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
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
