const carreras = {
    "Ciencias de la Educación": ["intereses", "habilidades", "personalidad"],
    "Filosofía": ["intereses", "habilidades", "personalidad"],
    "Educación Parvularia": ["intereses", "habilidades", "personalidad"],
    "Bibliotecología y Ciencias de la Información": ["intereses", "habilidades", "personalidad"],
    "Psicomotricidad y Deportes": ["intereses", "habilidades", "personalidad"]
};

const impactoRespuestas = {
    '1': [
        "Ciencias de la Educación", "Filosofía", "Educación Parvularia"
    ],
    '2': [
        "Bibliotecología y Ciencias de la Información", "Psicomotricidad y Deportes", "Ciencias de la Educación"
    ],
    '3': [
        "Filosofía", "Bibliotecología y Ciencias de la Información", "Educación Parvularia"
    ]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Ciencias de la Educación": `<div class="carrera">
    <h3 class="titulo-carrera">Ciencias de la Educación</h3>
    <p class="descripcion-carrera">Las Ciencias de la Educación son un campo interdisciplinario que estudia los procesos de enseñanza y aprendizaje, con el objetivo de mejorar la educación en sus diversas formas y niveles. Esta disciplina abarca tanto la teoría como la práctica educativa, y está diseñada para formar profesionales capaces de desarrollar, evaluar, y gestionar programas educativos que contribuyan al desarrollo integral de los estudiantes y al mejoramiento de los sistemas educativos.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Profesional en Ciencias de la Educación?</h4>
    <ul class="lista-habilidades">
        <li><strong>Desarrollo Curricular:</strong> Diseñar, implementar y evaluar currículos educativos adaptados a las necesidades de los estudiantes y a los contextos socioculturales específicos. Esto incluye la creación de materiales didácticos y la adaptación de metodologías de enseñanza.</li>
        <li><strong>Gestión Educativa:</strong> Administrar y dirigir instituciones educativas, asegurando la calidad de la educación ofrecida. Esto puede incluir la gestión de recursos humanos, financieros, y materiales, así como la implementación de políticas educativas.</li>
        <li><strong>Investigación Educativa:</strong> Realizar investigaciones para entender mejor los procesos de aprendizaje y enseñanza, así como para desarrollar nuevas teorías y metodologías que mejoren la educación. Esto incluye la recolección y análisis de datos educativos, y la publicación de los hallazgos para informar la práctica educativa.</li>
        <li><strong>Orientación y Consejería:</strong> Ofrecer apoyo y orientación a estudiantes, profesores y padres, ayudando a resolver problemas académicos, emocionales o sociales que afecten el proceso educativo. Esto incluye la creación de programas de orientación vocacional y personal.</li>
        <li><strong>Capacitación Docente:</strong> Diseñar y llevar a cabo programas de formación y actualización para docentes, con el objetivo de mejorar sus habilidades pedagógicas y mantenerlos al día con las nuevas teorías y prácticas educativas.</li>
        <li><strong>Evaluación Educativa:</strong> Desarrollar y aplicar instrumentos y métodos para evaluar el rendimiento académico de los estudiantes, así como la efectividad de los programas educativos y las prácticas docentes.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en pedagogía y didáctica para diseñar y aplicar estrategias de enseñanza efectivas.</li>
        <li>Habilidades de gestión y liderazgo para dirigir instituciones educativas y coordinar programas y proyectos educativos.</li>
        <li>Capacidad de análisis y evaluación para investigar y mejorar las prácticas educativas a través de estudios y observaciones.</li>
        <li>Habilidades de comunicación para interactuar efectivamente con estudiantes, docentes, padres, y otros actores del sistema educativo.</li>
        <li>Empatía y habilidades interpersonales para ofrecer orientación y apoyo a estudiantes y docentes en diversas situaciones.</li>
        <li>Creatividad e innovación para desarrollar nuevos métodos y materiales educativos que respondan a las necesidades cambiantes de la sociedad.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los profesionales en Ciencias de la Educación suelen ser personas apasionadas por la enseñanza y el aprendizaje, con un fuerte compromiso con el desarrollo humano y social. Son creativos, pacientes, y reflexivos, capaces de adaptarse a diferentes contextos y necesidades educativas. También son líderes naturales, con la capacidad de inspirar y guiar a otros hacia el logro de sus objetivos educativos.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, las Ciencias de la Educación ofrecen un mercado laboral amplio y diversificado, con oportunidades en áreas como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Instituciones Educativas:</strong> Trabajo como docentes, directores o coordinadores en escuelas, colegios y universidades, tanto públicas como privadas.</li>
        <li><strong>Organismos Gubernamentales:</strong> Participación en la formulación e implementación de políticas educativas a nivel local, regional y nacional.</li>
        <li><strong>Organizaciones No Gubernamentales (ONGs):</strong> Desarrollo y gestión de programas educativos en comunidades vulnerables, proyectos de alfabetización y educación inclusiva.</li>
        <li><strong>Centros de Investigación:</strong> Realización de estudios sobre educación, políticas educativas y desarrollo de nuevas metodologías de enseñanza.</li>
        <li><strong>Consultoría Educativa:</strong> Asesoramiento a instituciones educativas, gobiernos y organizaciones en el diseño, implementación y evaluación de programas educativos.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en el campo de las Ciencias de la Educación en Bolivia varían según la especialización, el nivel de experiencia, y la ubicación del empleo. Los profesionales con experiencia en gestión educativa o con un enfoque en investigación y desarrollo curricular pueden encontrar oportunidades bien remuneradas, especialmente en instituciones de educación superior o en organizaciones internacionales. Con el tiempo, los educadores pueden avanzar a roles de mayor responsabilidad, como directores de instituciones educativas, consultores o investigadores.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Pedagogía:</strong> Enfoque en el desarrollo de métodos y técnicas de enseñanza para diferentes niveles educativos.</li>
        <li><strong>Gestión Educativa:</strong> Administración y liderazgo de instituciones educativas y programas de educación.</li>
        <li><strong>Psicopedagogía:</strong> Estudio de los procesos psicológicos implicados en la educación y el aprendizaje.</li>
        <li><strong>Educación Inclusiva:</strong> Diseño y aplicación de estrategias educativas que aseguren el acceso a la educación para todos, incluyendo personas con discapacidades.</li>
        <li><strong>Tecnología Educativa:</strong> Uso de tecnologías de la información y la comunicación (TIC) para mejorar los procesos de enseñanza y aprendizaje.</li>
        <li><strong>Investigación Educativa:</strong> Realización de estudios y análisis para el mejoramiento de las prácticas educativas y el desarrollo de nuevas teorías.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ciencias de la Educación en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Demanda de Profesionales Capacitados:</strong> Bolivia necesita educadores bien formados para mejorar la calidad de su sistema educativo y abordar las necesidades de una población estudiantil diversa.</li>
        <li><strong>Impacto Social:</strong> Los profesionales en Ciencias de la Educación tienen la oportunidad de hacer una diferencia significativa en la vida de los estudiantes y en el desarrollo del país.</li>
        <li><strong>Diversidad de Opciones de Carrera:</strong> La carrera ofrece múltiples vías de especialización, permitiendo a los estudiantes elegir un área que se alinee con sus intereses y aspiraciones.</li>
        <li><strong>Contribución al Desarrollo Sostenible:</strong> La educación es fundamental para el desarrollo sostenible, y los profesionales en este campo juegan un papel clave en la construcción de un futuro más equitativo y próspero.</li>
        <li><strong>Oportunidades en Comunidades Rurales y Urbanas:</strong> La diversidad geográfica y cultural de Bolivia ofrece una variedad de contextos en los que los educadores pueden aplicar sus conocimientos y habilidades.</li>
    </ul>
</div>
`,
        /*filosofia*/
        "Filosofía": `<div class="carrera">
    <h3 class="titulo-carrera">Filosofía</h3>
    <p class="descripcion-carrera">La Filosofía es una disciplina que explora las preguntas fundamentales sobre la existencia, el conocimiento, la verdad, la ética, la mente, y el lenguaje. Los filósofos examinan conceptos abstractos y se dedican a la reflexión crítica y el análisis lógico de las ideas, contribuyendo a una comprensión más profunda de la vida humana, la sociedad, y el mundo que nos rodea. Estudiar filosofía implica desarrollar habilidades en el pensamiento crítico, la argumentación y la escritura, que son aplicables en una amplia gama de campos.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Filósofo?</h4>
    <ul class="lista-habilidades">
        <li><strong>Reflexión Crítica:</strong> Cuestionar y analizar los principios fundamentales que subyacen a nuestras creencias, valores y sistemas de conocimiento. Esto incluye la evaluación de argumentos filosóficos y la formulación de teorías que aborden cuestiones éticas, epistemológicas, y metafísicas.</li>
        <li><strong>Historia de la Filosofía:</strong> Estudio de las ideas y corrientes filosóficas a lo largo de la historia, comprendiendo cómo han influido en la cultura, la ciencia, la política, y las artes. Esto incluye la interpretación de textos filosóficos clásicos y modernos.</li>
        <li><strong>Ética y Filosofía Moral:</strong> Análisis de los conceptos de bien y mal, justicia, virtud y responsabilidad. Los filósofos se dedican a formular teorías éticas que guíen el comportamiento humano y la toma de decisiones.</li>
        <li><strong>Filosofía Política:</strong> Estudio de las estructuras de poder, la justicia social, los derechos humanos, y las teorías de gobierno. Esto incluye la reflexión sobre la mejor manera de organizar la sociedad y las instituciones políticas.</li>
        <li><strong>Epistemología y Teoría del Conocimiento:</strong> Investigación de la naturaleza, el origen, y los límites del conocimiento humano. Los filósofos se preguntan cómo sabemos lo que sabemos, y qué justifica nuestras creencias.</li>
        <li><strong>Metafísica:</strong> Exploración de la naturaleza última de la realidad, incluyendo el estudio de conceptos como ser, tiempo, espacio, causalidad, y existencia. Esto incluye preguntas sobre la naturaleza de la mente, la identidad personal, y el universo.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Pensamiento crítico y analítico para evaluar argumentos y teorías filosóficas.</li>
        <li>Habilidades de investigación para explorar y desarrollar ideas complejas a través de la lectura de textos filosóficos y la participación en debates.</li>
        <li>Capacidad de argumentación para construir y presentar argumentos sólidos y coherentes.</li>
        <li>Habilidades de comunicación para expresar ideas filosóficas de manera clara y persuasiva, tanto por escrito como oralmente.</li>
        <li>Creatividad e imaginación para abordar problemas filosóficos de manera innovadora y original.</li>
        <li>Capacidad de reflexión profunda para considerar múltiples perspectivas y enfrentar cuestiones éticas complejas.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los filósofos suelen ser personas curiosas, reflexivas, y comprometidas con la búsqueda de la verdad y el conocimiento. Tienen una inclinación natural hacia la exploración de ideas abstractas y una pasión por el debate y la discusión intelectual. Además, son individuos pacientes y perseverantes, dispuestos a enfrentarse a preguntas difíciles y a reconsiderar sus propias creencias y suposiciones.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la filosofía ofrece un mercado laboral diverso, con oportunidades en áreas como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Docencia:</strong> Trabajo como profesor de filosofía en instituciones educativas de nivel secundario y superior, contribuyendo a la formación intelectual de los estudiantes.</li>
        <li><strong>Investigación:</strong> Participación en proyectos de investigación filosófica en universidades, centros de investigación, y organizaciones académicas.</li>
        <li><strong>Consultoría Ética:</strong> Asesoramiento en comités de ética, organizaciones no gubernamentales (ONGs), y empresas, especialmente en la toma de decisiones éticas y la responsabilidad social.</li>
        <li><strong>Medios de Comunicación y Publicaciones:</strong> Redacción de artículos, ensayos, y columnas en medios de comunicación, editoriales, y publicaciones especializadas en temas filosóficos, culturales, y sociales.</li>
        <li><strong>Cultura y Artes:</strong> Participación en la crítica cultural, análisis de obras de arte, y desarrollo de proyectos que integren la filosofía con la cultura y las humanidades.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en el campo de la filosofía en Bolivia varían según la especialización y el contexto laboral. Los filósofos que trabajan en la academia o en instituciones educativas pueden encontrar oportunidades bien remuneradas, especialmente aquellos que combinan la docencia con la investigación. En áreas como la consultoría ética y los medios de comunicación, los salarios pueden ser competitivos dependiendo del prestigio y la demanda de los servicios ofrecidos. Con la experiencia y la publicación de investigaciones, los filósofos pueden avanzar a roles de mayor responsabilidad y reconocimiento en la academia y otras industrias.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Ética:</strong> Estudio de las teorías morales y su aplicación en diferentes contextos, desde la bioética hasta la ética empresarial.</li>
        <li><strong>Filosofía Política:</strong> Análisis de teorías de justicia, poder, y organización social.</li>
        <li><strong>Filosofía de la Ciencia:</strong> Exploración de los fundamentos filosóficos de las ciencias naturales y sociales.</li>
        <li><strong>Filosofía del Lenguaje:</strong> Investigación sobre la naturaleza y el uso del lenguaje, incluyendo semántica, pragmática, y teorías de la significación.</li>
        <li><strong>Filosofía de la Mente:</strong> Estudio de la naturaleza de la mente, la conciencia, y las emociones.</li>
        <li><strong>Metafísica:</strong> Análisis de los conceptos fundamentales que subyacen a la realidad, como ser, identidad, y tiempo.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Filosofía en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Desarrollo Intelectual:</strong> La filosofía fomenta una mente crítica y analítica, capaz de abordar problemas complejos desde múltiples perspectivas.</li>
        <li><strong>Impacto Social:</strong> Los filósofos contribuyen a la reflexión ética y moral en la sociedad, influyendo en la política, la educación, y la cultura.</li>
        <li><strong>Flexibilidad Profesional:</strong> Las habilidades adquiridas en filosofía son transferibles a una amplia gama de campos, desde la educación hasta la consultoría y los medios de comunicación.</li>
        <li><strong>Contribución Académica:</strong> Bolivia necesita filósofos bien formados para enriquecer el debate intelectual y contribuir al desarrollo de las ciencias humanas en el país.</li>
        <li><strong>Interdisciplinariedad:</strong> La filosofía se cruza con otras disciplinas, permitiendo a los estudiantes integrar conocimientos de diferentes áreas y aplicarlos en contextos variados.</li>
    </ul>
</div>`,
        /*Educación Parvularia*/
        "Educación Parvularia": `<div class="carrera">
    <h3 class="titulo-carrera">Educación Parvularia</h3>
    <p class="descripcion-carrera">La Educación Parvularia es una disciplina enfocada en la formación y desarrollo integral de niños en sus primeros años de vida, generalmente desde los 0 hasta los 6 años. Los profesionales en este campo se especializan en crear ambientes de aprendizaje seguros, estimulantes y afectivos, donde los niños puedan desarrollar sus habilidades cognitivas, emocionales, sociales y físicas. La Educación Parvularia es crucial, ya que los primeros años de vida son determinantes para el desarrollo futuro de una persona.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Educador de Párvulos?</h4>
    <ul class="lista-habilidades">
        <li><strong>Desarrollo Integral del Niño:</strong> Fomentar el desarrollo cognitivo, emocional, social y físico de los niños a través de actividades lúdicas y educativas adecuadas para cada etapa de su desarrollo.</li>
        <li><strong>Diseño de Ambientes de Aprendizaje:</strong> Crear y mantener espacios de aprendizaje que sean seguros, estimulantes y adaptados a las necesidades de los niños pequeños.</li>
        <li><strong>Implementación de Programas Educativos:</strong> Desarrollar y aplicar planes de enseñanza que integren áreas clave como el lenguaje, matemáticas, arte, y ciencias, utilizando métodos apropiados para la edad de los niños.</li>
        <li><strong>Vinculación con la Familia y la Comunidad:</strong> Trabajar en conjunto con las familias y la comunidad para apoyar el desarrollo de los niños, promoviendo una educación inclusiva y respetuosa de la diversidad cultural y social.</li>
        <li><strong>Evaluación del Desarrollo Infantil:</strong> Observar y evaluar el progreso de los niños en diferentes áreas de desarrollo, identificando posibles dificultades y colaborando en la intervención temprana cuando sea necesario.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Paciencia y empatía: Habilidad para comprender y atender las necesidades emocionales y sociales de los niños pequeños.</li>
        <li>Creatividad y flexibilidad: Capacidad para diseñar actividades educativas que sean atractivas, dinámicas y adaptadas a las diferentes etapas del desarrollo infantil.</li>
        <li>Conocimientos en psicología infantil: Comprensión de los procesos de desarrollo cognitivo, emocional y social en la primera infancia.</li>
        <li>Habilidades de comunicación: Capacidad para interactuar de manera efectiva con los niños, sus familias y otros profesionales del área educativa.</li>
        <li>Organización y planificación: Habilidad para diseñar, implementar y evaluar programas educativos de manera efectiva.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los educadores de párvulos suelen ser personas cariñosas, pacientes y comprometidas con el bienestar de los niños. Tienen una gran sensibilidad para entender las necesidades emocionales y físicas de los más pequeños, así como la capacidad de crear entornos seguros y enriquecedores. También son creativos, flexibles y disfrutan del trabajo en equipo, tanto con colegas como con las familias de los niños.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la Educación Parvularia es un campo en crecimiento con varias oportunidades laborales:</p>
    <ul class="lista-oportunidades">
        <li><strong>Centros de Educación Inicial:</strong> Trabajo en jardines de infancia, guarderías y centros de desarrollo infantil, donde se atiende a niños en sus primeros años de vida.</li>
        <li><strong>Escuelas y Colegios:</strong> Desempeño en la etapa de preescolar en instituciones educativas públicas y privadas.</li>
        <li><strong>Organizaciones No Gubernamentales (ONGs):</strong> Participación en programas de desarrollo infantil en comunidades vulnerables, trabajando en proyectos educativos y de intervención temprana.</li>
        <li><strong>Consultoría y Asesoramiento Familiar:</strong> Asesoramiento a padres y familias en temas de desarrollo infantil y educación en el hogar.</li>
        <li><strong>Instituciones de Salud:</strong> Colaboración en programas de salud infantil que integran aspectos educativos en el desarrollo temprano.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en Educación Parvularia en Bolivia varían según la institución y la experiencia del educador. En general, los profesionales en este campo pueden encontrar empleo estable en el sector educativo, con oportunidades de crecimiento hacia roles de coordinación, dirección de centros educativos, o especialización en áreas como la intervención temprana o la educación inclusiva.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Educación Inclusiva:</strong> Enfoque en el desarrollo de estrategias y metodologías para la inclusión de niños con necesidades educativas especiales.</li>
        <li><strong>Intervención Temprana:</strong> Especialización en la detección y apoyo a niños con dificultades de desarrollo desde sus primeros años de vida.</li>
        <li><strong>Desarrollo Cognitivo y Emocional:</strong> Profundización en las teorías y prácticas que promueven el desarrollo cognitivo y emocional durante la primera infancia.</li>
        <li><strong>Psicomotricidad Infantil:</strong> Formación en el apoyo al desarrollo físico y motor de los niños a través de actividades y juegos que estimulan su coordinación y movimiento.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Educación Parvularia en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Impacto en la Sociedad:</strong> La Educación Parvularia juega un rol crucial en el desarrollo de las futuras generaciones, contribuyendo al bienestar y la formación integral de los niños desde sus primeros años de vida.</li>
        <li><strong>Demanda de Profesionales Capacitados:</strong> Con la creciente importancia de la educación inicial, la demanda de educadores de párvulos bien formados está en aumento en todo el país.</li>
        <li><strong>Oportunidad de Trabajo en Contextos Diversos:</strong> Los profesionales de la Educación Parvularia pueden trabajar en una amplia variedad de entornos, desde centros urbanos hasta comunidades rurales, adaptando sus conocimientos a diferentes contextos culturales y sociales.</li>
        <li><strong>Desarrollo Personal y Profesional:</strong> La carrera de Educación Parvularia ofrece una oportunidad única de crecimiento personal y profesional, al trabajar directamente en el desarrollo y formación de los niños en una etapa crítica de sus vidas.</li>
    </ul>
</div>
`,
        /*Bibliotecología y Ciencias de la Información*/
        "Bibliotecología y Ciencias de la Información": `<div class="carrera">
    <h3 class="titulo-carrera">Bibliotecología y Ciencias de la Información</h3>
    <p class="descripcion-carrera">La Bibliotecología y Ciencias de la Información es un campo multidisciplinario que se centra en la gestión, organización y difusión de la información en diversas formas y formatos. Los profesionales en este campo trabajan en la curación y preservación de colecciones de información, en la gestión de bibliotecas y centros de documentación, y en el desarrollo de tecnologías y sistemas para el acceso eficiente a la información.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Profesional en Bibliotecología y Ciencias de la Información?</h4>
    <ul class="lista-habilidades">
        <li><strong>Gestión de Bibliotecas y Centros de Documentación:</strong> Organizan y administran colecciones de libros, documentos, archivos digitales y otros recursos informativos, asegurando su accesibilidad para los usuarios.</li>
        <li><strong>Organización y Clasificación de la Información:</strong> Desarrollan sistemas de catalogación y clasificación para organizar información de manera eficiente, utilizando estándares internacionales como la Clasificación Decimal Dewey o el Sistema de Clasificación de la Biblioteca del Congreso.</li>
        <li><strong>Preservación de Materiales:</strong> Trabajan en la conservación y restauración de documentos y otros materiales, implementando técnicas para prolongar la vida útil de los recursos informativos y asegurando su disponibilidad para futuras generaciones.</li>
        <li><strong>Tecnologías de la Información:</strong> Desarrollan y mantienen bases de datos, catálogos en línea y sistemas de gestión de la información que permiten a los usuarios acceder a recursos digitales y físicos de manera eficiente.</li>
        <li><strong>Servicios de Referencia y Asesoramiento:</strong> Ayudan a los usuarios a encontrar y utilizar la información que necesitan, brindando servicios de referencia, asesoramiento en la búsqueda de información y apoyo en el uso de recursos tecnológicos.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en técnicas de catalogación, clasificación y gestión de información.</li>
        <li>Habilidades en el uso de tecnologías de la información y sistemas de gestión de bibliotecas.</li>
        <li>Capacidad para organizar y preservar materiales informativos de manera efectiva.</li>
        <li>Habilidades interpersonales para interactuar con usuarios y brindar servicios de referencia.</li>
        <li>Conocimientos en legislación y ética de la información.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los profesionales en bibliotecología y ciencias de la información suelen ser personas organizadas, meticulosas y con un gran interés en el conocimiento y la información. Tienen una mentalidad analítica y disfrutan del proceso de organización y gestión de recursos informativos. También son pacientes, comunicativos y están comprometidos con el servicio al usuario.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, los profesionales en bibliotecología y ciencias de la información son fundamentales en:</p>
    <ul class="lista-oportunidades">
        <li><strong>Bibliotecas públicas y privadas:</strong> Organización, gestión y conservación de colecciones de libros, documentos y recursos digitales.</li>
        <li><strong>Centros de documentación:</strong> Manejo de archivos y bases de datos en instituciones educativas, gubernamentales y corporativas.</li>
        <li><strong>Archivos históricos y patrimoniales:</strong> Preservación y gestión de documentos históricos y patrimoniales, asegurando su accesibilidad para investigaciones y estudios.</li>
        <li><strong>Instituciones educativas:</strong> Gestión de bibliotecas escolares y universitarias, apoyo a la investigación y desarrollo de recursos educativos.</li>
        <li><strong>Empresas y organizaciones:</strong> Gestión de la información interna, desarrollo de sistemas de gestión documental y apoyo en la toma de decisiones basadas en la información.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en bibliotecología y ciencias de la información en Bolivia varían según el sector y la experiencia, pero ofrecen estabilidad y oportunidades de crecimiento. Los profesionales pueden avanzar hacia roles de liderazgo en la gestión de bibliotecas o centros de documentación, especializarse en áreas como la preservación digital o la gestión de archivos históricos, o dedicarse a la investigación y docencia en el campo.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Preservación y Conservación de Documentos:</strong> Especialización en técnicas de conservación de documentos y materiales, asegurando su integridad y accesibilidad a largo plazo.</li>
        <li><strong>Gestión de Información Digital:</strong> Desarrollo y gestión de sistemas de información digital, incluyendo bases de datos, catálogos en línea y bibliotecas digitales.</li>
        <li><strong>Archivística:</strong> Estudio y gestión de archivos históricos y contemporáneos, enfocándose en la organización, preservación y acceso a documentos de valor histórico.</li>
        <li><strong>Servicios de Referencia y Asesoramiento:</strong> Especialización en la atención al usuario, ayudando a encontrar y utilizar la información de manera efectiva.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Bibliotecología y Ciencias de la Información en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Creciente demanda:</strong> La expansión de la información digital y la necesidad de gestionar grandes volúmenes de datos generan una creciente demanda de profesionales en este campo.</li>
        <li><strong>Impacto en la educación y la cultura:</strong> Los profesionales en bibliotecología y ciencias de la información juegan un papel crucial en la preservación del conocimiento y en la promoción del acceso a la información.</li>
        <li><strong>Versatilidad:</strong> La formación en este campo ofrece oportunidades en una amplia variedad de sectores, desde bibliotecas y archivos hasta empresas y organizaciones.</li>
        <li><strong>Contribución al patrimonio:</strong> Trabajar en la preservación y difusión de la historia y la cultura a través de la gestión de archivos y documentos patrimoniales.</li>
    </ul>
</div>
`,
        /*Psicomotricidad y Deportes*/
        "Psicomotricidad y Deportes": `<div class="carrera">
    <h3 class="titulo-carrera">Psicomotricidad y Deportes</h3>
    <p class="descripcion-carrera">La Psicomotricidad y Deportes es una disciplina que combina el estudio del movimiento humano con el desarrollo de habilidades motoras, cognitivas y emocionales. Se centra en la interrelación entre el cuerpo, la mente y el entorno, utilizando el movimiento como medio para promover el bienestar físico y mental. Los profesionales en esta área trabajan en la educación, la rehabilitación y el deporte, aplicando técnicas que mejoran la coordinación, la postura, la expresión corporal y la integración social.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Profesional en Psicomotricidad y Deportes?</h4>
    <ul class="lista-habilidades">
        <li><strong>Desarrollo Psicomotor:</strong> Evaluación y estimulación del desarrollo motor en diferentes etapas de la vida, desde la infancia hasta la vejez. Esto incluye la identificación de dificultades motoras y la implementación de programas que promuevan un desarrollo físico y cognitivo equilibrado.</li>
        <li><strong>Intervención en Trastornos Motores:</strong> Trabajo con personas que presentan dificultades motoras, como problemas de coordinación, equilibrio o control muscular. Los profesionales en psicomotricidad diseñan y aplican terapias para mejorar las capacidades motoras y facilitar la integración social.</li>
        <li><strong>Educación Física y Deporte:</strong> Implementación de programas de educación física que fomenten el desarrollo integral de los estudiantes. Esto incluye la enseñanza de habilidades deportivas, la promoción de hábitos saludables y el desarrollo de la autodisciplina y el trabajo en equipo.</li>
        <li><strong>Rehabilitación Psicomotora:</strong> Trabajo en la recuperación de habilidades motoras y cognitivas en personas que han sufrido lesiones o enfermedades que afectan su movilidad. Se utilizan ejercicios y actividades que favorecen la neuroplasticidad y la recuperación funcional.</li>
        <li><strong>Expresión Corporal y Creatividad:</strong> Uso del movimiento y la expresión corporal como herramientas para el desarrollo emocional y la creatividad. Esto incluye actividades como la danza, el teatro y otras formas de expresión artística que integran cuerpo y mente.</li>
        <li><strong>Promoción de la Salud y Bienestar:</strong> Diseño y aplicación de programas que promuevan la salud física y mental a través del movimiento, el ejercicio y la actividad física. Esto incluye la prevención de enfermedades relacionadas con el sedentarismo y la promoción de un estilo de vida activo.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos en anatomía y fisiología para entender el funcionamiento del cuerpo humano y aplicar técnicas adecuadas en el desarrollo y la rehabilitación motora.</li>
        <li>Capacidades pedagógicas para enseñar y guiar a individuos o grupos en el desarrollo de habilidades motoras y la práctica deportiva.</li>
        <li>Habilidades de observación y evaluación para identificar problemas motores y diseñar intervenciones efectivas.</li>
        <li>Creatividad y flexibilidad para adaptar actividades y programas a las necesidades individuales de cada persona.</li>
        <li>Empatía y habilidades de comunicación para trabajar con personas de diferentes edades y contextos, fomentando su motivación y confianza.</li>
        <li>Capacidad de trabajo en equipo y colaboración con otros profesionales de la salud, la educación y el deporte.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los profesionales en Psicomotricidad y Deportes suelen ser personas dinámicas, creativas y con una fuerte vocación de servicio. Son pacientes, observadores y sensibles a las necesidades de los demás, con una capacidad innata para motivar y apoyar a las personas en su desarrollo físico y emocional. Además, deben ser comunicativos y capaces de trabajar en equipo, ya que a menudo colaboran con otros especialistas en áreas como la fisioterapia, la educación y la psicología.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la Psicomotricidad y Deportes ofrece un campo laboral en crecimiento, con oportunidades en:</p>
    <ul class="lista-oportunidades">
        <li><strong>Instituciones Educativas:</strong> Trabajo como docente de educación física o como psicomotricista en escuelas, colegios y universidades, promoviendo el desarrollo integral de los estudiantes.</li>
        <li><strong>Centros de Rehabilitación:</strong> Participación en programas de rehabilitación física para personas con discapacidades motoras o que han sufrido lesiones, trabajando en hospitales, clínicas o centros especializados.</li>
        <li><strong>Clubes Deportivos y Gimnasios:</strong> Entrenamiento y desarrollo de atletas, así como la promoción de la actividad física en diferentes poblaciones, desde niños hasta adultos mayores.</li>
        <li><strong>Centros de Desarrollo Infantil:</strong> Intervención temprana en el desarrollo psicomotor de niños, trabajando en guarderías, centros de desarrollo infantil y programas de atención temprana.</li>
        <li><strong>Consultorías y Asesorías:</strong> Asesoramiento a instituciones educativas, deportivas y de salud en el diseño de programas de desarrollo motor y promoción de la actividad física.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en Psicomotricidad y Deportes en Bolivia varían según el área de especialización y el lugar de trabajo. Los profesionales que trabajan en instituciones educativas o centros de rehabilitación pueden encontrar salarios competitivos, especialmente aquellos con experiencia y especialización en áreas clave como la rehabilitación psicomotora o el entrenamiento deportivo. Con la experiencia, es posible avanzar a roles de mayor responsabilidad, como la dirección de programas o la gestión de centros deportivos y de rehabilitación.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Psicomotricidad Infantil:</strong> Enfoque en el desarrollo motor y cognitivo de niños, incluyendo la intervención en trastornos del desarrollo y la educación especial.</li>
        <li><strong>Rehabilitación Psicomotora:</strong> Trabajo en la recuperación de habilidades motoras en personas con discapacidades o que han sufrido lesiones.</li>
        <li><strong>Educación Física Adaptada:</strong> Diseño de programas de educación física para personas con necesidades especiales, promoviendo su integración y participación en actividades deportivas.</li>
        <li><strong>Entrenamiento Deportivo:</strong> Desarrollo de programas de entrenamiento físico y técnico para atletas en diferentes disciplinas deportivas.</li>
        <li><strong>Promoción de la Salud:</strong> Implementación de programas de actividad física para la prevención de enfermedades y la promoción de un estilo de vida saludable.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Psicomotricidad y Deportes en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Enfoque Integral:</strong> La carrera ofrece una formación que integra el desarrollo físico, cognitivo y emocional, preparando a los estudiantes para trabajar en una amplia gama de contextos.</li>
        <li><strong>Creciente Demanda:</strong> Con el aumento de la conciencia sobre la importancia de la actividad física y el bienestar, hay una creciente demanda de profesionales en psicomotricidad y deportes en Bolivia.</li>
        <li><strong>Impacto Social:</strong> Los profesionales en esta área contribuyen significativamente al bienestar de la sociedad, mejorando la calidad de vida de personas de todas las edades y contextos.</li>
        <li><strong>Diversidad de Oportunidades:</strong> La carrera permite trabajar en áreas tan diversas como la educación, la rehabilitación, el deporte y la promoción de la salud, ofreciendo múltiples caminos de especialización y desarrollo profesional.</li>
        <li><strong>Contribución al Desarrollo Infantil:</strong> En un país con una población joven, los profesionales en psicomotricidad y deportes tienen un papel crucial en el desarrollo de la infancia y la juventud, fomentando el crecimiento físico y emocional equilibrado.</li>
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
        alert('Por favor, responde todas las preguntas antes de ver el resultado del test.');
        return;
    }

    // Inicializa la afinidad en cada carrera
    const afinidad = {
        "Ciencias de la Educación": 0,
        "Filosofía": 0,
        "Educación Parvularia": 0,
        "Bibliotecología y Ciencias de la Información": 0,
        "Psicomotricidad y Deportes": 0
    };

    // Procesa cada respuesta seleccionada
    respuestas.forEach(respuesta => {
        const valorRespuesta = respuesta.value;
        if (respuesta.name === 'pregunta1') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta2') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta3') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta4') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta5') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta6') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta7') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta8') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta9') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta10') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta11') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta12') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta13') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }
        if (respuesta.name === 'pregunta14') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta15') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
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
