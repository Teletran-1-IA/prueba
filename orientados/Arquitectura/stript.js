// Diccionario de carreras y sus categorías
const carreras = {
    "Arquitectura": ["creatividad", "diseño", "planeación"],
    "Artes Plásticas": ["creatividad", "expresiónartística", "habilidades manuales"],
    "Diseño Gráfico": ["creatividad", "diseño", "comunicación visual"],
    "Programa de Artes Musicales": ["expresiónartística", "habilidades musicales", "creatividad"]
};

// Impacto de las respuestas en las carreras
const impactoRespuestas = {
    '1': [
        "Arquitectura", "Artes Plásticas"
    ],
    '2': [
        "Diseño Gráfico", "Arquitectura"
    ],
    '3': [
        "Programa de Artes Musicales", "Diseño Gráfico"
    ]
};

// Descripciones de las carreras
function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        /*arquitectura*/
        "Arquitectura": `<div class="carrera">
    <h3 class="titulo-carrera">Arquitectura</h3>
    <p class="descripcion-carrera">La arquitectura es una disciplina que combina arte, ciencia y tecnología para diseñar y construir espacios habitables que son funcionales, estéticamente agradables y sostenibles. Los arquitectos son responsables de la creación de edificios y estructuras que no solo cumplen con las necesidades de sus usuarios, sino que también integran aspectos culturales, sociales y medioambientales. La arquitectura abarca desde el diseño de viviendas y edificios comerciales hasta proyectos urbanos y de infraestructura.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Arquitecto?</h4>
    <ul class="lista-habilidades">
        <li><strong>Diseño de Edificios y Espacios:</strong> Los arquitectos crean diseños que cumplen con las necesidades funcionales y estéticas de los usuarios, considerando aspectos como la luz, el espacio, la acústica y los materiales.</li>
        <li><strong>Planificación Urbana:</strong> Participan en el diseño y desarrollo de proyectos a gran escala, como barrios, ciudades o espacios públicos, asegurando que los entornos construidos sean eficientes, accesibles y sostenibles.</li>
        <li><strong>Gestión de Proyectos:</strong> Los arquitectos coordinan todos los aspectos de un proyecto de construcción, desde la concepción del diseño hasta la supervisión de la construcción, asegurando que se cumplan los plazos, el presupuesto y los estándares de calidad.</li>
        <li><strong>Sostenibilidad y Ecodiseño:</strong> Integran principios de sostenibilidad en sus diseños, utilizando materiales y tecnologías que minimizan el impacto ambiental y mejoran la eficiencia energética de los edificios.</li>
        <li><strong>Conservación y Restauración:</strong> Trabajan en la preservación y restauración de edificios históricos, aplicando técnicas que respeten el valor patrimonial de las estructuras mientras las adaptan a las necesidades contemporáneas.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Creatividad y visión espacial para diseñar espacios innovadores y funcionales.</li>
        <li>Conocimientos en construcción, materiales y técnicas de edificación.</li>
        <li>Capacidad de análisis y resolución de problemas para abordar desafíos técnicos y estéticos.</li>
        <li>Habilidades en software de diseño asistido por computadora (CAD) y modelado 3D.</li>
        <li>Conocimientos en sostenibilidad y ecodiseño para crear edificios eficientes y respetuosos con el medio ambiente.</li>
        <li>Habilidades de comunicación para trabajar en equipo y presentar proyectos a clientes y autoridades.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los arquitectos suelen ser personas creativas y detallistas, con una fuerte capacidad para imaginar y visualizar espacios tridimensionales. Tienen un buen sentido estético y un profundo interés por el entorno construido y su impacto en las personas. Además, son organizados y capaces de gestionar múltiples aspectos de un proyecto, desde el diseño hasta la construcción, trabajando en equipo y comunicándose eficazmente con clientes y contratistas.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la arquitectura tiene una amplia gama de aplicaciones en sectores como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Diseño de Viviendas:</strong> Creación de espacios habitables que sean funcionales, estéticamente agradables y sostenibles, tanto en áreas urbanas como rurales.</li>
        <li><strong>Construcción Comercial e Industrial:</strong> Diseño de edificios comerciales, oficinas, fábricas y otras infraestructuras, con un enfoque en la funcionalidad y la eficiencia.</li>
        <li><strong>Planificación y Desarrollo Urbano:</strong> Participación en proyectos de desarrollo urbano que aborden la expansión de las ciudades, la creación de espacios públicos y la infraestructura.</li>
        <li><strong>Conservación del Patrimonio:</strong> Restauración y conservación de edificios históricos y culturales, asegurando su preservación para futuras generaciones.</li>
        <li><strong>Arquitectura Sostenible:</strong> Implementación de principios de diseño ecológico en la construcción de edificios y la planificación urbana para minimizar el impacto ambiental.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en arquitectura en Bolivia varían según la experiencia, la especialización y la ubicación. Los arquitectos pueden trabajar en estudios de arquitectura, en el sector público, o como consultores independientes. Con el tiempo, pueden avanzar hacia roles de liderazgo en grandes proyectos, convertirse en especialistas en áreas como la sostenibilidad o el diseño urbano, o establecer su propio estudio de arquitectura.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Arquitectura Sostenible:</strong> Diseño de edificios y espacios que minimizan el impacto ambiental mediante el uso de materiales ecológicos y tecnologías eficientes.</li>
        <li><strong>Diseño Urbano:</strong> Planificación y diseño de espacios urbanos, incluyendo calles, plazas y barrios, con un enfoque en la funcionalidad y la estética.</li>
        <li><strong>Restauración Arquitectónica:</strong> Conservación y rehabilitación de edificios históricos, respetando su valor patrimonial mientras se adaptan a las necesidades contemporáneas.</li>
        <li><strong>Arquitectura de Interiores:</strong> Diseño de espacios interiores, enfocándose en la funcionalidad, el confort y la estética para mejorar la calidad de vida de los usuarios.</li>
        <li><strong>Arquitectura Paisajista:</strong> Diseño y planificación de espacios exteriores, como parques, jardines y áreas recreativas, integrando el entorno natural con el entorno construido.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Arquitectura en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Relevancia Cultural y Social:</strong> La arquitectura en Bolivia juega un papel clave en la preservación de la identidad cultural y en el desarrollo de espacios que reflejan la diversidad y riqueza del país.</li>
        <li><strong>Oportunidades en Expansión Urbana:</strong> Con el crecimiento de las ciudades bolivianas, hay una demanda creciente de arquitectos para diseñar y planificar entornos urbanos sostenibles y funcionales.</li>
        <li><strong>Contribución a la Sostenibilidad:</strong> Los arquitectos están en la vanguardia del diseño sostenible, creando edificios y espacios que minimizan el impacto ambiental y promueven el bienestar social.</li>
        <li><strong>Diversidad de Aplicaciones:</strong> La carrera de arquitectura ofrece una amplia gama de especializaciones, permitiendo a los profesionales trabajar en áreas que van desde el diseño de interiores hasta la planificación urbana.</li>
    </ul>
</div>
`,
        /*artes plastices*/
        "Artes Plásticas": `<div class="carrera">
    <h3 class="titulo-carrera">Artes Plásticas</h3>
    <p class="descripcion-carrera">Las artes plásticas son una disciplina creativa que abarca diversas formas de expresión visual, incluyendo pintura, escultura, dibujo, grabado, cerámica, y más. Estas artes se enfocan en la creación de obras visuales que comunican ideas, emociones, y conceptos a través del uso de diferentes materiales, técnicas y estilos. Los artistas plásticos exploran la forma, el color, la textura y el espacio para crear obras que pueden ser figurativas o abstractas, y que a menudo reflejan la cultura, la sociedad y la experiencia personal.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Artista Plástico?</h4>
    <ul class="lista-habilidades">
        <li><strong>Exploración Creativa:</strong> Los artistas plásticos experimentan con diferentes materiales y técnicas para desarrollar un estilo único y expresar sus ideas de manera visual. Esto puede incluir desde el uso de medios tradicionales como el óleo y el barro, hasta técnicas más modernas como el arte digital.</li>
        <li><strong>Desarrollo de Conceptos:</strong> Un aspecto clave de las artes plásticas es la capacidad de desarrollar y comunicar conceptos complejos a través de la forma visual. Esto implica un proceso de reflexión, investigación y experimentación para dar forma a ideas abstractas o concretas.</li>
        <li><strong>Producción de Obras de Arte:</strong> Los artistas plásticos crean obras que pueden ser exhibidas en galerías, museos, espacios públicos, o vendidas de manera comercial. Estas obras pueden ser piezas únicas o parte de series temáticas.</li>
        <li><strong>Crítica y Análisis:</strong> Parte del trabajo de un artista plástico incluye la capacidad de analizar y criticar su propio trabajo y el de otros, entendiendo el contexto histórico, cultural y social en el que se inscribe.</li>
        <li><strong>Educación y Difusión del Arte:</strong> Muchos artistas plásticos también se dedican a la enseñanza, compartiendo sus conocimientos y técnicas con estudiantes o el público en general a través de talleres, conferencias y exposiciones.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Destreza manual y dominio técnico en el uso de diversos materiales y herramientas artísticas.</li>
        <li>Creatividad e imaginación para desarrollar ideas originales y expresarlas visualmente.</li>
        <li>Conocimiento en teoría del arte y habilidades de crítica y análisis para contextualizar y comunicar el significado de las obras.</li>
        <li>Capacidad para trabajar de manera autónoma y gestionar proyectos artísticos de principio a fin.</li>
        <li>Habilidades en gestión cultural para organizar exposiciones, eventos y actividades relacionadas con el arte.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los artistas plásticos suelen ser personas creativas, curiosas y expresivas, con una fuerte necesidad de comunicar ideas y emociones a través de su trabajo. Tienen una sensibilidad estética desarrollada y una profunda capacidad de observación. Además, son persistentes, ya que el proceso de creación artística a menudo implica pruebas, errores y la superación de desafíos técnicos y conceptuales.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, las artes plásticas tienen un rol importante en la cultura y la sociedad, con oportunidades en sectores como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Exhibiciones y Galerías:</strong> Los artistas pueden exhibir sus obras en galerías de arte, centros culturales, y eventos de arte, tanto a nivel nacional como internacional.</li>
        <li><strong>Arte Público:</strong> Participación en proyectos de arte urbano y público, que embellecen ciudades y comunican mensajes culturales o sociales.</li>
        <li><strong>Educación Artística:</strong> Enseñanza de las artes plásticas en escuelas, universidades y talleres, así como en programas comunitarios y de desarrollo cultural.</li>
        <li><strong>Diseño y Artes Aplicadas:</strong> Colaboración en proyectos de diseño gráfico, ilustración, escenografía, y otras áreas donde el arte visual tiene una aplicación práctica.</li>
        <li><strong>Comercialización de Obras de Arte:</strong> Venta de obras originales a coleccionistas, empresas, o como parte de proyectos editoriales y de diseño.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>El mercado de las artes plásticas en Bolivia puede ser variable, con ingresos que dependen del reconocimiento, la demanda de las obras, y la capacidad del artista para comercializar su trabajo. Los artistas pueden ganar ingresos a través de la venta de sus obras, comisiones, becas, premios artísticos, y roles en la educación o gestión cultural. Con el tiempo, los artistas pueden ganar reconocimiento, participar en exposiciones internacionales, o colaborar en proyectos interdisciplinarios que amplíen su alcance y oportunidades.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Pintura:</strong> Dominio de técnicas como el óleo, acrílico, acuarela, y más, para la creación de obras bidimensionales.</li>
        <li><strong>Escultura:</strong> Trabajo con materiales como piedra, madera, metal, y otros para crear obras tridimensionales.</li>
        <li><strong>Dibujo y Grabado:</strong> Técnicas de representación gráfica que incluyen el dibujo a lápiz, carboncillo, tinta, y el grabado en diferentes soportes.</li>
        <li><strong>Cerámica:</strong> Creación de objetos artísticos y utilitarios a partir de barro y otros materiales cerámicos, utilizando técnicas de modelado y cocción.</li>
        <li><strong>Arte Digital:</strong> Uso de tecnologías digitales para la creación de obras de arte, incluyendo ilustración, animación, y arte interactivo.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Artes Plásticas en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Riqueza cultural:</strong> Bolivia tiene una rica tradición artística que incluye influencias indígenas, coloniales y modernas, proporcionando un contexto diverso y estimulante para los artistas plásticos.</li>
        <li><strong>Oportunidades en el arte contemporáneo:</strong> La creciente escena del arte contemporáneo en Bolivia ofrece oportunidades para la innovación y el reconocimiento en el ámbito nacional e internacional.</li>
        <li><strong>Conexión con la comunidad:</strong> Los artistas plásticos en Bolivia pueden tener un impacto directo en sus comunidades a través de proyectos de arte público, educación y colaboración con organizaciones culturales.</li>
        <li><strong>Libertad creativa:</strong> Las artes plásticas ofrecen una amplia libertad para explorar diferentes medios, estilos y temas, permitiendo a los artistas desarrollar una carrera que refleje sus intereses y valores personales.</li>
    </ul>
</div>
`,
        /*diseño grafico*/
        "Diseño Gráfico": `<div class="carrera">
    <h3 class="titulo-carrera">Diseño Gráfico</h3>
    <p class="descripcion-carrera">El diseño gráfico es una disciplina creativa que se centra en la comunicación visual de ideas y mensajes a través del uso de imágenes, tipografía, colores y otros elementos visuales. Los diseñadores gráficos trabajan en una amplia variedad de proyectos, desde la creación de logotipos y marcas hasta el diseño de páginas web, materiales impresos, envases, y más. Su objetivo es transmitir conceptos de manera clara y atractiva, utilizando principios de diseño para captar la atención y comunicar de manera efectiva.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Diseñador Gráfico?</h4>
    <ul class="lista-habilidades">
        <li><strong>Identidad Corporativa y Branding:</strong> Los diseñadores gráficos desarrollan la identidad visual de marcas y empresas, incluyendo logotipos, paletas de colores, tipografías y otros elementos que definan la imagen de la marca.</li>
        <li><strong>Diseño Editorial:</strong> Crean el diseño de libros, revistas, periódicos y otros materiales impresos, organizando el contenido de manera que sea visualmente atractivo y fácil de leer.</li>
        <li><strong>Diseño de Packaging:</strong> Trabajan en el diseño de envases y empaques, asegurando que sean funcionales y atractivos, y que reflejen la identidad del producto y la marca.</li>
        <li><strong>Diseño Digital y Web:</strong> Diseñan interfaces y elementos gráficos para sitios web, aplicaciones móviles y plataformas digitales, enfocándose en la experiencia del usuario y la funcionalidad.</li>
        <li><strong>Publicidad y Marketing:</strong> Desarrollan piezas gráficas para campañas publicitarias, incluyendo anuncios impresos y digitales, carteles, folletos, y otros materiales promocionales.</li>
        <li><strong>Animación y Multimedia:</strong> Algunos diseñadores gráficos se especializan en crear gráficos en movimiento, como animaciones y videos, utilizando software especializado.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Dominio de software de diseño gráfico como Adobe Photoshop, Illustrator, InDesign y otros programas de diseño digital.</li>
        <li>Creatividad e innovación para desarrollar ideas originales y soluciones visuales atractivas.</li>
        <li>Conocimientos en teoría del color, tipografía y composición para crear diseños equilibrados y efectivos.</li>
        <li>Habilidades de comunicación para interpretar las necesidades del cliente y transmitir ideas de manera clara y persuasiva.</li>
        <li>Capacidad de trabajar en equipo y gestionar proyectos desde la concepción hasta la entrega final.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los diseñadores gráficos suelen ser personas creativas, detallistas y visualmente orientadas, con una pasión por la comunicación visual y una curiosidad por nuevas tendencias y tecnologías. Son buenos solucionadores de problemas, capaces de transformar conceptos abstractos en diseños concretos y efectivos. Además, son organizados y capaces de manejar múltiples proyectos simultáneamente, cumpliendo con plazos y expectativas de los clientes.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, el diseño gráfico tiene aplicaciones en diversos sectores:</p>
    <ul class="lista-oportunidades">
        <li><strong>Agencias de Publicidad y Marketing:</strong> Trabajan en la creación de campañas publicitarias y materiales promocionales para marcas y empresas.</li>
        <li><strong>Medios de Comunicación:</strong> Colaboran en el diseño editorial para periódicos, revistas, y otros medios impresos y digitales.</li>
        <li><strong>Empresas y Corporaciones:</strong> Desarrollan la identidad visual y los materiales de comunicación corporativa, incluyendo logotipos, presentaciones y folletos.</li>
        <li><strong>Estudios de Diseño y Freelance:</strong> Muchos diseñadores gráficos trabajan de manera independiente o en pequeños estudios, ofreciendo servicios a una variedad de clientes.</li>
        <li><strong>Industrias Creativas:</strong> Participan en proyectos de cine, televisión, videojuegos y otros medios, creando gráficos y elementos visuales.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en diseño gráfico en Bolivia varían según la experiencia, el tipo de empleo y la ubicación. Los diseñadores gráficos pueden comenzar su carrera en roles junior en agencias o estudios de diseño y avanzar a posiciones de mayor responsabilidad, como directores de arte o creativos. También existe la posibilidad de trabajar de manera independiente como freelance, lo que ofrece flexibilidad y la oportunidad de establecer una cartera de clientes diversa.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Diseño de Identidad Visual y Branding:</strong> Creación de logotipos y sistemas de identidad visual para marcas y empresas.</li>
        <li><strong>Diseño Editorial:</strong> Diseño de publicaciones impresas y digitales, organizando texto e imágenes para una comunicación efectiva.</li>
        <li><strong>Diseño Web y UX/UI:</strong> Diseño de interfaces de usuario y experiencias digitales para sitios web y aplicaciones.</li>
        <li><strong>Animación y Diseño en Movimiento:</strong> Creación de gráficos en movimiento, animaciones y videos para medios digitales.</li>
        <li><strong>Ilustración:</strong> Creación de imágenes ilustrativas para libros, revistas, productos y otros medios.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Diseño Gráfico en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Demanda Creciente:</strong> Con el auge de las industrias digitales y el crecimiento de la publicidad en línea, la demanda de diseñadores gráficos ha aumentado significativamente.</li>
        <li><strong>Creatividad e Innovación:</strong> El diseño gráfico ofrece un campo amplio para la creatividad, permitiendo a los profesionales explorar diferentes estilos y medios.</li>
        <li><strong>Versatilidad de Aplicaciones:</strong> Los diseñadores gráficos pueden trabajar en una variedad de industrias, desde publicidad y marketing hasta tecnología y entretenimiento.</li>
        <li><strong>Impacto en la Comunicación:</strong> Los diseñadores gráficos juegan un rol clave en la manera en que las marcas y organizaciones se comunican visualmente con su audiencia, haciendo que el trabajo sea tanto creativo como estratégico.</li>
    </ul>
</div>
`,
        /*programa de artes musicales*/
        "Programa de Artes Musicales": `<div class="carrera">
    <h3 class="titulo-carrera">Artes Musicales</h3>
    <p class="descripcion-carrera">El programa de Artes Musicales es una disciplina académica y artística que se enfoca en la creación, interpretación, y estudio de la música en sus diversas formas. Este programa abarca una amplia gama de actividades musicales, desde la ejecución de instrumentos y el canto, hasta la composición, dirección de orquestas, y la investigación musicológica. Los estudiantes en Artes Musicales desarrollan habilidades técnicas y teóricas, a la vez que exploran la música como una forma de expresión cultural y personal.</p>
    
    <h4 class="subtitulo">¿Qué implica estudiar Artes Musicales?</h4>
    <ul class="lista-habilidades">
        <li><strong>Interpretación Musical:</strong> Los estudiantes aprenden a tocar instrumentos musicales o a desarrollar su voz a través de técnicas avanzadas y repertorios variados, que pueden incluir música clásica, jazz, contemporánea, y otros géneros.</li>
        <li><strong>Composición y Arreglos:</strong> Los estudiantes adquieren conocimientos en teoría musical, armonía, contrapunto, y técnicas de composición para crear sus propias obras musicales o arreglar piezas existentes.</li>
        <li><strong>Dirección Musical:</strong> Formación en la dirección de coros, orquestas, bandas y otros conjuntos musicales, desarrollando habilidades en la interpretación de partituras y la gestión de ensayos y presentaciones.</li>
        <li><strong>Musicología y Teoría Musical:</strong> Estudio de la historia de la música, análisis de obras musicales, y la investigación de la música en su contexto cultural, social y tecnológico.</li>
        <li><strong>Educación Musical:</strong> Preparación para enseñar música en diferentes contextos, desde escuelas hasta clases particulares, desarrollando técnicas pedagógicas para transmitir conocimientos musicales a otros.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Destreza técnica en un instrumento o en la voz para la interpretación musical.</li>
        <li>Conocimientos sólidos en teoría musical y armonía para la composición y el análisis de obras.</li>
        <li>Capacidad de concentración y disciplina para el estudio y la práctica constante de la música.</li>
        <li>Sensibilidad artística y creatividad para la interpretación y creación de música.</li>
        <li>Habilidades de escucha crítica para el análisis musical y la interpretación.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los estudiantes de Artes Musicales suelen ser personas apasionadas por la música, con una fuerte dedicación al perfeccionamiento técnico y artístico. Son creativos, sensibles y expresivos, con la capacidad de trabajar de manera independiente y en equipo. Además, tienen una gran capacidad de concentración y disciplina, fundamentales para el estudio y la práctica constante que la música requiere.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, el campo de las Artes Musicales ofrece diversas oportunidades laborales en:</p>
    <ul class="lista-oportunidades">
        <li><strong>Enseñanza Musical:</strong> Trabajar como profesores de música en escuelas, conservatorios, universidades, y en clases particulares.</li>
        <li><strong>Interpretación Musical:</strong> Integrar orquestas, bandas, coros, o trabajar como solistas en conciertos y eventos musicales.</li>
        <li><strong>Composición y Arreglos:</strong> Componer música para cine, televisión, teatro, publicidad, o arreglar obras musicales para diferentes conjuntos.</li>
        <li><strong>Dirección Musical:</strong> Dirigir coros, orquestas, bandas, y otros grupos musicales en presentaciones y grabaciones.</li>
        <li><strong>Gestión y Producción Musical:</strong> Trabajar en la organización de eventos musicales, festivales, grabaciones, y la gestión de proyectos culturales.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en el campo de las Artes Musicales en Bolivia varían según la especialización y el tipo de empleo. Profesores de música pueden encontrar empleo en instituciones educativas o trabajar de manera independiente, mientras que músicos intérpretes y compositores pueden obtener ingresos a través de presentaciones, grabaciones, y comisiones por obras. La experiencia y el reconocimiento en el campo pueden llevar a oportunidades de mayor responsabilidad y salarios más altos.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Interpretación Instrumental o Vocal:</strong> Especialización en la ejecución de un instrumento o en el canto, con énfasis en la técnica y el repertorio.</li>
        <li><strong>Composición:</strong> Desarrollo de habilidades para la creación de obras musicales originales, incluyendo música para cine, televisión, y otros medios.</li>
        <li><strong>Dirección Coral y Orquestal:</strong> Formación en la dirección de coros, orquestas, y otros conjuntos musicales.</li>
        <li><strong>Musicología:</strong> Estudio de la historia y teoría de la música, con enfoque en la investigación y análisis de obras musicales.</li>
        <li><strong>Educación Musical:</strong> Preparación para enseñar música en diversos contextos educativos y niveles de formación.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Artes Musicales en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Patrimonio Cultural:</strong> Bolivia tiene una rica tradición musical, con influencias indígenas, coloniales, y modernas, lo que ofrece un contexto diverso para el estudio y la creación musical.</li>
        <li><strong>Oportunidades Creativas:</strong> El campo de las Artes Musicales permite a los estudiantes explorar su creatividad y desarrollar una carrera en un área que combina arte y técnica.</li>
        <li><strong>Impacto Cultural y Social:</strong> Los músicos en Bolivia pueden tener un impacto significativo en la cultura y la sociedad, ya sea a través de la interpretación, la enseñanza, o la creación de nuevas obras.</li>
        <li><strong>Diversidad de Carreras:</strong> Desde la interpretación hasta la enseñanza, la dirección musical y la composición, el programa de Artes Musicales ofrece una amplia gama de oportunidades profesionales para aquellos con pasión por la música.</li>
    </ul>
</div>
`
    };
    
    return descripciones[carrera] || "Esta carrera se enfoca en áreas específicas de estudio y práctica profesional.";
}

