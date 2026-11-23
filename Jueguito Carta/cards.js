/**
 * Baraja de 52 Cartas Eróticas y Pícaras para Parejas
 * Niveles:
 * 1 = Calentamiento & Sensual (30s - 60s)
 * 2 = Pasión & Ropa Fuera (60s - 120s)
 * 3 = Placer Oral & Toque Íntimo (120s - 180s)
 * 4 = Penetración & Posiciones Salvajes (180s - 300s)
 */

const DEFAULT_CARDS = [
  // ==========================================
  // NIVEL 1: CALENTAMIENTO & SENSUAL (1 - 13)
  // ==========================================
  {
    id: 1,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Caminito en el Cuello",
    action: "Besa y mordisquea suavemente el cuello de tu pareja, desde detrás de su oreja hasta la clavícula, sin usar tus manos.",
    time: 45,
    role: "Quien saca la carta realiza la acción",
    tip: "Varía entre besos suaves, respiración tibia y pequeños roces de labios."
  },
  {
    id: 2,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Mirada y Secreto Prohibido",
    action: "Mirense fijamente a los ojos a escasos centímetros sin hablar por 20 segundos. Luego, susúrrale al oído tu fantasía sexual más reciente con él o ella.",
    time: 60,
    role: "Acción mutua",
    tip: "El contacto visual sin reírse genera una tensión sexual instantánea."
  },
  {
    id: 3,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Caricias en los Muslos",
    action: "Acaricia con las yemas de tus dedos la parte interna de los muslos de tu pareja, acercándote peligrosamente a su zona íntima pero sin tocarla todavía.",
    time: 60,
    role: "Quien saca la carta realiza la acción",
    tip: "La anticipación vuelve loca a tu pareja. Hazlo muy lento."
  },
  {
    id: 4,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Masaje Espalda de Fuego",
    action: "Tu pareja se acuesta boca abajo. Hazle un masaje suave pero firme en los hombros, bajando por la columna hasta la curva de los glúteos.",
    time: 60,
    role: "Tu pareja recibe el masaje",
    tip: "Usa tus uñas muy suavemente o la palma de tus manos."
  },
  {
    id: 5,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Beso con Mordisco",
    action: "Bésense intensamente en los labios. Alterna entre acariciar con tu lengua y dar pequeños y tentadores mordisquitos en su labio inferior.",
    time: 60,
    role: "Acción mutua",
    tip: "Juega tirando un poquito de su labio con los dientes antes de soltarlo."
  },
  {
    id: 6,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Aliento Ardiente",
    action: "Pega tus labios a su oreja y exhala aire caliente muy despacio. Recorre el lóbulo con la punta de la lengua y dile lo sexy que se ve hoy.",
    time: 45,
    role: "Quien saca la carta realiza la acción",
    tip: "La piel de la oreja y la nuca es hipersensible."
  },
  {
    id: 7,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Exploración a Ciegas",
    action: "Tu pareja debe cerrar los ojos (o vendarse). Pasa tus labios o dedos por cualquier parte de su rostro, hombros y torso; él/ella debe adivinar con qué parte de tu cuerpo lo rozas.",
    time: 60,
    role: "Tu pareja cierra los ojos",
    tip: "Puedes usar tu nariz, pestañas, labios o cabello."
  },
  {
    id: 8,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Beso en el Ombligo",
    action: "Levanta su camiseta y deposita una cadena de besos lentos bajando desde su pecho hasta el ombligo, terminando en la pretina de su ropa.",
    time: 45,
    role: "Quien saca la carta realiza la acción",
    tip: "Detén la respiración un momento y deja escapar un suspiro caliente en su ombligo."
  },
  {
    id: 9,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Baile Cuerpo a Cuerpo",
    action: "Pónganse de pie, abrácense bien pegados y balancéense lentamente sintiendo el calor del cuerpo del otro y rozando caderas sin separarse ni un milímetro.",
    time: 60,
    role: "Ambos juntos",
    tip: "Sientan el roce de las caderas y la respiración sincronizada."
  },
  {
    id: 10,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Cosquillas Eróticas",
    action: "Pasa solo las yemas de tus uñas o las puntas de tus dedos por sus brazos, cuello y costados con una caricia casi imperceptible que le ponga la piel de gallina.",
    time: 45,
    role: "Quien saca la carta realiza la acción",
    tip: "El tacto ultra ligero despierta todas las terminaciones nerviosas."
  },
  {
    id: 11,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Beso en la Espalda Baja",
    action: "Haz que tu pareja se siente de espaldas. Besa su nuca y desciende vértebra por vértebra hasta llegar a la parte baja de la espalda.",
    time: 60,
    role: "Tu pareja de espaldas",
    tip: "La zona lumbar es altamente receptiva al calor de los labios."
  },
  {
    id: 12,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Mano en la Nuca",
    action: "Toma a tu pareja de la nuca con firmeza enredando tus dedos en su pelo, acércala a ti y dale un beso dominador y apasionado.",
    time: 45,
    role: "Quien saca la carta toma el control",
    tip: "Un agarre firme y seguro genera chispas al instante."
  },
  {
    id: 13,
    level: 1,
    levelName: "Nivel 1: Calentamiento",
    levelColor: "level-1",
    title: "Confesión con Besos",
    action: "Por cada 15 segundos, dile a tu pareja algo que te encanta de su cuerpo y sella cada cumplido con un beso ardiente en esa zona exacta.",
    time: 60,
    role: "Quien saca la carta habla y besa",
    tip: "Sé específico y muy sincero con lo que más te prende."
  },

  // ==========================================
  // NIVEL 2: PASIÓN & ROPA FUERA (14 - 26)
  // ==========================================
  {
    id: 14,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Quitar Prenda con Dientes",
    action: "Elige una prenda de tu pareja (camiseta, calcetines, pantalón o lo que tenga puesto) y retírasela utilizando exclusivamente tus dientes.",
    time: 90,
    role: "Quien saca la carta usa sus dientes",
    tip: "Prohibido usar las manos. Tu pareja puede levantarse ligeramente para ayudarte."
  },
  {
    id: 15,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Pezones Bajo Hechizo",
    action: "Descubre el pecho de tu pareja. Estimula sus pezones alternando entre la yema de tus dedos y suaves caricias circulares con la punta de la lengua.",
    time: 90,
    role: "Quien saca la carta estimula",
    tip: "Sopla aire tibio de vez en cuando para potenciar la sensibilidad."
  },
  {
    id: 16,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Manos en los Glúteos",
    action: "Acaricia y aprieta con firmeza los glúteos de tu pareja mientras se besan con hambre. Da alguna palmadita traviesa de intensidad media.",
    time: 60,
    role: "Quien saca la carta realiza la acción",
    tip: "Alterna caricias suaves con apretones seguros."
  },
  {
    id: 17,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Striptease Privado",
    action: "Ponte de pie frente a tu pareja. Hazle un baile sensual al ritmo de tu música mental y quítate al menos dos prendas mientras mantienes la mirada fija en él/ella.",
    time: 90,
    role: "Quien saca la carta baila",
    tip: "No te apresures, la sensualidad radica en los movimientos lentos."
  },
  {
    id: 18,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Fricción en Ropa Interior",
    action: "En ropa interior, pónganse uno encima del otro o muy juntos y froten sus zonas íntimas sin quitarse la tela, sintiendo la humedad y el calor.",
    time: 90,
    role: "Ambos en ropa interior",
    tip: "Permítanse gemir y moverse al ritmo de la respiración del otro."
  },
  {
    id: 19,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Manos Prohibidas / Sumisión",
    action: "Tu pareja debe poner sus manos detrás de su espalda o sostenerlas sobre su cabeza. Durante este tiempo no puede moverse ni tocar, solo sentir tus manos recorriéndole.",
    time: 120,
    role: "Tu pareja queda inmóvil",
    tip: "Si tu pareja mueve las manos antes de tiempo, sumará 30 segundos más."
  },
  {
    id: 20,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "A Horcajadas",
    action: "Siéntate a horcajadas sobre los muslos o caderas de tu pareja. Mueve tus caderas en círculos lentos mientras besas su cuello y hombros.",
    time: 90,
    role: "Quien saca la carta sube encima",
    tip: "Deja caer tu peso de forma sensual y mantén el contacto piel a piel."
  },
  {
    id: 21,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Besos al Borde del Abismo",
    action: "Besa su entrepierna y la línea de su ropa interior, tocando con tu lengua y labios los bordes pero sin cruzar hacia sus genitales directos.",
    time: 90,
    role: "Quien saca la carta provoca",
    tip: "Bordea la zona tantas veces como sea posible sin entrar del todo."
  },
  {
    id: 22,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Contra la Pared",
    action: "Lleva a tu pareja contra la pared o el cabecero de la cama. Aprisiónala con tu cuerpo y bésala apasionadamente mientras tus manos exploran debajo de su ropa.",
    time: 90,
    role: "Quien saca la carta arrincona a su pareja",
    tip: "Sujeta sus caderas o sujeta sus manos a los lados."
  },
  {
    id: 23,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Lengua Traviesa en el Pecho",
    action: "Traza líneas con tu lengua desde su cuello, pasando entre sus pechos o pectorales, y termina lamiendo sus costados y costillas.",
    time: 60,
    role: "Quien saca la carta recorre con su lengua",
    tip: "Alterna la punta de la lengua con besos de labios anchos y húmedos."
  },
  {
    id: 24,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Dirty Talk al Oído",
    action: "Acaricia íntimamente a tu pareja por encima de la ropa interior mientras le dices en voz muy baja y explícita todo lo que planeas hacerle a continuación.",
    time: 90,
    role: "Quien saca la carta habla sucio",
    tip: "Usa palabras directas y pícaras; deja la timidez en la puerta."
  },
  {
    id: 25,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Masaje de Caderas y Glúteos",
    action: "Usa lubricante, crema o aceite. Desnuda sus caderas y masajea con ambas manos sus glúteos y muslos con movimientos circulares profundos y calientes.",
    time: 120,
    role: "Tu pareja recibe el masaje",
    tip: "Asegúrate de que tus manos estén tibias antes de tocar su piel."
  },
  {
    id: 26,
    level: 2,
    levelName: "Nivel 2: Pasión",
    levelColor: "level-2",
    title: "Desnudez Total Mutua",
    action: "Tienen este tiempo para quitarse mutuamente toda la ropa restante hasta quedar completamente desnudos el uno frente al otro, mirándose sin taparse nada.",
    time: 60,
    role: "Ambos se desvisten",
    tip: "Admiren el cuerpo del otro con descaro y sin pudor."
  },

  // ==========================================
  // NIVEL 3: PLACER ORAL & TOQUE ÍNTIMO (27 - 39)
  // ==========================================
  {
    id: 27,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "El Festín Oral",
    action: "Dedícate por completo a darle sexo oral a tu pareja. Concéntrate en su zona más sensible (clítoris o glande) buscando hacerla gemir desde el primer minuto.",
    time: 150,
    role: "Quien saca la carta realiza el oral",
    tip: "Mantén un ritmo constante y escucha sus gemidos para saber qué le gusta más."
  },
  {
    id: 28,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Masturbación con Mirada Cómplice",
    action: "Masturba a tu pareja con tus manos usando suficiente lubricación o saliva. No puedes despegar la mirada de sus ojos durante todo el tiempo.",
    time: 120,
    role: "Quien saca la carta masturba a su pareja",
    tip: "Ver el placer reflejado en sus ojos aumenta la excitación de los dos."
  },
  {
    id: 29,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "El Clásico 69",
    action: "Colóquense en posición 69 (uno arriba del otro o de costado). Dense placer oral mutuamente y al mismo tiempo.",
    time: 180,
    role: "Ambos a la vez",
    tip: "Hacerlo de lado sobre la cama permite estar más relajados y disfrutar del contacto."
  },
  {
    id: 30,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Oral con Control de Velocidad",
    action: "Hazle un oral a tu pareja jugando con los ritmos: 15 segundos extremadamente lentos y sensuales, seguidos de 15 segundos intensos y apasionados.",
    time: 150,
    role: "Quien saca la carta realiza el oral",
    tip: "El contraste de ritmos lleva la estimulación al máximo nivel."
  },
  {
    id: 31,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Estimulación Doble / Boca y Dedos",
    action: "Mientras usas tu boca y lengua en su zona erógena principal, utiliza tus dedos para acariciar sus pezones, perineo o zona íntima simultáneamente.",
    time: 150,
    role: "Quien saca la carta usa boca y manos",
    tip: "La sobrecarga sensorial hace que la sensación sea inigualable."
  },
  {
    id: 32,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Juego de Edging (Al Borde)",
    action: "Estimula a tu pareja con tus manos o boca hasta llevarla cerca del clímax. Detente 5 segundos antes de que llegue y vuelve a empezar despacio.",
    time: 180,
    role: "Quien saca la carta controla el borde",
    tip: "Pregúntale: '¿Qué tan cerca estás?' y frena justo a tiempo para torturarle de placer."
  },
  {
    id: 33,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Oral a Ciegas",
    action: "Tu pareja debe taparse los ojos con una prenda o antifaz. Sin que pueda ver tus movimientos, dale sexo oral alternando caricias sorpresivas de lengua y labios.",
    time: 150,
    role: "Tu pareja no puede ver",
    tip: "Sin vista, el sentido del tacto y el placer se multiplica por diez."
  },
  {
    id: 34,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Complacencia Guiada",
    action: "Tu pareja tiene el control total de tu boca o manos. Debe decirte exactamente qué hacer: 'más rápido', 'más suave', 'en círculos', y tú debes obedecer con devoción.",
    time: 180,
    role: "Tu pareja da las órdenes, tú ejecutas",
    tip: "Es el momento de complacer exactamente al gusto de quien recibe."
  },
  {
    id: 35,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Succión y Besos en Muslos Íntimos",
    action: "Abre bien las piernas de tu pareja. Besa y succiona suavemente el nacimiento de sus muslos e ingles, acercándote con besos húmedos a su sexo.",
    time: 120,
    role: "Quien saca la carta realiza los besos",
    tip: "Las ingles son zonas extremadamente sensibles y muchas veces olvidadas."
  },
  {
    id: 36,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Show de Placer Propio",
    action: "Recuéstate y mastúrbate frente a tu pareja mientras él/ella te observa de cerca sin tocarte, disfrutando de cómo te das placer a ti mismo/a.",
    time: 120,
    role: "Quien saca la carta se toca para el otro",
    tip: "Permite que tu pareja vea tus gestos y expresiones de placer sin censura."
  },
  {
    id: 37,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "El Beso del Glaseado",
    action: "Besa apasionadamente los genitales de tu pareja y, justo después, sube de inmediato a besar su boca, compartiendo sus propios sabores y fluidos.",
    time: 120,
    role: "Quien saca la carta baja y sube a la boca",
    tip: "Un beso íntimo, caliente y lleno de complicidad y entrega."
  },
  {
    id: 38,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Dedos de Terciopelo",
    action: "Con bastante lubricante, penetra suavemente con uno o dos dedos la intimidad de tu pareja, mientras con tu pulgar frotas en pequeños círculos su zona exterior más sensible.",
    time: 150,
    role: "Quien saca la carta estimula con dedos",
    tip: "Haz movimientos de 'ven aquí' con las yemas de tus dedos por dentro."
  },
  {
    id: 39,
    level: 3,
    levelName: "Nivel 3: Oral & Éxtasis",
    levelColor: "level-3",
    title: "Oral Ininterrumpido",
    action: "No puedes despegar tu boca ni tu lengua de su sexo durante todo el tiempo estipulado. Cero pausas, cero distracciones: entrega total.",
    time: 180,
    role: "Quien saca la carta se entrega por completo",
    tip: "Sostén sus caderas o muslos para anclarte al placer."
  },

  // ==========================================
  // NIVEL 4: PENETRACIÓN & POSICIONES SALVAJES (40 - 52)
  // ==========================================
  {
    id: 40,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "La Vaquera con Control Total",
    action: "Posición de la Vaquera: Quien se siente arriba toma las riendas del acto, controlando la profundidad, el ritmo y el movimiento de caderas.",
    time: 180,
    role: "Uno arriba llevando el ritmo",
    tip: "Apoya tus manos sobre el pecho de tu pareja o inclínate hacia atrás para cambiar el ángulo."
  },
  {
    id: 41,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "De Perrito / Estilo Salvaje",
    action: "Posición en cuatro puntos (Doggy style). Penetración profunda con una mano en sus caderas y la otra acariciando su espalda o dando palmadas suaves en los glúteos.",
    time: 180,
    role: "Penetración por detrás",
    tip: "Arquea bien la espalda para una penetración mucho más profunda y placentera."
  },
  {
    id: 42,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Misionero con Piernas a los Hombros",
    action: "Misionero modificado: quien está abajo sube sus piernas apoyándolas sobre los hombros del otro. Permite una penetración profunda mirándose a los ojos.",
    time: 180,
    role: "Misionero elevado",
    tip: "Este ángulo estimula puntos internos imposibles en el misionero común."
  },
  {
    id: 43,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "La Cucharita Íntima",
    action: "Ambos acostados de lado, uno detrás del otro como cucharitas. Penetración lenta, suave y constante, con abrazos apretados y besos en la nuca.",
    time: 210,
    role: "Posición de lado abrazados",
    tip: "Ideal para disfrutar de la piel, los susurros y el calor continuo."
  },
  {
    id: 44,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "En el Borde de la Cama",
    action: "Uno se recuesta al borde de la cama con las caderas justo en el filo; el otro se sitúa de pie o de rodillas entre sus piernas, embistiendo con fuerza.",
    time: 180,
    role: "Al borde del colchón",
    tip: "Permite un empuje cómodo, firme y de gran potencia."
  },
  {
    id: 45,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Penetración a Cámara Ultra Lenta",
    action: "En la posición que prefieran, tengan penetración a la velocidad más lenta que puedan imaginar: cada entrada y salida debe durar al menos 5 segundos.",
    time: 180,
    role: "Ambos sincronizados en cámara lenta",
    tip: "Sentir cada milímetro de fricción interna genera una excitación descomunal."
  },
  {
    id: 46,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "La Flor de Loto (Abrazo Sagrado)",
    action: "Uno se sienta con las piernas cruzadas; el otro se sienta sobre su regazo rodeando su torso con las piernas. Abrácense con fuerza y muévanse al unísono.",
    time: 240,
    role: "Sentados frente a frente enlazados",
    tip: "Es la posición de mayor intimidad emocional y física que existe."
  },
  {
    id: 47,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Vaquera Invertida (De Espaldas)",
    action: "Quien sube arriba lo hace dándole la espalda a su pareja. Muévete arriba y abajo mientras tu pareja admira la vista de tus glúteos y espalda.",
    time: 180,
    role: "Arriba mirando hacia los pies",
    tip: "Quien está abajo puede acariciar los glúteos y muslos de quien cabalga."
  },
  {
    id: 48,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Aceleración Gradual al Límite",
    action: "Empiecen el acto muy despacio. Cada 30 segundos, suban la velocidad y la intensidad un nivel más, hasta terminar con un ritmo furioso y apasionado.",
    time: 210,
    role: "Ambos aumentando la marcha",
    tip: "Sientan cómo la respiración y los gemidos se aceleran juntos."
  },
  {
    id: 49,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Maratón de Besos en Pleno Acto",
    action: "Elijan la posición que deseen. La regla inquebrantable: no pueden despegar sus labios durante la penetración; besos hambrientos y continuos todo el tiempo.",
    time: 180,
    role: "Penetración sin romper el beso",
    tip: "Si se separan los labios antes de que suene la campana, se añaden 30 segundos."
  },
  {
    id: 50,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Penetración con Estimulación Clitorial",
    action: "Durante la penetración (misionero, de lado o vaquera), frota el clítoris continuamente con tus dedos o un juguete para una estimulación doble imparable.",
    time: 210,
    role: "Placer simultáneo interno y externo",
    tip: "El orgasmo combinado es uno de los más intensos que se pueden experimentar."
  },
  {
    id: 51,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Posición Favorita del Receptor",
    action: "Quien recibe la penetración elige sin discusión su posición favorita de todos los tiempos. La otra persona debe entregarse al 100% para complacerle.",
    time: 240,
    role: "El receptor tiene el mando absoluto",
    tip: "Comuniquen qué ángulo y qué ritmo es el que más placer les está dando."
  },
  {
    id: 52,
    level: 4,
    levelName: "Nivel 4: Penetración & Fuego",
    levelColor: "level-4",
    title: "Fantasía Libre & Clímax Sin Filtro",
    action: "¡Carta de fuego libre! Hagan realidad cualquier fantasía o posición que deseen en este instante. Si llegan al orgasmo juntos o por separado, ¡misión cumplida!",
    time: 300,
    role: "Libertad absoluta para la pareja",
    tip: "Olvídense de todo lo demás y entréguense al placer puro de la noche."
  }
];

// Lista de penitencias por si alguien dice "Paso / No me atrevo"
const PENALTIES = [
  "Quítate dos prendas de inmediato sin rechistar.",
  "Tómate un shot o trago largo de tu bebida favorita.",
  "Deja que tu pareja te dé tres nalgadas firmes.",
  "Baila sensualmente durante 30 segundos sin música.",
  "Deja que tu pareja te bese donde él/ella quiera por 30 segundos.",
  "Haz 10 sentadillas solo en ropa interior frente a tu pareja.",
  "Confiésale una fantasía inconfesable que nunca le hayas dicho a nadie.",
  "Deja que tu pareja pase un hielo por tu abdomen o cuello.",
  "Hazle un masaje en los pies a tu pareja durante 1 minuto.",
  "Susúrrale al oído qué es lo que más te calienta de su cuerpo."
];
