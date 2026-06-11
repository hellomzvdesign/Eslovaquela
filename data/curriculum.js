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
     r:[['ja','som','Ja som doma. → Yo estoy en casa.'],['ty','si','Ty si priateľ. → Tú eres amigo.'],['on','má (sa)','Má sa dobre. → Él está bien.']]},
    {op:'newTable', category:'byt-pritomny', tableId:'byt-negacion',
     title:'Negación de byť',note:"'nie' se coloca siempre justo antes del verbo.",
     h:['Afirmativo','Negativo'],
     r:[['Ja som (yo soy/estoy)','Ja nie som (yo no soy/estoy)'],['Ty si (tú eres/estás)','Ty nie si (tú no eres/estás)'],['On je (él es/está)','On nie je (él no es/está)']]},
    {op:'newTable', category:'otazky-spojky', tableId:'pregunta-ako-si',
     title:'Preguntar "¿cómo estás?"',note:"'Ako' (cómo) + 'sa máš' forma la pregunta sobre el estado de alguien.",
     h:['Español','Eslovaco'],
     r:[['¿Cómo estás?','Ako sa máš?'],['Estoy bien.','Je mi dobre.'],['¿Cómo está él?','Ako sa má?'],['Él está bien.','Má sa dobre.']]}
  ],
  tips:["🔑 En eslovaco, pronombre + 'byť' ya forma una frase completa: 'Ja som' = 'Yo soy/estoy'.","🔑 'byť' equivale a SER y ESTAR del español al mismo tiempo. El contexto indica cuál.","🔑 La negación 'nie' va siempre justo antes del verbo: 'nie som', 'nie si', 'nie je'.","🔑 'Ako sa máš?' (¿Cómo estás?) se responde con 'Je mi dobre.' (Estoy bien)."]
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
   ['g','Preguntar cómo está alguien','"Ako sa máš" forma la pregunta "¿Cómo estás/está...?".',[['¿Cómo estás?','Ako sa máš?'],['Estoy bien.','Je mi dobre.'],['¿Cómo está él?','Ako sa má?'],['Él está bien.','Má sa dobre.']]]
  ],
  w:[['dobre','bien','👌'],['ako','cómo','❓']],
  p:[
   ['¿Cómo estás?','Ako sa máš?',[['Ako','Cómo'],['sa máš','estás']],['som','je'],"'Ako sa máš' = '¿Cómo estás?'."],
   ['Estoy bien.','Je mi dobre.',[['Je','Es'],['mi','para mí'],['dobre','bien']],['ja','ty'],"'Je mi dobre' = Estoy bien."],
   ['Él está bien.','Má sa dobre.',[['Má','Tiene/está'],['sa','se'],['dobre','bien']],['ty','si'],"'Má sa dobre' = Él está bien."]
  ],
  mc:[
   ['¿Cómo se dice "bien"?',['ako','dobre','nie','je'],1,"'dobre' = bien."],
   ['¿Cómo se dice "¿Cómo estás?"?',['Ako sa máš?','Si ako sa máš?','Ako som?','Dobre sa máš?'],0,"'Ako sa máš?' = ¿Cómo estás?."],
   ['¿Qué significa "Má sa dobre"?',['Yo estoy bien','Tú estás bien','Él está bien','Él no está bien'],2,"'Má sa dobre' = Él está bien."]
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
   {id:'s1t-10',category:'old_review',type:'mc',skill:'vocab',concept_tag:'preguntas_como_estas',question:'¿Cómo se dice "¿Cómo estás?"?',options:['Si ako sa máš?','Ako sa máš?','Ako som?','Dobre sa máš?'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ako sa máš?' = ¿Cómo estás?"},
   {id:'s1t-11',category:'old_review',type:'fill',skill:'vocab',concept_tag:'preguntas_como_estas',question:'Completa: "___ mi dobre." (Estoy bien)',options:[],answer:'Je',audio:null,skippable:false,accept:['Je','je'],explanation:"'Je mi dobre' = Estoy bien."},
   {id:'s1t-12',category:'old_review',type:'type',skill:'vocab',concept_tag:'vocab_basico_s1',question:'Escribe en eslovaco: "amigo"',options:[],answer:'priateľ',audio:null,skippable:false,accept:['priateľ','priatel'],explanation:"'priateľ' = amigo."},
   {id:'s1t-13',category:'old_review',type:'mc',skill:'grammar',concept_tag:'negacion_byt',question:'¿Qué significa "Ty nie si doma"?',options:['Tú estás en casa','Tú no estás en casa','Él no está en casa','Yo no estoy en casa'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Ty nie si doma' = Tú no estás en casa."},
   {id:'s1t-14',category:'random_review',type:'mc',skill:'grammar',concept_tag:'byt_presente',question:'¿Qué significa "On je priateľ"?',options:['Él es amigo','Él está bien','Yo soy amigo','Tú eres amigo'],answer:0,audio:null,skippable:false,accept:[],explanation:"'On je priateľ' = Él es amigo."},
   {id:'s1t-15',category:'old_review',type:'fill',skill:'grammar',concept_tag:'preguntas_como_estas',question:'Completa: "Ako ___ on?" (¿Cómo está él?)',options:[],answer:'sa má',audio:null,skippable:false,accept:['sa má','sa ma'],explanation:"'Ako sa má on?' = ¿Cómo está él?"},
   {id:'s1t-16',category:'random_review',type:'listen',skill:'vocab',concept_tag:'vocab_basico_s1',question:'Escucha y elige la traducción correcta.',options:['Soy amigo','Estoy en casa','Eres amigo','Él es amigo'],answer:0,audio:'Ja som priateľ',skippable:true,accept:[],explanation:"'Ja som priateľ' = Soy amigo."},
   {id:'s1t-17',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'negacion_byt',question:'Elige la frase CORRECTA para "Yo no soy / no estoy"',options:['Nie ja som','Ja nie som','Ja som nie','Nie som ja'],answer:1,audio:null,skippable:false,accept:[],explanation:"'nie' va siempre justo antes del verbo: 'Ja nie som'."},
   {id:'s1t-18',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'pronombres_personales',question:'Corrige el error: "Ty som doma." (debería significar "Tú estás en casa")',options:[],answer:'Ty si doma',audio:null,skippable:false,accept:['Ty si doma','ty si doma'],explanation:"Con 'ty' se usa 'si', no 'som'. 'som' es solo para 'ja'."}
  ]
 }
]},
{id:'s2',ti:'El cuerpo humano',em:'🧍',col:'#4361EE',
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
ls:[
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
     h:['Persona','ísť (ir)','Español'],
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
]},
{id:'s6',ti:'Mi casa',em:'🏠',col:'#06AED5',
gr:{
  intro:'La Sección 6 abre el Bloque 2 ("Mi mundo y mis cosas") con el acusativo (4. pád), el caso del objeto directo: lo que TIENES, VES o QUIERES. También aprendes las habitaciones y los muebles de tu casa.',
  patches:[
    {op:'newTable', category:'pady', tableId:'rody',
     title:'Géneros gramaticales (repaso)', note:'Para usar el acusativo correctamente primero hay que reconocer el género del sustantivo.',
     h:['Género','Terminación típica','Ejemplos'],
     r:[['Mužský (masculino)','consonante','dom, stôl, telefón'],['Ženský (femenino)','-a','izba, kuchyňa, stolička'],['Stredný (neutro)','-o / -e','okno, srdce']]},
    {op:'newTable', category:'pady', tableId:'akuzativ',
     title:'Akuzatív (4. pád) — singular', note:"El acusativo es el caso del objeto directo: responde a 'Koho? Čo?' (¿a quién? ¿qué?). Se usa después de verbos como 'mať' (tener).",
     h:['Género','Nominativo','Acusativo','Ejemplo'],
     r:[['Mužský neživotný','dom','dom','Mám dom. = Tengo una casa.'],['Ženský (-a)','izba','izbu','Mám izbu. = Tengo un cuarto.'],['Stredný','okno','okno','Mám okno. = Tengo una ventana.']]},
    {op:'newTable', category:'pady', tableId:'prehlad-padov',
     title:'Prehľad skloňovania (vzorové slovo: izba)', note:'Esta tabla irá creciendo con cada caso nuevo que aprendas.',
     h:['Caso','Pregunta','Forma','Ejemplo'],
     r:[['Nominatív','Kto? Čo?','izba','To je moja izba. = Esto es mi cuarto.'],['Akuzatív','Koho? Čo?','izbu','Mám izbu. = Tengo un cuarto.']]},
    {op:'addRows', category:'otazky-spojky', tableId:'opytovacie-zamena',
     r:[['Koho? Čo?','¿a quién? ¿qué? (acusativo)']]},
    {op:'addRows', category:'frazy', tableId:'prezivanie',
     r:[['¿Dónde está el baño?','Kde je kúpeľňa?','kde ye KOO-pel-nya']]}
  ],
  tips:["🔑 El acusativo (4. pád) es el caso del OBJETO DIRECTO: lo que tienes, ves o quieres.","🔑 Sustantivos femeninos en -a cambian a -u en acusativo: izba→izbu, kuchyňa→kuchyňu.","🔑 Sustantivos masculinos inanimados y neutros NO cambian en acusativo: dom→dom, okno→okno.","🔑 'mám' + acusativo es la estructura más común para hablar de lo que tienes: 'Mám izbu, kuchyňu a kúpeľňu.'"]
},
ls:[
 {id:'s6l1',ti:'Mi casa',em:'🏠',
  sl:[
   ['v','La casa',[['dom','casa','dom'],['izba','cuarto / habitación','iz-ba']]],
   ['g','El acusativo: lo que TIENES','A diferencia del español, en eslovaco los sustantivos cambian de terminación según su función en la oración — esto se llama "caso" (pád). El acusativo es el caso del objeto directo: lo que TIENES, VES o QUIERES. Compara:',[['Esto es un cuarto. (nominativo)','To je izba.'],['Tengo un cuarto. (acusativo: izba→izbu)','Mám izbu.'],['Esto es una casa. (nominativo)','To je dom.'],['Tengo una casa. (acusativo: sin cambio)','Mám dom.']]]
  ],
  w:[['dom','casa','🏠'],['izba','cuarto / habitación','🚪']],
  p:[
   ['Tengo una casa.','Mám dom.',[['Mám','Tengo'],['dom','una casa']],['izbu','okno'],"'dom' (masculino inanimado) NO cambia en acusativo: dom→dom."],
   ['Tengo un cuarto.','Mám izbu.',[['Mám','Tengo'],['izbu','un cuarto']],['dom','kuchyňu'],"'izba' (femenino -a) cambia a -u en acusativo: izba→izbu."],
   ['No tengo casa.','Nemám dom.',[['Nemám','No tengo'],['dom','casa']],['izbu','si'],"Repaso de la negación 'ne-' (s4) + acusativo."]
  ],
  mc:[
   ['¿Cuál es el acusativo de "izba" (cuarto)?',['izba','izbe','izbu','izby'],2,"'izba'→'izbu' en acusativo (femenino -a → -u)."],
   ['¿Cómo se dice "Tengo una casa"?',['To je dom','Mám dom','Som dom','Dom mám si'],1,"'Mám dom' = Tengo una casa. 'dom' no cambia en acusativo."],
   ['¿Qué significa "Mám izbu"?',['Esto es un cuarto','Tengo un cuarto','No tengo cuarto','Es mi cuarto'],1,"'Mám izbu' = Tengo un cuarto."]
  ]
 },
 {id:'s6l2',ti:'La cocina y el dormitorio',em:'🍳',
  sl:[
   ['v','Más habitaciones',[['kuchyňa','cocina','ku-khi-nya'],['spálňa','dormitorio','spal-nya']]],
   ['g','Más femeninos en -a','Igual que "izba", estas palabras también cambian -a → -u en acusativo.',[['Tengo una cocina.','Mám kuchyňu.'],['Tengo un dormitorio.','Mám spálňu.'],['No tengo dormitorio.','Nemám spálňu.']]]
  ],
  w:[['kuchyňa','cocina','🍳'],['spálňa','dormitorio','🛏️']],
  p:[
   ['Tengo una cocina.','Mám kuchyňu.',[['Mám','Tengo'],['kuchyňu','una cocina']],['izbu','spálňu'],"'kuchyňa'→'kuchyňu' (femenino -a → -u)."],
   ['Tengo una cocina y un dormitorio.','Mám kuchyňu a spálňu.',[['Mám','Tengo'],['kuchyňu','una cocina'],['a','y'],['spálňu','un dormitorio']],['izbu','dom'],"Lista de objetos en acusativo conectados con 'a' (y)."],
   ['¿Tienes un dormitorio?','Máš spálňu?',[['Máš','¿Tienes'],['spálňu?','un dormitorio?']],['kuchyňu','izbu'],"'Máš' = 2ª persona de 'mať' (s3) + acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "cocina"?',['izba','kuchyňa','spálňa','dom'],1,"'kuchyňa' = cocina."],
   ['¿Cuál es el acusativo de "spálňa"?',['spálňa','spálňu','spálne','spálni'],1,"'spálňa'→'spálňu' (femenino -a → -u)."],
   ['¿Qué significa "Máš kuchyňu?"',['¿Tienes una cocina?','¿Es una cocina?','¿Hay una cocina?','¿Te gusta la cocina?'],0,"'Máš' = ¿tienes? + acusativo 'kuchyňu'."]
  ]
 },
 {id:'s6l3',ti:'¿Dónde está el baño?',em:'🛁',
  sl:[
   ['v','El baño',[['kúpeľňa','baño','koo-pel-nya']]],
   ['g','Preguntar "¿Dónde está...?"','Repaso de "kde" (s3) + "je" (byť, s1). El sustantivo se queda en NOMINATIVO porque es el sujeto, no el objeto directo.',[['¿Dónde está el baño?','Kde je kúpeľňa?'],['¿Dónde está la cocina?','Kde je kuchyňa?'],['El baño está aquí.','Kúpeľňa je tu.']]]
  ],
  w:[['kúpeľňa','baño','🛁']],
  p:[
   ['¿Dónde está el baño?','Kde je kúpeľňa?',[['Kde','Dónde'],['je','está'],['kúpeľňa?','el baño?']],['izba','spálňa'],"'Kde je...?' = ¿Dónde está...? 'kúpeľňa' está en nominativo (es el sujeto)."],
   ['No tengo baño en casa.','Doma nemám kúpeľňu.',[['Doma','En casa'],['nemám','no tengo'],['kúpeľňu','baño']],['kuchyňu','izbu'],"'Doma' (s1) + 'nemám' (negación de 'mám') + acusativo."],
   ['¿Tienes un baño?','Máš kúpeľňu?',[['Máš','¿Tienes'],['kúpeľňu?','un baño?']],['kuchyňu','spálňu'],"'kúpeľňa'→'kúpeľňu' en acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "baño"?',['kuchyňa','spálňa','kúpeľňa','izba'],2,"'kúpeľňa' = baño."],
   ['¿Cómo se dice "¿Dónde está el baño?"?',['Máš kúpeľňu?','Kde je kúpeľňa?','Mám kúpeľňu','Kúpeľňa je dom'],1,"'Kde je kúpeľňa?' = ¿Dónde está el baño?"],
   ['¿Por qué "kúpeľňa" no cambia en "Kde je kúpeľňa?"',['Porque es plural','Porque es el sujeto, está en nominativo','Porque es masculino','Porque es una pregunta'],1,"En 'Kde je kúpeľňa?', 'kúpeľňa' es el sujeto (nominativo), no objeto directo."]
  ]
 },
 {id:'s6l4',ti:'La sala y la mesa',em:'🛋️',
  sl:[
   ['v','Más muebles',[['obývačka','sala','o-bee-vach-ka'],['stôl','mesa','stol']]],
   ['g','Masculino vs. femenino en acusativo','Compara los dos patrones que ya conoces:',[['Tengo una mesa. (masculino, no cambia)','Mám stôl.'],['Tengo una sala. (femenino -a→-u)','Mám obývačku.'],['Tengo una sala y una mesa.','Mám obývačku a stôl.']]]
  ],
  w:[['obývačka','sala','🛋️'],['stôl','mesa','🍽️']],
  p:[
   ['Tengo una mesa.','Mám stôl.',[['Mám','Tengo'],['stôl','una mesa']],['obývačku','dom'],"'stôl' (masculino inanimado) NO cambia en acusativo."],
   ['Tengo una sala.','Mám obývačku.',[['Mám','Tengo'],['obývačku','una sala']],['stôl','kuchyňu'],"'obývačka'→'obývačku' (femenino -a → -u)."],
   ['Tengo una sala y una mesa.','Mám obývačku a stôl.',[['Mám','Tengo'],['obývačku','una sala'],['a','y'],['stôl','una mesa']],['kuchyňu','izbu'],"Lista de dos objetos: uno femenino (obývačku) y uno masculino (stôl)."]
  ],
  mc:[
   ['¿Cómo se dice "sala"?',['kuchyňa','obývačka','spálňa','kúpeľňa'],1,"'obývačka' = sala."],
   ['¿Cuál es el acusativo de "stôl" (mesa)?',['stôl','stola','stôlu','stoly'],0,"'stôl' es masculino inanimado: no cambia en acusativo."],
   ['¿Qué significa "Mám obývačku a stôl"?',['Tengo una sala y una mesa','Esto es una sala y una mesa','No tengo sala ni mesa','¿Tienes una sala y una mesa?'],0,"'Mám obývačku a stôl' = Tengo una sala y una mesa."]
  ]
 },
 {id:'s6l5',ti:'La silla',em:'🪑',
  sl:[
   ['v','Un mueble más',[['stolička','silla','sto-lich-ka']]],
   ['t','Patrón femenino otra vez','"stolička" termina en -a, así que sigue el mismo patrón: stolička→stoličku. Ya has visto este patrón con izba, kuchyňa, spálňa, kúpeľňa y obývačka — ¡son 6 palabras femeninas!']
  ],
  w:[['stolička','silla','🪑']],
  p:[
   ['Tengo una silla.','Mám stoličku.',[['Mám','Tengo'],['stoličku','una silla']],['stôl','obývačku'],"'stolička'→'stoličku' (femenino -a → -u, igual que izba→izbu)."],
   ['No tengo silla, tengo una mesa.','Nemám stoličku, mám stôl.',[['Nemám','No tengo'],['stoličku','silla'],['mám','tengo'],['stôl','una mesa']],['kuchyňu','spálňu'],"Contraste: 'nemám stoličku' (femenino, cambia) vs 'mám stôl' (masculino, no cambia)."],
   ['¿Tienes una mesa y una silla?','Máš stôl a stoličku?',[['Máš','¿Tienes'],['stôl','una mesa'],['a','y'],['stoličku?','una silla?']],['izbu','kuchyňu'],"Pregunta con 'máš' (2ª persona de 'mať') + dos objetos en acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "silla"?',['stôl','stolička','posteľ','okno'],1,"'stolička' = silla."],
   ['¿Cuál es el acusativo de "stolička"?',['stolička','stoličky','stoličku','stoličke'],2,"'stolička'→'stoličku' (femenino -a → -u)."],
   ['¿Qué significa "Nemám stoličku"?',['Tengo una silla','No tengo silla','¿Tienes una silla?','Esto no es una silla'],1,"'Nemám stoličku' = No tengo silla."]
  ]
 },
 {id:'s6l6',ti:'La cama y la ventana',em:'🛏️',
  sl:[
   ['v','Dos palabras nuevas',[['posteľ','cama','pos-tel'],['okno','ventana','ok-no']]],
   ['g','Dos patrones que NO cambian','"posteľ" (femenino terminado en consonante blanda) y "okno" (neutro) NO cambian en acusativo, igual que "dom" y "stôl".',[['Tengo una cama. (no cambia)','Mám posteľ.'],['Tengo una ventana. (no cambia)','Mám okno.'],['Esto es mi cama.','To je moja posteľ.']]]
  ],
  w:[['posteľ','cama','🛏️'],['okno','ventana','🪟']],
  p:[
   ['Tengo una cama.','Mám posteľ.',[['Mám','Tengo'],['posteľ','una cama']],['posteľu','okná'],"'posteľ' (femenino en consonante blanda) NO cambia en acusativo."],
   ['Tengo una ventana.','Mám okno.',[['Mám','Tengo'],['okno','una ventana']],['oknu','okná'],"'okno' (neutro) NO cambia en acusativo, igual que 'dom'."],
   ['Tengo una cama y una ventana.','Mám posteľ a okno.',[['Mám','Tengo'],['posteľ','una cama'],['a','y'],['okno','una ventana']],['izbu','stôl'],"Dos palabras que NO cambian en acusativo: 'posteľ' y 'okno'."]
  ],
  mc:[
   ['¿Cómo se dice "cama"?',['stolička','posteľ','okno','obývačka'],1,"'posteľ' = cama."],
   ['¿Cuál es el acusativo de "okno" (ventana)?',['okno','okna','oknu','okná'],0,"'okno' (neutro) no cambia en acusativo: okno→okno."],
   ['¿Cuál de estas palabras SÍ cambia en acusativo (-a → -u)?',['posteľ','okno','izba','dom'],2,"'izba' es femenino en -a, cambia a 'izbu'. Las demás no cambian."]
  ]
 },
 {id:'s6l7',ti:'Mi casa completa',em:'🚪',
  sl:[
   ['v','Última palabra de la sección',[['skriňa','armario','skri-nya']]],
   ['t','¡Sección 6 completa!','Ya conoces 11 palabras nuevas y el acusativo singular: dom, izba, kuchyňa, spálňa, kúpeľňa, obývačka, stôl, stolička, posteľ, okno, skriňa. ¡A practicar para el test!']
  ],
  w:[['skriňa','armario','🚪']],
  p:[
   ['Tengo un armario.','Mám skriňu.',[['Mám','Tengo'],['skriňu','un armario']],['posteľ','okno'],"'skriňa'→'skriňu' (femenino -a → -u)."],
   ['Tengo una cocina, un dormitorio y un baño.','Mám kuchyňu, spálňu a kúpeľňu.',[['Mám','Tengo'],['kuchyňu','una cocina'],['spálňu','un dormitorio'],['kúpeľňu','un baño']],['obývačku','skriňu'],"Repaso de tres palabras femeninas en acusativo (-a→-u)."],
   ['¿Qué tienes en tu casa?','Čo máš doma?',[['Čo','Qué'],['máš','tienes'],['doma?','en tu casa?']],['kde','ako'],"'Čo' (qué, acusativo) + 'máš' (s3) + 'doma' (s1)."]
  ],
  mc:[
   ['¿Cómo se dice "armario"?',['posteľ','skriňa','okno','stolička'],1,"'skriňa' = armario."],
   ['¿Cuál es el acusativo de "skriňa"?',['skriňa','skrini','skriňu','skrine'],2,"'skriňa'→'skriňu' (femenino -a → -u)."],
   ['¿Cuántas palabras de esta sección son femeninas en -a→-u?',['3','5','7','9'],2,"izba, kuchyňa, spálňa, kúpeľňa, obývačka, stolička, skriňa = 7 palabras femeninas en -a→-u."]
  ]
 },
 {id:'s6test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Hora del examen!','Vas a responder preguntas de repaso de toda la Sección 6: el acusativo y las 11 palabras de la casa. Necesitas 80% correctas para desbloquear la Sección 7. ¡Tú puedes!'],
   ['g','Repaso rápido','El acusativo singular:',[['Mužský neživotný (no cambia)','dom, stôl, okno*'],['Ženský -a → -u','izba→izbu, kuchyňa→kuchyňu, skriňa→skriňu...'],['Mám + acusativo','Mám dom, izbu, kuchyňu...']]],
   ['t','Consejo final',"Recuerda: solo los sustantivos femeninos terminados en -a cambian (-a→-u). Los demás se quedan igual."]
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s6t-01',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'¿Cuál es el acusativo de "izba" (cuarto)?',options:['izba','izbe','izbu','izby'],answer:2,audio:null,skippable:false,accept:[],explanation:"'izba'→'izbu' (femenino -a → -u)."},
   {id:'s6t-02',category:'new',type:'fill',skill:'vocab',concept_tag:'vocab_dom_izba',question:'Completa: "Mám ___." (Tengo una cocina)',options:[],answer:'kuchyňu',audio:null,skippable:false,accept:['kuchyňu'],explanation:"'kuchyňa'→'kuchyňu' = Tengo una cocina."},
   {id:'s6t-03',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'¿Cuál es el acusativo de "dom" (casa)?',options:['domu','dom','doma','domy'],answer:1,audio:null,skippable:false,accept:[],explanation:"'dom' (masculino inanimado) no cambia en acusativo."},
   {id:'s6t-04',category:'new',type:'mc',skill:'vocab',concept_tag:'vocab_dom_izba',question:'¿Qué significa "spálňa"?',options:['cocina','baño','dormitorio','sala'],answer:2,audio:null,skippable:false,accept:[],explanation:"'spálňa' = dormitorio."},
   {id:'s6t-05',category:'new',type:'type',skill:'vocab',concept_tag:'vocab_dom_izba',question:'Escribe en eslovaco: "baño"',options:[],answer:'kúpeľňa',audio:null,skippable:false,accept:['kúpeľňa','kupelna'],explanation:"'kúpeľňa' = baño."},
   {id:'s6t-06',category:'new',type:'listen',skill:'vocab',concept_tag:'vocab_dom_izba',question:'Escucha y elige la traducción correcta.',options:['Tengo una sala','Tengo una cocina','Tengo un armario','Tengo una cama'],answer:0,audio:'Mám obývačku',skippable:true,accept:[],explanation:"'Mám obývačku' = Tengo una sala."},
   {id:'s6t-07',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'¿Cuál es el acusativo de "okno" (ventana)?',options:['okna','oknu','okno','okná'],answer:2,audio:null,skippable:false,accept:[],explanation:"'okno' (neutro) no cambia en acusativo."},
   {id:'s6t-08',category:'new',type:'fill',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'Completa: "Máš ___?" (¿Tienes una silla?)',options:[],answer:'stoličku',audio:null,skippable:false,accept:['stoličku'],explanation:"'stolička'→'stoličku' (femenino -a → -u)."},
   {id:'s6t-09',category:'new',type:'mc',skill:'vocab',concept_tag:'opytovacie_kde_je',question:'¿Cómo se dice "¿Dónde está el baño?"?',options:['Mám kúpeľňu','Kde je kúpeľňa?','Máš kúpeľňu?','Kúpeľňa je tu'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Kde je...?' = ¿Dónde está...?"},
   {id:'s6t-10',category:'new',type:'type',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'Escribe el acusativo de "skriňa" (armario)',options:[],answer:'skriňu',audio:null,skippable:false,accept:['skriňu','skrinu'],explanation:"'skriňa'→'skriňu' (femenino -a → -u)."},
   {id:'s6t-11',category:'new',type:'mc',skill:'grammar',concept_tag:'mat_s_akuzativom',question:'¿Cuál frase es CORRECTA para "Tengo una mesa y una silla"?',options:['Mám stôl a stoličku','Mám stôla a stoličku','Mám stôl a stolička','Mám stôl a stoličke'],answer:0,audio:null,skippable:false,accept:[],explanation:"'stôl' no cambia, 'stolička'→'stoličku'."},
   {id:'s6t-12',category:'old_review',type:'mc',skill:'grammar',concept_tag:'negacia_slovesa',question:'¿Cómo se dice "No tengo casa"?',options:['Nie mám dom','Mám nie dom','Nemám dom','Dom nemám nie'],answer:2,audio:null,skippable:false,accept:[],explanation:"'ne-' + 'mám' = 'nemám' (s4)."},
   {id:'s6t-13',category:'old_review',type:'mc',skill:'grammar',concept_tag:'pritomny_vzory_mat',question:'¿Cómo se dice "tienes" (de "mať")?',options:['mám','máš','má','majú'],answer:1,audio:null,skippable:false,accept:[],explanation:"'máš' = tienes (2ª persona de 'mať', s3)."},
   {id:'s6t-14',category:'old_review',type:'fill',skill:'vocab',concept_tag:'opytovacie_zamena',question:'Completa: "___ je kúpeľňa?" (¿Dónde está el baño?)',options:[],answer:'Kde',audio:null,skippable:false,accept:['Kde'],explanation:"'Kde' = dónde (s3)."},
   {id:'s6t-15',category:'random_review',type:'mc',skill:'vocab',concept_tag:'numbers_1_10',question:'¿Cómo se dice "tres"?',options:['dva','tri','štyri','päť'],answer:1,audio:null,skippable:false,accept:[],explanation:"'tri' = tres."},
   {id:'s6t-16',category:'random_review',type:'listen',skill:'grammar',concept_tag:'rad_rada_radi',question:'Escucha y elige la traducción correcta.',options:['Me gusta trabajar','No me gusta trabajar','Trabajo mucho','Quiero trabajar'],answer:0,audio:'Rád pracujem',skippable:true,accept:[],explanation:"'Rád pracujem' = Me gusta trabajar (hombre)."},
   {id:'s6t-17',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'Elige la frase CORRECTA para "Tengo un cuarto"',options:['Mám izba','Mám izbu','Mám izbe','Mám izby'],answer:1,audio:null,skippable:false,accept:[],explanation:"Femenino -a → -u en acusativo: 'izba'→'izbu'."},
   {id:'s6t-18',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'Corrige el error: "Mám domu."',options:[],answer:'Mám dom',audio:null,skippable:false,accept:['Mám dom'],explanation:"'dom' (masculino inanimado) NO cambia en acusativo: 'Mám dom', no 'Mám domu'."}
  ]
 }
]},
{id:'s7',ti:'Mis cosas',em:'🎒',col:'#EF476F',
gr:{
  intro:'La Sección 7 amplía el acusativo: ahora incluye los sustantivos masculinos ANIMADOS (personas, animales), que cambian -Ø → -a, y el plural de los tres géneros. También aprendes vocabulario de "mis cosas": mascotas, libros y aparatos.',
  patches:[
    {op:'addRows', category:'pady', tableId:'akuzativ',
     r:[['Mužský životný','pes','psa','Mám psa. = Tengo un perro.']]},
    {op:'newTable', category:'pady', tableId:'mnozne-cislo',
     title:'Množné číslo (nominatív)', note:'El plural depende del género. Después de los números 2, 3 y 4 se usa esta misma forma.',
     h:['Género','Singular','Plural','Ejemplo'],
     r:[['Mužský','dom','domy','Mám dva domy. = Tengo dos casas.'],['Ženský','izba','izby','Mám tri izby. = Tengo tres cuartos.'],['Stredný','okno','okná','Mám dve okná. = Tengo dos ventanas.']]},
    {op:'addRows', category:'pady', tableId:'prehlad-padov',
     r:[['Akuzatív (živ.)','Koho?','psa','Mám psa. = Tengo un perro.']]},
    {op:'addRows', category:'frazy', tableId:'prezivanie',
     r:[['¿Qué es esto?','Čo je to?','cho ye to']]}
  ],
  tips:["🔑 Los sustantivos masculinos ANIMADOS (personas, animales) cambian -Ø → -a en acusativo: pes→psa, brat→brata.","🔑 El plural depende del género: masculino -y (domy), femenino -y (izby), neutro -á (autá, okná, kreslá).","🔑 Después de los números 2, 3 y 4 se usa la forma plural: dva domy, tri izby, dve autá.","🔑 'Čo je to?' (¿Qué es esto?) es una pregunta útil para aprender vocabulario nuevo."]
},
ls:[
 {id:'s7l1',ti:'El perro y el gato',em:'🐶',
  sl:[
   ['v','Mascotas',[['pes','perro','pes'],['mačka','gato / gata','mach-ka']]],
   ['g','Acusativo: masculino ANIMADO','Los sustantivos masculinos ANIMADOS (personas, animales) cambian -Ø → -a en acusativo, ¡a diferencia de los inanimados!',[['Tengo un perro. (animado, -Ø→-a)','Mám psa.'],['Tengo una casa. (inanimado, no cambia)','Mám dom.'],['Tengo un gato/a. (femenino -a→-u)','Mám mačku.'],['Tengo un hermano. (animado, repaso s1)','Mám brata.']]]
  ],
  w:[['pes','perro','🐶'],['mačka','gato / gata','🐱']],
  p:[
   ['Tengo un perro.','Mám psa.',[['Mám','Tengo'],['psa','un perro']],['pes','mačku'],"'pes' (masculino animado) cambia -Ø → -a en acusativo: pes→psa."],
   ['Tengo un gato.','Mám mačku.',[['Mám','Tengo'],['mačku','un gato/a']],['psa','knihu'],"'mačka' (femenino -a) cambia -a → -u: mačka→mačku."],
   ['No tengo perro, tengo un gato.','Nemám psa, mám mačku.',[['Nemám','No tengo'],['psa','perro'],['mám','tengo'],['mačku','un gato/a']],['dom','izbu'],"Repaso de 'nemám' (s4) + dos patrones de acusativo distintos."]
  ],
  mc:[
   ['¿Cuál es el acusativo de "pes" (perro)?',['pes','psa','psy','pesa'],1,"'pes' (masculino animado) → 'psa' en acusativo (-Ø → -a)."],
   ['¿Por qué "pes" cambia diferente que "dom" en acusativo?',['Porque "pes" es femenino','Porque "pes" es un animal/persona (animado)','Porque "pes" es plural','No hay diferencia'],1,"Los sustantivos masculinos ANIMADOS (personas, animales) cambian -Ø→-a; los inanimados no cambian."],
   ['¿Cómo se dice "Tengo un gato"?',['Mám mačka','Mám mačku','Mám mačke','Mám mačky'],1,"'mačka'→'mačku' (femenino -a → -u)."]
  ]
 },
 {id:'s7l2',ti:'El libro y la bolsa',em:'📖',
  sl:[
   ['v','Cosas para llevar',[['kniha','libro','kni-ha'],['taška','bolsa / mochila','tash-ka']]],
   ['t','Más femeninos en -a','"kniha" y "taška" siguen el mismo patrón que "izba" y "mačka": -a → -u en acusativo.']
  ],
  w:[['kniha','libro','📖'],['taška','bolsa / mochila','👜']],
  p:[
   ['Tengo un libro.','Mám knihu.',[['Mám','Tengo'],['knihu','un libro']],['mačku','tašku'],"'kniha'→'knihu' (femenino -a → -u)."],
   ['Tengo una bolsa.','Mám tašku.',[['Mám','Tengo'],['tašku','una bolsa']],['knihu','psa'],"'taška'→'tašku' (femenino -a → -u)."],
   ['Tengo un libro y una bolsa.','Mám knihu a tašku.',[['Mám','Tengo'],['knihu','un libro'],['a','y'],['tašku','una bolsa']],['psa','mačku'],"Lista de dos objetos femeninos en acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "libro"?',['taška','kniha','pero','auto'],1,"'kniha' = libro."],
   ['¿Cuál es el acusativo de "taška"?',['taška','tašku','tašky','taške'],1,"'taška'→'tašku' (femenino -a → -u)."],
   ['¿Qué significa "Mám knihu a tašku"?',['Tengo un libro y una bolsa','¿Tienes un libro y una bolsa?','No tengo libro ni bolsa','Esto es un libro y una bolsa'],0,"'Mám knihu a tašku' = Tengo un libro y una bolsa."]
  ]
 },
 {id:'s7l3',ti:'El teléfono',em:'📱',
  sl:[
   ['v','Un objeto importante',[['telefón','teléfono','te-le-fon']]],
   ['g','Masculino inanimado: repaso','"telefón" es masculino inanimado, igual que "dom" y "stôl": NO cambia en acusativo.',[['Tengo un teléfono. (no cambia)','Mám telefón.'],['Tengo una casa. (no cambia, s6)','Mám dom.'],['Tengo un perro. (cambia, animado)','Mám psa.']]]
  ],
  w:[['telefón','teléfono','📱']],
  p:[
   ['Tengo un teléfono.','Mám telefón.',[['Mám','Tengo'],['telefón','un teléfono']],['telefónu','knihu'],"'telefón' (masculino inanimado) NO cambia en acusativo, igual que 'dom' y 'stôl'."],
   ['No tengo teléfono.','Nemám telefón.',[['Nemám','No tengo'],['telefón','teléfono']],['psa','tašku'],"'nemám' (s4) + sustantivo masculino inanimado sin cambio."],
   ['¿Tienes un teléfono y una bolsa?','Máš telefón a tašku?',[['Máš','¿Tienes'],['telefón','un teléfono'],['a','y'],['tašku?','una bolsa?']],['psa','knihu'],"Combina un masculino inanimado (sin cambio) y un femenino (-a→-u)."]
  ],
  mc:[
   ['¿Cómo se dice "teléfono"?',['počítač','telefón','auto','pero'],1,"'telefón' = teléfono."],
   ['¿Cuál es el acusativo de "telefón"?',['telefón','telefónu','telefóny','telefóna'],0,"'telefón' (masculino inanimado) no cambia en acusativo."],
   ['¿Qué significa "Nemám telefón"?',['Tengo un teléfono','No tengo teléfono','¿Tienes un teléfono?','Esto no es un teléfono'],1,"'Nemám telefón' = No tengo teléfono."]
  ]
 },
 {id:'s7l4',ti:'La computadora y el bolígrafo',em:'💻',
  sl:[
   ['v','Más objetos',[['počítač','computadora','po-chee-tach'],['pero','bolígrafo / lapicera','pe-ro']]],
   ['g','Inanimado: masculino y neutro','"počítač" (masculino inanimado) y "pero" (neutro) — ninguno cambia en acusativo.',[['Tengo una computadora. (no cambia)','Mám počítač.'],['Tengo un bolígrafo. (no cambia)','Mám pero.'],['Tengo una computadora y un bolígrafo.','Mám počítač a pero.']]]
  ],
  w:[['počítač','computadora','💻'],['pero','bolígrafo / lapicera','🖊️']],
  p:[
   ['Tengo una computadora.','Mám počítač.',[['Mám','Tengo'],['počítač','una computadora']],['počítača','knihu'],"'počítač' (masculino inanimado) NO cambia en acusativo."],
   ['Tengo un bolígrafo.','Mám pero.',[['Mám','Tengo'],['pero','un bolígrafo']],['pera','tašku'],"'pero' (neutro) NO cambia en acusativo, igual que 'okno'."],
   ['Tengo una computadora y un bolígrafo.','Mám počítač a pero.',[['Mám','Tengo'],['počítač','una computadora'],['a','y'],['pero','un bolígrafo']],['psa','mačku'],"Dos sustantivos inanimados (masculino y neutro) que no cambian."]
  ],
  mc:[
   ['¿Cómo se dice "computadora"?',['telefón','počítač','auto','kniha'],1,"'počítač' = computadora."],
   ['¿Cuál es el acusativo de "pero" (bolígrafo)?',['pero','pera','perá','perom'],0,"'pero' (neutro) no cambia en acusativo."],
   ['¿Qué significa "Mám počítač a pero"?',['Tengo una computadora y un bolígrafo','¿Tienes una computadora?','No tengo computadora','Esto es una computadora y un bolígrafo'],0,"'Mám počítač a pero' = Tengo una computadora y un bolígrafo."]
  ]
 },
 {id:'s7l5',ti:'El auto y el plural',em:'🚗',
  sl:[
   ['v','Un vehículo',[['auto','auto / carro','au-to']]],
   ['g','Množné číslo (plural)','¡Nuevo! Para hablar de VARIAS cosas, el sustantivo también cambia de forma — y la terminación que recibe depende del género: masculino y femenino añaden "-y", el neutro cambia "-o" por "-á". Mira estos ejemplos:',[['Masculino (-y): una casa → dos casas','dom → domy'],['Femenino (-y): un cuarto → tres cuartos','izba → izby'],['Neutro (-o→-á): una ventana → dos ventanas','okno → okná'],['Neutro (-o→-á): un auto → dos autos','auto → autá']]]
  ],
  w:[['auto','auto / carro','🚗']],
  p:[
   ['Tengo un auto.','Mám auto.',[['Mám','Tengo'],['auto','un auto']],['autá','autom'],"'auto' (neutro) NO cambia en acusativo singular."],
   ['Tengo dos autos.','Mám dve autá.',[['Mám','Tengo'],['dve','dos'],['autá','autos']],['auto','domy'],"Plural neutro: auto → autá. 'dve' = dos (con sustantivos neutros/femeninos)."],
   ['Tengo dos casas y tres cuartos.','Mám dva domy a tri izby.',[['Mám','Tengo'],['dva domy','dos casas'],['a','y'],['tri izby','tres cuartos']],['autá','okná'],"Plural masculino: dom→domy. Plural femenino: izba→izby."]
  ],
  mc:[
   ['¿Cómo se dice "auto/carro"?',['bicykel','auto','počítač','pero'],1,"'auto' = auto/carro."],
   ['¿Cuál es el plural de "auto"?',['auto','autá','autos','auty'],1,"'auto'→'autá' (plural neutro)."],
   ['¿Cuál es el plural de "izba" (cuarto)?',['izba','izbu','izby','izbá'],2,"'izba'→'izby' (plural femenino)."]
  ]
 },
 {id:'s7l6',ti:'El sillón y la lámpara',em:'🛋️',
  sl:[
   ['v','Más muebles',[['kreslo','sillón','kres-lo'],['lampa','lámpara','lam-pa']]],
   ['t','Repaso de patrones','"kreslo" (neutro, no cambia) y "lampa" (femenino -a→-u, cambia a "lampu") — los dos patrones que ya conoces muy bien.']
  ],
  w:[['kreslo','sillón','🛋️'],['lampa','lámpara','💡']],
  p:[
   ['Tengo un sillón.','Mám kreslo.',[['Mám','Tengo'],['kreslo','un sillón']],['kreslá','lampu'],"'kreslo' (neutro) NO cambia en acusativo."],
   ['Tengo una lámpara.','Mám lampu.',[['Mám','Tengo'],['lampu','una lámpara']],['kreslo','tašku'],"'lampa'→'lampu' (femenino -a → -u)."],
   ['Tengo dos sillones y una lámpara.','Mám dve kreslá a lampu.',[['Mám','Tengo'],['dve kreslá','dos sillones'],['a','y'],['lampu','una lámpara']],['domy','izby'],"Plural neutro 'kreslá' (kreslo→kreslá) + acusativo singular 'lampu'."]
  ],
  mc:[
   ['¿Cómo se dice "sillón"?',['stolička','kreslo','posteľ','lampa'],1,"'kreslo' = sillón."],
   ['¿Cuál es el acusativo de "lampa"?',['lampa','lampu','lampy','lampe'],1,"'lampa'→'lampu' (femenino -a → -u)."],
   ['¿Cuál es el plural de "kreslo"?',['kreslo','kreslu','kreslá','kresly'],2,"'kreslo'→'kreslá' (plural neutro)."]
  ]
 },
 {id:'s7l7',ti:'Mis cosas, en resumen',em:'🟫',
  sl:[
   ['v','Última palabra de la sección',[['koberec','alfombra','ko-be-rets']]],
   ['t','¡Sección 7 completa!','Ya conoces 22 palabras de la casa (Secciones 6-7) y el acusativo singular completo: masculino animado (-Ø→-a), masculino inanimado (no cambia), femenino -a (-a→-u), neutro (no cambia) y femenino en consonante (no cambia), además del plural. ¡A practicar para el test!']
  ],
  w:[['koberec','alfombra','🟫']],
  p:[
   ['Tengo una alfombra.','Mám koberec.',[['Mám','Tengo'],['koberec','una alfombra']],['koberca','lampu'],"'koberec' (masculino inanimado) NO cambia en acusativo."],
   ['Tengo un perro y un gato.','Mám psa a mačku.',[['Mám','Tengo'],['psa','un perro'],['a','y'],['mačku','un gato/a']],['knihu','tašku'],"Repaso: 'pes' (animado) → 'psa', 'mačka' → 'mačku'."],
   ['¿Qué tienes?','Čo máš?',[['Čo','Qué'],['máš','tienes']],['kde','ako'],"Repaso de 'Čo máš?' (s6l7) — pregunta general sobre posesiones."]
  ],
  mc:[
   ['¿Cómo se dice "alfombra"?',['kreslo','koberec','lampa','posteľ'],1,"'koberec' = alfombra."],
   ['¿Cuál es el acusativo de "koberec"?',['koberec','koberca','kobercu','koberce'],0,"'koberec' (masculino inanimado) no cambia en acusativo."],
   ['¿Qué tipo de sustantivo cambia -Ø → -a en acusativo?',['Masculino inanimado','Femenino en -a','Masculino animado','Neutro'],2,"Solo los sustantivos MASCULINOS ANIMADOS (personas, animales) cambian -Ø → -a: pes→psa, brat→brata."]
  ]
 },
 {id:'s7test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Hora del examen!','Vas a responder preguntas de repaso de toda la Sección 7: el acusativo ampliado (animado + plural) y 11 palabras nuevas. Necesitas 80% correctas para desbloquear la Sección 8. ¡Tú puedes!'],
   ['g','Repaso rápido','El acusativo, ampliado:',[['Mužský životný (-Ø → -a)','pes→psa, brat→brata'],['Mužský neživotný / Stredný (no cambia)','dom, telefón, auto, pero'],['Ženský -a → -u','mačka→mačku, kniha→knihu'],['Plurál','dom→domy, izba→izby, auto→autá']]],
   ['t','Consejo final',"Antes de decir 'Mám ___', pregúntate: ¿es una persona o animal? Si sí, cambia -Ø → -a."]
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s7t-01',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_muzsky_zivotny',question:'¿Cuál es el acusativo de "pes" (perro)?',options:['pes','psa','psy','pesa'],answer:1,audio:null,skippable:false,accept:[],explanation:"'pes' (masculino animado) → 'psa' (-Ø → -a)."},
   {id:'s7t-02',category:'new',type:'fill',skill:'vocab',concept_tag:'vocab_moje_veci',question:'Completa: "Mám ___." (Tengo un libro)',options:[],answer:'knihu',audio:null,skippable:false,accept:['knihu'],explanation:"'kniha'→'knihu' = Tengo un libro."},
   {id:'s7t-03',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'¿Cuál es el acusativo de "taška" (bolsa)?',options:['taška','tašku','tašky','taške'],answer:1,audio:null,skippable:false,accept:[],explanation:"'taška'→'tašku' (femenino -a → -u)."},
   {id:'s7t-04',category:'new',type:'mc',skill:'vocab',concept_tag:'vocab_moje_veci',question:'¿Qué significa "počítač"?',options:['teléfono','computadora','bolígrafo','auto'],answer:1,audio:null,skippable:false,accept:[],explanation:"'počítač' = computadora."},
   {id:'s7t-05',category:'new',type:'type',skill:'vocab',concept_tag:'vocab_moje_veci',question:'Escribe en eslovaco: "teléfono"',options:[],answer:'telefón',audio:null,skippable:false,accept:['telefón','telefon'],explanation:"'telefón' = teléfono."},
   {id:'s7t-06',category:'new',type:'listen',skill:'vocab',concept_tag:'vocab_moje_veci',question:'Escucha y elige la traducción correcta.',options:['Tengo un perro y un gato','Tengo un libro y una bolsa','Tengo una computadora','No tengo perro'],answer:0,audio:'Mám psa a mačku',skippable:true,accept:[],explanation:"'Mám psa a mačku' = Tengo un perro y un gato."},
   {id:'s7t-07',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'¿Cuál es el acusativo de "pero" (bolígrafo)?',options:['pero','pera','perá','perom'],answer:0,audio:null,skippable:false,accept:[],explanation:"'pero' (neutro) no cambia en acusativo."},
   {id:'s7t-08',category:'new',type:'fill',skill:'grammar',concept_tag:'mnozne_cislo_nom',question:'Completa: "Mám dve ___." (Tengo dos autos)',options:[],answer:'autá',audio:null,skippable:false,accept:['autá','auta'],explanation:"'auto'→'autá' (plural neutro)."},
   {id:'s7t-09',category:'new',type:'mc',skill:'grammar',concept_tag:'mnozne_cislo_nom',question:'¿Cuál es el plural de "izba" (cuarto)?',options:['izba','izbu','izby','izbá'],answer:2,audio:null,skippable:false,accept:[],explanation:"'izba'→'izby' (plural femenino)."},
   {id:'s7t-10',category:'new',type:'type',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'Escribe el acusativo de "mačka" (gato)',options:[],answer:'mačku',audio:null,skippable:false,accept:['mačku','macku'],explanation:"'mačka'→'mačku' (femenino -a → -u)."},
   {id:'s7t-11',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_muzsky_zivotny',question:'¿Por qué "pes"→"psa" pero "dom"→"dom" en acusativo?',options:['"pes" es femenino','"pes" es animado (animal); "dom" es inanimado','"pes" es plural','No hay razón, son irregulares'],answer:1,audio:null,skippable:false,accept:[],explanation:"Los masculinos animados cambian -Ø→-a; los inanimados no cambian."},
   {id:'s7t-12',category:'old_review',type:'mc',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'¿Cuál es el acusativo de "izba" (cuarto)?',options:['izba','izbe','izbu','izby'],answer:2,audio:null,skippable:false,accept:[],explanation:"Repaso de la Sección 6: izba→izbu."},
   {id:'s7t-13',category:'old_review',type:'mc',skill:'vocab',concept_tag:'vocab_dom_izba',question:'¿Qué significa "kúpeľňa"?',options:['cocina','dormitorio','baño','sala'],answer:2,audio:null,skippable:false,accept:[],explanation:"'kúpeľňa' = baño (s6)."},
   {id:'s7t-14',category:'old_review',type:'fill',skill:'grammar',concept_tag:'pritomny_vzory_mat',question:'Completa: "Ja ___ psa." (yo tengo)',options:[],answer:'mám',audio:null,skippable:false,accept:['mám'],explanation:"'mám' = tengo (1ª persona de 'mať', s3)."},
   {id:'s7t-15',category:'random_review',type:'mc',skill:'vocab',concept_tag:'colors',question:'¿Qué significa "modrá"?',options:['roja','azul','verde','negra'],answer:1,audio:null,skippable:false,accept:[],explanation:"'modrá' = azul."},
   {id:'s7t-16',category:'random_review',type:'listen',skill:'grammar',concept_tag:'ist_konjugacia',question:'Escucha y elige la traducción correcta.',options:['Voy a casa','Estoy en casa','Voy al cine','Tengo una casa'],answer:0,audio:'Idem domov',skippable:true,accept:[],explanation:"'Idem domov' = Voy a casa."},
   {id:'s7t-17',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'akuzativ_muzsky_zivotny',question:'Elige la frase CORRECTA para "Tengo un perro"',options:['Mám pes','Mám psa','Mám psy','Mám pesa'],answer:1,audio:null,skippable:false,accept:[],explanation:"Masculino animado -Ø→-a: 'pes'→'psa'."},
   {id:'s7t-18',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'Corrige el error: "Mám telefónu."',options:[],answer:'Mám telefón',audio:null,skippable:false,accept:['Mám telefón'],explanation:"'telefón' (masculino inanimado) NO cambia en acusativo: 'Mám telefón', no 'Mám telefónu'."}
  ]
 }
]},
{id:'s8',ti:'¿Qué comes?',em:'🍽️',col:'#06D6A0',
gr:{
  intro:'La Sección 8 es el tercer paso del Bloque 2 ("Mi mundo y mis cosas"): el acusativo en el contexto de la comida y la bebida. Aprendes los verbos irregulares "jesť" (comer) y "piť" (beber), además de vocabulario de comida — combinando todo con el acusativo que ya conoces.',
  patches:[
    {op:'newTable', category:'byt-pritomny', tableId:'jest-pit',
     title:'Verbos jesť (comer) y piť (beber) — presente',note:'Dos verbos irregulares fundamentales para hablar de comida y bebida.',
     h:['Pronombre','jesť (comer)','piť (beber)'],
     r:[['ja','jem','pijem'],['ty','ješ','piješ'],['on/ona/ono','je','pije'],['my','jeme','pijeme'],['vy','jete','pijete'],['oni/ony','jedia','pijú']]},
    {op:'newTable', category:'frazy', tableId:'jedlo-frazy',
     title:'Frases sobre comida y bebida',note:'Expresiones útiles para el hambre, la sed y el sabor.',
     h:['Español','Eslovaco'],
     r:[['Tengo hambre.','Mám hlad.'],['Tengo sed.','Mám smäd.'],['¡Buen provecho!','Dobrú chuť!'],['Está rico / me gusta.','Chutí mi to.']]},
    {op:'addRows', category:'pady', tableId:'akuzativ',
     r:[['Stredný','mäso','mäso','Jem mäso. = Como carne.'],['Ženský (-a)','voda','vodu','Pijem vodu. = Bebo agua.'],['Mužský neživotný','syr','syr','Jem syr. = Como queso.'],['Stredný','pivo','pivo','Pijem pivo. = Bebo cerveza.']]},
    {op:'addRows', category:'frazy', tableId:'rad-rada-radi',
     r:[['Me gusta [cosa] (hombre)','mám rád + sustantivo (acus.)','Mám rád kávu. = Me gusta el café.'],['Me gusta [cosa] (mujer)','mám rada + sustantivo (acus.)','Mám rada čaj. = Me gusta el té.'],['¿Te gusta [cosa]?','máš rád/rada + sustantivo (acus.)','Máš rád kávu? = ¿Te gusta el café?']]}
  ],
  tips:["🔑 'jesť' (comer) y 'piť' (beber) son irregulares: ja jem/pijem, ty ješ/piješ, on je/pije.","🔑 ¡Cuidado! 'je' significa 'es/está' (byť) Y 'come' (jesť) — el contexto lo aclara.","🔑 Los sustantivos neutros de comida (mäso, jablko, mlieko, pivo) NO cambian en acusativo, igual que 'auto' y 'okno'.","🔑 'voda' y 'káva' (femenino -a) cambian a -u en acusativo: Pijem vodu, Mám rád kávu, igual que 'izba'→'izbu'.","🔑 'Mám rád/rada' + sustantivo en acusativo = 'me gusta [una cosa]', distinto de 'rád/rada' + verbo (= 'me gusta hacer algo', Sección 3)."]
},
ls:[
 {id:'s8l1',ti:'Como pan',em:'🍞',
  sl:[
   ['v','Comer y el pan',[['jesť','comer','yest'],['chlieb','pan','khlieb']]],
   ['g','El verbo jesť (presente)','"jesť" es un verbo irregular muy importante:',[['Yo como.','Ja jem.'],['Tú comes.','Ty ješ.'],['Él/ella come.','On/ona je.'],['Como pan.','Jem chlieb.']]]
  ],
  w:[['jesť','comer','🍽️'],['chlieb','pan','🍞']],
  p:[
   ['Como pan.','Jem chlieb.',[['Jem','Como'],['chlieb','pan']],['ješ','mám'],"'jesť'→'jem' (yo como); 'chlieb' (masculino inanimado) NO cambia en acusativo."],
   ['¿Comes pan?','Ješ chlieb?',[['Ješ','¿Comes'],['chlieb?','pan?']],['jem','je'],"'ješ' = tú comes (2ª persona de 'jesť')."],
   ['Él come pan.','On je chlieb.',[['On','Él'],['je','come'],['chlieb','pan']],['jem','ješ'],"'je' = él/ella come (3ª persona de 'jesť'). ¡Atención! 'je' también significa 'es/está' (byť) — el contexto lo aclara."]
  ],
  mc:[
   ['¿Cómo se dice "comer"?',['piť','jesť','mať','robiť'],1,"'jesť' = comer."],
   ['¿Cómo se dice "Yo como pan"?',['Ty ješ chlieb.','Ja jem chlieb.','On je chlieb.','Mám chlieb.'],1,"'jem' = yo como (1ª persona de 'jesť')."],
   ['¿Qué significa "On je chlieb"?',['Él tiene pan','Él es pan','Él come pan','Él quiere pan'],2,"'On je chlieb' = Él come pan ('je' = 3ª persona de 'jesť', no de 'byť' aquí)."]
  ]
 },
 {id:'s8l2',ti:'Bebo agua',em:'💧',
  sl:[
   ['v','Beber y el agua',[['piť','beber','pit'],['voda','agua','vo-da']]],
   ['g','El verbo piť (presente)','"piť" sigue el mismo patrón que "jesť":',[['Yo bebo.','Ja pijem.'],['Tú bebes.','Ty piješ.'],['Bebo agua.','Pijem vodu.'],['Como pan. (repaso)','Jem chlieb.']]]
  ],
  w:[['piť','beber','🥤'],['voda','agua','💧']],
  p:[
   ['Bebo agua.','Pijem vodu.',[['Pijem','Bebo'],['vodu','agua']],['piješ','chlieb'],"'piť'→'pijem' (yo bebo); 'voda'→'vodu' (femenino -a→-u, repaso de s6-s7)."],
   ['¿Bebes agua?','Piješ vodu?',[['Piješ','¿Bebes'],['vodu?','agua?']],['pijem','jem'],"'piješ' = tú bebes (2ª persona de 'piť')."],
   ['Como pan y bebo agua.','Jem chlieb a pijem vodu.',[['Jem','Como'],['chlieb','pan'],['a','y'],['pijem vodu','bebo agua']],['mám','je'],"Combina los dos verbos nuevos: 'jesť' y 'piť'."]
  ],
  mc:[
   ['¿Cómo se dice "beber"?',['jesť','piť','mať','byť'],1,"'piť' = beber."],
   ['¿Cuál es el acusativo de "voda" (agua)?',['voda','vodu','vody','vode'],1,"'voda'→'vodu' (femenino -a→-u, mismo patrón que 'izba'→'izbu')."],
   ['¿Qué significa "Pijem vodu"?',['Tengo agua','Quiero agua','Bebo agua','Es agua'],2,"'Pijem vodu' = Bebo agua."]
  ]
 },
 {id:'s8l3',ti:'Carne y manzana',em:'🍎',
  sl:[
   ['v','Más comida',[['mäso','carne','mya-so'],['jablko','manzana','yab-lko']]],
   ['g','Acusativo neutro: sin cambio','"mäso" y "jablko" son neutros y NO cambian en acusativo, igual que "auto" y "okno":',[['Como carne.','Jem mäso.'],['Como manzana.','Jem jablko.'],['Tengo un auto. (repaso)','Mám auto.'],['Bebo agua. (repaso)','Pijem vodu.']]]
  ],
  w:[['mäso','carne','🥩'],['jablko','manzana','🍎']],
  p:[
   ['Como carne.','Jem mäso.',[['Jem','Como'],['mäso','carne']],['mäsa','jablko'],"'mäso' (neutro) NO cambia en acusativo."],
   ['Como manzana.','Jem jablko.',[['Jem','Como'],['jablko','manzana']],['mäso','vodu'],"'jablko' (neutro) NO cambia en acusativo, igual que 'mäso' y 'auto'."],
   ['No como carne, como manzana.','Nejem mäso, jem jablko.',[['Nejem','No como'],['mäso','carne'],['jem','como'],['jablko','manzana']],['vodu','chlieb'],"Repaso de la negación 'nie-' (s1) + dos sustantivos neutros que no cambian en acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "carne"?',['jablko','mäso','chlieb','voda'],1,"'mäso' = carne."],
   ['¿Cuál es el acusativo de "jablko" (manzana)?',['jablko','jablká','jablka','jablku'],0,"'jablko' (neutro) no cambia en acusativo."],
   ['¿Qué significa "Jem mäso a jablko"?',['Bebo carne y manzana','Tengo carne y manzana','Como carne y manzana','¿Comes carne y manzana?'],2,"'Jem mäso a jablko' = Como carne y manzana."]
  ]
 },
 {id:'s8l4',ti:'Queso y leche',em:'🧀',
  sl:[
   ['v','Más comida',[['syr','queso','syr'],['mlieko','leche','mlye-ko']]],
   ['g','Repaso: sin cambio en acusativo','"syr" (masculino inanimado) y "mlieko" (neutro) NO cambian en acusativo, igual que "chlieb" y "mäso".',[['Como queso.','Jem syr.'],['Bebo leche.','Pijem mlieko.'],['No bebo leche, bebo agua.','Nepijem mlieko, pijem vodu.']]]
  ],
  w:[['syr','queso','🧀'],['mlieko','leche','🥛']],
  p:[
   ['Como queso.','Jem syr.',[['Jem','Como'],['syr','queso']],['syru','mlieka'],"'syr' (masculino inanimado) NO cambia en acusativo."],
   ['Bebo leche.','Pijem mlieko.',[['Pijem','Bebo'],['mlieko','leche']],['mliekom','syra'],"'mlieko' (neutro) NO cambia en acusativo, igual que 'auto' y 'mäso'."],
   ['No bebo leche, bebo agua.','Nepijem mlieko, pijem vodu.',[['Nepijem','No bebo'],['mlieko','leche'],['pijem','bebo'],['vodu','agua']],['syr','čaj'],"Repaso de la negación 'ne-' (s4) + dos sustantivos en acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "queso"?',['mlieko','syr','mäso','chlieb'],1,"'syr' = queso."],
   ['¿Cuál es el acusativo de "mlieko" (leche)?',['mlieko','mlieku','mlieka','mliekom'],0,"'mlieko' (neutro) no cambia en acusativo."],
   ['¿Qué significa "Nepijem mlieko"?',['Bebo leche','No bebo leche','No tengo leche','Como leche'],1,"'Nepijem mlieko' = No bebo leche."]
  ]
 },
 {id:'s8l5',ti:'Tomo café',em:'☕',
  sl:[
   ['v','Una bebida más',[['káva','café','ka-va']]],
   ['g','"Mám rád/rada" + sustantivo','Cuando "rád/rada" va seguido de un SUSTANTIVO (no de un verbo), ese sustantivo va en acusativo: "mám rád/rada" + acusativo = "me gusta [una cosa]".',[['Me gusta el café. (hombre)','Mám rád kávu.'],['Me gusta el café. (mujer)','Mám rada kávu.'],['Me gusta leer. (verbo, repaso s3)','Rád čítam.'],['¿Te gusta el café?','Máš rád/rada kávu?']]]
  ],
  w:[['káva','café','☕']],
  p:[
   ['Me gusta el café.','Mám rád kávu.',[['Mám rád','Me gusta'],['kávu','el café']],['vodu','čaj'],"'Mám rád' + acusativo (sustantivo) = me gusta [una cosa]."],
   ['Bebo café por la mañana.','Ráno pijem kávu.',[['Ráno','Por la mañana'],['pijem','bebo'],['kávu','café']],['večer','mlieko'],"Repaso de 'ráno' (s5) + 'pijem' + 'kávu' (femenino -a → -u)."],
   ['¿Te gusta el café?','Máš rád kávu?',[['Máš rád','¿Te gusta'],['kávu?','el café?']],['Mám rada','vodu'],"'Máš rád/rada' + acusativo = ¿te gusta [una cosa]? (2ª persona)."]
  ],
  mc:[
   ['¿Cómo se dice "café"?',['čaj','mlieko','káva','voda'],2,"'káva' = café."],
   ['¿Cómo dice un hombre "me gusta el café"?',['Rád kávu','Mám rád kávu','Mám káva','Rád pijem'],1,"'Mám rád' + acusativo (sustantivo) = me gusta [una cosa]."],
   ['¿Cuál es el acusativo de "káva"?',['káva','kávu','kávy','káve'],1,"'káva'→'kávu' (femenino -a → -u)."]
  ]
 },
 {id:'s8l6',ti:'El té',em:'🍵',
  sl:[
   ['v','Otra bebida caliente',[['čaj','té','chai']]],
   ['t','Repaso: "Mám rád/rada" + acusativo','"čaj" (masculino inanimado) NO cambia en acusativo. Repasa: Mám rád čaj. (Me gusta el té.) / Nemám rada čaj. (No me gusta el té, mujer.)']
  ],
  w:[['čaj','té','🍵']],
  p:[
   ['Bebo té por la noche.','Večer pijem čaj.',[['Večer','Por la noche'],['pijem','bebo'],['čaj','té']],['ráno','kávu'],"'čaj' (masculino inanimado) NO cambia en acusativo."],
   ['No me gusta el té, me gusta el café.','Nemám rada čaj, mám rada kávu.',[['Nemám rada','No me gusta (f.)'],['čaj','el té'],['mám rada','me gusta (f.)'],['kávu','el café']],['pijem','jem'],"'nemám rada' = negación de 'mám rada' + acusativo."],
   ['Tengo té y café en casa.','Mám doma čaj a kávu.',[['Mám','Tengo'],['doma','en casa'],['čaj','té'],['a','y'],['kávu','café']],['mlieko','vodu'],"Combina 'doma' (s1) con dos sustantivos en acusativo."]
  ],
  mc:[
   ['¿Cómo se dice "té"?',['káva','čaj','mlieko','voda'],1,"'čaj' = té."],
   ['¿Cuál es el acusativo de "čaj"?',['čaj','čaju','čaja','čajom'],0,"'čaj' (masculino inanimado) no cambia en acusativo."],
   ['¿Cómo dice una mujer "no me gusta el té"?',['Nerada čaj','Nemám rád čaj','Nemám rada čaj','Nie rada čaj'],2,"'Nemám rada' + acusativo = no me gusta [una cosa] (mujer)."]
  ]
 },
 {id:'s8l7',ti:'La cerveza, en resumen',em:'🍺',
  sl:[
   ['v','Última palabra de la sección',[['pivo','cerveza','pi-vo']]],
   ['t','¡Sección 8 completa!','Ya conoces 11 palabras nuevas: jesť, chlieb, piť, voda, mäso, jablko, syr, mlieko, káva, čaj, pivo. Y dos estructuras: "jem/pijem" + acusativo, y "mám rád/rada" + acusativo. ¡A practicar para el test!']
  ],
  w:[['pivo','cerveza','🍺']],
  p:[
   ['Bebo cerveza los viernes.','Pijem pivo v piatok.',[['Pijem','Bebo'],['pivo','cerveza'],['v piatok','los viernes']],['vodu','v sobotu'],"'pivo' (neutro) no cambia en acusativo. Repaso de los días (s2)."],
   ['No bebo cerveza, bebo agua.','Nepijem pivo, pijem vodu.',[['Nepijem','No bebo'],['pivo','cerveza'],['pijem','bebo'],['vodu','agua']],['mlieko','čaj'],"'ne-' + 'pijem' = 'nepijem' (s4)."],
   ['¿Qué comes y qué bebes?','Čo ješ a čo piješ?',[['Čo','Qué'],['ješ','comes'],['a','y'],['čo','qué'],['piješ?','bebes?']],['jem','pijem'],"Repaso de 'čo' (s3l7) + los verbos 'jesť' y 'piť'."]
  ],
  mc:[
   ['¿Cómo se dice "cerveza"?',['víno','pivo','mlieko','voda'],1,"'pivo' = cerveza."],
   ['¿Cuál es el acusativo de "pivo"?',['pivo','piva','pivu','pivom'],0,"'pivo' (neutro) no cambia en acusativo."],
   ['¿Cuántas palabras nuevas tiene la Sección 8?',['7','9','11','13'],2,"jesť, chlieb, piť, voda, mäso, jablko, syr, mlieko, káva, čaj, pivo = 11 palabras."]
  ]
 },
 {id:'s8test',ti:'⭐ TEST FINAL',em:'⭐',isTest:true,
  sl:[
   ['t','¡Hora del examen!','Vas a responder preguntas de repaso de toda la Sección 8: los verbos "jesť"/"piť", el vocabulario de comida y "mám rád/rada" + acusativo. Necesitas 80% correctas para desbloquear la Sección 9. ¡Tú puedes!'],
   ['g','Repaso rápido','Lo aprendido en la Sección 8:',[['jesť / piť','jem, ješ, je / pijem, piješ, pije'],['Acusativo sin cambio','chlieb, mäso, jablko, syr, mlieko, pivo'],['Acusativo -a → -u','voda→vodu, káva→kávu'],['Mám rád/rada + acus.','Mám rád kávu. Mám rada čaj.']]],
   ['t','Consejo final',"Antes de decir 'mám rád/rada ___', recuerda que el sustantivo va en acusativo, igual que después de 'mám' o 'jem/pijem'."]
  ],
  w:[],p:[],mc:[],
  tq:[
   {id:'s8t-01',category:'new',type:'mc',skill:'grammar',concept_tag:'jest_pit_konjugacia',question:'¿Cómo se dice "Yo bebo"?',options:['jem','pijem','piješ','ješ'],answer:1,audio:null,skippable:false,accept:[],explanation:"'pijem' = yo bebo (1ª persona de 'piť')."},
   {id:'s8t-02',category:'new',type:'fill',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'Completa: "Pijem ___." (agua)',options:[],answer:'vodu',audio:null,skippable:false,accept:['vodu'],explanation:"'voda'→'vodu' (femenino -a → -u)."},
   {id:'s8t-03',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'¿Cuál es el acusativo de "mäso" (carne)?',options:['mäso','mäsa','mäsu','mäsom'],answer:0,audio:null,skippable:false,accept:[],explanation:"'mäso' (neutro) no cambia en acusativo."},
   {id:'s8t-04',category:'new',type:'type',skill:'vocab',concept_tag:'vocab_jedlo',question:'Escribe en eslovaco: "queso"',options:[],answer:'syr',audio:null,skippable:false,accept:['syr'],explanation:"'syr' = queso."},
   {id:'s8t-05',category:'new',type:'mc',skill:'vocab',concept_tag:'vocab_jedlo',question:'¿Qué significa "jablko"?',options:['pan','manzana','carne','queso'],answer:1,audio:null,skippable:false,accept:[],explanation:"'jablko' = manzana."},
   {id:'s8t-06',category:'new',type:'listen',skill:'grammar',concept_tag:'rad_s_akuzativom',question:'Escucha y elige la traducción correcta.',options:['Me gusta el café','Bebo café','Tengo café','No me gusta el café'],answer:0,audio:'Mám rád kávu',skippable:true,accept:[],explanation:"'Mám rád kávu' = Me gusta el café."},
   {id:'s8t-07',category:'new',type:'mc',skill:'grammar',concept_tag:'rad_s_akuzativom',question:'¿Cómo dice una mujer "me gusta el té"?',options:['Rada čaj','Mám rada čaj','Mám rád čaj','Nemám rada čaj'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Mám rada' + acusativo = me gusta [una cosa] (mujer)."},
   {id:'s8t-08',category:'new',type:'fill',skill:'grammar',concept_tag:'jest_pit_konjugacia',question:'Completa: "On ___ chlieb." (come)',options:[],answer:'je',audio:null,skippable:false,accept:['je'],explanation:"'je' = come (3ª persona de 'jesť')."},
   {id:'s8t-09',category:'new',type:'mc',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'¿Cuál es el acusativo de "mlieko" (leche)?',options:['mlieko','mlieka','mlieku','mliekom'],answer:0,audio:null,skippable:false,accept:[],explanation:"'mlieko' (neutro) no cambia en acusativo."},
   {id:'s8t-10',category:'new',type:'type',skill:'vocab',concept_tag:'vocab_jedlo',question:'Escribe en eslovaco: "Bebo cerveza."',options:[],answer:'Pijem pivo',audio:null,skippable:false,accept:['Pijem pivo','pijem pivo'],explanation:"'Pijem pivo' = Bebo cerveza."},
   {id:'s8t-11',category:'new',type:'mc',skill:'vocab',concept_tag:'jedlo_frazy',question:'¿Qué significa "Mám hlad"?',options:['Tengo sed','Tengo hambre','Tengo frío','Tengo sueño'],answer:1,audio:null,skippable:false,accept:[],explanation:"'Mám hlad' = Tengo hambre."},
   {id:'s8t-12',category:'old_review',type:'mc',skill:'grammar',concept_tag:'akuzativ_muzsky_zivotny',question:'¿Cuál es el acusativo de "pes" (perro)?',options:['pes','psa','psy','pesa'],answer:1,audio:null,skippable:false,accept:[],explanation:"'pes'→'psa' (masculino animado, -Ø → -a)."},
   {id:'s8t-13',category:'old_review',type:'fill',skill:'vocab',concept_tag:'opytovacie_zamena',question:'Completa: "___ je kúpeľňa?" (¿Dónde está...?)',options:[],answer:'Kde',audio:null,skippable:false,accept:['Kde'],explanation:"'Kde' = dónde (s3)."},
   {id:'s8t-14',category:'old_review',type:'mc',skill:'grammar',concept_tag:'negacia_slovesa',question:'¿Cómo se dice "No tengo"?',options:['nie som','nemám','neviem','nerobím'],answer:1,audio:null,skippable:false,accept:[],explanation:"'nemám' = no tengo (s4)."},
   {id:'s8t-15',category:'random_review',type:'mc',skill:'vocab',concept_tag:'dni_tyzdna',question:'¿Qué significa "streda"?',options:['martes','miércoles','jueves','lunes'],answer:1,audio:null,skippable:false,accept:[],explanation:"'streda' = miércoles."},
   {id:'s8t-16',category:'random_review',type:'listen',skill:'grammar',concept_tag:'ist_konjugacia',question:'Escucha y elige la traducción correcta.',options:['Voy a casa','Estoy en casa','Voy al cine','Tengo una casa'],answer:0,audio:'Idem domov',skippable:true,accept:[],explanation:"'Idem domov' = Voy a casa."},
   {id:'s8t-17',category:'error_pattern',type:'mc',skill:'grammar',concept_tag:'akuzativ_zenske_a',question:'Elige la frase CORRECTA para "Bebo agua"',options:['Pijem voda','Pijem vodu','Pijem vode','Pijem vody'],answer:1,audio:null,skippable:false,accept:[],explanation:"Femenino -a → -u en acusativo: 'voda'→'vodu'."},
   {id:'s8t-18',category:'error_pattern',type:'type',skill:'grammar',concept_tag:'akuzativ_bez_zmeny',question:'Corrige el error: "Jem mäsa."',options:[],answer:'Jem mäso',audio:null,skippable:false,accept:['Jem mäso'],explanation:"'mäso' (neutro) NO cambia en acusativo: 'Jem mäso', no 'Jem mäsa'."}
  ]
 }
]}
];

module.exports = { CURRICULUM };
