// ─── BONUS DECKS — recompensas cada 7 días de racha ──────────────────────
// 3 categorías x 3 paquetes. No se repiten hasta agotar los 9.
// Cartas de "romantic" y "slang": [sk, es, pron]
// Cartas de "slovakia": {place, img, tip, fact}
// Cada deck tiene un quiz de 3 preguntas mc: {q, opts, ci, x}

const BONUS_DECKS = {

romantic: [
  {
    id: 'r1', emoji: '💕', title: 'Frases para el corazón',
    cards: [
      ['Ľúbim ťa', 'Te quiero', 'LIU-bim tia'],
      ['Milujem ťa', 'Te amo', 'MI-lu-yem tia'],
      ['Si moja láska', 'Eres mi amor', 'si MO-ya LAS-ka'],
      ['Si krásna / Si krásny', 'Eres hermosa / Eres hermoso', 'si KRAS-na / KRAS-ni'],
      ['Chýbaš mi', 'Te extraño', 'JI-bash mi'],
      ['Môžem ťa pobozkať?', '¿Puedo besarte?', 'MO-zhem tia PO-bos-katy'],
      ['Si moje slnko', 'Eres mi sol', 'si MO-ye SLN-ko'],
      ['Chceš so mnou chodiť?', '¿Quieres salir conmigo (ser pareja)?', 'khtsesh so mnou KHO-dity'],
      ['Navždy s tebou', 'Para siempre contigo', 'NAV-zhdi s TE-bou'],
    ],
    quiz: [
      {q:'¿Cómo se dice "Te amo" en eslovaco (la forma más intensa)?', opts:['Milujem ťa','Ľúbim ťa','Chýbaš mi','Navždy s tebou'], ci:0, x:"'Milujem ťa' es la forma más fuerte. 'Ľúbim ťa' es más como 'te quiero'."},
      {q:'"Chýbaš mi" significa:', opts:['Eres mi sol','Te extraño','Eres mi amor','¿Puedo besarte?'], ci:1, x:"'Chýbaš mi' = literalmente 'me faltas', es decir 'te extraño'."},
      {q:'Para invitar a alguien a ser tu pareja dices:', opts:['Si moja láska','Chceš so mnou chodiť?','Navždy s tebou','Môžem ťa pobozkať?'], ci:1, x:"'Chceš so mnou chodiť?' = '¿Quieres salir conmigo (ser pareja)?', la forma más natural de proponer una relación."},
    ]
  },
  {
    id: 'r2', emoji: '🌹', title: 'Frases para una cita',
    cards: [
      ['Chceš ísť na rande?', '¿Quieres salir conmigo (en una cita)?', 'khtsesh isty na RAN-de'],
      ['Si veľmi pekná / Si veľmi pekný', 'Eres muy linda / Eres muy lindo', 'si VEL-mi PEK-na / PEK-ni'],
      ['Páčiš sa mi', 'Me gustas', 'PA-chish sa mi'],
      ['Mám ťa rád / Mám ťa rada', 'Te quiero', 'mam tia rad / RA-da'],
      ['Pozvem ťa na večeru', 'Te invito a cenar', 'POZ-vem tia na VE-che-ru'],
      ['Si nervózna? / Si nervózny?', '¿Estás nerviosa? / ¿Estás nervioso?', 'si ner-VOZ-na / ner-VOZ-ni'],
      ['Vyzeráš nádherne', 'Te ves preciosa/precioso', 'vi-ZE-rash NAD-her-ne'],
      ['Môžeme sa znova stretnúť?', '¿Podemos vernos otra vez?', 'MO-zhe-me sa ZNO-va STRET-nuty'],
    ],
    quiz: [
      {q:'¿Cómo invitas a alguien a una cita?', opts:['Chceš ísť na rande?','Si veľmi pekná','Mám ťa rád','Páčiš sa mi'], ci:0, x:"'Chceš ísť na rande?' = '¿Quieres salir conmigo (en una cita)?'."},
      {q:'"Páčiš sa mi" significa:', opts:['Te quiero','Me gustas','Eres linda','Te invito a cenar'], ci:1, x:"'Páčiš sa mi' = 'me gustas', algo más casual que 'te quiero'."},
      {q:'Para decir "¿Podemos vernos otra vez?":', opts:['Vyzeráš nádherne','Si nervózna?','Môžeme sa znova stretnúť?','Pozvem ťa na večeru'], ci:2, x:"'Môžeme sa znova stretnúť?' = '¿Podemos vernos otra vez?'."},
    ]
  },
  {
    id: 'r3', emoji: '💍', title: 'Para el aniversario y el compromiso',
    cards: [
      ['Vydáš sa za mňa?', '¿Te casarías conmigo?', 'VI-das sa za mnia'],
      ['Si láska môjho života', 'Eres el amor de mi vida', 'si LAS-ka MOY-ho ZHI-vo-ta'],
      ['Šťastné výročie!', '¡Feliz aniversario!', 'SHTYAST-ne VI-ro-chie'],
      ['Si moja rodina', 'Eres mi familia', 'si MO-ya RO-di-na'],
      ['Vždy pri tebe budem', 'Siempre estaré contigo', 'vzdi pri TE-be BU-dem'],
      ['Som šťastný/šťastná s tebou', 'Soy feliz contigo', 'som SHTYAST-ni/na s TE-bou'],
      ['Ďakujem, že si v mojom živote', 'Gracias por estar en mi vida', 'DYA-ku-yem zhe si v MOY-om ZHI-vo-te'],
      ['Milujem ťa viac každým dňom', 'Te amo más cada día', 'MI-lu-yem tia viats KAZH-dim dnyom'],
    ],
    quiz: [
      {q:'"Vydáš sa za mňa?" se usa para:', opts:['Pedir matrimonio','Saludar','Pedir disculpas','Invitar a cenar'], ci:0, x:"'Vydáš sa za mňa?' = '¿Te casarías conmigo?' (una mujer aceptando casarse)."},
      {q:'¿Cómo se dice "Eres el amor de mi vida"?', opts:['Si moja rodina','Si láska môjho života','Som šťastný s tebou','Vždy pri tebe budem'], ci:1, x:"'Si láska môjho života' = 'Eres el amor de mi vida'."},
      {q:'"Šťastné výročie!" significa:', opts:['¡Te amo!','¡Feliz cumpleaños!','¡Feliz aniversario!','¡Gracias!'], ci:2, x:"'Šťastné výročie!' = '¡Feliz aniversario!'."},
    ]
  },
],

slang: [
  {
    id: 'g1', emoji: '😏', title: 'Para los amigos (con cuidado)',
    cards: [
      ['Si blázon!', '¡Estás loco/a!', 'si BLA-zon'],
      ['Drž hubu!', '¡Cállate la boca! (informal, algo grosero)', 'drzh HU-bu'],
      ['Choď do čerta!', '¡Vete al diablo!', 'khody do CHER-ta'],
      ['To je blbosť!', '¡Eso es una tontería!', 'to ye BLBOSTY'],
      ['Daj mi pokoj!', '¡Déjame en paz!', 'day mi PO-koy'],
      ['Si trápny/trápna!', '¡Eres ridículo/a!', 'si TRAP-ni / TRAP-na'],
      ['Neotravuj!', '¡No molestes!', 'ne-OT-ra-vuy'],
      ['Zbaľ sa!', '¡Lárgate!', 'zbaľ sa'],
    ],
    quiz: [
      {q:'¿Cómo le dices a alguien "¡Cállate!" de forma informal?', opts:['Drž hubu!','Si blázon!','Daj mi pokoj!','Zbal sa!'], ci:0, x:"'Drž hubu!' es una forma informal y algo grosera de decir '¡cállate!'."},
      {q:'"Choď do čerta!" significa:', opts:['¡Vete al diablo!','¡No molestes!','¡Eres tonto!','¡Lárgate!'], ci:0, x:"'Choď do čerta!' = literalmente 'vete con el diablo'."},
      {q:'Si algo te parece absurdo, dices:', opts:['Si blázon!','To je blbosť!','Neotravuj!','Si trápny!'], ci:1, x:"'To je blbosť!' = '¡Eso es una tontería!'."},
    ]
  },
  {
    id: 'g2', emoji: '⚽🚗', title: 'Para el tráfico y el fútbol',
    cards: [
      ['Do riti!', '¡Maldición!/¡Mierda! (vulgar leve)', 'do RI-ti'],
      ['Pohni si!', '¡Muévete!', 'POH-ni si'],
      ['Vieš vôbec šoférovať?!', '¿¡Sabes manejar o qué?!', 'vyesh VO-bets sho-FE-ro-vaty'],
      ['To je faul!', '¡Eso es falta!', 'to ye fa-ul'],
      ['Góóól!', '¡Goool!', 'gol'],
      ['Idiot na ceste!', '¡Idiota en el camino!', 'I-di-ot na TSES-te'],
      ['Dobrá hra!', '¡Buen partido!', 'DOB-ra hra'],
      ['To je hanba, rozhodca!', '¡Qué vergüenza, árbitro!', 'to ye HAN-ba ROZ-hod-tsa'],
    ],
    quiz: [
      {q:'Si alguien maneja muy mal, le gritas:', opts:['Vieš vôbec šoférovať?!','Dobrá hra!','Góóól!','To je faul!'], ci:0, x:"'Vieš vôbec šoférovať?!' = '¿¡Sabes manejar o qué?!'."},
      {q:'"Do riti!" se usa cuando:', opts:['Algo sale mal y te enojas','Felicitas a alguien','Saludas a un amigo','Pides disculpas'], ci:0, x:"'Do riti!' es una expresión vulgar leve de frustración, similar a '¡maldición!'."},
      {q:'¿Cómo se dice "¡Eso es falta!" en un partido?', opts:['Góóól!','To je faul!','Pohni si!','Dobrá hra!'], ci:1, x:"'To je faul!' = '¡Eso es falta!'."},
    ]
  },
  {
    id: 'g3', emoji: '🤳', title: 'Jerga juvenil moderna',
    cards: [
      ['To je super/pohoda', 'Eso está genial/tranquilo', 'to ye SU-per / po-HO-da'],
      ['Si na nervy', 'Me tienes harto/a', 'si na NER-vi'],
      ['Vypadni!', '¡Lárgate!/¡Vete!', 'VI-pad-ni'],
      ['To je trapas', 'Qué vergonzoso', 'to ye TRA-pas'],
      ['Žartuješ?', '¿Estás bromeando?', 'ZHAR-tu-yesh'],
      ['Si zúfalý/zúfalá', 'Eres patético/a', 'si ZU-fa-li / ZU-fa-la'],
      ['Daj si pohov', 'Cálmate/relájate', 'day si PO-hov'],
      ['Nezačínaj!', '¡No empieces!', 'ne-za-CHI-nay'],
    ],
    quiz: [
      {q:'"Žartuješ?" significa:', opts:['¿Estás bromeando?','¿Estás loco?','¡Cállate!','¡Vete!'], ci:0, x:"'Žartuješ?' = '¿Estás bromeando?'."},
      {q:'Para decir "relájate" a un amigo estresado:', opts:['Vypadni!','Daj si pohov','To je trapas','Si na nervy'], ci:1, x:"'Daj si pohov' = 'cálmate/relájate'."},
      {q:'¿Cómo se dice "qué vergonzoso"?', opts:['To je super','To je trapas','Žartuješ?','Nezačínaj!'], ci:1, x:"'To je trapas' = 'qué vergonzoso'."},
    ]
  },
],

slovakia: [
  {
    id: 's1', emoji: '🏰', title: 'Hrady a zámky',
    cards: [
      {place:'Spišský hrad', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/20180503_Zamek_Spiski_2980_DxO.jpg/1280px-20180503_Zamek_Spiski_2980_DxO.jpg', tip:'Camina por las ruinas más grandes de Europa central, especialmente bonito al atardecer.', fact:'Es Patrimonio de la UNESCO y uno de los complejos de castillos más grandes de Europa.'},
      {place:'Bojnický zámok', img:'https://upload.wikimedia.org/wikipedia/commons/8/84/Bojnice_Castle_Slovakia.jpg', tip:'Visita durante el Festival Internacional de Fantasmas y Espíritus en mayo, muy popular entre familias.', fact:'Su estilo romántico de cuento de hadas inspiró castillos en películas y dibujos animados.'},
      {place:'Oravský hrad', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Oravsk%C3%BD_hrad_%28celkov%C3%BD_pohled%29.jpg/1280px-Oravsk%C3%BD_hrad_%28celkov%C3%BD_pohled%29.jpg', tip:'Sube hasta la torre más alta para ver el río Orava serpenteando abajo.', fact:'Está construido sobre una roca de 112 metros, parece literalmente "crecer" de la piedra.'},
      {place:'Hrad Devín', img:'https://upload.wikimedia.org/wikipedia/commons/5/58/Dev%C3%ADnsky_hrad01.jpg', tip:'Camina hasta el mirador donde se unen los ríos Danubio y Moravia.', fact:'Tiene más de 1000 años de historia y marca la frontera entre Eslovaquia y Austria.'},
      {place:'Trenčiansky hrad', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Trencin_Castle_030.jpg/1280px-Trencin_Castle_030.jpg', tip:'Busca el "pozo del amor" (studňa lásky) dentro del recinto del castillo.', fact:'Según la leyenda, los prisioneros cavaron el pozo en la roca a cambio de su libertad.'},
      {place:'Hrad Červený Kameň', img:'https://upload.wikimedia.org/wikipedia/commons/0/0a/Cerveny_Kamen_z_Kukly_02.jpg', tip:'Recorre las antiguas bodegas subterráneas del castillo.', fact:'Tiene una de las bodegas históricas más grandes y mejor conservadas de Europa central.'},
    ],
    quiz: [
      {q:'¿Cuál castillo es Patrimonio de la UNESCO y uno de los más grandes de Europa?', opts:['Bojnický zámok','Spišský hrad','Hrad Devín','Trenčiansky hrad'], ci:1, x:'Spišský hrad es Patrimonio de la UNESCO y uno de los complejos de castillos más grandes de Europa.'},
      {q:'¿En qué castillo hay un "pozo del amor"?', opts:['Oravský hrad','Hrad Červený Kameň','Trenčiansky hrad','Hrad Devín'], ci:2, x:'El pozo del amor (studňa lásky) está en Trenčiansky hrad.'},
      {q:'¿Qué castillo está en la confluencia de dos ríos y en la frontera con Austria?', opts:['Hrad Devín','Bojnický zámok','Spišský hrad','Oravský hrad'], ci:0, x:'Hrad Devín está donde se unen el Danubio y el Moravia, en la frontera con Austria.'},
    ]
  },
  {
    id: 's2', emoji: '🏔️', title: 'Naturaleza y aventura',
    cards: [
      {place:'Štrbské Pleso (Vysoké Tatry)', img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Strbske_pleso_2024.jpg', tip:'Camina alrededor del lago glaciar y sigue el sendero hacia Popradské pleso.', fact:'Es uno de los lagos glaciares más famosos de los Altos Tatras.'},
      {place:'Slovenský raj', img:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Prielom_Horn%C3%A1du_1.jpg', tip:'Sube por las gargantas con escaleras y cadenas pegadas a la roca, junto a cascadas.', fact:'Su nombre significa "Paraíso Eslovaco" por sus cañones, ríos y cascadas.'},
      {place:'Demänovská jaskyňa slobody', img:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Demenovska_jaskyna_slobody-smaragdove_jazierko.jpg', tip:'Recorre esta cueva y admira su famoso lago color esmeralda.', fact:'Forma parte de uno de los sistemas de cuevas más largos de Eslovaquia.'},
      {place:'Vrátna dolina', img:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Vr%C3%A1tna_dolina_2005.jpg', tip:'Toma el teleférico hasta Chleb para ver toda la cordillera de Malá Fatra.', fact:'Es uno de los valles más fotografiados de Eslovaquia.'},
      {place:'Kriváň', img:'https://upload.wikimedia.org/wikipedia/commons/8/84/Kriv%C3%A1%C5%88.JPG', tip:'Sube esta montaña, especialmente popular el 1 de mayo entre los eslovacos.', fact:'Es el pico más simbólico para los eslovacos, símbolo de la identidad nacional.'},
      {place:'Domica', img:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Domica_Cave_22.jpg', tip:'Da un paseo en bote por el río subterráneo dentro de la cueva.', fact:'Forma parte de un sistema de cuevas compartido con Hungría, Patrimonio de la UNESCO.'},
    ],
    quiz: [
      {q:'¿Cómo se llama la región conocida como "Paraíso Eslovaco" por sus cañones y cascadas?', opts:['Vrátna dolina','Slovenský raj','Štrbské Pleso','Kriváň'], ci:1, x:'Slovenský raj significa "Paraíso Eslovaco".'},
      {q:'¿Qué puedes hacer en Domica?', opts:['Subir una montaña','Pasear en bote subterráneo','Esquiar','Visitar un castillo'], ci:1, x:'En Domica se puede pasear en bote por el río subterráneo de la cueva.'},
      {q:'¿Cuál es el pico más simbólico para los eslovacos?', opts:['Kriváň','Štrbské Pleso','Vrátna dolina','Demänovská jaskyňa'], ci:0, x:'Kriváň es el pico más simbólico, asociado a la identidad nacional eslovaca.'},
    ]
  },
  {
    id: 's3', emoji: '🏙️', title: 'Ciudades y cultura',
    cards: [
      {place:'Bratislava — Čumil', img:'https://upload.wikimedia.org/wikipedia/commons/2/20/Bratyslawa_Cumil.jpg', tip:'Busca la estatua de "Čumil", el hombre que se asoma de una alcantarilla en el casco antiguo.', fact:'Čumil es una de las estatuas más fotografiadas de Eslovaquia.'},
      {place:'Bratislava — Most SNP (UFO)', img:'https://upload.wikimedia.org/wikipedia/commons/3/3d/Most_SNP%2C_Bratislava_%28by_Pudelek%29.JPG', tip:'Sube al mirador "UFO" en lo alto del puente para ver el Danubio desde arriba.', fact:'El restaurante en la cima del puente tiene forma de platillo volador.'},
      {place:'Košice', img:'https://upload.wikimedia.org/wikipedia/commons/8/88/D%C3%B3m_sv%C3%A4tej_Al%C5%BEbety.jpg', tip:'Escucha el concierto de carillón de la Catedral de Santa Isabel.', fact:'Es la ciudad más grande del este de Eslovaquia y su primera Capital Europea de la Cultura.'},
      {place:'Banská Štiavnica', img:'https://upload.wikimedia.org/wikipedia/commons/4/47/Bansk%C3%A1_%C5%A0tiavnica_zhora.jpg', tip:'Recorre las antiguas minas de plata convertidas en museo subterráneo.', fact:'Patrimonio de la UNESCO por ser uno de los centros mineros más importantes de Europa.'},
      {place:'Levoča', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/068_Levoca_%28Leutschau%29.JPG/1280px-068_Levoca_%28Leutschau%29.JPG', tip:'Visita la iglesia con el altar de madera gótico más alto del mundo.', fact:'El altar de Levoča, obra de Maestro Pavol, mide casi 19 metros de altura.'},
      {place:'Bardejov', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Bardejov%2C_rynek_%28HB1%29.jpg/1280px-Bardejov%2C_rynek_%28HB1%29.jpg', tip:'Pasea por la plaza renacentista perfectamente conservada del centro histórico.', fact:'Su centro histórico es Patrimonio de la UNESCO.'},
    ],
    quiz: [
      {q:'¿Dónde puedes encontrar la estatua de "Čumil"?', opts:['Košice','Bratislava','Levoča','Bardejov'], ci:1, x:'Čumil está en el casco antiguo de Bratislava.'},
      {q:'¿Qué tiene de especial la iglesia de Levoča?', opts:['El altar de madera gótico más alto del mundo','Una mina de plata','Un puente UFO','Un carillón'], ci:0, x:'La iglesia de Levoča tiene el altar de madera gótico más alto del mundo (~19 metros).'},
      {q:'¿Qué ciudad fue la primera Capital Europea de la Cultura de Eslovaquia?', opts:['Bratislava','Bardejov','Košice','Banská Štiavnica'], ci:2, x:'Košice fue la primera Capital Europea de la Cultura de Eslovaquia (2013).'},
    ]
  },
  {
    id: 's4', emoji: '🌿', title: 'Príroda',
    cards: [
      {place:'Ochtinská aragonitová jaskyňa', img:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Ochtina_Aragonite_Cave_01.jpg', tip:'Baja bajo tierra para ver cristales de aragonita que brillan bajo la luz especial.', fact:'Es la única cueva de aragonita abierta al público en Europa central y Patrimonio de la UNESCO.'},
      {place:'Dobšinská ľadová jaskyňa', img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Dobsinska_ladova_cave.jpg', tip:'Lleva ropa de abrigo: ¡dentro hace frío incluso en pleno verano!', fact:'Es una de las cuevas de hielo más grandes de Europa y Patrimonio de la UNESCO desde el año 2000.'},
      {place:'Nízke Tatry', img:'https://upload.wikimedia.org/wikipedia/commons/9/96/Nizke_Tatry.jpg', tip:'Camina por los senderos alpinos con vistas de picos nevados y valles verdosos.', fact:'Es la segunda cordillera más alta de Eslovaquia y menos turística que los Altos Tatras.'},
      {place:'Oravská Priehrada', img:'https://upload.wikimedia.org/wikipedia/commons/8/87/Orava_reservoir.jpg', tip:'Navega en bote o practica windsurf en el lago artificial más grande de Eslovaquia.', fact:'El embalse fue creado en 1953 y es un paraíso para actividades acuáticas y pesca.'},
      {place:'Súľovské skaly', img:'https://upload.wikimedia.org/wikipedia/commons/f/fb/Sulovske_skaly_big.jpg', tip:'Camina entre las torres de roca y busca la "Puerta Gótica", una abertura natural entre las piedras.', fact:'Es una reserva natural famosa por sus extrañas formaciones de roca conglomerada en forma de torres y agujas.'},
      {place:'Vysoké Tatry — Hrebienok', img:'https://upload.wikimedia.org/wikipedia/commons/5/5c/Hrebienok%2C_Vysok%C3%A9_Tatry.JPG', tip:'Sube en funicular hasta Hrebienok para caminar entre los bosques de los Altos Tatras y ver cascadas cercanas.', fact:'Los Altos Tatras forman parte del Parque Nacional de los Tatras (TANAP), creado en 1949 y el más antiguo de Eslovaquia.'},
    ],
    quiz: [
      {q:'¿Qué mineral forma los cristales brillantes de la Ochtinská aragonitová jaskyňa?', opts:['Cuarzo','Aragonita','Calcita','Diamante'], ci:1, x:'La Ochtinská aragonitová jaskyňa es famosa por sus cristales de aragonita.'},
      {q:'¿Cuál es la segunda cordillera más alta de Eslovaquia?', opts:['Pieniny','Malá Fatra','Nízke Tatry','Beskydy'], ci:2, x:'Nízke Tatry es la segunda cordillera más alta de Eslovaquia.'},
      {q:'¿En qué año fue creado el embalse de Oravská Priehrada?', opts:['1945','1953','1960','1975'], ci:1, x:'El embalse de Oravská Priehrada fue creado en 1953.'},
    ]
  },
  {
    id: 's4b', emoji: '🦅', title: 'Príroda — montañas y cuevas',
    cards: [
      {place:'Belianska jaskyňa', img:'https://upload.wikimedia.org/wikipedia/commons/3/33/00_977_Beliansk%C3%A1_Jasky%C5%88a.jpg', tip:'Camina por sus salones decorados con estalactitas y estalagmitas de colores cálidos.', fact:'Es la única cueva del Parque Nacional de los Tatras (TANAP) abierta al público.'},
      {place:'Morské oko (Vihorlat)', img:'https://upload.wikimedia.org/wikipedia/commons/a/a7/Morsk%C3%A9_oko_009.JPG', tip:'Camina alrededor de este lago rodeado de bosques y disfruta del reflejo de las montañas en el agua.', fact:'Es el lago natural no kárstico más grande de Eslovaquia, formado en un antiguo cráter volcánico.'},
      {place:'Národný park Poloniny', img:'https://upload.wikimedia.org/wikipedia/commons/1/12/Panorama_NP_Poloniny_z_Ruskeho_sedla.JPG', tip:'Recorre los senderos entre los bosques de hayas más antiguos de Europa, en el extremo más oriental de Eslovaquia.', fact:'Sus bosques de hayas vírgenes son Patrimonio de la UNESCO por su valor ecológico único.'},
      {place:'Kvačianska dolina', img:'https://upload.wikimedia.org/wikipedia/commons/5/57/Dolina_Kwaczanska_z_Ostrego.jpg', tip:'Sigue el sendero junto al río y observa los antiguos molinos de agua reconstruidos.', fact:'Es una reserva natural conocida por su cañón angosto y sus formaciones rocosas.'},
      {place:'Jánošíkove diery', img:'https://upload.wikimedia.org/wikipedia/commons/e/ef/J%C3%A1no%C5%A1%C3%ADkove_Diery_im_Nationalpark_Kleine_Fatra.jpg', tip:'Sube por escaleras y pasarelas de madera entre las paredes estrechas de este sistema de gargantas.', fact:'El nombre hace referencia a Jánošík, el legendario bandido eslovaco, y está en el corazón de Malá Fatra.'},
      {place:'Sninský kameň', img:'https://upload.wikimedia.org/wikipedia/commons/a/ab/Sninsk%C3%BD_kame%C5%88_047.jpg', tip:'Sube hasta esta formación rocosa para ver una de las mejores vistas panorámicas de los montes Vihorlat.', fact:'Esta roca de origen volcánico se eleva a 1006 metros sobre el nivel del mar.'},
    ],
    quiz: [
      {q:'¿Qué cueva es la única abierta al público dentro del Parque Nacional de los Tatras (TANAP)?', opts:['Domica','Belianska jaskyňa','Dobšinská ľadová jaskyňa','Ochtinská aragonitová jaskyňa'], ci:1, x:'La Belianska jaskyňa es la única cueva abierta al público dentro del TANAP.'},
      {q:'¿Qué es Morské oko?', opts:['Una cueva de hielo','El lago no kárstico más grande de Eslovaquia','Un castillo medieval','Un museo al aire libre'], ci:1, x:'Morské oko es el lago natural no kárstico más grande de Eslovaquia, en los montes Vihorlat.'},
      {q:'¿Por qué los bosques del Národný park Poloniny son Patrimonio de la UNESCO?', opts:['Por sus castillos','Por sus minas de oro','Por sus bosques de hayas vírgenes','Por sus lagos glaciares'], ci:2, x:'Los bosques de hayas vírgenes de Poloniny son Patrimonio de la UNESCO por su valor ecológico único.'},
    ]
  },
  {
    id: 's4c', emoji: '🌲', title: 'Príroda — gargantas y picos',
    cards: [
      {place:'Národný park Muránska planina', img:'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ciganka_muranska_planina.JPG', tip:'Explora esta meseta caliza cubierta de bosques, hogar de águilas y otras aves rapaces.', fact:'Es uno de los parques nacionales más jóvenes de Eslovaquia, declarado en 1997.'},
      {place:'Belianske Tatry', img:'https://upload.wikimedia.org/wikipedia/commons/2/2e/Belianske_Tatry.JPG', tip:'Admira esta cordillera de picos calizos, aunque la mayoría de sus senderos están cerrados para proteger la naturaleza.', fact:'Es la única parte de los Altos Tatras con acceso muy restringido para conservar especies raras de plantas y animales.'},
      {place:'Demänovská dolina', img:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Demenovska_dolina_z_Chopka.JPG', tip:'Visita este valle famoso por sus cuevas y aprovecha también las pistas de esquí cercanas en invierno.', fact:'Es uno de los valles más visitados de los Bajos Tatras, con varias cuevas declaradas monumento natural.'},
      {place:'Tichá dolina', img:'https://upload.wikimedia.org/wikipedia/commons/2/2c/Dolina_Cicha_Liptowska_T58.JPG', tip:'Camina por uno de los valles más salvajes y menos visitados de los Altos Tatras.', fact:'Es la reserva natural más grande de los Altos Tatras y un refugio importante para la fauna de montaña.'},
      {place:'Sitno (Štiavnické vrchy)', img:'https://upload.wikimedia.org/wikipedia/commons/f/f7/Sitno_nov_2023.jpg', tip:'Sube hasta la torre mirador en la cima para ver toda la región minera de Banská Štiavnica.', fact:'Con 1009 metros, Sitno es el pico más alto de los montes Štiavnické vrchy, de origen volcánico.'},
      {place:'Zádielska tiesňava', img:'https://upload.wikimedia.org/wikipedia/commons/f/f2/Zadiel_canyon_from_north.JPG', tip:'Camina por el fondo de este desfiladero de piedra caliza con paredes de hasta 300 metros de altura.', fact:'Se encuentra en el Karst Eslovaco, una región de cuevas y cañones Patrimonio de la UNESCO.'},
    ],
    quiz: [
      {q:'¿Qué tienen de especial las Belianske Tatry?', opts:['Tienen el pico más alto de Eslovaquia','El acceso está muy restringido para proteger la naturaleza','Son volcánicas','No tienen senderos'], ci:1, x:'Las Belianske Tatry tienen acceso muy restringido para proteger especies raras de plantas y animales.'},
      {q:'¿Cuál es el pico más alto de los Štiavnické vrchy?', opts:['Sitno','Kriváň','Sninský kameň','Veľký Rozsutec'], ci:0, x:'Sitno, con 1009 metros, es el pico más alto de los Štiavnické vrchy.'},
      {q:'¿Dónde se encuentra la Zádielska tiesňava?', opts:['En los Altos Tatras','En el Karst Eslovaco','En Malá Fatra','En los montes Vihorlat'], ci:1, x:'La Zádielska tiesňava es un desfiladero del Karst Eslovaco, Patrimonio de la UNESCO.'},
    ]
  },
  {
    id: 's5', emoji: '🎭', title: 'Slovenská kultúra a tradícia',
    cards: [
      {place:'Vlkolínec', img:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Vlkolínec_2.jpg', tip:'Camina entre las casas de madera tradicionales de este pueblo que parece congelado en el tiempo.', fact:'Vlkolínec es Patrimonio de la UNESCO por su arquitectura folclórica única perfectamente conservada.'},
      {place:'Múzeum liptovskej dediny v Pribyline', img:'https://upload.wikimedia.org/wikipedia/commons/7/7c/M%C3%BAzeum_liptovskej_dediny_v_Pribyline_03_-_kr%C4%8Dma.JPG', tip:'Camina entre las casas de madera, la iglesia y la antigua taberna (krčma) trasladadas aquí desde pueblos de la región de Liptov.', fact:'Este museo al aire libre se creó en 1991, cuando la construcción del embalse de Liptovská Mara inundó varios pueblos originales.'},
      {place:'Bryndzové halušky', img:'https://upload.wikimedia.org/wikipedia/commons/3/35/Skalica%2C_bryndzov%C3%A9_halu%C5%A1ky.jpg', tip:'Prueba este plato nacional de papas con queso de oveja ahumado, es adictivo.', fact:'Bryndzové halušky es el plato nacional de Eslovaquia desde 1999 (declarado oficialmente).'},
      {place:'Kapustnica', img:'https://upload.wikimedia.org/wikipedia/commons/0/0e/Viano%C4%8Dn%C3%A1_kapustnica.JPG', tip:'Come esta sopa tradicional de col y carnes ahumadas, especialmente en Navidad.', fact:'La kapustnica es parte de la tradición navideña eslovaca desde tiempos medievales.'},
      {place:'Šibačka (Lunes de Pascua)', img:'https://upload.wikimedia.org/wikipedia/commons/6/6e/Ve%C4%BEkono%C4%8Dn%C3%BD_pondelok1.jpg', tip:'En Lunes de Pascua, los hombres jóvenes usan un korbáč (azote trenzado de ramas de sauce) para "azotar" amistosamente a las mujeres.', fact:'Esta tradición de primavera simboliza la limpieza, la fertilidad y la salud, y data de tiempos paganos.'},
      {place:'Slovenský betlehem (Rajecká Lesná)', img:'https://upload.wikimedia.org/wikipedia/commons/4/4b/Slovensk%C3%BD_betlehem_Rajeck%C3%A1_Lesn%C3%A1_18_Slovakia.jpg', tip:'Observa las figuras móviles que representan oficios tradicionales eslovacos: pastores, mineros, viñadores y alfareros.', fact:'Es un belén de madera tallado por Jozef Pekara durante más de 15 años, con cerca de 300 figuras, inaugurado en 1995.'},
    ],
    quiz: [
      {q:'¿Qué pueblo eslovaco es Patrimonio de la UNESCO por su arquitectura folclórica?', opts:['Múzeum liptovskej dediny','Vlkolínec','Banská Štiavnica','Bardejov'], ci:1, x:'Vlkolínec es Patrimonio de la UNESCO por su arquitectura folclórica perfectamente conservada.'},
      {q:'¿Cuál es el plato nacional de Eslovaquia?', opts:['Kapustnica','Parenice','Bryndzové halušky','Pagáče'], ci:2, x:'Bryndzové halušky fue declarado plato nacional de Eslovaquia en 1999.'},
      {q:'¿Qué tradición de Pascua es característica de Eslovaquia?', opts:['Huevos decorados','Chocolate de Pascua','Šibačka (azotar amistosamente con un korbáč)','Desfiles religiosos'], ci:2, x:'La šibačka es la tradición de Pascua eslovaca donde los jóvenes "azotan" amistosamente a las mujeres con un korbáč de ramas de sauce.'},
    ]
  },
  {
    id: 's5b', emoji: '🪈', title: 'Artesanía y sabores tradicionales',
    cards: [
      {place:'Fujara', img:'https://upload.wikimedia.org/wikipedia/commons/6/6b/Jano_Adamek_Slovakian_pipe_player.jpg', tip:'Escucha el sonido grave y melancólico de esta enorme flauta de pastor, típica del centro de Eslovaquia.', fact:'La fujara y su música son Patrimonio Cultural Inmaterial de la UNESCO desde 2008.'},
      {place:'Lokše', img:'https://upload.wikimedia.org/wikipedia/commons/a/a7/Loksa_6601.JPG', tip:'Prueba estas tortillas finas de papa, rellenas de manteca de ganso o mermelada.', fact:'Se preparan con papas hervidas y ralladas mezcladas con harina, y se cocinan en una plancha caliente.'},
      {place:'Čičmany', img:'https://upload.wikimedia.org/wikipedia/commons/c/ca/Cicmany-radenov_dom.jpg', tip:'Camina entre las casas de madera oscura decoradas con dibujos blancos geométricos.', fact:'Los patrones blancos se pintaban originalmente con cal para proteger la madera, y luego se volvieron decorativos.'},
      {place:'Fašiangy', img:'https://upload.wikimedia.org/wikipedia/commons/e/ee/Horne_Zelenice%2C_Slovakia_-_Fasiangy_2011_-_panoramio.jpg', tip:'Observa los desfiles de máscaras y disfraces que recorren los pueblos antes de la Cuaresma.', fact:'Esta celebración marca el fin del invierno y se celebra desde la Epifanía hasta el Miércoles de Ceniza.'},
      {place:'Slovenský ľudový kroj', img:'https://upload.wikimedia.org/wikipedia/commons/2/26/Slovak_folk_costume.jpg', tip:'Fíjate en los bordados y colores: cada región de Eslovaquia tiene su propio diseño único.', fact:'A finales del siglo XIX existían cerca de 60 variantes regionales del traje folclórico eslovaco.'},
      {place:'Korbáčiky', img:'https://upload.wikimedia.org/wikipedia/commons/4/4e/%C3%9Aden%C3%BD_korb%C3%A1%C4%8Dik_%28Slovakia%29.jpg', tip:'Prueba este queso ahumado trenzado en finas hebras, típico de la región de Orava.', fact:'Su nombre significa "pequeños látigos" por su forma trenzada característica.'},
    ],
    quiz: [
      {q:'¿Qué es la fujara?', opts:['Un queso trenzado','Una flauta de pastor gigante','Un traje folclórico','Una máscara de carnaval'], ci:1, x:'La fujara es una flauta de pastor gigante, Patrimonio Cultural Inmaterial de la UNESCO.'},
      {q:'¿De qué están hechas las lokše?', opts:['De maíz','De papa','De trigo sarraceno','De arroz'], ci:1, x:'Las lokše se preparan con papas hervidas y ralladas mezcladas con harina.'},
      {q:'¿Por qué son famosas las casas de Čičmany?', opts:['Por sus techos rojos','Por sus dibujos blancos geométricos','Por ser de piedra','Por sus ventanas redondas'], ci:1, x:'Las casas de Čičmany son famosas por sus dibujos blancos geométricos pintados sobre madera oscura.'},
    ]
  },
  {
    id: 's5c', emoji: '🪺', title: 'Festivales y patrimonio vivo',
    cards: [
      {place:'Folklórny festival Východná', img:'https://upload.wikimedia.org/wikipedia/commons/0/08/Folkl%C3%B3rny_festival_V%C3%BDchodn%C3%A1_-_Slovakia_-_Slovensko.JPG', tip:'Disfruta de bailes, trajes y música folclórica de toda Eslovaquia y del extranjero, a los pies de los Tatras.', fact:'Es el festival folclórico más antiguo y grande de Eslovaquia, celebrado desde 1953.'},
      {place:'Goralský kroj (Ždiar)', img:'https://upload.wikimedia.org/wikipedia/commons/c/ca/Zdiar_male_costume_-_TANAP_museum.jpg', tip:'Observa el sombrero decorado con conchas y plumas, típico de los goral de la zona de Spiš y Orava.', fact:'Los goral son un grupo cultural de las montañas que vive a ambos lados de la frontera entre Eslovaquia y Polonia.'},
      {place:'Oštiepok', img:'https://upload.wikimedia.org/wikipedia/commons/9/96/Ostiepok_cheese.jpg', tip:'Prueba este queso de oveja ahumado con forma ovalada y dibujos decorativos en la superficie.', fact:'Es un producto con denominación de origen protegida por la Unión Europea.'},
      {place:'Habánsky dvor (Veľké Leváre)', img:'https://upload.wikimedia.org/wikipedia/commons/0/09/Habaner_8602.jpg', tip:'Recorre este antiguo patio donde vivía la comunidad habana, famosa por su cerámica de colores.', fact:'Los habanos eran un grupo religioso que se asentó en el oeste de Eslovaquia entre los siglos XVI y XVIII.'},
      {place:'Drevený kostol Hronsek', img:'https://upload.wikimedia.org/wikipedia/commons/3/32/Dreven%C3%BD_kostol_Hronsek.JPG', tip:'Entra a esta iglesia evangélica construida enteramente de madera, sin usar ni un solo clavo.', fact:'Forma parte de los "Templos de madera de la zona eslovaca de los Cárpatos", Patrimonio de la UNESCO desde 2008.'},
      {place:'Kraslice', img:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Slovak_easter_symbols.jpg', tip:'Admira los huevos de Pascua decorados con cera y tintes de colores, técnica llamada "batika".', fact:'Las kraslice más antiguas encontradas en territorio eslovaco datan de tumbas eslavas del siglo VII.'},
    ],
    quiz: [
      {q:'¿Desde qué año se celebra el Folklórny festival Východná?', opts:['1953','1968','1989','2004'], ci:0, x:'El Folklórny festival Východná se celebra desde 1953 y es el más antiguo de Eslovaquia.'},
      {q:'¿Con qué no se construyó el Drevený kostol Hronsek?', opts:['Madera','Piedra','Clavos','Pintura'], ci:2, x:'El Drevený kostol Hronsek se construyó enteramente de madera, sin usar ni un solo clavo.'},
      {q:'¿De qué leche se hace el oštiepok?', opts:['De vaca','De cabra','De oveja','De búfala'], ci:2, x:'El oštiepok es un queso ahumado tradicional hecho de leche de oveja.'},
    ]
  },
  {
    id: 's6', emoji: '🏘️', title: 'Atracciones en las ciudades eslovacas',
    cards: [
      {place:'Bratislava — Grassalkovičov palác', img:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Bratislava_Grassalkovich_Palace.JPG', tip:'Pasea por los jardines barrocos del palacio presidencial, abiertos al público algunos días.', fact:'Este palacio es la residencia oficial del Presidente de Eslovaquia desde 1996.'},
      {place:'Trenčín — Castillo y ciudad medieval', img:'https://upload.wikimedia.org/wikipedia/commons/5/52/Castle_of_Tren%C4%8D%C3%ADn%2C_Slovakia.jpg', tip:'Explora las calles empedradas de la ciudad medieval bajo la sombra del imponente castillo.', fact:'Trenčín es una de las ciudades medievales mejor conservadas de Eslovaquia.'},
      {place:'Banská Bystrica — Námestie SNP', img:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Main_square_of_Bansk%C3%A1_Bystrica%2C_Slovakia.jpg', tip:'Siéntate en la plaza central rodeada de cafeterías y visita el Museo del SNP, dedicado a la historia de la Segunda Guerra Mundial.', fact:'Banská Bystrica fue el centro del Levantamiento Nacional Eslovaco (SNP) de 1944, una rebelión armada contra el régimen fascista.'},
      {place:'Nitra — Castillo episcopal y catedral', img:'https://upload.wikimedia.org/wikipedia/commons/4/47/Nitriansky_hrad.jpg', tip:'Sube a la fortaleza del castillo para ver la catedral y las vistas de toda la ciudad.', fact:'Nitra es uno de los centros religiosos más antiguos de Eslovaquia, con raíces que remontan al siglo IX.'},
      {place:'Modra — Pueblo de la cerámica', img:'https://upload.wikimedia.org/wikipedia/commons/8/8b/Modransk%C3%A1_keramika_%28majolika%29%2C_Modra%2C_okres_Pezinok.JPG', tip:'Visita los talleres de artesanos que fabrican la majolika, la cerámica azul y blanca tradicional.', fact:'Modra es famosa por su majolika, una cerámica azul y blanca con más de un siglo de tradición.'},
      {place:'Levice — Castillo y río Hron', img:'https://upload.wikimedia.org/wikipedia/commons/1/1b/Levice_Castle.jpg', tip:'Navega por el río Hron en canoa o visita el castillo reconstruido que domina la ciudad.', fact:'El castillo de Levice fue dañado en el siglo XX pero fue cuidadosamente reconstruido.'},
    ],
    quiz: [
      {q:'¿Cuál es la residencia oficial del Presidente de Eslovaquia?', opts:['Hrad Devín','Bojnický zámok','Grassalkovičov palác','Hrad Trenčín'], ci:2, x:'Grassalkovičov palác es la residencia oficial del Presidente de Eslovaquia.'},
      {q:'¿Qué ciudad es famosa por su cerámica azul y blanca llamada majolika?', opts:['Levoča','Modra','Banská Bystrica','Bardejov'], ci:1, x:'Modra es famosa por su majolika, una cerámica azul y blanca tradicional.'},
      {q:'¿Qué evento histórico de 1944 tuvo su centro en Banská Bystrica?', opts:['El Levantamiento Nacional Eslovaco (SNP)','Un terremoto','La fundación de la ciudad','Un festival de música'], ci:0, x:'Banská Bystrica fue el centro del Levantamiento Nacional Eslovaco (SNP), una rebelión armada de 1944 contra el régimen fascista.'},
    ]
  },
  {
    id: 's6b', emoji: '🏯', title: 'Castillos, baños y plazas',
    cards: [
      {place:'Bratislavský hrad', img:'https://upload.wikimedia.org/wikipedia/commons/8/80/Bratislavsk%C3%BD_hrad_panorama.JPG', tip:'Sube a la colina sobre el río Danubio para visitar este castillo con vistas a toda la ciudad.', fact:'Por su forma con cuatro torres en las esquinas, los eslovacos lo llaman cariñosamente "la mesa al revés".'},
      {place:'Michalská brána', img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Bratislava_-_Michalsk%C3%A1_br%C3%A1na_%283%29.jpg', tip:'Pasa bajo esta torre con reloj y fíjate en la veleta con forma de dragón en la cima.', fact:'Es la única puerta medieval que se conserva de las antiguas murallas de Bratislava.'},
      {place:'Piešťany', img:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Napoleonske_kupele_Piestany.JPG', tip:'Relájate en uno de los balnearios termales más famosos de Eslovaquia, conocidos por su lodo curativo.', fact:'Las aguas termales y el lodo de Piešťany se usan desde hace más de 200 años para tratar dolencias musculares y articulares.'},
      {place:'Žilina — Mariánske námestie', img:'https://upload.wikimedia.org/wikipedia/commons/6/65/Marianske_namestie_in_Zilina_%281%29.jpg', tip:'Camina por esta plaza rodeada de arcadas coloridas, en el centro histórico de la ciudad.', fact:'La plaza tiene su origen en el siglo XIII y conserva su trazado medieval con arcadas en tres de sus lados.'},
      {place:'Komárno — Stará pevnosť', img:'https://upload.wikimedia.org/wikipedia/commons/d/d1/Star%C3%A1_Pevnost%2C_Kom%C3%A1rno.jpg', tip:'Recorre esta enorme fortaleza construida para defenderse de los ataques otomanos.', fact:'Es parte del sistema de fortalezas más grande de Europa Central, nunca conquistado por la fuerza.'},
      {place:'Trnava — Trojičné námestie', img:'https://upload.wikimedia.org/wikipedia/commons/5/5a/Slovakia-Trnava-Trojicne_namestie.JPG', tip:'Admira las numerosas torres de iglesias que rodean esta plaza del centro histórico.', fact:'Por su gran cantidad de iglesias, Trnava es conocida como la "pequeña Roma" de Eslovaquia.'},
    ],
    quiz: [
      {q:'¿Cómo se conoce popularmente la forma del Bratislavský hrad?', opts:['La corona','La mesa al revés','El barco','La estrella'], ci:1, x:'Por sus cuatro torres en las esquinas, el castillo de Bratislava se conoce como "la mesa al revés".'},
      {q:'¿Qué es la Michalská brána?', opts:['Un castillo en ruinas','La única puerta medieval conservada de Bratislava','Un balneario termal','Una plaza de Trnava'], ci:1, x:'La Michalská brána es la única puerta medieval que se conserva de las antiguas murallas de Bratislava.'},
      {q:'¿Para qué se construyó la fortaleza de Komárno?', opts:['Para defenderse de los otomanos','Como residencia real','Como balneario','Como mercado'], ci:0, x:'La Stará pevnosť de Komárno se construyó para defenderse de los ataques otomanos.'},
    ]
  },
  {
    id: 's6c', emoji: '🚂', title: 'Pueblos y ciudades por descubrir',
    cards: [
      {place:'Poprad', img:'https://upload.wikimedia.org/wikipedia/commons/5/59/Poprad_centrum_01.JPG', tip:'Usa esta ciudad como punto de partida para explorar los Altos Tatras, a solo unos minutos en tren.', fact:'Poprad es la principal puerta de entrada a los Altos Tatras, con conexiones de tren y autobús directas a las montañas.'},
      {place:'Ružomberok', img:'https://upload.wikimedia.org/wikipedia/commons/7/73/Ru%C5%BEomberok_xxx_39.JPG', tip:'Visita esta ciudad rodeada de montañas, ideal como base para explorar la Veľká Fatra.', fact:'Ružomberok se encuentra a los pies del monte Čebrať y es la puerta de entrada a la cordillera Veľká Fatra.'},
      {place:'Spišská Nová Ves', img:'https://upload.wikimedia.org/wikipedia/commons/a/ac/Spi%C5%A1sk%C3%A1_Nov%C3%A1_Ves_16Slovakia81.JPG', tip:'Busca con la mirada la torre de la iglesia que domina el horizonte de la ciudad.', fact:'La torre de la Iglesia de la Asunción es la más alta de todas las torres de iglesia de Eslovaquia.'},
      {place:'Skalica — Rotunda de San Jorge', img:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Rotunda_in_skalica_-1.JPG', tip:'Visita este pequeño edificio circular, uno de los monumentos más antiguos del país.', fact:'La rotunda románica de Skalica data del siglo XI y es uno de los edificios más antiguos de Eslovaquia.'},
      {place:'Kremnica', img:'https://upload.wikimedia.org/wikipedia/commons/4/41/Mincov%C5%88a.JPG', tip:'Conoce la ceca donde todavía se acuñan monedas y medallas, en funcionamiento desde la Edad Media.', fact:'La ceca de Kremnica, fundada en 1328, es una de las casas de moneda más antiguas del mundo en funcionamiento continuo.'},
      {place:'Zvolen — Castillo de Zvolen', img:'https://upload.wikimedia.org/wikipedia/commons/d/df/Zvolensk%C3%BD_z%C3%A1mok-6.JPG', tip:'Recorre este castillo gótico-renacentista, antiguo pabellón real de caza.', fact:'El castillo de Zvolen fue construido en el siglo XIV como residencia y pabellón de caza de los reyes húngaros.'},
    ],
    quiz: [
      {q:'¿Por qué es conocida Spišská Nová Ves?', opts:['Por tener la torre de iglesia más alta de Eslovaquia','Por su castillo de arena','Por su puerto','Por sus minas de oro'], ci:0, x:'La torre de la Iglesia de la Asunción de Spišská Nová Ves es la más alta de Eslovaquia.'},
      {q:'¿Por qué es famosa Kremnica?', opts:['Por su playa','Por su ceca, una de las más antiguas del mundo','Por su universidad','Por su aeropuerto'], ci:1, x:'Kremnica es famosa por su ceca, fundada en 1328 y una de las más antiguas del mundo en funcionamiento continuo.'},
      {q:'¿De qué época es la Rotunda de San Jorge en Skalica?', opts:['Siglo XX','Siglo XVIII','Siglo XI','Siglo XV'], ci:2, x:'La rotunda románica de Skalica data del siglo XI, uno de los edificios más antiguos de Eslovaquia.'},
    ]
  },
],

};

module.exports = { BONUS_DECKS };
