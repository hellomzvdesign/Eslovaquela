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
      ['Ľúbim ťa', 'Te amo', 'LIU-bim tia'],
      ['Si moja láska', 'Eres mi amor', 'si MO-ya LAS-ka'],
      ['Si krásna / Si krásny', 'Eres hermosa / Eres hermoso', 'si KRAS-na / KRAS-ni'],
      ['Chýbaš mi', 'Te extraño', 'JI-bash mi'],
      ['Môžem ťa pobozkať?', '¿Puedo besarte?', 'MO-zhem tia PO-bos-katy'],
      ['Si moje slnko', 'Eres mi sol', 'si MO-ye SLN-ko'],
      ['Chceš byť moja/môj?', '¿Quieres ser mi novia/novio?', 'khtsesh bity MO-ya/moy'],
      ['Navždy s tebou', 'Para siempre contigo', 'NAV-zhdi s TE-bou'],
    ],
    quiz: [
      {q:'¿Cómo se dice "Te amo" en eslovaco?', opts:['Ľúbim ťa','Chýbaš mi','Si krásna','Navždy s tebou'], ci:0, x:"'Ľúbim ťa' es la forma más directa de decir 'te amo'."},
      {q:'"Chýbaš mi" significa:', opts:['Eres mi sol','Te extraño','Eres mi amor','¿Puedo besarte?'], ci:1, x:"'Chýbaš mi' = literalmente 'me faltas', es decir 'te extraño'."},
      {q:'Para invitar a alguien a ser tu pareja dices:', opts:['Si moja láska','Chceš byť moja/môj?','Navždy s tebou','Môžem ťa pobozkať?'], ci:1, x:"'Chceš byť moja/môj?' = '¿Quieres ser mi novia/novio?'."},
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
      ['Zbal sa!', '¡Lárgate!', 'zbal sa'],
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
],

};

module.exports = { BONUS_DECKS };
