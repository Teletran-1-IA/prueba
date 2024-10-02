const carreras = {
    "Ingeniería Civil": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Petrolera": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Química": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Electrónica": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Industrial": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Mecánica y Electromecánica": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Metalúrgica y de Materiales": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Ambiental": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Eléctrica": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería en Producción Empresarial": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Autotrónica": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Textil": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería de Sistemas": { intereses: 0, habilidades: 0, personalidad: 0 }
};

const impactoRespuestas = {
    '3': ["Ingeniería Electrónica", "Ingeniería de Sistemas", "Ingeniería Autotrónica", "Ingeniería Industrial"],
    '2': ["Ingeniería Civil", "Ingeniería Mecánica y Electromecánica", "Ingeniería Metalúrgica y de Materiales", "Ingeniería Petrolera"],
    '1': ["Ingeniería Ambiental", "Ingeniería Química", "Ingeniería Textil", "Ingeniería en Producción Empresarial"]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        /*ingenieria civil*/
        "Ingeniería Civil": `
        <div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Civil</h3>
    <p class="descripcion-carrera">La ingeniería civil es una disciplina que abarca el diseño, construcción y mantenimiento de infraestructuras esenciales para la sociedad, como carreteras, puentes, edificios, sistemas de agua y alcantarillado, y otras estructuras. Los ingenieros civiles trabajan para asegurar que estos proyectos sean seguros, eficientes y sostenibles, mejorando la calidad de vida de las comunidades.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero Civil?</h4>
    <ul class="lista-habilidades">
        <li><strong>Diseño de Infraestructuras:</strong> Los ingenieros civiles diseñan estructuras como puentes, edificios, carreteras y sistemas de agua, considerando factores como la resistencia, durabilidad y sostenibilidad.</li>
        <li><strong>Supervisión de Construcción:</strong> Supervisan y gestionan la construcción de proyectos para asegurar que se realicen de acuerdo con los planos, especificaciones y dentro del presupuesto.</li>
        <li><strong>Gestión de Proyectos:</strong> Involucra la planificación, coordinación y control de recursos para asegurar que los proyectos se completen en tiempo y forma.</li>
        <li><strong>Análisis y Resolución de Problemas:</strong> Identificación de problemas potenciales en los proyectos y desarrollo de soluciones para evitar fallos estructurales y optimizar el rendimiento.</li>
        <li><strong>Investigación y Desarrollo:</strong> Exploración de nuevas tecnologías y métodos de construcción para mejorar la eficiencia y reducir el impacto ambiental.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en matemáticas, física y ciencias de materiales.</li>
        <li>Capacidad para trabajar en equipo y comunicarse eficazmente con otros profesionales.</li>
        <li>Habilidades de análisis y resolución de problemas.</li>
        <li>Comprensión de normativas y regulaciones en construcción.</li>
        <li>Capacidad de gestión y organización para supervisar proyectos complejos.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros civiles suelen ser personas con una fuerte inclinación hacia las matemáticas y las ciencias, con una mentalidad práctica y un enfoque en la resolución de problemas. Son organizados, detallistas y disfrutan de trabajar en proyectos que tienen un impacto tangible en la sociedad.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería civil es una de las carreras más demandadas debido al crecimiento continuo de infraestructuras en el país. Los ingenieros civiles pueden encontrar empleo en:</p>
    <ul class="lista-oportunidades">
        <li>Empresas constructoras: Desarrollando y supervisando proyectos de construcción de infraestructuras.</li>
        <li>Gobierno: Trabajando en la planificación y desarrollo de obras públicas como carreteras y puentes.</li>
        <li>Consultoras de ingeniería: Brindando asesoría técnica en proyectos de construcción.</li>
        <li>Empresas de desarrollo urbano: Participando en la creación de proyectos de urbanización y desarrollo sostenible.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en la ingeniería civil en Bolivia son competitivos, con oportunidades de crecimiento profesional significativas. A medida que los ingenieros civiles adquieren experiencia, pueden avanzar hacia roles de liderazgo en grandes proyectos, especializarse en áreas como la ingeniería estructural o geotécnica, o incluso emprender sus propios negocios en el sector de la construcción.</p>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Civil en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Alta demanda:</strong> La necesidad constante de infraestructuras nuevas y renovadas genera una demanda constante de ingenieros civiles.</li>
        <li><strong>Impacto social:</strong> Es una carrera que permite a los profesionales contribuir directamente al desarrollo y bienestar de las comunidades.</li>
        <li><strong>Diversidad de proyectos:</strong> La ingeniería civil ofrece la oportunidad de trabajar en una variedad de proyectos, desde pequeños edificios hasta grandes infraestructuras públicas.</li>
        <li><strong>Crecimiento profesional:</strong> Las oportunidades de especialización y desarrollo de carrera son abundantes, permitiendo a los ingenieros civiles avanzar en su campo y asumir roles de mayor responsabilidad.</li>
    </ul>
</div>`,
        /*ingenieria petrolera*/
        "Ingeniería Petrolera": `
        <div class="carrera">
        <h3 class="titulo-carrera">Ingeniería Petrolera</h3>
        <p class="descripcion-carrera">La ingeniería petrolera es la disciplina encargada de la exploración, extracción y producción de petróleo y gas natural. Los ingenieros petroleros diseñan y desarrollan métodos para extraer estos recursos de la tierra de manera eficiente y segura, evaluando la viabilidad de nuevos yacimientos y optimizando la recuperación de los mismos.</p>
        
        <h4 class="subtitulo">¿Qué implica ser un Ingeniero Petrolero?</h4>
        <ul class="lista-habilidades">
            <li><strong>Exploración y Evaluación de Yacimientos:</strong> Los ingenieros petroleros analizan datos geológicos y geofísicos para identificar y evaluar yacimientos de petróleo y gas. Esto incluye la estimación de reservas y la viabilidad económica de la extracción.</li>
            <li><strong>Diseño y Operación de Pozos:</strong> Diseñan los pozos de perforación, seleccionando los métodos y equipos adecuados para maximizar la producción y minimizar los riesgos. También supervisan las operaciones de perforación y producción para asegurar su eficiencia.</li>
            <li><strong>Optimización de la Producción:</strong> Desarrollan técnicas para mejorar la recuperación de petróleo y gas, como la inyección de agua o gas para mantener la presión en el yacimiento y maximizar la extracción.</li>
            <li><strong>Gestión de Proyectos y Seguridad:</strong> Supervisan proyectos de perforación y producción, garantizando que se cumplan las normativas de seguridad y medioambientales. Además, gestionan los costos y el cronograma del proyecto.</li>
            <li><strong>Investigación y Desarrollo:</strong> Exploran nuevas tecnologías y métodos para mejorar la eficiencia de la extracción y reducir el impacto ambiental.</li>
        </ul>
        
        <h4 class="subtitulo">Habilidades Necesarias</h4>
        <ul class="lista-habilidades">
            <li>Conocimientos sólidos en geología, química, física y matemáticas.</li>
            <li>Capacidad de análisis y resolución de problemas complejos.</li>
            <li>Habilidades de gestión y organización de proyectos.</li>
            <li>Conocimiento de normativas de seguridad y medioambientales.</li>
            <li>Habilidad para trabajar en entornos multidisciplinarios.</li>
        </ul>
        
        <h4 class="subtitulo">Personalidad Adecuada</h4>
        <p>Los ingenieros petroleros suelen ser personas analíticas con una fuerte inclinación hacia las ciencias naturales y la ingeniería. Tienen una mentalidad pragmática, disfrutan resolviendo problemas técnicos y están dispuestos a trabajar en entornos desafiantes, como plataformas de perforación o ubicaciones remotas.</p>
        
        <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
        <p>En Bolivia, la industria petrolera es un sector clave de la economía, lo que genera una demanda constante de ingenieros petroleros. Estos profesionales pueden encontrar empleo en:</p>
        <ul class="lista-oportunidades">
            <li>Empresas de exploración y producción: Involucrados en la localización y explotación de yacimientos de petróleo y gas.</li>
            <li>Empresas de servicios petroleros: Ofreciendo servicios especializados en perforación, completación y mantenimiento de pozos.</li>
            <li>Consultoras de ingeniería: Brindando asesoría técnica y económica en proyectos de exploración y producción.</li>
            <li>Instituciones gubernamentales: Supervisando y regulando las actividades de la industria petrolera.</li>
        </ul>
        
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios en la ingeniería petrolera en Bolivia suelen ser altos, reflejando la importancia estratégica de la industria. Con la experiencia, los ingenieros petroleros pueden ascender a posiciones de mayor responsabilidad, como gerentes de proyecto o directores técnicos, o especializarse en áreas específicas.</p>
        
        <h4 class="subtitulo">Especializaciones</h4>
        <ul class="lista-especializaciones">
            <li><strong>Ingeniería de Reservorios:</strong> Se enfoca en la evaluación y optimización de la producción de yacimientos, utilizando simulaciones y técnicas avanzadas.</li>
            <li><strong>Ingeniería de Perforación:</strong> Especialización en el diseño y supervisión de la perforación de pozos, asegurando la eficiencia y seguridad del proceso.</li>
            <li><strong>Ingeniería de Producción:</strong> Centrada en la mejora de los métodos de extracción y procesamiento del petróleo y gas.</li>
            <li><strong>Ingeniería de Seguridad y Medio Ambiente:</strong> Enfocada en garantizar que las operaciones petroleras cumplan con los estándares de seguridad y reduzcan su impacto ambiental.</li>
        </ul>
        
        <h4 class="subtitulo">¿Por qué estudiar Ingeniería Petrolera en Bolivia?</h4>
        <ul class="lista-motivos">
            <li><strong>Sector estratégico:</strong> La ingeniería petrolera es clave para el desarrollo económico de Bolivia, asegurando oportunidades laborales sostenibles.</li>
            <li><strong>Alta remuneración:</strong> Es una de las carreras mejor remuneradas en el país, con beneficios adicionales debido a las condiciones de trabajo.</li>
            <li><strong>Innovación tecnológica:</strong> La posibilidad de trabajar con tecnologías avanzadas y participar en proyectos de investigación y desarrollo.</li>
            <li><strong>Diversidad de oportunidades:</strong> Desde exploración hasta producción, los ingenieros petroleros pueden especializarse en diversas áreas de la industria.</li>
        </ul>
    </div>`,
        /*inganieria quimica*/
        "Ingeniería Química": `
        <div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Química</h3>
    <p class="descripcion-carrera">La ingeniería química es una disciplina que combina principios de química, física, matemáticas y biología para diseñar, desarrollar y optimizar procesos industriales que convierten materias primas en productos útiles. Los ingenieros químicos trabajan en una variedad de industrias, desde la producción de alimentos y medicamentos hasta la fabricación de combustibles y materiales avanzados.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero Químico?</h4>
    <ul class="lista-habilidades">
        <li><strong>Diseño y Optimización de Procesos:</strong> Los ingenieros químicos diseñan y mejoran procesos para la producción de productos químicos, alimentos, fármacos, combustibles y otros materiales, asegurando que sean eficientes, rentables y seguros.</li>
        <li><strong>Control de Calidad y Seguridad:</strong> Supervisan la calidad de los productos y aseguran que los procesos cumplan con las normativas de seguridad y medioambientales. Implementan sistemas de control para mantener la calidad constante y minimizar los riesgos.</li>
        <li><strong>Investigación y Desarrollo:</strong> Involucrados en la investigación de nuevas tecnologías y procesos para mejorar la producción, reducir costos y minimizar el impacto ambiental.</li>
        <li><strong>Gestión de Proyectos:</strong> Planifican, coordinan y dirigen proyectos industriales, desde la concepción inicial hasta la puesta en marcha, gestionando recursos y garantizando que se cumplan los plazos y presupuestos.</li>
        <li><strong>Análisis de Procesos:</strong> Evaluación de la eficiencia de los procesos existentes y desarrollo de mejoras para optimizar el rendimiento y reducir desperdicios.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en química, física, matemáticas y biología.</li>
        <li>Capacidad de análisis y resolución de problemas complejos.</li>
        <li>Habilidades de gestión de proyectos y trabajo en equipo.</li>
        <li>Conocimientos en normativas de seguridad, salud y medio ambiente.</li>
        <li>Capacidad para innovar y adaptar nuevas tecnologías a procesos industriales.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros químicos suelen ser personas curiosas, con una fuerte inclinación hacia la ciencia y la tecnología. Disfrutan resolviendo problemas complejos y tienen un enfoque práctico para la optimización de procesos. Suelen ser detallistas y orientados a la seguridad y sostenibilidad.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, los ingenieros químicos son demandados en diversas industrias, incluyendo:</p>
    <ul class="lista-oportunidades">
        <li>Industria petroquímica: Producción y refinación de combustibles, plásticos y otros productos derivados del petróleo.</li>
        <li>Industria alimentaria: Desarrollo y mejora de procesos para la producción de alimentos y bebidas.</li>
        <li>Industria farmacéutica: Diseño y optimización de procesos para la fabricación de medicamentos.</li>
        <li>Industrias de materiales: Producción de materiales avanzados, como polímeros, cerámicas y compuestos.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería química en Bolivia son competitivos, con amplias oportunidades de crecimiento profesional. Los ingenieros químicos pueden avanzar hacia roles de liderazgo en la gestión de plantas, especializarse en áreas como la biotecnología o la ingeniería ambiental, o dedicarse a la investigación y desarrollo de nuevos procesos y productos.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Ingeniería de Procesos:</strong> Se enfoca en el diseño y optimización de procesos industriales a gran escala, buscando la máxima eficiencia y seguridad.</li>
        <li><strong>Ingeniería Ambiental:</strong> Aplicación de principios químicos para desarrollar tecnologías sostenibles y minimizar el impacto ambiental de los procesos industriales.</li>
        <li><strong>Biotecnología:</strong> Integración de principios químicos y biológicos para desarrollar procesos en áreas como la producción de biocombustibles, alimentos y medicamentos.</li>
        <li><strong>Ingeniería de Materiales:</strong> Desarrollo y optimización de nuevos materiales con propiedades específicas para aplicaciones industriales.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Química en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Diversidad de industrias:</strong> La ingeniería química ofrece oportunidades en una amplia gama de sectores, desde la alimentación hasta la energía y la salud.</li>
        <li><strong>Impacto social:</strong> Los ingenieros químicos contribuyen al desarrollo de tecnologías que mejoran la calidad de vida y protegen el medio ambiente.</li>
        <li><strong>Innovación y desarrollo:</strong> La posibilidad de trabajar en proyectos de investigación y desarrollo, creando nuevos productos y procesos.</li>
        <li><strong>Oportunidades de especialización:</strong> La ingeniería química permite especializarse en diversas áreas emergentes y tecnológicamente avanzadas.</li>
    </ul>
</div>
` ,
        /*ingenieria electronica*/
        "Ingeniería Electrónica": `
        <div class="carrera">
        <h3 class="titulo-carrera">Ingeniería Electrónica</h3>
        <p class="descripcion-carrera">La ingeniería electrónica se enfoca en el diseño, desarrollo y aplicación de sistemas electrónicos. Un ingeniero electrónico trabaja con circuitos, dispositivos semiconductores, sistemas de control y señales eléctricas.</p>
        
        <h4 class="subtitulo">¿Qué implica ser un Ingeniero Electrónico?</h4>
        <ul class="lista-habilidades">
            <li><strong>Diseño de circuitos:</strong> Creación de circuitos electrónicos analógicos y digitales para diversas aplicaciones.</li>
            <li><strong>Desarrollo de sistemas embebidos:</strong> Integración de hardware y software en sistemas autónomos como microcontroladores.</li>
            <li><strong>Telecomunicaciones:</strong> Diseño y gestión de redes de comunicación.</li>
            <li><strong>Automatización industrial:</strong> Desarrollo de sistemas de control para procesos industriales.</li>
        </ul>
        
        <h4 class="subtitulo">Habilidades Necesarias</h4>
        <ul class="lista-habilidades">
            <li>Conocimientos sólidos en teoría de circuitos, electrónica digital y analógica.</li>
            <li><strong>Programación:</strong> Dominio de lenguajes de programación como C, C++ y Python.</li>
            <li>Análisis y diseño de sistemas.</li>
            <li>Habilidades de resolución de problemas.</li>
        </ul>
        
        <h4 class="subtitulo">Personalidad Adecuada</h4>
        <p>Los ingenieros electrónicos suelen ser personas minuciosas, con una gran capacidad de análisis y una mente lógica. Disfrutan de trabajar con equipos y resolver problemas complejos.</p>
        
        <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
        <p>El mercado laboral para ingenieros electrónicos en Bolivia es bastante amplio y con buenas perspectivas de crecimiento. Estos profesionales son demandados en diversos sectores, como:</p>
        <ul class="lista-oportunidades">
            <li>Industria manufacturera: Automatización de procesos, control de calidad.</li>
            <li>Telecomunicaciones: Diseño y mantenimiento de redes.</li>
            <li>Energía: Desarrollo de sistemas de control para generación y distribución de energía.</li>
            <li>Sector médico: Desarrollo de equipos médicos.</li>
        </ul>
        
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios de un ingeniero electrónico en Bolivia varían dependiendo de la experiencia, la empresa y el sector. Sin embargo, en general, son considerados buenos y con potencial de crecimiento. Además, las oportunidades de desarrollo profesional son amplias, ya que las empresas buscan constantemente profesionales capacitados para liderar proyectos y asumir nuevos desafíos.</p>
        
        <h4 class="subtitulo">Ingeniería Electrónica vs. Ingeniería en Autotrónica</h4>
        <p>Si bien ambas carreras comparten muchas similitudes, existen algunas diferencias clave:</p>
        <ul class="lista-comparacion">
            <li><strong>Enfoque:</strong> La ingeniería electrónica tiene un enfoque más amplio, mientras que la ingeniería en autotrónica se centra específicamente en la industria automotriz.</li>
            <li><strong>Conocimientos:</strong> Un ingeniero en autotrónica suele tener conocimientos más profundos en mecánica y sistemas automotrices, mientras que un ingeniero electrónico tiene un conocimiento más amplio de electrónica en general.</li>
        </ul>
    </div> `
    ,
    /*ingenieria industrial*/
        "Ingeniería Industrial": `<div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Industrial</h3>
    <p class="descripcion-carrera">La ingeniería industrial es una disciplina centrada en el diseño, mejora y optimización de sistemas integrados de personas, materiales, información, equipos y energía. Los ingenieros industriales buscan maximizar la eficiencia, productividad y calidad en la producción y prestación de servicios, abarcando desde la manufactura hasta la gestión de operaciones y logística.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero Industrial?</h4>
    <ul class="lista-habilidades">
        <li><strong>Optimización de Procesos:</strong> Los ingenieros industriales analizan y mejoran procesos para aumentar la eficiencia, reducir costos y mejorar la calidad. Esto incluye la implementación de métodos como la producción "lean" y la gestión de la cadena de suministro.</li>
        <li><strong>Gestión de Operaciones:</strong> Supervisan y coordinan las operaciones diarias en fábricas, plantas o empresas de servicios, asegurando que se alcancen los objetivos de producción, calidad y seguridad.</li>
        <li><strong>Diseño de Sistemas Productivos:</strong> Involucra el diseño de sistemas de producción eficientes que integren tecnología, maquinaria y recursos humanos para maximizar la productividad.</li>
        <li><strong>Control de Calidad:</strong> Desarrollo e implementación de sistemas de control de calidad para garantizar que los productos y servicios cumplan con las especificaciones y estándares establecidos.</li>
        <li><strong>Logística y Cadena de Suministro:</strong> Planificación y gestión del flujo de materiales, información y recursos a lo largo de la cadena de suministro, desde proveedores hasta clientes finales.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en matemáticas, física, administración y economía.</li>
        <li>Capacidad de análisis y resolución de problemas complejos.</li>
        <li>Habilidades de gestión de proyectos y trabajo en equipo.</li>
        <li>Conocimientos en sistemas de calidad y mejora continua.</li>
        <li>Capacidad para manejar y optimizar procesos productivos y logísticos.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros industriales suelen ser personas organizadas y analíticas, con una inclinación hacia la eficiencia y la mejora continua. Disfrutan trabajando con números y procesos, y tienen un enfoque práctico para resolver problemas y optimizar operaciones. Son buenos comunicadores y líderes de equipo, capaces de coordinar y dirigir grupos de trabajo diversos.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería industrial tiene una gran demanda en sectores como:</p>
    <ul class="lista-oportunidades">
        <li>Manufactura: Optimización de procesos productivos, mejora de la calidad y reducción de costos.</li>
        <li>Logística y distribución: Gestión eficiente de la cadena de suministro y optimización de la logística.</li>
        <li>Consultoría: Asesoramiento a empresas en la implementación de sistemas de mejora continua y reingeniería de procesos.</li>
        <li>Empresas de servicios: Mejora de la eficiencia operativa y gestión de la calidad en empresas de servicios, como bancos, hospitales, y empresas de telecomunicaciones.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería industrial en Bolivia son competitivos, con múltiples oportunidades de crecimiento en función de la experiencia y la especialización. Los ingenieros industriales pueden avanzar hacia roles de gestión y dirección, especializarse en áreas como la logística o el control de calidad, o dedicarse a la consultoría independiente.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Ingeniería de Producción:</strong> Se enfoca en la optimización de procesos productivos, incluyendo la planificación y control de la producción.</li>
        <li><strong>Ingeniería de Calidad:</strong> Especialización en sistemas de gestión de calidad y mejora continua, implementando normas como ISO 9001.</li>
        <li><strong>Logística y Cadena de Suministro:</strong> Enfocada en la optimización del flujo de materiales e información a lo largo de la cadena de suministro.</li>
        <li><strong>Ingeniería de Seguridad y Salud Ocupacional:</strong> Desarrollo de sistemas y procedimientos para garantizar la seguridad en el trabajo y el cumplimiento de normativas de salud ocupacional.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Industrial en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Versatilidad profesional:</strong> La ingeniería industrial ofrece una amplia gama de oportunidades en diferentes sectores, desde la manufactura hasta los servicios.</li>
        <li><strong>Demanda constante:</strong> La necesidad de mejorar la eficiencia y reducir costos en las empresas genera una demanda constante de ingenieros industriales.</li>
        <li><strong>Enfoque en la innovación:</strong> Los ingenieros industriales están en la vanguardia de la innovación, implementando tecnologías y métodos modernos para optimizar procesos.</li>
        <li><strong>Oportunidades de especialización:</strong> La posibilidad de especializarse en áreas clave como la logística, la calidad o la seguridad laboral permite un desarrollo profesional continuo.</li>
    </ul>
</div>
`,
    /*ingenieria mecanica y electromecanica*/
        "Ingeniería Mecánica y Electromecánica": `
        <div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Mecánica y Electromecánica</h3>
    <p class="descripcion-carrera">La ingeniería mecánica y electromecánica combina dos campos fundamentales de la ingeniería: la mecánica, que se enfoca en el diseño y fabricación de sistemas y máquinas, y la electromecánica, que integra componentes eléctricos y electrónicos en esos sistemas. Esta disciplina abarca desde la creación de maquinaria industrial hasta la automatización y control de sistemas complejos, permitiendo el desarrollo de soluciones innovadoras en múltiples industrias.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Mecánica y Electromecánica?</h4>
    <ul class="lista-habilidades">
        <li><strong>Diseño de Sistemas Mecánicos y Electromecánicos:</strong> Los ingenieros diseñan y desarrollan maquinaria y sistemas que combinan componentes mecánicos con elementos eléctricos y electrónicos. Esto incluye desde motores y generadores hasta sistemas automatizados.</li>
        <li><strong>Mantenimiento y Optimización de Equipos:</strong> Supervisan y realizan el mantenimiento de equipos industriales, asegurando su correcto funcionamiento y buscando constantemente formas de optimizar su rendimiento.</li>
        <li><strong>Automatización y Control:</strong> Integran tecnologías de automatización y control en sistemas mecánicos, mejorando la eficiencia y seguridad de los procesos industriales.</li>
        <li><strong>Gestión de Proyectos:</strong> Planificación y dirección de proyectos que involucran la implementación de sistemas mecánicos y electromecánicos, coordinando equipos de trabajo y gestionando recursos.</li>
        <li><strong>Investigación y Desarrollo:</strong> Exploran nuevas tecnologías y metodologías para mejorar el diseño y la funcionalidad de sistemas mecánicos y electromecánicos.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en física, matemáticas, mecánica y electrónica.</li>
        <li>Capacidad para diseñar y analizar sistemas complejos.</li>
        <li>Habilidades en programación y control de sistemas automatizados.</li>
        <li>Capacidad para resolver problemas técnicos y mejorar la eficiencia de los sistemas.</li>
        <li>Habilidades de gestión de proyectos y trabajo en equipo.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros en mecánica y electromecánica suelen ser personas con una mentalidad técnica y analítica, apasionadas por la tecnología y la innovación. Disfrutan del diseño y desarrollo de sistemas complejos, y tienen una inclinación hacia la resolución de problemas técnicos. Son organizados, detallistas y capaces de trabajar en equipos multidisciplinarios.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la combinación de ingeniería mecánica y electromecánica es altamente valorada en industrias como:</p>
    <ul class="lista-oportunidades">
        <li>Industria manufacturera: Diseño, mantenimiento y optimización de maquinaria industrial y sistemas de automatización.</li>
        <li>Sector energético: Desarrollo y mantenimiento de sistemas de generación de energía, como turbinas y generadores.</li>
        <li>Automatización industrial: Implementación de sistemas de control y automatización en plantas de producción.</li>
        <li>Empresas de servicios técnicos: Proporcionando soluciones integrales en el diseño, instalación y mantenimiento de sistemas electromecánicos.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios para ingenieros en mecánica y electromecánica en Bolivia son atractivos, con oportunidades de crecimiento en función de la experiencia y la especialización. Los profesionales en este campo pueden avanzar hacia roles de liderazgo en la gestión de plantas o proyectos, especializarse en áreas como la robótica o la automatización, o emprender en servicios de consultoría técnica.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Automatización y Control:</strong> Se enfoca en el diseño e implementación de sistemas de control automatizados en procesos industriales.</li>
        <li><strong>Mantenimiento Industrial:</strong> Especialización en técnicas avanzadas de mantenimiento predictivo y correctivo de equipos mecánicos y electromecánicos.</li>
        <li><strong>Energías Renovables:</strong> Integración de sistemas mecánicos y electromecánicos en la generación de energía limpia, como la energía eólica o solar.</li>
        <li><strong>Robótica y Mecatrónica:</strong> Desarrollo y control de robots y sistemas mecatrónicos para aplicaciones industriales y comerciales.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Mecánica y Electromecánica en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Amplia versatilidad:</strong> La combinación de conocimientos en mecánica y electromecánica abre puertas en múltiples sectores industriales.</li>
        <li><strong>Alta demanda:</strong> La necesidad de mantener y optimizar sistemas industriales asegura una demanda constante de profesionales en esta área.</li>
        <li><strong>Innovación tecnológica:</strong> Oportunidad de trabajar con tecnologías avanzadas en automatización, control y robótica.</li>
        <li><strong>Oportunidades de especialización:</strong> La posibilidad de especializarse en áreas emergentes y tecnológicamente avanzadas permite un desarrollo profesional continuo.</li>
    </ul>
</div>
`,
    /*ingenieria metalurgica y de materiales*/
        "Ingeniería Metalúrgica y de Materiales": `
        <div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Metalúrgica y de Materiales</h3>
    <p class="descripcion-carrera">La ingeniería metalúrgica y de materiales es una disciplina que se centra en el estudio, desarrollo y aplicación de metales y otros materiales, como cerámicos, polímeros y compuestos. Los ingenieros en este campo trabajan en la extracción y procesamiento de minerales, el diseño de nuevos materiales con propiedades específicas, y la mejora de procesos industriales para la fabricación de productos con mayor durabilidad, resistencia y eficiencia.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Metalurgia y Materiales?</h4>
    <ul class="lista-habilidades">
        <li><strong>Procesamiento de Minerales y Metales:</strong> Los ingenieros metalúrgicos diseñan y optimizan procesos para extraer y refinar metales a partir de minerales, garantizando la eficiencia y sostenibilidad de estos procesos.</li>
        <li><strong>Diseño y Desarrollo de Nuevos Materiales:</strong> Investigan y crean materiales con propiedades específicas, como resistencia al calor, a la corrosión, o alta conductividad eléctrica, para su aplicación en diversas industrias.</li>
        <li><strong>Análisis y Mejora de Materiales:</strong> Evaluación de materiales en condiciones extremas y desarrollo de tratamientos térmicos, químicos o mecánicos para mejorar sus propiedades.</li>
        <li><strong>Control de Calidad y Seguridad:</strong> Implementación de sistemas para garantizar que los materiales y productos cumplan con las normativas y estándares de calidad, seguridad y medio ambiente.</li>
        <li><strong>Investigación y Desarrollo:</strong> Trabajan en la innovación de procesos y materiales, explorando nuevas aplicaciones para metales, cerámicos, polímeros y materiales compuestos.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en química, física, matemáticas y ciencias de los materiales.</li>
        <li>Capacidad de análisis y resolución de problemas técnicos complejos.</li>
        <li>Habilidades en diseño y optimización de procesos industriales.</li>
        <li>Conocimientos en técnicas de caracterización y tratamiento de materiales.</li>
        <li>Habilidad para trabajar en proyectos de investigación y desarrollo.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros en metalurgia y materiales suelen ser personas curiosas y analíticas, con una fuerte inclinación hacia la ciencia y la tecnología. Disfrutan investigando y desarrollando nuevos materiales, y tienen una mentalidad innovadora para mejorar los procesos industriales. Suelen ser detallistas y meticulosos, con un enfoque riguroso en la calidad y la seguridad.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería metalúrgica y de materiales es fundamental en sectores como:</p>
    <ul class="lista-oportunidades">
        <li>Industria minera: Procesamiento de minerales y metales, optimización de procesos extractivos y tratamiento de residuos.</li>
        <li>Industria manufacturera: Diseño y producción de componentes y estructuras metálicas, cerámicas, y plásticas.</li>
        <li>Energía y construcción: Desarrollo y aplicación de materiales avanzados para infraestructuras, equipos energéticos y estructuras civiles.</li>
        <li>Investigación y desarrollo: Innovación en nuevos materiales y procesos para aplicaciones industriales y tecnológicas.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería metalúrgica y de materiales en Bolivia son competitivos, con amplias oportunidades de crecimiento profesional. Los ingenieros pueden avanzar hacia roles de liderazgo en plantas de procesamiento, especializarse en áreas de alta tecnología como materiales avanzados o nanotecnología, o dedicarse a la investigación y el desarrollo de nuevos materiales.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Metalurgia Extractiva:</strong> Se enfoca en la extracción y refinación de metales a partir de minerales, optimizando procesos para mejorar la eficiencia y sostenibilidad.</li>
        <li><strong>Ciencia de los Materiales:</strong> Estudio y desarrollo de nuevos materiales con propiedades avanzadas, como polímeros, cerámicas y compuestos.</li>
        <li><strong>Ingeniería de Corrosión:</strong> Especialización en la protección de materiales contra la degradación y la corrosión, aplicable en industrias como la petrolera y la construcción.</li>
        <li><strong>Nanomateriales:</strong> Investigación y desarrollo de materiales a escala nanométrica, con aplicaciones en tecnología, medicina y energía.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Metalúrgica y de Materiales en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Sector estratégico:</strong> La minería es una industria clave en Bolivia, lo que asegura una demanda constante de ingenieros especializados en metalurgia y materiales.</li>
        <li><strong>Innovación continua:</strong> Los ingenieros en este campo están a la vanguardia de la innovación, desarrollando nuevos materiales y procesos con aplicaciones en múltiples industrias.</li>
        <li><strong>Oportunidades de especialización:</strong> La posibilidad de especializarse en áreas emergentes como nanomateriales o ciencia de los materiales permite un desarrollo profesional continuo.</li>
        <li><strong>Impacto ambiental:</strong> La ingeniería metalúrgica y de materiales juega un papel crucial en el desarrollo de tecnologías sostenibles y en la minimización del impacto ambiental en la industria.</li>
    </ul>
</div>
`, 
    /*ingenieria ambiental*/
        "Ingeniería Ambiental": `<div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Ambiental</h3>
    <p class="descripcion-carrera">La ingeniería ambiental es una disciplina que combina principios de ciencias naturales, matemáticas e ingeniería para desarrollar soluciones sostenibles a problemas ambientales. Los ingenieros ambientales trabajan en la protección del medio ambiente, el manejo de recursos naturales, y la mitigación de los impactos negativos de las actividades humanas, buscando equilibrar el desarrollo económico con la preservación del entorno natural.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero Ambiental?</h4>
    <ul class="lista-habilidades">
        <li><strong>Gestión de Recursos Naturales:</strong> Los ingenieros ambientales diseñan y optimizan sistemas para la gestión eficiente y sostenible de recursos como el agua, el suelo y la energía.</li>
        <li><strong>Control de la Contaminación:</strong> Desarrollan y aplican tecnologías para reducir, controlar y prevenir la contaminación del aire, agua y suelo, garantizando el cumplimiento de normativas ambientales.</li>
        <li><strong>Evaluación de Impacto Ambiental:</strong> Realizan estudios para evaluar los impactos ambientales de proyectos industriales, urbanos y agrícolas, proponiendo medidas para minimizar los efectos negativos.</li>
        <li><strong>Gestión de Residuos:</strong> Diseñan sistemas para la recolección, tratamiento y disposición de residuos sólidos, líquidos y peligrosos, promoviendo prácticas de reciclaje y reutilización.</li>
        <li><strong>Desarrollo de Energías Renovables:</strong> Participan en la planificación y desarrollo de proyectos de energías limpias, como la solar, eólica o biomasa, para reducir la dependencia de combustibles fósiles y minimizar las emisiones de gases de efecto invernadero.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en ciencias ambientales, química, biología y matemáticas.</li>
        <li>Capacidad para diseñar y aplicar tecnologías de control ambiental.</li>
        <li>Habilidades en la evaluación de impacto ambiental y gestión de proyectos.</li>
        <li>Conocimientos en legislación ambiental y normativas internacionales.</li>
        <li>Habilidad para resolver problemas complejos y proponer soluciones sostenibles.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros ambientales suelen ser personas comprometidas con la protección del medio ambiente y el desarrollo sostenible. Tienen una mentalidad analítica y una fuerte inclinación hacia las ciencias, combinada con una pasión por encontrar soluciones prácticas a problemas ambientales. Son organizados, detallistas y capaces de trabajar en equipos multidisciplinarios.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería ambiental es crucial en sectores como:</p>
    <ul class="lista-oportunidades">
        <li>Industria minera: Evaluación y mitigación de impactos ambientales, manejo de residuos mineros y tratamiento de aguas.</li>
        <li>Gestión de recursos hídricos: Desarrollo de proyectos para la gestión sostenible del agua, incluyendo el tratamiento y distribución.</li>
        <li>Energías renovables: Implementación de proyectos de energías limpias para reducir el impacto ambiental y promover la sostenibilidad.</li>
        <li>Consultoría ambiental: Asesoramiento a empresas y gobiernos en el cumplimiento de normativas ambientales y en la implementación de prácticas sostenibles.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería ambiental en Bolivia son competitivos, con oportunidades de crecimiento en función de la experiencia y la especialización. Los ingenieros ambientales pueden avanzar hacia roles de gestión en empresas o instituciones públicas, especializarse en áreas como la gestión de recursos hídricos o la evaluación de impacto ambiental, o dedicarse a la consultoría independiente.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Gestión de Residuos:</strong> Se enfoca en el diseño de sistemas de manejo de residuos sólidos, líquidos y peligrosos, promoviendo prácticas de reciclaje y minimización de desechos.</li>
        <li><strong>Calidad del Aire:</strong> Especialización en el monitoreo y control de la contaminación atmosférica, desarrollando tecnologías para reducir emisiones contaminantes.</li>
        <li><strong>Hidrología y Gestión de Recursos Hídricos:</strong> Estudio y manejo de los recursos hídricos, incluyendo la gestión de cuencas hidrográficas y el tratamiento de aguas residuales.</li>
        <li><strong>Energías Renovables:</strong> Desarrollo e implementación de proyectos de energías limpias, como solar, eólica y biomasa, para promover la sostenibilidad energética.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Ambiental en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Relevancia social:</strong> La protección del medio ambiente es un tema crítico en Bolivia, con una demanda creciente de profesionales capaces de abordar problemas ambientales.</li>
        <li><strong>Oportunidades en sectores clave:</strong> La minería, la gestión del agua y las energías renovables son áreas estratégicas donde los ingenieros ambientales pueden hacer una gran diferencia.</li>
        <li><strong>Contribución a la sostenibilidad:</strong> Los ingenieros ambientales están en la vanguardia del desarrollo sostenible, trabajando en soluciones que equilibran el crecimiento económico y la protección del medio ambiente.</li>
        <li><strong>Diversidad de especializaciones:</strong> La ingeniería ambiental ofrece múltiples áreas de especialización, permitiendo a los profesionales elegir el campo que más les apasione y donde puedan tener un mayor impacto.</li>
    </ul>
</div>
`,
        /*ingenieria electrica*/
        "Ingeniería Eléctrica": `<div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Eléctrica</h3>
    <p class="descripcion-carrera">La ingeniería eléctrica es una disciplina que abarca el estudio y la aplicación de la electricidad, la electrónica y el electromagnetismo para desarrollar soluciones tecnológicas que impulsen el progreso de la sociedad. Los ingenieros eléctricos trabajan en una amplia gama de sectores, diseñando y optimizando sistemas eléctricos y electrónicos que son fundamentales para la infraestructura moderna, desde redes de energía hasta dispositivos de comunicación y sistemas automatizados.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero Eléctrico?</h4>
    <ul class="lista-habilidades">
        <li><strong>Diseño de Sistemas Eléctricos:</strong> Los ingenieros eléctricos diseñan y desarrollan sistemas eléctricos y electrónicos, incluyendo circuitos, dispositivos y equipos que operan en una variedad de aplicaciones industriales, comerciales y residenciales.</li>
        <li><strong>Generación y Distribución de Energía:</strong> Participan en la planificación, operación y mantenimiento de sistemas de generación y distribución de energía eléctrica, asegurando un suministro eficiente y seguro.</li>
        <li><strong>Automatización y Control:</strong> Desarrollan sistemas de control y automatización que permiten operar procesos industriales con precisión y eficiencia, integrando tecnología de sensores, actuadores y controladores.</li>
        <li><strong>Telecomunicaciones:</strong> Trabajan en el diseño y mejora de sistemas de comunicación, incluyendo redes de transmisión de datos, telecomunicaciones móviles y sistemas de radiofrecuencia.</li>
        <li><strong>Energías Renovables:</strong> Contribuyen al desarrollo de tecnologías que facilitan la integración de fuentes de energía renovable, como la solar y la eólica, en la red eléctrica, promoviendo la sostenibilidad energética.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos sólidos en física, matemáticas y circuitos eléctricos.</li>
        <li>Capacidad para diseñar y analizar sistemas eléctricos y electrónicos complejos.</li>
        <li>Habilidades en programación y control de sistemas automatizados.</li>
        <li>Conocimientos en normativas de seguridad eléctrica y estándares internacionales.</li>
        <li>Habilidad para resolver problemas técnicos y optimizar el rendimiento de sistemas eléctricos.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros eléctricos suelen ser personas con una fuerte orientación técnica y una mentalidad analítica. Disfrutan trabajando en problemas complejos que requieren soluciones innovadoras y prácticas. Suelen ser detallistas, organizados, y capaces de trabajar tanto de forma independiente como en equipos multidisciplinarios. Además, son curiosos y están siempre al tanto de los avances tecnológicos en su campo.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería eléctrica es vital en sectores como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Generación y distribución de energía:</strong> Participación en proyectos de expansión y modernización de la infraestructura eléctrica del país.</li>
        <li><strong>Industria manufacturera:</strong> Diseño e implementación de sistemas de automatización y control en procesos de producción.</li>
        <li><strong>Telecomunicaciones:</strong> Desarrollo y optimización de redes de comunicación, incluyendo la infraestructura para telecomunicaciones móviles y de datos.</li>
        <li><strong>Energías renovables:</strong> Integración de tecnologías de energía renovable en la red eléctrica nacional, contribuyendo a la sostenibilidad energética.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería eléctrica en Bolivia son competitivos y pueden variar según la especialización y experiencia. Los ingenieros eléctricos tienen la oportunidad de avanzar hacia roles de liderazgo en empresas energéticas, industriales o de telecomunicaciones, o de especializarse en áreas emergentes como las energías renovables o la automatización industrial. También pueden dedicarse a la consultoría independiente, ofreciendo servicios especializados en diseño y optimización de sistemas eléctricos.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Sistemas de Potencia:</strong> Se enfoca en el diseño, operación y mantenimiento de redes de generación, transmisión y distribución de energía eléctrica.</li>
        <li><strong>Electrónica y Microelectrónica:</strong> Estudio y desarrollo de circuitos electrónicos y dispositivos semiconductores, desde microprocesadores hasta sistemas integrados.</li>
        <li><strong>Automatización y Control:</strong> Especialización en el diseño y programación de sistemas de control y automatización para procesos industriales.</li>
        <li><strong>Telecomunicaciones:</strong> Desarrollo y optimización de sistemas de comunicación, incluyendo redes móviles, fibra óptica y sistemas de transmisión de datos.</li>
        <li><strong>Energías Renovables:</strong> Implementación y gestión de proyectos que integran fuentes de energía limpia en la red eléctrica, promoviendo la sostenibilidad.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Eléctrica en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Demanda constante:</strong> La infraestructura eléctrica y las telecomunicaciones son sectores en continuo crecimiento, con una necesidad constante de profesionales capacitados.</li>
        <li><strong>Impacto en el desarrollo:</strong> Los ingenieros eléctricos juegan un papel crucial en la modernización del país, desde la electrificación rural hasta la implementación de nuevas tecnologías.</li>
        <li><strong>Contribución a la sostenibilidad:</strong> Con el auge de las energías renovables, los ingenieros eléctricos están a la vanguardia de la transición hacia un sistema energético más sostenible.</li>
        <li><strong>Diversidad de especializaciones:</strong> La ingeniería eléctrica ofrece múltiples áreas de especialización, permitiendo a los profesionales elegir un campo que les apasione y donde puedan tener un impacto significativo.</li>
    </ul>
</div>
`,
        /*ingenieria en produccion empresarial*/
        "Ingeniería en Producción Empresarial": `<div class="carrera">
    <h3 class="titulo-carrera">Ingeniería en Producción Empresarial</h3>
    <p class="descripcion-carrera">La ingeniería en producción empresarial es una disciplina que combina los principios de la ingeniería industrial con los conceptos clave de la administración y la gestión empresarial. Su enfoque principal es optimizar los procesos de producción y las operaciones dentro de una empresa para mejorar la eficiencia, reducir costos, y aumentar la productividad y la calidad de los productos o servicios. Los ingenieros en producción empresarial juegan un papel clave en la toma de decisiones estratégicas que afectan la competitividad y sostenibilidad de las organizaciones.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Producción Empresarial?</h4>
    <ul class="lista-habilidades">
        <li><strong>Optimización de Procesos Productivos:</strong> Los ingenieros en producción empresarial analizan, diseñan y mejoran los procesos de producción para maximizar la eficiencia, minimizar desperdicios y asegurar la calidad del producto final.</li>
        <li><strong>Gestión de Operaciones:</strong> Supervisan y gestionan las operaciones diarias de una empresa, asegurando que todos los recursos, incluidos materiales, personal y maquinaria, se utilicen de manera efectiva.</li>
        <li><strong>Planificación y Control de la Producción:</strong> Desarrollan planes de producción que alinean la capacidad de la empresa con la demanda del mercado, controlando el flujo de trabajo, inventarios y tiempos de entrega.</li>
        <li><strong>Implementación de Tecnologías de Producción:</strong> Integran tecnologías avanzadas como automatización, robótica y software de gestión de operaciones para mejorar la productividad y reducir los costos.</li>
        <li><strong>Gestión de la Calidad:</strong> Desarrollan e implementan sistemas de gestión de calidad que aseguran que los productos y servicios cumplan con los estándares establecidos y las expectativas del cliente.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos en ingeniería industrial, gestión de operaciones y administración de empresas.</li>
        <li>Capacidad para analizar y optimizar procesos productivos y sistemas empresariales.</li>
        <li>Habilidades en el uso de tecnologías de la información aplicadas a la producción, como software ERP.</li>
        <li>Capacidad de liderazgo y toma de decisiones estratégicas en entornos empresariales.</li>
        <li>Conocimientos en gestión de calidad, logística y cadena de suministro.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros en producción empresarial suelen ser personas orientadas al detalle y altamente organizadas, con una mentalidad analítica que les permite identificar problemas y desarrollar soluciones efectivas. Son líderes naturales, capaces de trabajar bajo presión y tomar decisiones estratégicas que beneficien a la empresa. Además, tienen un fuerte enfoque en la eficiencia y la calidad, y son capaces de comunicarse eficazmente con diferentes niveles dentro de una organización.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería en producción empresarial es esencial en sectores como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Manufactura e Industria:</strong> Optimización de líneas de producción, gestión de calidad y mejora continua en procesos industriales.</li>
        <li><strong>Sector agroindustrial:</strong> Gestión de procesos productivos en la transformación y comercialización de productos agrícolas.</li>
        <li><strong>Empresas de servicios:</strong> Optimización de operaciones y procesos en empresas de logística, telecomunicaciones, y servicios financieros.</li>
        <li><strong>Consultoría en gestión empresarial:</strong> Asesoramiento a empresas para mejorar sus operaciones, reducir costos y aumentar la competitividad.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería en producción empresarial en Bolivia varían según la industria y la experiencia, pero en general, son competitivos. Los ingenieros en este campo pueden avanzar hacia roles de gestión y dirección en áreas como operaciones, producción, logística o calidad. Además, pueden especializarse en sectores específicos como la manufactura, la agroindustria o la consultoría, o bien dedicarse a la consultoría independiente, ayudando a empresas a mejorar sus procesos y operaciones.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Gestión de la Calidad:</strong> Enfoque en la implementación de sistemas de gestión de calidad y mejora continua para garantizar productos y servicios de alta calidad.</li>
        <li><strong>Logística y Cadena de Suministro:</strong> Especialización en la optimización de la cadena de suministro, incluyendo el transporte, almacenamiento y distribución de productos.</li>
        <li><strong>Automatización de Procesos:</strong> Implementación de tecnologías y sistemas automatizados para mejorar la eficiencia en los procesos productivos.</li>
        <li><strong>Gestión de Proyectos Industriales:</strong> Planificación y ejecución de proyectos relacionados con la expansión, mejora o implementación de nuevas líneas de producción.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería en Producción Empresarial en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Demanda creciente:</strong> La necesidad de optimizar los procesos productivos y mejorar la competitividad empresarial está en constante crecimiento en Bolivia.</li>
        <li><strong>Contribución al desarrollo económico:</strong> Los ingenieros en producción empresarial están en la vanguardia del desarrollo industrial y económico del país, mejorando la eficiencia y calidad en diversos sectores.</li>
        <li><strong>Diversidad de oportunidades laborales:</strong> Esta carrera ofrece una amplia gama de oportunidades en diferentes industrias, desde la manufactura hasta la consultoría.</li>
        <li><strong>Enfoque integral:</strong> Combina conocimientos de ingeniería con administración empresarial, permitiendo a los profesionales abordar problemas desde una perspectiva técnica y estratégica.</li>
    </ul>
</div>
`,
        /*ingenieria autotronica*/
        "Ingeniería Autotrónica": `
            <div class="carrera">
            <h3 class="titulo-carrera">Ingeniería en Autotrónica</h3>
            <p class="descripcion-carrera">La ingeniería en autotrónica combina la ingeniería mecánica, eléctrica y electrónica para diseñar, desarrollar y mantener sistemas automotrices inteligentes. Un ingeniero en autotrónica trabaja en la integración de componentes electrónicos y software en vehículos, creando sistemas más eficientes, seguros y conectados.</p>
    
            <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Autotrónica?</h4>
            <ul class="lista-habilidades">
                <li><strong>Diseño de sistemas electrónicos:</strong> Desarrollo de sistemas de control de motores, sistemas de seguridad, sistemas de infoentretenimiento y otros sistemas electrónicos para vehículos.</li>
                <li><strong>Programación de software:</strong> Creación de software para controlar los sistemas electrónicos y permitir la interacción con el usuario.</li>
                <li><strong>Diagnóstico y reparación:</strong> Identificación y solución de problemas en sistemas electrónicos de vehículos.</li>
                <li><strong>Investigación y desarrollo:</strong> Exploración de nuevas tecnologías y aplicaciones para la industria automotriz.</li>
            </ul>
    
            <h4 class="subtitulo">Habilidades Necesarias</h4>
            <ul class="lista-habilidades">
                <li>Conocimientos sólidos en electrónica, mecánica y programación.</li>
                <li>Capacidad de análisis y resolución de problemas.</li>
                <li>Habilidades de comunicación y trabajo en equipo.</li>
                <li>Creatividad e innovación.</li>
                <li>Interés por la tecnología y la industria automotriz.</li>
            </ul>
    
            <h4 class="subtitulo">Personalidad Adecuada</h4>
            <p>Los ingenieros en autotrónica suelen ser personas apasionadas por la tecnología, con una mente analítica y un interés por la mecánica. Disfrutan de trabajar en equipo y resolver problemas complejos.</p>
    
            <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
            <p>En Bolivia, el mercado laboral para ingenieros en autotrónica está en crecimiento, especialmente con la creciente demanda de vehículos eléctricos y autónomos. Estos profesionales pueden encontrar oportunidades laborales en:</p>
            <ul class="lista-oportunidades">
                <li>Empresas automotrices: Desarrollo de nuevos modelos de vehículos, mantenimiento y reparación de vehículos.</li>
                <li>Empresas de tecnología: Desarrollo de software y hardware para la industria automotriz.</li>
                <li>Centros de investigación: Investigación en tecnologías automotrices.</li>
                <li>Talleres especializados: Diagnóstico y reparación de vehículos.</li>
            </ul>
    
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios de un ingeniero en autotrónica en Bolivia suelen ser competitivos y ofrecen buenas oportunidades de crecimiento profesional. A medida que adquieren experiencia, pueden ascender a puestos de liderazgo o especializarse en áreas específicas de la autotrónica.</p>
    
        <h4 class="subtitulo">¿Por qué estudiar Ingeniería en Autotrónica en Bolivia?</h4>
        <ul class="lista-razones">
            <li>Demanda creciente: El sector automotriz en Bolivia está en constante crecimiento, lo que genera una alta demanda de profesionales en esta área.</li>
            <li>Innovación: La ingeniería en autotrónica es un campo en constante evolución, lo que brinda la oportunidad de trabajar en proyectos innovadores.</li>
            <li>Desarrollo profesional: Existen numerosas oportunidades para especializarse y crecer profesionalmente en esta área.</li>
        </ul>
        </div>`,
        /*ingenieria textil*/
        "Ingeniería Textil": `<div class="carrera">
    <h3 class="titulo-carrera">Ingeniería Textil</h3>
    <p class="descripcion-carrera">La ingeniería textil es una disciplina que se enfoca en el estudio, diseño y optimización de procesos relacionados con la producción y manufactura de productos textiles. Incluye la selección de materiales, el desarrollo de nuevos tejidos, y la mejora de procesos industriales para la producción eficiente y sostenible de textiles. Los ingenieros textiles trabajan en diversas áreas que van desde la investigación y desarrollo de nuevos materiales hasta la gestión de la producción en fábricas textiles.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Ingeniero Textil?</h4>
    <ul class="lista-habilidades">
        <li><strong>Desarrollo de Nuevos Materiales:</strong> Los ingenieros textiles investigan y desarrollan nuevas fibras y tejidos, trabajando con materiales naturales, sintéticos y compuestos para crear productos innovadores que cumplan con requisitos específicos, como resistencia, durabilidad o confort.</li>
        <li><strong>Procesos de Manufactura Textil:</strong> Supervisan y optimizan los procesos de fabricación textil, desde el hilado y tejido hasta el acabado, asegurando que la producción sea eficiente, de alta calidad, y cumpla con los estándares de la industria.</li>
        <li><strong>Control de Calidad:</strong> Implementan sistemas de control de calidad para asegurar que los productos textiles cumplan con las especificaciones técnicas y los estándares de durabilidad, resistencia al desgaste, y confort.</li>
        <li><strong>Gestión de la Producción:</strong> Se encargan de la planificación y organización de la producción en plantas textiles, optimizando el uso de recursos como materiales, mano de obra y maquinaria, para maximizar la eficiencia y minimizar el desperdicio.</li>
        <li><strong>Sostenibilidad y Ecodiseño:</strong> Trabajan en la implementación de prácticas sostenibles en la producción textil, incluyendo la reducción del consumo de agua, energía y químicos, así como en el desarrollo de productos textiles que tengan un menor impacto ambiental.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos en química, física y ciencia de los materiales aplicados al textil.</li>
        <li>Capacidad para diseñar y optimizar procesos de manufactura textil.</li>
        <li>Habilidades en el control de calidad y gestión de la producción.</li>
        <li>Conocimientos en sostenibilidad y ecodiseño en la industria textil.</li>
        <li>Capacidad para innovar en el desarrollo de nuevos materiales y productos textiles.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los ingenieros textiles suelen ser personas creativas y detallistas, con una pasión por los materiales y el diseño. Tienen una mentalidad analítica y son capaces de abordar problemas técnicos y de producción con soluciones innovadoras. Son organizados, capaces de trabajar en equipos multidisciplinarios, y tienen un fuerte compromiso con la calidad y la sostenibilidad.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, la ingeniería textil tiene un papel importante en sectores como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Industria de la moda:</strong> Desarrollo y producción de textiles para ropa, accesorios y calzado, incluyendo el diseño de nuevos tejidos y la optimización de procesos de manufactura.</li>
        <li><strong>Textiles técnicos y funcionales:</strong> Producción de textiles especializados para aplicaciones industriales, médicas, automotrices, y deportivas, que requieren materiales con propiedades específicas.</li>
        <li><strong>Artesanía y productos tradicionales:</strong> Innovación en la producción de textiles tradicionales, combinando técnicas artesanales con procesos industriales para mejorar la calidad y competitividad en mercados globales.</li>
        <li><strong>Sostenibilidad en la producción textil:</strong> Implementación de prácticas sostenibles en la producción textil, incluyendo el uso de materiales reciclados y la minimización de residuos y consumo de agua.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en ingeniería textil en Bolivia varían según la industria y la experiencia, pero en general, son competitivos dentro del sector manufacturero. Los ingenieros textiles pueden avanzar hacia roles de gestión en fábricas y plantas de producción, especializarse en áreas como el desarrollo de nuevos materiales o la sostenibilidad, o dedicarse a la consultoría independiente, ayudando a empresas a mejorar sus procesos y productos.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Desarrollo de Nuevos Materiales:</strong> Enfoque en la investigación y creación de nuevas fibras y tejidos con propiedades avanzadas, como textiles inteligentes o materiales biodegradables.</li>
        <li><strong>Sostenibilidad Textil:</strong> Especialización en la implementación de prácticas sostenibles en la producción textil, incluyendo la reducción del impacto ambiental y la mejora de la eficiencia energética.</li>
        <li><strong>Textiles Técnicos:</strong> Producción de textiles para aplicaciones específicas que requieren propiedades técnicas avanzadas, como resistencia al fuego, impermeabilidad, o protección UV.</li>
        <li><strong>Gestión de la Producción Textil:</strong> Optimización de los procesos productivos en plantas textiles, enfocándose en la eficiencia, la calidad y la reducción de costos.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Ingeniería Textil en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Industria en crecimiento:</strong> La industria textil en Bolivia, que abarca desde la moda hasta los textiles técnicos, está en constante desarrollo, ofreciendo oportunidades para la innovación y la mejora de procesos.</li>
        <li><strong>Contribución a la sostenibilidad:</strong> Los ingenieros textiles pueden desempeñar un papel clave en la transición hacia una producción textil más sostenible, implementando prácticas que minimicen el impacto ambiental.</li>
        <li><strong>Diversidad de aplicaciones:</strong> La ingeniería textil ofrece una amplia gama de aplicaciones, desde la moda hasta la tecnología, lo que permite a los profesionales especializarse en áreas que les apasionen.</li>
        <li><strong>Revalorización de técnicas tradicionales:</strong> Los ingenieros textiles pueden contribuir a la modernización y revalorización de las técnicas artesanales, mejorando la competitividad de productos tradicionales en mercados globales.</li>
    </ul>
</div>
`,
        /*ingenieria de sistemas*/
        "Ingeniería de Sistemas": `
            <div class="carrera">
                <h3 class="titulo-carrera">Ingeniería de Sistemas</h3>
                <p class="descripcion-carrera">La ingeniería de sistemas es una disciplina que se enfoca en el diseño, desarrollo, implementación y mantenimiento de sistemas informáticos...</p>
                <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Sistemas?</h4>
                <ul class="lista-habilidades">
                    <li><strong>Análisis y diseño:</strong> Estudiar los procesos de una organización para identificar oportunidades de mejora y diseñar sistemas informáticos que las solucionen.</li>
            <h3>Ingeniería de Sistemas</h3>
            <p>La ingeniería de sistemas es una disciplina que se enfoca en el diseño, desarrollo, implementación y mantenimiento de sistemas informáticos. Un ingeniero en sistemas es un arquitecto de soluciones tecnológicas, capaz de transformar las necesidades de una organización en sistemas eficientes y efectivos.</p>
            <h4>¿Qué implica ser un Ingeniero en Sistemas?</h4>
            <ul>
                <li><strong>Análisis y diseño:</strong> Estudiar los procesos de una organización para identificar oportunidades de mejora y diseñar sistemas informáticos que las solucionen.</li>
                <li><strong>Desarrollo de software:</strong> Crear aplicaciones, sitios web y otros productos digitales utilizando lenguajes de programación.</li>
                <li><strong>Gestión de proyectos:</strong> Coordinar equipos de trabajo, establecer plazos y asegurar que los proyectos se entreguen a tiempo y dentro del presupuesto.</li>
                <li><strong>Implementación y mantenimiento:</strong> Instalar y configurar sistemas, además de realizar actualizaciones y solucionar problemas técnicos.</li>
            </ul>
            <h4>Habilidades Necesarias</h4>
            <ul>
                <li>Pensamiento lógico y analítico</li>
                <li>Creatividad</li>
                <li>Trabajo en equipo</li>
                <li>Comunicación efectiva</li>
                <li>Adaptabilidad</li>
            </ul>
            <h4>Personalidad Adecuada</h4>
            <p>Los ingenieros en sistemas suelen ser personas curiosas, apasionadas por la tecnología, con una mente lógica y analítica. Disfrutan de resolver problemas, trabajar en proyectos desafiantes y aprender nuevas habilidades.</p>
            <h4>Mercado Laboral en Bolivia</h4>
            <p>El mercado laboral para ingenieros en sistemas en Bolivia es bastante amplio y con buenas perspectivas de crecimiento. Estos profesionales son demandados en diversos sectores, como:</p>
            <ul>
                <li>Empresas de tecnología</li>
                <li>Bancos y financieras</li>
                <li>Telecomunicaciones</li>
                <li>Gobierno</li>
                <li>Sector privado</li>
            </ul>
            <h4>Salarios y Oportunidades de Crecimiento</h4>
            <p>Los salarios de un ingeniero en sistemas en Bolivia varían dependiendo de la experiencia, la empresa y el sector. Sin embargo, en general, son considerados buenos y con potencial de crecimiento. Además, las oportunidades de desarrollo profesional son amplias.</p>
            <h4>¿Qué más puedes estudiar?</h4>
            <ul>
                <li>Ingeniería en Software</li>
                <li>Ingeniería en Computación</li>
                <li>Sistemas de Información</li>
            </ul>
        `
    };
    return descripciones[carrera] || "Esta carrera se enfoca en áreas específicas de estudio y práctica profesional.";
}
let respuestasCapturadas = {};