// Función para calcular el resultado del test
function calcularResultado() {
    const mensajeError = document.getElementById('mensaje-error');
    mensajeError.style.display = 'none';
    mensajeError.innerText = '';

    const preguntas = document.querySelectorAll('.pregunta');
    const respuestas = document.querySelectorAll('input[type="radio"]:checked');

    // Verifica si todas las preguntas están respondidas
    if (respuestas.length !== preguntas.length) {
        mensajeError.innerText = 'Por favor, responde todas las preguntas antes de ver el resultado del test.';
        mensajeError.style.display = 'block';
        return;
    }

    // Inicializa la afinidad en cada carrera
    const afinidad = {
        "Arquitectura": 0,
        "Artes Plásticas": 0,
        "Diseño Gráfico": 0,
        "Programa de Artes Musicales": 0
    };

    // Procesa cada respuesta seleccionada
    respuestas.forEach(respuesta => {
        const valorRespuesta = respuesta.value;
        if (respuesta.name === 'pregunta1') {
            if (valorRespuesta === '1') {
                afinidad.creatividad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.creatividad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta2') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta3') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta4') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta5') {
            if (valorRespuesta === '1') {
                afinidad.diseño += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.diseño += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta6') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta7') {
            if (valorRespuesta === '1') {
                afinidad.diseño += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.diseño += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta8') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta9') {
            if (valorRespuesta === '1') {
                afinidad.diseño += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.diseño += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta10') {
            if (valorRespuesta === '1') {
                afinidad.creatividad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.creatividad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta11') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta12') {
            if (valorRespuesta === '1') {
                afinidad.creatividad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.creatividad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta13') {
            if (valorRespuesta === '1') {
                afinidad.expresionartistica += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.expresionartistica += 1; // Incrementa ligeramente
            }
        }
        if (respuesta.name === 'pregunta14') {
            if (valorRespuesta === '1') {
                afinidad.diseño += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.diseño += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta15') {
            if (valorRespuesta === '1') {
                afinidad.creatividad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.creatividad += 1; // Incrementa ligeramente
            }
        }

        // Impacto de la respuesta en las carreras
        impactoRespuestas[valorRespuesta].forEach(carrera => {
            afinidad[carrera] += 1;
        });
    });

    // Ordena las carreras según la afinidad calculada
    const carrerasOrdenadas = Object.entries(afinidad)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(entry => entry[0]);

    // Muestra el resultado y el gráfico de afinidades
    mostrarResultado(carrerasOrdenadas, afinidad);
}

// Función para mostrar el resultado y el gráfico
function mostrarResultado(carreras, afinidad) {
    const carrerasRecomendadasDiv = document.getElementById('carrerasRecomendadas');
    
    // Limpia el contenido anterior
    carrerasRecomendadasDiv.innerHTML = '';

    carreras.forEach(carrera => {
        const recuadro = document.createElement('div');
        recuadro.className = 'recuadro-carrera';
        recuadro.innerHTML = `
            <h3>${carrera}</h3>
            <p>${obtenerDescripcionCarrera(carrera)}</p>
        `;
        carrerasRecomendadasDiv.appendChild(recuadro);
    });

    // Configuración y creación del gráfico de afinidades usando Chart.js
    const ctx = document.getElementById('afinidadChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: carreras,
            datasets: [{
                label: 'Gráfico de Afinidad',
                data: carreras.map(carrera => afinidad[carrera]),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('resultado').style.display = 'block';
}
