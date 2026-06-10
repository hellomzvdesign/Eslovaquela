// Run: DATABASE_URL=<your-neon-url> node seed.js
const { execute } = require('./api/db');

const CURRICULUM = [
{id:'s1',ti:'¡Hola, Eslovaquia!',em:'🇸🇰',col:'#FF6B35',
gr:{
  intro:'La Sección 1 te da tus primeras 11 palabras del eslovaco: los pronombres ja/ty/on, el verbo "byť" (ser/estar) en sus formas más básicas (som/si/je), la negación "nie" y vocabulario esencial (dobre, ako, doma, priateľ).',
  patches:[
    {op:'newTable', category:'zamena', tableId:'zamena-osobne-basico',
     title:'Pronombres personales (básico)',note:'En eslovaco los pronombres a menudo se omiten porque el verbo ya indica la persona. Aquí empezamos solo con tres.',
     h:['Persona','Eslovaco','Español'],
     r:[['1ª singular','ja','yo'],['2ª singular','ty','tú'],['3ª sing. masc.','on','él']]},
    {op:'newTable', category:'byt-pritomny', tableId:'byt-basico',
     title:'Verbo byť — ser / estar (básico)',note:"A diferencia del español, 'byť' cumple las funciones de ser Y estar.",
     h:['Pronombre','Forma','Ejemplo'],
     r:[['ja','som','Ja som doma. → Yo estoy en casa.'],['ty','si','Ty si priateľ. → Tú eres amigo.'],['on','je','On je dobre. → Él está bien.']]},
    {op:'newTable', category:'byt-pritomny', tableId:'byt-negacion',
     title:'Negación de byť',note:"'nie' se coloca siempre justo antes del verbo.",
     h:['Afirmativo','Negativo'],
     r:[['Ja som (yo soy/estoy)','Ja nie som (yo no soy/estoy)'],['Ty si (tú eres/estás)','Ty nie si (tú no eres/estás)'],['On je (él es/está)','On nie je (él no es/está)']]},
    {op:'newTable', category:'otazky-spojky', tableId:'pregunta-ako-si',
     title:'Preguntar "¿cómo estás?"',note:"'Ako' (cómo) + 'byť' forma la pregunta sobre el estado de alguien.",
     h:['Español','Eslovaco'],
     r:[['¿Cómo estás?','Ako si?'],['Estoy bien.','Som dobre.'],['¿Cómo está él?','Ako je on?'],['Él está bien.','On je dobre.']]}
  ],
  tips:["🔑 En eslovaco, pronombre + 'byť' ya forma una frase completa: 'Ja som' = 'Yo soy/estoy'.","🔑 'byť' equivale a SER y ESTAR del español al mismo tiempo. El contexto indica cuál.","🔑 La negación 'nie' va siempre justo antes del verbo: 'nie som', 'nie si', 'nie je'.","🔑 'Ako si?' (¿Cómo estás?) se responde con 'Som dobre.' (Estoy bien)."]
},
ls:[
 {id:'s1l1',ti:'Primeros pasos',em:'👋',
  sl:[
   ['t','¡Bienvenido al eslovaco!','En esta primera lección solo tienes que MIRAR y ESCUCHAR 3 palabras nuevas. Todavía no hay preguntas — solo familiarízate con ellas.'],
   ['v','Tus primeras 3 palabras',[['ja','yo','ya'],['ty','tú','ti'],['som','soy / estoy','som']]]
  ],
  w:[['ja','yo','🙋'],['ty','tú','👉'],['som','soy / estoy','✅']],
  p:[],
  mc:[]
 },
 {id:'s1l2',ti:'Dos palabras más',em:'🆗',
  sl:[
   ['v','Suma estas 2 palabras',[['si','eres / estás','si'],['nie','no','nie']]],
   ['t','¡Ya tienes 5 palabras!','Repasa: ja=yo, ty=tú, som=soy/estoy, si=eres/estás, nie=no. En la próxima lección vas a empezar a combinarlas.']
  ],
  w:[['si','eres / estás','👍'],['nie','no','🚫']],
  p:[],
  mc:[]
 },
 {id:'s1l3',ti:'Ja som. Ty si.',em:'🔗',
  sl:[
   ['t','¡A combinar!','Ya conoces ja, ty, som, si y nie. Ahora vas a juntarlas en frases cortas.'],
   ['g','Frases con byť','Pronombre + forma de "byť" ya es una frase completa.',[['Yo soy. / Yo estoy.','Ja som.'],['Tú eres. / Tú estás.','Ty si.'],['Yo no soy / no estoy.','Ja nie som.'],['Tú no eres / no estás.','Ty nie si.']]]
  ],
  w:[],
  p:[
   ['Yo soy. / Yo estoy.','Ja som.',[['Ja','Yo'],['som','soy / estoy']],['ty','si'],"'Ja som' = pronombre 'ja' + 'som'."],
   ['Tú eres. / Tú estás.','Ty si.',[['Ty','Tú'],['si','eres / estás']],['ja','som'],"'Ty si' = pronombre 'ty' + 'si'."],
   ['Yo no soy. / Yo no estoy.','Ja nie som.',[['Ja','Yo'],['nie','no'],['som','soy / estoy']],['ty','si'],"La negación 'nie' va justo antes del verbo."],
   ['Tú no eres. / Tú no estás.','Ty nie si.',[['Ty','Tú'],['nie','no'],['si','eres / estás']],['ja','som'],"Mismo patrón: 'nie' + 'si'."]
  ],
  mc:[
   ['¿Cómo se dice "Yo soy / Yo estoy"?',['Ty si','Ja som','Nie som','Ja si'],1,"'Ja som' = Yo soy / Yo estoy."],
   ['¿Cómo se dice "Tú no eres / no estás"?',['Ty nie si','Nie ty si','Ty si nie','Ja nie si'],0,"La negación 'nie' va antes del verbo: 'Ty nie si'."],
   ['¿Qué significa "Ja nie som"?',['Tú no eres','Yo no soy / no estoy','Yo soy / estoy','Tú eres'],1,"'Ja nie som' = Yo no soy / Yo no estoy."]
  ]
 },
 {id:'s1l4',ti:'Ja som ja. Ty si ty.',em:'🔁',
  sl:[
   ['t','Más combinaciones','Sigamos practicando con las mismas 5 palabras: ja, ty, som, si, nie.'],
   ['g','Afirmación y negación','Compara las formas afirmativas y negativas:',[['Yo soy / estoy','Ja som'],['Yo no soy / no estoy','Ja nie som'],['Tú eres / estás','Ty si'],['Tú no eres / no estás','Ty nie si']]]
  ],
  w:[],
  p:[
   ['Yo soy yo.','Ja som ja.',[['Ja','Yo'],['som','soy'],['ja','yo']],['ty','si'],"Frase sencilla para fijar 'ja' y 'som' juntos."],
   ['Tú eres tú.','Ty si ty.',[['Ty','Tú'],['si','eres'],['ty','tú']],['ja','som'],"Mismo patrón con 'ty' y 'si'."],
   ['Yo no soy tú.','Ja nie som ty.',[['Ja','Yo'],['nie','no'],['som','soy'],['ty','tú']],['si'],"Combina negación + los dos pronombres."],
   ['Tú no eres yo.','Ty nie si ja.',[['Ty','Tú'],['nie','no'],['si','eres'],['ja','yo']],['som'],"Mismo patrón al revés."]
  ],
  mc:[
   ['¿Cómo se dice "Yo soy yo"?',['Ty si ty','Ja som ja','Ja nie som','Ty nie si'],1,"'Ja som ja' = Yo soy yo."],
   ['¿Cómo se dice "Tú no eres yo"?',['Ty nie si ja','Ja nie som ty','Ty si ja','Ja som ty'],0,"'Ty nie si ja' = Tú no eres yo."],
   ['Elige la traducción de "Yo no soy tú"',['Ty nie si ja','Ja nie som ty','Ja som ty','Ty si ja'],1,"'Ja nie som ty' = Yo no soy tú."]
  ]
 },
 {id:'s1l5',ti:'Él también',em:'🙆',
  sl:[
   ['v','Una persona más',[['on','él','on'],['je','es / está','ye']]],
   ['g','La tercera persona','Ahora puedes hablar de otra persona, no solo de ti.',[['Él es. / Él está.','On je.'],['Él no es / no está.','On nie je.'],['Yo soy / estoy.','Ja som.'],['Tú eres / estás.','Ty si.']]]
  ],
  w:[['on','él','🙆'],['je','es / está','✔️']],
  p:[
   ['Él es. / Él está.','On je.',[['On','Él'],['je','es / está']],['ja','som'],"'On je' sigue el mismo patrón que 'ja som' y 'ty si'."],
   ['Él no es. / Él no está.','On nie je.',[['On','Él'],['nie','no'],['je','es / está']],['ty','si'],"'nie' + 'je' = no es / no está."]
  ],
  mc:[
   ['¿Cómo se dice "él"?',['ja','ty','on','si'],2,"'on' = él."],
   ['¿Cómo se dice "Él es / Él está"?',['On si','On je','On som','Je on'],1,"'On je' = Él es / Él está."],
   ['¿Qué significa "On nie je"?',['Él es / está','Él no es / no está','Yo no soy','Tú no eres'],1,"'On nie je' = Él no es / no está."]
  ]
 },
 {id:'s1l6',ti:'¿Cómo estás?',em:'😊',
  sl:[
   ['v','Dos palabras nuevas',[['dobre','bien','do-bre'],['ako','cómo','a-ko']]],
   ['g','Preguntar cómo está alguien','"Ako" + "byť" forma la pregunta "¿Cómo estás/está...?".',[['¿Cómo estás?','Ako si?'],['Estoy bien.','Som dobre.'],['¿Cómo está él?','Ako je on?'],['Él está bien.','On je dobre.']]]
  ],
  w:[['dobre','bien','👌'],['ako','cómo','❓']],
  p:[
   ['¿Cómo estás?','Ako si?',[['Ako','Cómo'],['si','estás']],['som','je'],"'Ako' + 'si' = '¿Cómo estás?'."],
   ['Estoy bien.','Som dobre.',[['Som','Estoy'],['dobre','bien']],['ja','ty'],"'Som dobre' = Estoy bien."],
   ['Él está bien.','On je dobre.',[['On','Él'],['je','está'],['dobre','bien']],['ty','si'],"Mismo patrón con 'on je'."]
  ],
  mc:[
   ['¿Cómo se dice "bien"?',['ako','dobre','nie','je'],1,"'dobre' = bien."],
   ['¿Cómo se dice "¿Cómo estás?"?',['Ako si?','Si ako?','Ako som?','Dobre si?'],0,"'Ako si?' = ¿Cómo estás?."],
   ['¿Qué significa "On je dobre"?',['Yo estoy bien','Tú estás bien','Él está bien','Él no está bien'],2,"'On je dobre' = Él está bien."]
  ]
 },
 {id:'s1l7',ti:'Mi lugar, mi gente',em:'🏠',
  sl:[
   ['v','Últimas 2 palabras de la sección',[['doma','en casa','do-ma'],['priateľ','amigo','prya-tel']]],
   ['t','¡Sección 1 completa!','Con estas 11 palabras (ja, ty, on, som, si, je, nie, ako, dobre, doma, priateľ) ya puedes formar muchas frases. ¡A practicar para el test final!']
  ],
  w:[['doma','en casa','🏠'],['priateľ','amigo','🤝']],
  p:[
   ['Estoy en casa.','Som doma.',[['Som','Estoy'],['doma','en casa']],['si','je'],"'Som doma' = Estoy en casa."],
   ['Él es amigo.','On je priateľ.',[['On','Él'],['je','es'],['priateľ','amigo']],['ty','si'],"'On je priateľ' = Él es amigo."],
   ['Tú no estás en casa.','Ty nie si doma.',[['Ty','Tú'],['nie','no'],['si','estás'],['doma','en casa']],['som'],"Negación + 'doma'."]
  ],
  mc:[
   ['¿Cómo se dice "amigo"?',['doma','dobre','priateľ','ako'],2,"'priateľ' = amigo."],
   ['¿Qué significa "Som doma"?',['Estoy bien','Estoy en casa','Soy amigo','Él está en casa'],1,"'Som doma' = Estoy en casa."],
   ['¿Cómo se dice "Tú no estás en casa"?',['Ty nie si doma','Ty si doma','Ty nie som doma','On nie je doma'],0,"'Ty nie si doma' = Tú no estás en casa."]
  ]
 },
 {id:'s1test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Hora del examen!','Vas a responder unas 18 preguntas de repaso de toda la Sección 1. Necesitas 80% correctas para desbloquear la Sección 2. ¡Tú puedes!'],
   ['g','Repaso rápido','Las 11 palabras de la Sección 1:',[['Pronombres','ja, ty, on'],['Ser/estar','som, si, je'],['Negación','nie'],['Otras','ako, dobre, doma, priateľ']]],
   ['t','Consejo final',"Lee con calma. Recuerda: 'nie' siempre va justo antes del verbo, y cada pronombre tiene su propia forma de byť."]
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s1t-01',category:'old_review',type:'mc',skill:'grammar',concept_tag:'byt_presente',question:'¿Cómo se dice "Yo soy / Yo estoy"?',options:['Ty si','Ja som','On je','Nie som'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ja som' = Yo soy / Yo estoy."},
   {id:'s1t-02',category:'old_review',type:'mc',skill:'grammar',concept_tag:'byt_presente',question:'¿Cómo se dice "Tú eres / Tú estás"?',options:['Ja som','On je','Ty si','Nie si'],answer:2,audio:null,skippable:false,accept:[],explanation:"'Ty si' = Tú eres / Tú estás."},
   {id:'s1t-03',category:'old_review',type:'mc',skill:'grammar',concept_tag:'byt_presente',question:'¿Cómo se dice "Él es / Él está"?',options:['On je','Ja som','Ty si','On si'],answer:0,audio:null,skippable:false,accept:[],explanation:"'On je' = Él es / Él está."},
   {id:'s1t-04',category:'old_review',type:'fill',skill:'grammar',concept_tag:'negacion_byt',question:'Completa: "Ja ___ som." (Yo no soy)',options:[],answer:'nie',audio:null,skippable:false,accept:['nie'],explanation:"La negación 'nie' va justo antes del verbo."},
   {id:'s1t-05',category:'old_review',type:'fill',skill:'grammar',concept_tag:'negacion_byt',question:'Completa: "On nie ___." (Él no está)',options:[],answer:'je',audio:null,skippable:false,accept:['je'],explanation:"'On nie je' = Él no es / no está."},
   {id:'s1t-06',category:'old_review',type:'type',skill:'grammar',concept_tag:'negacion_byt',question:'Escribe en eslovaco: "Tú no eres / no estás"',options:[],answer:'Ty nie si',audio:null,skippable:false,accept:['Ty nie si','ty nie si'],explanation:"'Ty nie si' = Tú no eres / no estás."},
   {id:'s1t-07',category:'old_review',type:'mc',skill:'vocab',concept_tag:'pronombres_personales',question:'¿Qué significa "on"?',options:['yo','tú','él','no'],answer:2,audio:null,skippable:false,accept:[],explanation:"'on' = él."},
   {id:'s1t-08',category:'old_review',type:'mc',skill:'vocab',concept_tag:'pronombres_personales',question:'¿Cómo se dice "tú"?',options:['ja','ty','on','si'],answer:1,audio:null,skippable:false,accept:[],explanation:"'ty' = tú."},
   {id:'s1t-09',category:'random_review',type:'listen',skill:'grammar',concept_tag:'byt_presente',question:'Escucha y elige la traducción correcta.',options:['Estoy en casa','Estás en casa','Está en casa','Soy amigo'],answer:0,audio:'Ja som doma',skippable:true,accept:[],explanation:"'Ja som doma' = Estoy en casa."},
   {id:'s1t-10',category:'old_review',type:'mc',skill:'vocab',concept_tag:'preguntas_como_estas',question:'¿Cómo se dice "¿Cómo estás?"?',options:['Si ako?','Ako si?','Ako som?','Dobre si?'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ako si?' = ¿Cómo estás?"},
   {id:'s1t-11',category:'old_review',type:'fill',skill:'vocab',concept_tag:'preguntas_como_estas',question:'Completa: "Som ___." (Estoy bien)',options:[],answer:'dobre',audio:null,skippable:false,accept:['dobre'],explanation:"'Som dobre' = Estoy bien."},
   {id:'s1t-12',category:'old_review',type:'type',skill:'vocab',concept_tag:'vocab_basico_s1',question:'Escribe en eslovaco: "amigo"',options:[],answer:'priateľ',audio:null,skippable:false,accept:['priateľ','priatel'],explanation:"'priateľ' = amigo."},
   {id:'s1t-13',category:'old_review',type:'mc',skill:'grammar',concept_tag:'negacion_byt',question:'¿Qué significa "Ty nie si doma"?',options:['Tú estás en casa','Tú no estás en casa','Él no está en casa','Yo no estoy en casa'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ty nie si doma' = Tú no estás en casa."},
   {id:'s1t-14',category:'random_review',type:'mc',skill:'grammar',concept_tag:'byt_presente',question:'¿Qué significa "On je priateľ"?',options:['Él es amigo','Él está bien','Yo soy amigo','Tú eres amigo'],answer:0,audio:null,skippable:false,accept:[],explanation:"'On je priateľ' = Él es amigo."},
   {id:'s1t-15',category:'old_review',type:'fill',skill:'grammar',concept_tag:'preguntas_como_estas',question:'Completa: "Ako ___ on?" (¿Cómo está él?)',options:[],answer:'je',audio:null,skippable:false,accept:['je'],explanation:"'Ako je on?' = ¿Cómo está él?"},
   {id:'s1t-16',category:'random_review',type:'listen',skill:'vocab',concept_tag:'vocab_basico_s1',question:'Escucha y elige la traducción correcta.',options:['Soy amigo','Estoy en casa','Eres amigo','Él es amigo'],answer:0,audio:'Ja som priateľ',skippable:true,accept:[],explanation:"'Ja som priateľ' = Soy amigo."},
   {id:'s1t-17',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'negacion_byt',question:'Elige la frase CORRECTA para "Yo no soy / no estoy"',options:['Nie ja som','Ja nie som','Ja som nie','Nie som ja'],answer:1,audio:null,skippable:false,accept:[],explanation:"'nie' va siempre justo antes del verbo: 'Ja nie som'."},
   {id:'s1t-18',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'pronombres_personales',question:'Corrige el error: "Ty som doma." (debería significar "Tú estás en casa")',options:[],answer:'Ty si doma',audio:null,skippable:false,accept:['Ty si doma','ty si doma'],explanation:"Con 'ty' se usa 'si', no 'som'. 'som' es solo para 'ja'."}
  ]
 }
]},
{id:'s2',ti:'El mundo a tu alrededor',em:'🌍',col:'#4361EE',
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
   ['t','¡Gran examen!','Vas a responder unas 18 preguntas de repaso de toda la Sección 2. Necesitas 80% correctas para pasar. ¡Eres capaz!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 2:',[['Días','pondelok...nedeľa'],['Ciudad','banka, škola, letisko'],['Cuerpo','hlava, oko, srdce'],['Restaurante','jedlo, účet, chcem']]],
   ['t','¡Eres increíble!','Has aprendido más de 80 palabras en eslovaco. ¡Muy pocos hispanohablantes llegan tan lejos!']
  ],
  w:[],p:[],mc:[]
 }
]},
{id:'s3',ti:'La vida diaria',em:'🗓️',col:'#00A86B',
gr:{
  intro:'La Sección 3 introduce los verbos en presente, los números hasta 100, la ropa, las compras, los pasatiempos, las preguntas, las direcciones y los adjetivos con concordancia de género.',
  patches:[
    {op:'newTable', category:'byt-pritomny', tableId:'pritomny-vzory',
     title:'Verbos en presente — patrones principales',note:'"mať" y "robiť" son irregulares e imprescindibles. Los verbos en "-ovať" (como "pracovať") siguen un patrón muy productivo.',
     h:['Pronombre','mať (tener)','robiť (hacer)','pracovať (-ovať)'],
     r:[['ja','mám','robím','pracujem'],['ty','máš','robíš','pracuješ'],['on/ona/ono','má','robí','pracuje'],['my','máme','robíme','pracujeme'],['vy','máte','robíte','pracujete'],['oni/ony','majú','robia','pracujú']]},
    {op:'newTable', category:'cisla-cas', tableId:'cislovky-11-100',
     title:'Números 11–100',
     h:['Número','Eslovaco','Número','Eslovaco'],
     r:[['11','jedenásť','17','sedemnásť'],['12','dvanásť','18','osemnásť'],['13','trinásť','19','devätnásť'],['14','štrnásť','20','dvadsať'],['15','pätnásť','30','tridsať'],['16','šestnásť','40','štyridsať'],['50','päťdesiat','80','osemdesiat'],['60','šesťdesiat','90','deväťdesiat'],['70','sedemdesiat','100','sto']]},
    {op:'newTable', category:'pridavne', tableId:'pridavne-zhoda',
     title:'Adjetivos: concordancia de género',note:'La mayoría de adjetivos siguen el patrón -ý (masculino) / -á (femenino) / -é (neutro). Esta es la base de la declinación de adjetivos en eslovaco — vuelve aquí cuando necesites repasar las terminaciones.',
     h:['Masculino','Femenino','Neutro','Español'],
     r:[['veľký','veľká','veľké','grande'],['malý','malá','malé','pequeño'],['pekný','pekná','pekné','bonito'],['starý','stará','staré','viejo'],['nový','nová','nové','nuevo'],['dobrý','dobrá','dobré','bueno']]},
    {op:'newTable', category:'otazky-spojky', tableId:'opytovacie-zamena',
     title:'Palabras interrogativas',
     h:['Eslovaco','Español'],
     r:[['kto','quién'],['čo','qué'],['kde','dónde'],['kedy','cuándo'],['prečo','por qué'],['ako','cómo'],['koľko','cuánto']]},
    {op:'newTable', category:'frazy', tableId:'rad-rada-radi',
     title:'Expresar gustos: rád / rada / radi',note:'"Rád" (hombre), "rada" (mujer) o "radi" (plural/grupo) + verbo en presente = "me/nos gusta hacer algo".',
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
   ['v','Más ropa',[['šaty','vestido','sha-ti'],['sukňa','falda','suk-nya'],['čiapka','gorro','chyap-ka'],['ponožky','medias','po-nozh-ki']]],
   ['t','Plurales en eslovaco','Muchas prendas son siempre plurales en eslovaco: "nohavice" (pantalones), "topánky" (zapatos), "ponožky" (medias). ¡Como en español!']
  ],
  w:[['tričko','camiseta','👕'],['nohavice','pantalones','👖'],['topánky','zapatos','👟'],['bunda','chaqueta','🧥'],['šaty','vestido','👗'],['čiapka','gorro','🧢'],['sukňa','falda','👚'],['ponožky','medias','🧦']],
  p:[
   ['Tengo una chaqueta nueva','Mám novú bundu',[['Mám','Tengo'],['novú','nueva'],['bundu','chaqueta']],['tričko','topánky'],"'novú' es la forma femenina acusativa de 'nový' (nuevo), porque concuerda con 'bundu'."],
   ['Los zapatos son bonitos','Topánky sú pekné',[['Topánky','Los zapatos'],['sú','son'],['pekné','bonitos']],['nohavice','ponožky'],"'sú' = son (plural de 'byť'). 'pekné' concuerda en plural."]
  ],
  mc:[
   ['¿Qué significa "nohavice"?',['camiseta','pantalones','zapatos','medias'],1,"'nohavice' = pantalones. Viene de 'noha' = pierna."],
   ['¿Cómo se dice "zapatos"?',['topánky','ponožky','sukňa','čiapka'],0,"'topánky' = zapatos. 'ponožky' = medias."],
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
   ['g','Concordancia de género','Los adjetivos cambian su terminación según el género del sustantivo: masculino -ý, femenino -á, neutro -é.',[['grande (m./f./n.)','veľký / veľká / veľké'],['nuevo (m./f./n.)','nový / nová / nové'],['Un perro grande (m.)','veľký pes'],['Una habitación grande (f.)','veľká izba'],['Un auto grande (n.)','veľké auto']]],
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
   ['t','¡Tercer examen!','Vas a responder unas 18 preguntas de repaso de toda la Sección 3. Necesitas 80% correctas para desbloquear la Sección 4. ¡Sigue así!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 3:',[['Verbos','mám, robím, pracujem'],['Números','jedenásť...sto'],['Ropa','tričko, nohavice, topánky'],['Adjetivos','veľký, malý, pekný, nový']]],
   ['t','¡Vas genial!','Ya dominas verbos en presente, números hasta cien y adjetivos básicos. ¡La base de tu eslovaco es cada vez más sólida!']
  ],
  w:[],p:[],mc:[]
 }
]},
{id:'s4',ti:'¿Cómo estás?',em:'😊',col:'#9B5DE5',
gr:{
  intro:'La Sección 4 introduce la negación (nie/ne-) y el vocabulario de emociones, estados de ánimo y profesiones — combinando estos temas nuevos con la identidad, el presente y "rád/rada/radi" ya conocidos.',
  patches:[
    {op:'newTable', category:'byt-pritomny', tableId:'negacia',
     title:'Negación', note:'Para negar un verbo, añade el prefijo "ne-" delante. La única excepción es "byť": "som" → "nie som" (con espacio).',
     h:['Forma afirmativa','Forma negativa','Ejemplo'],
     r:[['som','nie som','Nie som lekár. = No soy médico.'],['mám','nemám','Nemám čas. = No tengo tiempo.'],['robím','nerobím','Nerobím nič. = No hago nada.'],['viem','neviem','Neviem. = No sé.'],['môžem','nemôžem','Nemôžem dnes. = No puedo hoy.'],['pracujem','nepracujem','Nepracujem cez víkend. = No trabajo el fin de semana.'],['hovorím','nehovorím','Nehovorím po nemecky. = No hablo alemán.']]},
    {op:'newTable', category:'pady', tableId:'povolania-rod',
     title:'Profesiones: género masculino y femenino', note:'La mayoría de profesiones forman el femenino añadiendo "-ka" a la forma masculina.',
     h:['Masculino','Femenino','Español'],
     r:[['lekár','lekárka','médico/a'],['učiteľ','učiteľka','profesor/a'],['študent','študentka','estudiante'],['kuchár','kuchárka','cocinero/a'],['predavač','predavačka','vendedor/a'],['vodič','vodička','conductor/a'],['policajt','policajtka','policía'],['právnik','právnička','abogado/a'],['umelec','umelkyňa','artista'],['inžinier','inžinierka','ingeniero/a']]},
    {op:'addRows', category:'frazy', tableId:'rad-rada-radi',
     r:[['Yo (hombre, negativo)','nerád + verbo','Nerád varím. = No me gusta cocinar.'],['Yo (mujer, negativo)','nerada + verbo','Nerada behám. = No me gusta correr.'],['Nosotros (negativo)','neradi + verbo','Neradi čakáme. = No nos gusta esperar.']]},
    {op:'addRows', category:'pridavne', tableId:'pridavne-zhoda',
     r:[['šťastný','šťastná','šťastné','feliz'],['smutný','smutná','smutné','triste'],['unavený','unavená','unavené','cansado'],['chorý','chorá','choré','enfermo']]},
    {op:'addRows', category:'otazky-spojky', tableId:'opytovacie-zamena',
     r:[['aký / aká / aké','qué tipo de / cómo es']]}
  ],
  tips:["🔑 Para negar un verbo añade 'ne-' delante: 'mám'→'nemám', 'viem'→'neviem'. La única excepción es 'byť': 'som'→'nie som' (con espacio).","🔑 Los adjetivos de emociones (šťastný, smutný, unavený...) siguen el mismo patrón -ý/-á/-é que los adjetivos de la Sección 3.","🔑 La mayoría de profesiones forman el femenino añadiendo '-ka': učiteľ→učiteľka, lekár→lekárka.","🔑 'Nerád/nerada/neradi' + verbo = 'no me/nos gusta hacer algo'. Es la negación de 'rád/rada/radi' (Sección 3)."]
},
ls:[
 {id:'s4l1',ti:'La negación',em:'🚫',
  sl:[
   ['v','Verbos en negativo',[['nie som','no soy','nye som'],['nemám','no tengo','ne-mam'],['nerobím','no hago','ne-ro-beem'],['neviem','no sé','ne-vyem']]],
   ['g','La regla del "ne-"','En eslovaco, para negar un verbo simplemente añades el prefijo "ne-" delante. "Som"→"Nie som", "mám"→"nemám", "viem"→"neviem".',[['soy / no soy','som / nie som'],['tengo / no tengo','mám / nemám'],['hago / no hago','robím / nerobím'],['sé / no sé','viem / neviem'],['puedo / no puedo','môžem / nemôžem']]],
   ['t','Excepción importante','El verbo "byť" (ser/estar) es la única excepción: su negación es "nie som" (con espacio), no "nesom". Todos los demás verbos se escriben juntos: "nemám", "nerobím".']
  ],
  w:[['nie som','no soy','🚫'],['nemám','no tengo','🙅'],['nerobím','no hago','🚫'],['neviem','no sé','🤷'],['nemôžem','no puedo','🙅‍♂️'],['nepracujem','no trabajo','🚫'],['nehovorím','no hablo','🤐']],
  p:[
   ['No soy estudiante','Nie som študent',[['Nie som','No soy'],['študent','estudiante']],['učiteľ','lekár'],"'Nie som' es la negación de 'som' (soy/estoy). Recuerda el espacio."],
   ['No tengo tiempo','Nemám čas',[['Nemám','No tengo'],['čas','tiempo']],['peniaze','prácu'],"'Nemám' = no tengo. El prefijo 'ne-' va pegado al verbo."]
  ],
  mc:[
   ['¿Cómo se dice "no sé"?',['nemám','neviem','nemôžem','nerobím'],1,"'neviem' = no sé. 'nemám' = no tengo."],
   ['¿Cuál es la negación de "som"?',['nesom','nie som','som nie','nieje'],1,"'byť' es la excepción: 'nie som', con espacio."],
   ['¿Qué significa "nepracujem"?',['no puedo','no trabajo','no hago','no hablo'],1,"'nepracujem' = no trabajo. 'pracovať' = trabajar (s3l2)."]
  ]
 },
 {id:'s4l2',ti:'Cómo te sientes',em:'😊',
  sl:[
   ['v','Estados de ánimo',[['šťastný','feliz','shtyast-nee'],['smutný','triste','smut-nee'],['unavený','cansado','u-na-ve-nee'],['nervózny','nervioso','ner-voz-nee']]],
   ['v','Más estados',[['hladný','hambriento','hlad-nee'],['smädný','sediento','smyad-nee'],['chorý','enfermo','kho-ree']]],
   ['g','Concordancia con byť','Estos adjetivos funcionan como los de la Sección 3: cambian de terminación según el género (-ý/-á/-é) y se usan con "byť".',[['Estoy feliz (m.)','Som šťastný'],['Estoy feliz (f.)','Som šťastná'],['Estoy cansado (m.)','Som unavený'],['No estoy cansada (f.)','Nie som unavená']]]
  ],
  w:[['šťastný','feliz','😄'],['smutný','triste','😢'],['unavený','cansado','😴'],['nervózny','nervioso','😬'],['hladný','hambriento','🍽️'],['smädný','sediento','🥤'],['chorý','enfermo','🤒']],
  p:[
   ['Estoy cansado','Som unavený',[['Som','Estoy'],['unavený','cansado']],['šťastný','smutný'],"Estructura igual a 'Som učiteľ' (s1), pero con un adjetivo de estado."],
   ['No estoy enfermo, estoy bien','Nie som chorý, som v poriadku',[['Nie som','No estoy'],['chorý','enfermo'],['som v poriadku','estoy bien']],['unavený','smutný'],"Combina la negación de la lección anterior con un adjetivo nuevo."]
  ],
  mc:[
   ['¿Qué significa "smutný"?',['feliz','cansado','triste','nervioso'],2,"'smutný' = triste. 'šťastný' = feliz."],
   ['¿Cómo se dice "tengo hambre" (lit. "estoy hambriento")?',['Som smädný','Som hladný','Som unavený','Som chorý'],1,"'Som hladný' = estoy hambriento/tengo hambre."],
   ['¿Cuál es la forma femenina de "unavený"?',['unavená','unavené','unavený','unavení'],0,"'unavená' = cansada (femenino). Termina en '-á'."]
  ]
 },
 {id:'s4l3',ti:'¿Cómo te sientes?',em:'💬',
  sl:[
   ['v','Preguntar y responder',[['Ako sa máš?','¿Cómo estás?','a-ko sa mash'],['Mám sa dobre','Estoy bien','mam sa dob-re'],['Mám sa zle','Estoy mal','mam sa zle']]],
   ['v','Más palabras',[['nálada','humor / ánimo','na-la-da'],['trochu','un poco','tro-khu'],['veľmi','muy','vel-mi'],['vôbec nie','para nada','voo-bets nye']]],
   ['t','"Mám sa..." vs "Som..."','"Ako sa máš?" pregunta por tu estado general (lit. "¿cómo te tienes?"). "Som unavený" describe un estado concreto. Ambas son correctas y muy usadas.']
  ],
  w:[['Ako sa máš?','¿Cómo estás?','❓'],['Mám sa dobre','Estoy bien','👍'],['Mám sa zle','Estoy mal','👎'],['nálada','humor','🎭'],['trochu','un poco','🤏'],['veľmi','muy','💯'],['vôbec nie','para nada','❌']],
  p:[
   ['¿Cómo estás? Estoy un poco cansado','Ako sa máš? Som trochu unavený',[['Ako sa máš?','¿Cómo estás?'],['Som','Estoy'],['trochu','un poco'],['unavený','cansado']],['veľmi','vôbec nie'],"'trochu' suaviza el adjetivo: 'un poco cansado' en vez de 'muy cansado'."],
   ['No estoy nada nervioso','Vôbec nie som nervózny',[['Vôbec nie','Para nada'],['som','estoy'],['nervózny','nervioso']],['trochu','veľmi'],"'vôbec nie' refuerza la negación: 'para nada' / 'en absoluto'."]
  ],
  mc:[
   ['¿Cómo preguntas "¿Cómo estás?"?',['Ako sa voláš?','Kto si?','Ako sa máš?','Čo robíš?'],2,"'Ako sa máš?' = ¿Cómo estás?. 'Ako sa voláš?' = ¿Cómo te llamas? (s1)."],
   ['¿Qué significa "veľmi"?',['un poco','muy','para nada','siempre'],1,"'veľmi' = muy. 'trochu' = un poco."],
   ['¿Cómo se dice "estoy mal"?',['Mám sa dobre','Som dobrý','Mám sa zle','Nie som dobrý'],2,"'Mám sa zle' = estoy mal. 'Mám sa dobre' = estoy bien."]
  ]
 },
 {id:'s4l4',ti:'Las profesiones',em:'💼',
  sl:[
   ['v','Profesiones (1)',[['lekár / lekárka','médico/a','le-kar / le-kar-ka'],['učiteľ / učiteľka','profesor/a','u-chi-tel / u-chi-tel-ka'],['študent / študentka','estudiante','shtu-dent']]],
   ['v','Profesiones (2)',[['kuchár / kuchárka','cocinero/a','ku-khar'],['predavač / predavačka','vendedor/a','pre-da-vach'],['vodič / vodička','conductor/a','vo-dich'],['policajt / policajtka','policía','po-li-tsayt']]],
   ['g','Femenino con "-ka"','La mayoría de profesiones forman el femenino añadiendo "-ka" (a veces con pequeños cambios) a la forma masculina.',[['médico → médica','lekár → lekárka'],['profesor → profesora','učiteľ → učiteľka'],['cocinero → cocinera','kuchár → kuchárka'],['conductor → conductora','vodič → vodička']]]
  ],
  w:[['lekár','médico','👨‍⚕️'],['učiteľ','profesor','🧑‍🏫'],['študent','estudiante','🎓'],['kuchár','cocinero','👨‍🍳'],['predavač','vendedor','🧑‍💼'],['vodič','conductor','🚗'],['policajt','policía','👮']],
  p:[
   ['Soy profesor, no soy médico','Som učiteľ, nie som lekár',[['Som','Soy'],['učiteľ','profesor'],['nie som','no soy'],['lekár','médico']],['kuchár','vodič'],"Combina identidad (s1) + negación (s4l1) con vocabulario nuevo de profesiones."],
   ['Ella es vendedora','Ona je predavačka',[['Ona','Ella'],['je','es'],['predavačka','vendedora']],['učiteľka','lekárka'],"'predavačka' es la forma femenina de 'predavač', con '-ka'."]
  ],
  mc:[
   ['¿Cómo se dice "estudiante"?',['učiteľ','lekár','študent','vodič'],2,"'študent' = estudiante. Muy parecido al español."],
   ['¿Cuál es la forma femenina de "kuchár"?',['kuchárka','kuchár','kuchára','kuchári'],0,"'kuchárka' = cocinera. Se forma añadiendo '-ka'."],
   ['¿Qué significa "policajt"?',['profesor','policía','vendedor','médico'],1,"'policajt' = policía. Recuerda 'polícia' (s2) = la institución."]
  ]
 },
 {id:'s4l5',ti:'¿A qué te dedicas?',em:'🧑‍💼',
  sl:[
   ['v','Hablar de tu trabajo',[['povolanie','profesión','po-vo-la-nye'],['Aké je tvoje povolanie?','¿Cuál es tu profesión?','a-ke ye tvo-ye po-vo-la-nye'],['pracovať ako','trabajar de/como','pra-tso-vat a-ko']]],
   ['v','Más profesiones',[['právnik / právnička','abogado/a','prav-nik'],['umelec / umelkyňa','artista','u-me-lets'],['inžinier / inžinierka','ingeniero/a','in-zhi-nyer'],['herec / herečka','actor/actriz','he-rets']]],
   ['t','Sin artículo','Igual que con nacionalidades, en eslovaco no se usa artículo con profesiones: "Som lekár" = "Soy médico" (no "Soy UN médico").']
  ],
  w:[['povolanie','profesión','💼'],['právnik','abogado','⚖️'],['umelec','artista','🎨'],['inžinier','ingeniero','⚙️'],['herec','actor','🎬'],['pracovať ako','trabajar de','🛠️'],['Aké je tvoje povolanie?','¿Cuál es tu profesión?','❓']],
  p:[
   ['¿Cuál es tu profesión? Soy ingeniero','Aké je tvoje povolanie? Som inžinier',[['Aké je tvoje povolanie?','¿Cuál es tu profesión?'],['Som','Soy'],['inžinier','ingeniero']],['právnik','herec'],"Pregunta neutra para profesión, sin necesidad del caso instrumental."],
   ['Trabajo de cocinero, no de policía','Pracujem ako kuchár, nie ako policajt',[['Pracujem ako','Trabajo de'],['kuchár','cocinero'],['nie ako','no de'],['policajt','policía']],['vodič','predavač'],"'pracovať ako' + profesión = 'trabajar de/como' + profesión."]
  ],
  mc:[
   ['¿Cómo se dice "profesión"?',['práca','povolanie','pracovať','pracovník'],1,"'povolanie' = profesión. 'pracovať' = trabajar (verbo)."],
   ['¿Qué significa "umelec"?',['abogado','ingeniero','artista','actor'],2,"'umelec' = artista. 'umelkyňa' es la forma femenina."],
   ['¿Cómo dirías "trabajo de profesor"?',['Som učiteľ','Pracujem ako učiteľ','Učím','Mám učiteľa'],1,"'Pracujem ako učiteľ' = trabajo de/como profesor."]
  ]
 },
 {id:'s4l6',ti:'Lo que no me gusta',em:'🙅',
  sl:[
   ['v','Nuevas actividades',[['cestovať','viajar','tses-to-vat'],['počúvať','escuchar','po-choo-vat'],['hudba','música','hud-ba'],['pozerať','ver/mirar','po-ze-rat']]],
   ['v','Más palabras',[['televízia','televisión','te-le-vee-zya'],['film','película','film'],['dlho','mucho tiempo','dl-ho']]],
   ['g','Negación de "rád/rada/radi"','Para decir que algo NO te gusta hacer, usa "nerád" (hombre), "nerada" (mujer) o "neradi" (nosotros) + verbo en presente.',[['(M) No me gusta cocinar','Nerád varím'],['(F) No me gusta correr','Nerada behám'],['No nos gusta esperar','Neradi čakáme'],['(M) Me gusta viajar','Rád cestujem'],['(M) No me gusta viajar','Nerád cestujem']]]
  ],
  w:[['cestovať','viajar','✈️'],['počúvať','escuchar','👂'],['hudba','música','🎵'],['pozerať','ver/mirar','📺'],['televízia','televisión','📺'],['film','película','🎬'],['dlho','mucho tiempo','⏳']],
  p:[
   ['Me gusta escuchar música','Rád počúvam hudbu',[['Rád','Me gusta (m.)'],['počúvam','escucho'],['hudbu','música']],['pozerám','čítam'],"'hudbu' es la forma acusativa de 'hudba'. Repaso de 'rád' (s3l6)."],
   ['No me gusta ver televisión mucho tiempo','Nerád pozerám televíziu dlho',[['Nerád','No me gusta (m.)'],['pozerám','veo'],['televíziu','televisión'],['dlho','mucho tiempo']],['počúvam','cestujem'],"'Nerád' es la negación de 'rád'. Una mujer diría 'Nerada'."]
  ],
  mc:[
   ['¿Cómo dice una mujer "no me gusta"?',['Nerád','Nerada','Neradi','Nie rada'],1,"Un hombre dice 'Nerád', una mujer 'Nerada'."],
   ['¿Qué significa "cestovať"?',['escuchar','viajar','ver','descansar'],1,"'cestovať' = viajar. Relacionado con 'cesta' = camino/viaje."],
   ['¿Cómo se dice "música"?',['film','televízia','hudba','divadlo'],2,"'hudba' = música. 'film' = película."]
  ]
 },
 {id:'s4l7',ti:'Todo junto',em:'🔀',
  sl:[
   ['v','Conectores útiles',[['ale','pero','a-le'],['pretože','porque','pre-to-zhe'],['aj','también','ay'],['naozaj','de verdad','na-o-zay']]],
   ['v','Una palabra más',[['super','genial','su-per']]],
   ['t','Diálogo de repaso','— Ako sa máš? — Mám sa dobre, ale som trochu unavený, pretože pracujem veľa. — Si lekár? — Nie, nie som lekár, som učiteľ. Rád učím, ale nerád pracujem cez víkend.']
  ],
  w:[['ale','pero','🔀'],['pretože','porque','❓'],['aj','también','➕'],['naozaj','de verdad','✅'],['super','genial','🌟']],
  p:[
   ['Estoy cansado porque trabajo mucho','Som unavený, pretože pracujem veľa',[['Som unavený','Estoy cansado'],['pretože','porque'],['pracujem','trabajo'],['veľa','mucho']],['veľmi','trochu'],"'pretože' introduce la causa. 'veľa' = mucho (cantidad)."],
   ['No soy médico, pero también soy estudiante','Nie som lekár, ale som aj študent',[['Nie som lekár','No soy médico'],['ale','pero'],['som','soy'],['aj','también'],['študent','estudiante']],['učiteľ','umelec'],"Combina negación + 'ale' (pero) + 'aj' (también)."]
  ],
  mc:[
   ['¿Cómo se dice "porque"?',['ale','pretože','aj','naozaj'],1,"'pretože' = porque. 'prečo' (s3l7) = por qué."],
   ['¿Qué significa "naozaj"?',['quizás','genial','de verdad','también'],2,"'naozaj' = de verdad/realmente."],
   ['¿Cómo dirías "pero también"?',['pretože aj','ale aj','aj ale','naozaj ale'],1,"'ale aj' = pero también. 'ale' = pero, 'aj' = también."]
  ]
 },
 {id:'s4test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Cuarto examen!','Vas a responder unas 18 preguntas de repaso de toda la Sección 4. Necesitas 80% para desbloquear la Sección 5. ¡Vamos!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 4:',[['Negación','nie som, nemám, nerobím, neviem'],['Emociones','šťastný, smutný, unavený, nervózny'],['Profesiones','lekár/lekárka, učiteľ/učiteľka'],['Nerád/nerada','Nerád varím. Nerada behám.']]],
   ['t','¡Casi terminas el Bloque 1!','Negación, emociones y profesiones son piezas clave del A1. ¡Solo queda una sección para terminar el Bloque 1!']
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s4t-01',category:'new',type:'mc',skill:'grammar',concept_tag:'negacia_slovesa',question:'¿Cómo se dice "no tengo"?',options:['nie som','nemám','nerobím','neviem'],answer:1,audio:null,skippable:false,accept:[],explanation:"'nemám' = no tengo. 'ne-' + 'mám'."},
   {id:'s4t-02',category:'new',type:'fill',skill:'grammar',concept_tag:'negacia_byt',question:'Completa: "Nie ___ lekár." (No soy médico)',options:[],answer:'som',audio:null,skippable:false,accept:['som'],explanation:"'Nie som' = no soy/estoy. Excepción de 'byť': se escribe con espacio."},
   {id:'s4t-03',category:'new',type:'mc',skill:'vocab',concept_tag:'emociones_vocab',question:'¿Qué significa "nervózny"?',options:['feliz','triste','nervioso','cansado'],answer:2,audio:null,skippable:false,accept:[],explanation:"'nervózny' = nervioso."},
   {id:'s4t-04',category:'new',type:'type',skill:'grammar',concept_tag:'emociones_genero',question:'Escribe en eslovaco: "estoy cansada" (mujer habla)',options:[],answer:'Som unavená',audio:null,skippable:false,accept:['Som unavená','som unavena'],explanation:"'unavená' es la forma femenina de 'unavený' (-á)."},
   {id:'s4t-05',category:'new',type:'mc',skill:'grammar',concept_tag:'profesiones_genero',question:'¿Cómo se dice "médica" (mujer)?',options:['lekár','lekárka','lekári','lekáreň'],answer:1,audio:null,skippable:false,accept:[],explanation:"'lekárka' = médica. Femenino con '-ka'."},
   {id:'s4t-06',category:'new',type:'fill',skill:'grammar',concept_tag:'profesiones_vocab',question:'Completa: "Pracujem ___ kuchár." (Trabajo de cocinero)',options:[],answer:'ako',audio:null,skippable:false,accept:['ako'],explanation:"'pracovať ako' + profesión = 'trabajar de/como'."},
   {id:'s4t-07',category:'new',type:'listen',skill:'vocab',concept_tag:'emociones_vocab',question:'Escucha y elige la traducción correcta.',options:['Estoy feliz','Estoy triste','Estoy cansado','Estoy enfermo'],answer:1,audio:'Som smutný',skippable:true,accept:[],explanation:"'Som smutný' = estoy triste."},
   {id:'s4t-08',category:'new',type:'mc',skill:'grammar',concept_tag:'rad_rada_radi_negativo',question:'¿Cómo dice una mujer "no me gusta cocinar"?',options:['Nerád varím','Nerada varím','Neradi varím','Nie rada varím'],answer:1,audio:null,skippable:false,accept:[],explanation:"Una mujer usa 'Nerada' + verbo."},
   {id:'s4t-09',category:'new',type:'mc',skill:'vocab',concept_tag:'conectores',question:'¿Qué significa "pretože"?',options:['pero','también','porque','de verdad'],answer:2,audio:null,skippable:false,accept:[],explanation:"'pretože' = porque. 'prečo' = por qué."},
   {id:'s4t-10',category:'new',type:'fill',skill:'vocab',concept_tag:'emociones_vocab',question:'Completa: "Som ___ unavený, ale šťastný." (un poco)',options:[],answer:'trochu',audio:null,skippable:false,accept:['trochu'],explanation:"'trochu' = un poco."},
   {id:'s4t-11',category:'new',type:'type',skill:'vocab',concept_tag:'profesiones_vocab',question:'Escribe en eslovaco la profesión "policía" (hombre)',options:[],answer:'policajt',audio:null,skippable:false,accept:['policajt'],explanation:"'policajt' = policía."},
   {id:'s4t-12',category:'new',type:'mc',skill:'grammar',concept_tag:'negacia_slovesa',question:'¿Cuál es la negación de "môžem"?',options:['nemôžem','nemám','môžemnie','nie môžem'],answer:0,audio:null,skippable:false,accept:[],explanation:"'nemôžem' = no puedo."},
   {id:'s4t-13',category:'new',type:'mc',skill:'vocab',concept_tag:'emociones_vocab',question:'"Ako sa máš?" significa...',options:['¿Cómo te llamas?','¿Cómo estás?','¿Quién eres?','¿Qué haces?'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ako sa máš?' = ¿Cómo estás?"},
   {id:'s4t-14',category:'new',type:'fill',skill:'grammar',concept_tag:'negacia_byt',question:'Completa: "___ som lekár, som učiteľ." (No)',options:[],answer:'Nie',audio:null,skippable:false,accept:['Nie'],explanation:"'Nie som' = no soy."},
   {id:'s4t-15',category:'new',type:'mc',skill:'vocab',concept_tag:'profesiones_vocab',question:'¿Qué significa "umelec"?',options:['abogado','ingeniero','artista','actor'],answer:2,audio:null,skippable:false,accept:[],explanation:"'umelec' = artista."},
   {id:'s4t-16',category:'old_review',type:'mc',skill:'grammar',concept_tag:'byt_som_si_je',question:'"Vy ___ tu." (están)',options:['sme','ste','sú','je'],answer:1,audio:null,skippable:false,accept:[],explanation:"'ste' = están (ustedes)."},
   {id:'s4t-17',category:'old_review',type:'type',skill:'grammar',concept_tag:'pridavne_zhoda',question:'Escribe en eslovaco: "ella es bonita"',options:[],answer:'Ona je pekná',audio:null,skippable:false,accept:['Ona je pekná','ona je pekna'],explanation:"'pekná' es la forma femenina de 'pekný'."},
   {id:'s4t-18',category:'old_review',type:'mc',skill:'vocab',concept_tag:'numbers_11_100',question:'¿Cómo se dice "veinte"?',options:['dvanásť','dvadsať','desať','dva'],answer:1,audio:null,skippable:false,accept:[],explanation:"'dvadsať' = veinte."},
   {id:'s4t-19',category:'old_review',type:'fill',skill:'grammar',concept_tag:'rad_rada_radi',question:'Completa: "Rád ___ knihy." (leo)',options:[],answer:'čítam',audio:null,skippable:false,accept:['čítam','citam'],explanation:"'Rád čítam' = me gusta leer (hombre)."},
   {id:'s4t-20',category:'old_review',type:'mc',skill:'vocab',concept_tag:'opytovacie_zamena',question:'¿Qué significa "kde"?',options:['cuándo','dónde','por qué','cómo'],answer:1,audio:null,skippable:false,accept:[],explanation:"'kde' = dónde."},
   {id:'s4t-21',category:'random_review',type:'mc',skill:'vocab',concept_tag:'greetings_formal_informal',question:'¿Cuál es el saludo FORMAL?',options:['Ahoj','Čau','Dobrý deň','Servus'],answer:2,audio:null,skippable:false,accept:[],explanation:"'Dobrý deň' es el saludo formal."},
   {id:'s4t-22',category:'random_review',type:'mc',skill:'vocab',concept_tag:'body_vocab',question:'¿Qué significa "srdce"?',options:['cabeza','nariz','ojo','corazón'],answer:3,audio:null,skippable:false,accept:[],explanation:"'srdce' = corazón."},
   {id:'s4t-23',category:'random_review',type:'mc',skill:'vocab',concept_tag:'clothes_vocab',question:'¿Cómo se dice "zapatos"?',options:['topánky','ponožky','sukňa','čiapka'],answer:0,audio:null,skippable:false,accept:[],explanation:"'topánky' = zapatos."},
   {id:'s4t-24',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'negacia_byt',question:'¿Qué frase es CORRECTA?',options:['Nesom lekár.','Nie som lekár.','Som nie lekár.','Nieje lekár.'],answer:1,audio:null,skippable:false,accept:[],explanation:"'byť' es la excepción: 'Nie som', con espacio."},
   {id:'s4t-25',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'negacia_slovesa',question:'Corrige el error: "Ja nie mám čas."',options:[],answer:'Nemám čas',audio:null,skippable:false,accept:['Nemám čas','Nemám čas.'],explanation:"Los verbos (excepto 'byť') niegan con 'ne-' pegado: 'nemám', no 'nie mám'."}
  ]
 }
]},
{id:'s5',ti:'Mi semana',em:'📆',col:'#FFB627',
gr:{
  intro:'La Sección 5 cierra el Bloque 1 con el tema "Môj týždeň" (Mi semana): vocabulario de tiempo y rutina, el verbo irregular "ísť" (ir), y mucho repaso de negación, rád/rada/radi, adjetivos y palabras interrogativas en nuevos contextos.',
  patches:[
    {op:'newTable', category:'slovesa-casy', tableId:'ist-slovesa',
     title:"Sloveso 'ísť' (ir)", note:"'ísť' es un verbo irregular muy frecuente, usado para movimiento físico: 'voy/vas/va a...'.",
     h:['Osoba','ísť','Español'],
     r:[['ja','idem','voy'],['ty','ideš','vas'],['on / ona / ono','ide','va'],['my','ideme','vamos'],['vy','idete','van (ustedes)'],['oni / ony','idú','van (ellos)']]},
    {op:'addRows', category:'frazy', tableId:'rad-rada-radi',
     r:[['Siempre + me gusta','vždy rád/rada/radi + verbo','Vždy rád pracujem. = Siempre me gusta trabajar.'],['Nunca + me gusta','nikdy nerád/nerada/neradi + verbo','Nikdy nerada upratujem. = Nunca me gusta limpiar.'],['A veces + me gusta','niekedy rád/rada/radi + verbo','Niekedy rada nakupujem. = A veces me gusta ir de compras.']]},
    {op:'addRows', category:'cisla-cas', tableId:'dni-tyzdna',
     r:[['dnes','hoy'],['zajtra','mañana'],['včera','ayer'],['víkend','fin de semana'],['pracovný deň','día laborable']]},
    {op:'addRows', category:'pridavne', tableId:'pridavne-zhoda',
     r:[['celý','celá','celé','entero / todo']]},
    {op:'addRows', category:'otazky-spojky', tableId:'opytovacie-zamena',
     r:[['Ako často?','¿con qué frecuencia?'],['Kedy?','¿cuándo?']]}
  ],
  tips:["🔑 'ísť' es irregular: idem, ideš, ide, ideme, idete, idú. Se usa para 'ir' a un lugar (movimiento físico).","🔑 Las palabras de frecuencia (vždy, často, niekedy, zriedka, nikdy) suelen ir justo antes del verbo: 'Nikdy nepracujem cez víkend.'","🔑 Para negar 'ísť' usa 'ne-' como con cualquier otro verbo: idem→nejdem, ideš→nejdeš.","🔑 'celý/celá/celé' (todo/entero) concuerda en género igual que los demás adjetivos: celý deň, celá rodina, celé ráno."]
},
ls:[
 {id:'s5l1',ti:'Mi semana',em:'📅',
  sl:[
   ['v','El tiempo',[['deň','día','dyen'],['týždeň','semana','tee-zhden'],['víkend','fin de semana','vee-kend'],['pracovný deň','día laborable','pra-tsov-nee dyen']]],
   ['v','Hoy, mañana, ayer',[['dnes','hoy','dnes'],['zajtra','mañana','zay-tra'],['včera','ayer','vche-ra']]],
   ['t','Repaso de los días','Ya conoces pondelok, utorok, streda, štvrtok, piatok, sobota y nedeľa. Esta sección añade palabras para hablar DE esos días: dnes, zajtra, včera, týždeň, víkend.']
  ],
  w:[['deň','día','📆'],['týždeň','semana','🗓️'],['víkend','fin de semana','🏖️'],['pracovný deň','día laborable','💼'],['dnes','hoy','👉'],['zajtra','mañana','➡️'],['včera','ayer','⬅️']],
  p:[
   ['Hoy es lunes, mañana es martes','Dnes je pondelok, zajtra je utorok',[['Dnes','Hoy'],['je','es'],['pondelok','lunes'],['zajtra','mañana'],['utorok','martes']],['streda','piatok'],"'je' = es/está (3ª persona de 'byť'). Repaso de los días de la semana."],
   ['El fin de semana no trabajo','Cez víkend nepracujem',[['Cez','Durante'],['víkend','el fin de semana'],['nepracujem','no trabajo']],['týždeň','deň'],"'cez' (s4l7) + 'víkend' = durante el fin de semana. 'nepracujem' repasa la negación (s4)."]
  ],
  mc:[
   ['¿Qué significa "týždeň"?',['día','semana','fin de semana','mes'],1,"'týždeň' = semana."],
   ['¿Cómo se dice "ayer"?',['dnes','zajtra','včera','teraz'],2,"'včera' = ayer. 'dnes' = hoy, 'zajtra' = mañana."],
   ['¿Qué significa "pracovný deň"?',['fin de semana','día laborable','día festivo','toda la semana'],1,"'pracovný deň' = día laborable (día de trabajo)."]
  ]
 },
 {id:'s5l2',ti:'¿Con qué frecuencia?',em:'🔁',
  sl:[
   ['v','Palabras de frecuencia',[['vždy','siempre','vzhdy'],['často','a menudo','chas-to'],['niekedy','a veces','nye-ke-dy'],['zriedka','raras veces','zryed-ka']]],
   ['v','Más frecuencia',[['nikdy','nunca','nik-dy'],['obyčajne','normalmente','o-bee-chay-ne'],['každý deň','cada día','kazh-dee dyen']]],
   ['g','Posición en la frase','Las palabras de frecuencia van normalmente justo ANTES del verbo: "Vždy pracujem" (Siempre trabajo), "Nikdy nešportujem" (Nunca hago deporte).',[['Siempre trabajo','Vždy pracujem'],['A menudo leo','Často čítam'],['Nunca tengo tiempo','Nikdy nemám čas'],['A veces cocino','Niekedy varím']]]
  ],
  w:[['vždy','siempre','♾️'],['často','a menudo','🔄'],['niekedy','a veces','🤏'],['zriedka','raras veces','🌧️'],['nikdy','nunca','🚫'],['obyčajne','normalmente','📋'],['každý deň','cada día','📅']],
  p:[
   ['Siempre trabajo los lunes','Vždy pracujem v pondelok',[['Vždy','Siempre'],['pracujem','trabajo'],['v pondelok','los lunes']],['často','niekedy'],"'vždy' va antes del verbo. 'v pondelok' = los lunes (con 'v')."],
   ['Nunca tengo tiempo','Nikdy nemám čas',[['Nikdy','Nunca'],['nemám','no tengo'],['čas','tiempo']],['zriedka','často'],"'Nikdy' + verbo negado = 'nunca'. Repaso de 'nemám' (s4)."]
  ],
  mc:[
   ['¿Qué significa "zriedka"?',['siempre','a menudo','raras veces','nunca'],2,"'zriedka' = raras veces."],
   ['¿Cómo se dice "siempre"?',['vždy','často','niekedy','nikdy'],0,"'vždy' = siempre."],
   ['¿Qué significa "každý deň"?',['cada semana','cada día','algunos días','nunca'],1,"'každý deň' = cada día."]
  ]
 },
 {id:'s5l3',ti:'Las partes del día',em:'🌅',
  sl:[
   ['v','Mañana, tarde, noche',[['ráno','por la mañana','ra-no'],['doobeda','a media mañana','do-o-be-da'],['popoludní','por la tarde','po-po-lud-nee'],['večer','por la noche / tarde','ve-cher']]],
   ['v','Más palabras',[['v noci','de noche','vno-tsi'],['cez deň','durante el día','tsez dyen'],['celý deň','todo el día','tse-lee dyen']]],
   ['t','Día completo','Con estas palabras puedes describir todo tu día: "Ráno pracujem, popoludní som doma a večer oddychujem."']
  ],
  w:[['ráno','por la mañana','🌅'],['doobeda','a media mañana','☀️'],['popoludní','por la tarde','🌇'],['večer','por la noche','🌆'],['v noci','de noche','🌙'],['cez deň','durante el día','🕐'],['celý deň','todo el día','🔄']],
  p:[
   ['Por la mañana trabajo, por la noche estoy en casa','Ráno pracujem, večer som doma',[['Ráno','Por la mañana'],['pracujem','trabajo'],['večer','por la noche'],['som doma','estoy en casa']],['popoludní','v noci'],"Estructura paralela: [parte del día] + [verbo]."],
   ['Hoy estoy en casa todo el día','Dnes som celý deň doma',[['Dnes','Hoy'],['som','estoy'],['celý deň','todo el día'],['doma','en casa']],['víkend','zajtra'],"'celý deň' = todo el día. 'celý' concuerda en género: celý/celá/celé."]
  ],
  mc:[
   ['¿Qué significa "v noci"?',['por la mañana','por la tarde','de noche','todo el día'],2,"'v noci' = de noche."],
   ['¿Cómo se dice "por la tarde"?',['ráno','doobeda','popoludní','večer'],2,"'popoludní' = por la tarde."],
   ['¿Qué significa "cez deň"?',['todo el día','durante el día','cada día','el fin de semana'],1,"'cez deň' = durante el día."]
  ]
 },
 {id:'s5l4',ti:'El tiempo libre',em:'🎮',
  sl:[
   ['v','Actividades de ocio',[['relaxovať','relajarse','re-la-xo-vat'],['stretávať sa','quedar (con amigos)','stre-ta-vat sa'],['nakupovať','ir de compras','na-ku-po-vat']]],
   ['v','Más actividades',[['upratovať','limpiar','u-pra-to-vat'],['oddychovať','descansar','o-dee-kho-vat'],['hrať','jugar','hrat'],['voľný čas','tiempo libre','vol-nee chas']]],
   ['g','Rád/rada/radi + nuevas actividades','Combina lo aprendido en la Sección 3 con este vocabulario nuevo.',[['Me gusta relajarme (m.)','Rád relaxujem'],['Me gusta ir de compras (f.)','Rada nakupujem'],['No nos gusta limpiar','Neradi upratujeme'],['Me gusta jugar (m.)','Rád hrám']]]
  ],
  w:[['relaxovať','relajarse','🛀'],['stretávať sa','quedar (con amigos)','🤝'],['nakupovať','ir de compras','🛍️'],['upratovať','limpiar','🧹'],['oddychovať','descansar','🛋️'],['hrať','jugar','🎮'],['voľný čas','tiempo libre','⏰']],
  p:[
   ['Me gusta jugar en mi tiempo libre','Rád hrám vo voľnom čase',[['Rád','Me gusta (m.)'],['hrám','juego'],['vo voľnom čase','en mi tiempo libre']],['relaxujem','nakupujem'],"'voľný čas' = tiempo libre. Repaso de 'rád' (s3)."],
   ['No me gusta limpiar, me gusta relajarme','Nerada upratujem, rada relaxujem',[['Nerada','No me gusta (f.)'],['upratujem','limpio'],['rada','me gusta (f.)'],['relaxujem','me relajo']],['stretávam sa','nakupujem'],"Combina 'nerada' (negación de rada) y 'rada' en una misma frase."]
  ],
  mc:[
   ['¿Qué significa "stretávať sa"?',['limpiar','quedar con amigos','descansar','jugar'],1,"'stretávať sa' = quedar/reunirse con amigos."],
   ['¿Cómo se dice "ir de compras"?',['upratovať','relaxovať','nakupovať','oddychovať'],2,"'nakupovať' = ir de compras."],
   ['¿Qué significa "voľný čas"?',['día laborable','tiempo libre','todo el día','fin de semana'],1,"'voľný čas' = tiempo libre."]
  ]
 },
 {id:'s5l5',ti:'Planes de fin de semana',em:'🗺️',
  sl:[
   ['v','Lugares',[['kino','cine','ki-no'],['reštaurácia','restaurante','resh-tau-ra-tsya'],['príroda','naturaleza','pree-ro-da'],['hory','montañas','ho-ry']]],
   ['v','Ir a/desde',[['ísť','ir','eest'],['domov','a casa (destino)','do-mov'],['von','afuera / salir','von']]],
   ['g','El verbo "ísť" (ir)','"ísť" es irregular y se usa para movimiento: "Idem do kina" (Voy al cine).',[['voy','idem'],['vas','ideš'],['va','ide'],['vamos','ideme'],['van (ustedes)','idete'],['van (ellos)','idú'],['no voy','nejdem']]]
  ],
  w:[['ísť','ir','🚶'],['kino','cine','🎬'],['reštaurácia','restaurante','🍽️'],['príroda','naturaleza','🌳'],['hory','montañas','⛰️'],['domov','a casa','🏠'],['von','afuera','🚪']],
  p:[
   ['Voy al cine los sábados','Idem do kina v sobotu',[['Idem','Voy'],['do kina','al cine'],['v sobotu','los sábados']],['reštaurácie','prírody'],"'idem' = voy (1ª persona de 'ísť'). 'do kina' = al cine."],
   ['El fin de semana voy a la naturaleza','Cez víkend idem do prírody',[['Cez víkend','El fin de semana'],['idem','voy'],['do prírody','a la naturaleza']],['hôr','domov'],"Repaso de 'cez víkend' (s5l1) + 'idem' (ísť, nuevo)."]
  ],
  mc:[
   ['¿Cómo se dice "voy" (yo)?',['ide','ideš','idem','idú'],2,"'idem' = voy. 1ª persona singular de 'ísť'."],
   ['¿Qué significa "hory"?',['ríos','montañas','playas','bosques'],1,"'hory' = montañas."],
   ['¿Cómo se dice "a casa" (destino)?',['doma','domov','dom','domáci'],1,"'domov' = a casa (movimiento hacia). 'doma' = en casa (ubicación)."]
  ]
 },
 {id:'s5l6',ti:'¿Con qué frecuencia...?',em:'❓',
  sl:[
   ['v','Preguntar por frecuencia',[['Ako často?','¿con qué frecuencia?','a-ko chas-to'],['Kedy?','¿cuándo?','ke-dy'],['niekoľkokrát','varias veces','nye-kol-ko-krat']]],
   ['v','Más palabras',[['mesačne','mensualmente','me-sach-ne'],['týždenne','semanalmente','tee-zhden-ne'],['denne','diariamente','den-ne'],['spolu','juntos','spo-lu']]],
   ['t','Conversación de ejemplo','— Ako často ideš do kina? — Idem niekoľkokrát mesačne. A ty? — Ja idem zriedka, ale rád pozerám filmy doma.']
  ],
  w:[['Ako často?','¿con qué frecuencia?','❓'],['Kedy?','¿cuándo?','⏰'],['niekoľkokrát','varias veces','🔢'],['mesačne','mensualmente','🗓️'],['týždenne','semanalmente','📆'],['denne','diariamente','☀️'],['spolu','juntos','👥']],
  p:[
   ['¿Con qué frecuencia vas al cine?','Ako často ideš do kina?',[['Ako často','¿Con qué frecuencia'],['ideš','vas'],['do kina?','al cine?']],['Kedy','Prečo'],"'Ako často' + verbo en 2ª persona = pregunta por frecuencia."],
   ['Hago deporte yo solo','Športujem sám',[['Športujem','Hago deporte'],['sám','solo (hombre)']],['sama','spolu'],"'sám' (hombre) / 'sama' (mujer) = solo/sola. Una mujer diría 'Športujem sama'."]
  ],
  mc:[
   ['¿Qué significa "denne"?',['semanalmente','mensualmente','diariamente','nunca'],2,"'denne' = diariamente."],
   ['¿Cómo se dice "varias veces"?',['vždy','niekoľkokrát','zriedka','spolu'],1,"'niekoľkokrát' = varias veces."],
   ['¿Qué significa "spolu"?',['solo','siempre','juntos','a veces'],2,"'spolu' = juntos."]
  ]
 },
 {id:'s5l7',ti:'Mi semana típica',em:'🔄',
  sl:[
   ['v','Conectar ideas',[['najprv','primero','nay-prv'],['potom','después','po-tom'],['nakoniec','finalmente','na-ko-nyets']]],
   ['v','Más palabras',[['program','programa','pro-gram'],['plán','plan','plan'],['celkovo','en total','tsel-ko-vo']]],
   ['t','¡Fin del Bloque 1!','Najprv pracujem, potom som doma a oddychujem, a nakoniec, cez víkend, idem do hôr alebo do kina. Môj plán na týždeň je celkovo dobrý!']
  ],
  w:[['najprv','primero','1️⃣'],['potom','después','2️⃣'],['nakoniec','finalmente','🏁'],['program','programa','📋'],['plán','plan','🗺️'],['celkovo','en total','📊']],
  p:[
   ['Primero trabajo, después descanso','Najprv pracujem, potom oddychujem',[['Najprv','Primero'],['pracujem','trabajo'],['potom','después'],['oddychujem','descanso']],['nakoniec','vždy'],"'najprv...potom...nakoniec' organizan una secuencia de acciones."],
   ['Al final, el fin de semana voy a la naturaleza','Nakoniec, cez víkend idem do prírody',[['Nakoniec','Al final'],['cez víkend','el fin de semana'],['idem','voy'],['do prírody','a la naturaleza']],['domov','von'],"'nakoniec' cierra la secuencia de la lección."]
  ],
  mc:[
   ['¿Qué significa "najprv"?',['después','primero','finalmente','en total'],1,"'najprv' = primero."],
   ['¿Cómo se dice "finalmente"?',['najprv','potom','nakoniec','celkovo'],2,"'nakoniec' = finalmente/al final."],
   ['¿Qué significa "plán"?',['programa','horario','plan','total'],2,"'plán' = plan."]
  ]
 },
 {id:'s5test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Test final del Bloque 1!','Unas 18 preguntas de repaso sobre toda la Sección 5 (y el Bloque 1 entero). Necesitas 80% para desbloquear el Bloque 2. ¡Mucha suerte!'],
   ['g','Repaso rápido','Todo lo aprendido en la Sección 5:',[['Tiempo','dnes, zajtra, včera, týždeň, víkend'],['Frecuencia','vždy, často, niekedy, zriedka, nikdy'],['Partes del día','ráno, popoludní, večer, v noci'],['Verbo ísť','idem, ideš, ide, ideme, idete, idú']]],
   ['t','¡Felicidades!','Has completado el Bloque 1: identidad, presente, géneros, negación, emociones, profesiones y rutina semanal. ¡El Bloque 2 te espera!']
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s5t-01',category:'new',type:'mc',skill:'vocab',concept_tag:'dni_tyzdna',question:'¿Qué significa "týždeň"?',options:['día','semana','fin de semana','mes'],answer:1,audio:null,skippable:false,accept:[],explanation:"'týždeň' = semana."},
   {id:'s5t-02',category:'new',type:'fill',skill:'vocab',concept_tag:'dni_tyzdna',question:'Completa: "Dnes je pondelok, ___ je utorok." (mañana)',options:[],answer:'zajtra',audio:null,skippable:false,accept:['zajtra'],explanation:"'zajtra' = mañana (día siguiente)."},
   {id:'s5t-03',category:'new',type:'mc',skill:'vocab',concept_tag:'frekvencia_prislovky',question:'¿Cómo se dice "siempre"?',options:['často','vždy','niekedy','nikdy'],answer:1,audio:null,skippable:false,accept:[],explanation:"'vždy' = siempre."},
   {id:'s5t-04',category:'new',type:'type',skill:'vocab',concept_tag:'frekvencia_prislovky',question:'Escribe en eslovaco: "nunca"',options:[],answer:'nikdy',audio:null,skippable:false,accept:['nikdy'],explanation:"'nikdy' = nunca."},
   {id:'s5t-05',category:'new',type:'mc',skill:'vocab',concept_tag:'frekvencia_prislovky',question:'¿Qué significa "zriedka"?',options:['siempre','a menudo','raras veces','cada día'],answer:2,audio:null,skippable:false,accept:[],explanation:"'zriedka' = raras veces."},
   {id:'s5t-06',category:'new',type:'fill',skill:'vocab',concept_tag:'casti_dna',question:'Completa: "Ráno pracujem, ___ som doma." (por la noche)',options:[],answer:'večer',audio:null,skippable:false,accept:['večer'],explanation:"'večer' = por la noche/tarde."},
   {id:'s5t-07',category:'new',type:'mc',skill:'vocab',concept_tag:'casti_dna',question:'¿Cómo se dice "durante el día"?',options:['celý deň','cez deň','každý deň','v noci'],answer:1,audio:null,skippable:false,accept:[],explanation:"'cez deň' = durante el día."},
   {id:'s5t-08',category:'new',type:'listen',skill:'vocab',concept_tag:'ist_konjugacia',question:'Escucha y elige la traducción correcta.',options:['Voy al cine','Voy a casa','Voy a las montañas','Voy de compras'],answer:0,audio:'Idem do kina',skippable:true,accept:[],explanation:"'Idem do kina' = Voy al cine."},
   {id:'s5t-09',category:'new',type:'mc',skill:'grammar',concept_tag:'ist_konjugacia',question:'"Ja ___ do práce." (voy)',options:['ide','ideš','idem','idú'],answer:2,audio:null,skippable:false,accept:[],explanation:"'idem' = voy. 1ª persona de 'ísť'."},
   {id:'s5t-10',category:'new',type:'type',skill:'grammar',concept_tag:'ist_konjugacia',question:'Conjuga "ísť" para "ty" (tú)',options:[],answer:'ideš',audio:null,skippable:false,accept:['ideš','idez'],explanation:"'ideš' = vas (2ª persona singular de 'ísť')."},
   {id:'s5t-11',category:'new',type:'mc',skill:'vocab',concept_tag:'volny_cas_slovesa',question:'¿Qué significa "stretávať sa"?',options:['limpiar','quedar con amigos','descansar','jugar'],answer:1,audio:null,skippable:false,accept:[],explanation:"'stretávať sa' = quedar/reunirse con amigos."},
   {id:'s5t-12',category:'new',type:'fill',skill:'grammar',concept_tag:'rad_rada_radi',question:'Completa (mujer): "Rada ___ cez víkend." (compro/voy de compras)',options:[],answer:'nakupujem',audio:null,skippable:false,accept:['nakupujem'],explanation:"'Rada nakupujem' = me gusta ir de compras (mujer)."},
   {id:'s5t-13',category:'new',type:'mc',skill:'vocab',concept_tag:'volny_cas_slovesa',question:'¿Cómo se dice "limpiar"?',options:['relaxovať','upratovať','oddychovať','nakupovať'],answer:1,audio:null,skippable:false,accept:[],explanation:"'upratovať' = limpiar."},
   {id:'s5t-14',category:'new',type:'mc',skill:'grammar',concept_tag:'opytovacie_kedy_akocasto',question:'¿Qué significa "Ako často?"?',options:['¿Cuándo?','¿Por qué?','¿Con qué frecuencia?','¿Cómo?'],answer:2,audio:null,skippable:false,accept:[],explanation:"'Ako často?' = ¿Con qué frecuencia?"},
   {id:'s5t-15',category:'new',type:'fill',skill:'grammar',concept_tag:'frekvencia_prislovky',question:'Completa: "___ idem do hôr." (a veces)',options:[],answer:'Niekedy',audio:null,skippable:false,accept:['Niekedy'],explanation:"'Niekedy' = a veces."},
   {id:'s5t-16',category:'old_review',type:'mc',skill:'grammar',concept_tag:'negacia_slovesa',question:'¿Cuál es la negación de "mám"?',options:['nemám','nie mám','mám nie','nemam nie'],answer:0,audio:null,skippable:false,accept:[],explanation:"'nemám' = no tengo. 'ne-' + 'mám'."},
   {id:'s5t-17',category:'old_review',type:'type',skill:'grammar',concept_tag:'rad_rada_radi',question:'Escribe en eslovaco (hombre): "no me gusta cocinar"',options:[],answer:'Nerád varím',audio:null,skippable:false,accept:['Nerád varím','Nerad varim'],explanation:"'Nerád' + verbo = no me gusta (hombre)."},
   {id:'s5t-18',category:'old_review',type:'mc',skill:'grammar',concept_tag:'pridavne_zhoda',question:'¿Cuál es la forma femenina de "unavený"?',options:['unavená','unavené','unavený','unavení'],answer:0,audio:null,skippable:false,accept:[],explanation:"'unavená' = cansada (femenino, termina en -á)."},
   {id:'s5t-19',category:'old_review',type:'fill',skill:'grammar',concept_tag:'byt_som_si_je',question:'Completa: "Vy ___ tu." (están)',options:[],answer:'ste',audio:null,skippable:false,accept:['ste'],explanation:"'ste' = están (ustedes)."},
   {id:'s5t-20',category:'old_review',type:'mc',skill:'vocab',concept_tag:'profesie_vocab',question:'¿Qué significa "kuchár"?',options:['médico','profesor','cocinero','vendedor'],answer:2,audio:null,skippable:false,accept:[],explanation:"'kuchár' = cocinero."},
   {id:'s5t-21',category:'random_review',type:'mc',skill:'vocab',concept_tag:'greetings_formal_informal',question:'¿Cuál es el saludo FORMAL?',options:['Ahoj','Čau','Dobrý deň','Servus'],answer:2,audio:null,skippable:false,accept:[],explanation:"'Dobrý deň' es el saludo formal."},
   {id:'s5t-22',category:'random_review',type:'mc',skill:'vocab',concept_tag:'numbers_1_10',question:'¿Cómo se dice "ocho"?',options:['sedem','osem','deväť','šesť'],answer:1,audio:null,skippable:false,accept:[],explanation:"'osem' = ocho."},
   {id:'s5t-23',category:'random_review',type:'mc',skill:'vocab',concept_tag:'colors',question:'¿Qué significa "zelená"?',options:['roja','azul','verde','amarilla'],answer:2,audio:null,skippable:false,accept:[],explanation:"'zelená' = verde."},
   {id:'s5t-24',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'frekvencia_prislovky',question:'¿Qué frase es CORRECTA?',options:['Idem nikdy do kina.','Nikdy nejdem do kina.','Nikdy idem nie do kina.','Nejdem nikdy do kina nie.'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Nikdy' + verbo negado: 'Nikdy nejdem' (idem→nejdem con 'ne-')."},
   {id:'s5t-25',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'rad_rada_radi',question:'Corrige el error: "Som rád pracujem."',options:[],answer:'Rád pracujem',audio:null,skippable:false,accept:['Rád pracujem','Rad pracujem'],explanation:"'Rád/rada/radi' + verbo NO lleva 'som' delante: 'Rád pracujem' (no 'Som rád pracujem')."}
  ]
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
        `INSERT INTO lessons (id, section_id, sort_order, title, emoji, is_test, slides, words, phrases, multiple_choice, test_questions)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
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
          JSON.stringify(les.mc || []),
          JSON.stringify(les.tq || [])
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