function capturarRespuesta(pregunta, valor, descripcion) {
    respuestasCapturadas[pregunta] = { valor: valor, descripcion: descripcion };
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

    // Inicializa la afinidad para cada carrera
    const afinidad = {
        "Ingeniería Civil": 0,
        "Ingeniería Petrolera": 0,
        "Ingeniería Química": 0,
        "Ingeniería Electrónica": 0,
        "Ingeniería Industrial": 0,
        "Ingeniería Mecánica y Electromecánica": 0,
        "Ingeniería Metalúrgica y de Materiales": 0,
        "Ingeniería Ambiental": 0,
        "Ingeniería Eléctrica": 0,
        "Ingeniería en Producción Empresarial": 0,
        "Ingeniería Autotrónica": 0,
        "Ingeniería Textil": 0,
        "Ingeniería de Sistemas": 0
    };

    // Procesa cada respuesta seleccionada
    respuestas.forEach(respuesta => {
        const valorRespuesta = parseInt(respuesta.value);
        const nombrePregunta = respuesta.name;

        // Captura de respuestas seleccionadas
        const descripcion = respuesta.nextElementSibling.innerText; // Texto de la opción seleccionada
        capturarRespuesta(nombrePregunta, valorRespuesta, descripcion);

        // Lógica de asignación para incluir más carreras
        if (nombrePregunta === 'pregunta1' || nombrePregunta === 'pregunta2') {
            afinidad["Ingeniería Civil"] += valorRespuesta;
            afinidad["Ingeniería Química"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta3' || nombrePregunta === 'pregunta4') {
            afinidad["Ingeniería Electrónica"] += valorRespuesta;
            afinidad["Ingeniería Industrial"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta5' || nombrePregunta === 'pregunta6') {
            afinidad["Ingeniería Mecánica y Electromecánica"] += valorRespuesta;
            afinidad["Ingeniería Metalúrgica y de Materiales"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta7' || nombrePregunta === 'pregunta8') {
            afinidad["Ingeniería Ambiental"] += valorRespuesta;
            afinidad["Ingeniería Eléctrica"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta9' || nombrePregunta === 'pregunta10') {
            afinidad["Ingeniería en Producción Empresarial"] += valorRespuesta;
            afinidad["Ingeniería Autotrónica"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta11' || nombrePregunta === 'pregunta12') {
            afinidad["Ingeniería Textil"] += valorRespuesta;
            afinidad["Ingeniería de Sistemas"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta13' || nombrePregunta === 'pregunta14') {
            afinidad["Ingeniería Civil"] += valorRespuesta;
            afinidad["Ingeniería Petrolera"] += valorRespuesta;
        }

        if (nombrePregunta === 'pregunta15') {
            afinidad["Ingeniería Electrónica"] += valorRespuesta;
            afinidad["Ingeniería Química"] += valorRespuesta;
        }
    });

    // Ordena las carreras según la afinidad calculada
    const carrerasOrdenadas = Object.entries(afinidad)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(entry => entry[0]);

    // Muestra el resultado y el gráfico de afinidades
    mostrarResultado(carrerasOrdenadas, afinidad);

    // Genera el PDF con las respuestas seleccionadas
    generarPDF(carrerasOrdenadas, afinidad);
}

// Función para generar y descargar el PDF
function generarPDF(carreras, afinidad) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Recuperar los datos del usuario desde el localStorage
    const nombre = localStorage.getItem("nombreUsuario");
    const apellido = localStorage.getItem("apellidousuario");
    const edad = localStorage.getItem("edadusuario");
    const centro = localStorage.getItem("centrousuario");
    const curso = localStorage.getItem("cursousuario");

    // Título del PDF
    doc.setFontSize(18);
    doc.text("Resultados de Yo Estudio", 10, 20); // Título principal

    // Añadir los datos del usuario
    doc.setFontSize(14);
    let y = 30;
    doc.text("Datos del Usuario:", 10, y);
    y += 10;
    doc.text(`Nombre: ${nombre} ${apellido}`, 10, y);
    y += 10;
    doc.text(`Edad: ${edad}`, 10, y);
    y += 10;
    doc.text(`Centro Educativo: ${centro}`, 10, y);
    y += 10;
    doc.text(`Curso: ${curso}`, 10, y);

    // Añadir espacio antes de las carreras sugeridas
    y += 20;
    doc.text("Carreras Sugeridas:", 10, y);
    y += 10;

    // Listar las carreras sugeridas
    carreras.forEach(carrera => {
        doc.text(`- ${carrera}`, 10, y);
        y += 10;
    });

    // Añadir más espacio para el gráfico
    y += 20;

    // Capturar el gráfico de afinidad
    const canvas = document.getElementById('afinidadChart');

    if (canvas) {
        // Esperar a que el gráfico esté completamente renderizado antes de convertirlo
        setTimeout(() => {
            const imgData = canvas.toDataURL('image/png'); // Convertir el gráfico a imagen PNG
            
            // Ajustar la posición del gráfico en el PDF
            doc.addImage(imgData, 'PNG', 10, y, 90, 40); // Añadir el gráfico al PDF

            // Descargar el archivo PDF
            doc.save("resultados_test.pdf");
        }, 1000); // Espera 1 segundo para asegurarse de que el gráfico está renderizado completamente
    } else {
        doc.text("No se pudo generar el gráfico de afinidad.", 10, y);
        doc.save("resultados_test.pdf");
    }
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
