const carreras = {
    "Economía": ["intereses", "habilidades", "personalidad"],
    "Contaduría Pública": ["intereses", "habilidades", "personalidad"],
    "Administración de Empresas": ["intereses", "habilidades", "personalidad"],
    "Gestión Turística y Hotelera": ["intereses", "habilidades", "personalidad"],
    "Comercio Internacional": ["intereses", "habilidades", "personalidad"]
};

const impactoRespuestas = {
    '1': [
        "Economía", "Comercio Internacional", "Administración de Empresas"
    ],
    '2': [
        "Gestión Turística y Hotelera", "Contaduria Pública", "Economía"
    ],
    '3': [
        "Comercio Internacional", "Gestión Turística y Hotelera", "Administración de Empresas"
    ]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Economía": `<div class="carrera">
    <h3 class="titulo-carrera">Economía</h3>
    <p class="descripcion-carrera">La Economía es una disciplina que se enfoca en el estudio de la producción, distribución y consumo de bienes y servicios. Los economistas analizan cómo los individuos, empresas y gobiernos toman decisiones sobre la asignación de recursos, y cómo estas decisiones afectan la economía en general. Esta carrera combina un enfoque cuantitativo con el análisis teórico y práctico para entender y resolver problemas económicos, tanto a nivel microeconómico (individual) como macroeconómico (global).</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Economista?</h4>
    <ul class="lista-habilidades">
        <li><strong>Análisis Económico:</strong> Estudio de cómo los recursos limitados son asignados entre las necesidades y deseos ilimitados de la sociedad. Incluye el análisis de mercados, la determinación de precios, y la evaluación de políticas públicas.</li>
        <li><strong>Modelización y Teoría Económica:</strong> Desarrollo y aplicación de modelos matemáticos y teóricos para entender el comportamiento económico y prever el impacto de decisiones económicas a nivel individual, empresarial y gubernamental.</li>
        <li><strong>Investigación y Datos Económicos:</strong> Recopilación y análisis de datos económicos para estudiar tendencias, evaluar políticas y hacer proyecciones. Incluye el uso de herramientas estadísticas y econométricas para interpretar datos y formular recomendaciones.</li>
        <li><strong>Política Económica:</strong> Asesoramiento y diseño de políticas económicas para gobiernos y organizaciones, buscando mejorar el bienestar económico, controlar la inflación, fomentar el empleo y el crecimiento económico.</li>
        <li><strong>Economía Internacional:</strong> Estudio de las relaciones económicas entre países, incluyendo comercio internacional, finanzas globales, y el impacto de la globalización en las economías locales.</li>
        <li><strong>Desarrollo Económico:</strong> Evaluación y diseño de estrategias para el desarrollo económico sostenible en países y regiones, abordando problemas como la pobreza, el desempleo, y la desigualdad.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Habilidades analíticas y cuantitativas para interpretar datos económicos, construir modelos y formular soluciones a problemas económicos.</li>
        <li>Conocimientos en teoría económica para entender y aplicar conceptos fundamentales en el análisis de políticas y decisiones económicas.</li>
        <li>Capacidad para realizar investigaciones y analizar tendencias económicas a través de datos y evidencia empírica.</li>
        <li>Habilidades de comunicación y presentación para explicar conceptos económicos complejos a audiencias no especializadas.</li>
        <li>Conocimiento de la economía global y capacidad para entender cómo las economías están interconectadas a nivel internacional.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los economistas suelen ser personas analíticas, curiosas y con una fuerte inclinación hacia el pensamiento crítico. Son detallistas y disfrutan de la resolución de problemas, aplicando su conocimiento teórico y cuantitativo para entender el comportamiento económico. Además, son comunicadores efectivos, capaces de transmitir ideas complejas de manera clara y persuasiva. También deben ser flexibles y adaptarse a cambios económicos y a la dinámica del mercado.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, los economistas tienen un amplio espectro de oportunidades laborales en diversos sectores:</p>
    <ul class="lista-oportunidades">
        <li><strong>Instituciones Gubernamentales:</strong> Trabajo en ministerios, bancos centrales, y agencias de planificación económica, asesorando en políticas económicas, planificación fiscal y desarrollo económico.</li>
        <li><strong>Bancos y Finanzas:</strong> Análisis de mercados financieros, evaluación de inversiones, y gestión de riesgos en bancos, fondos de inversión, y otras instituciones financieras.</li>
        <li><strong>Consultorías Económicas:</strong> Asesoramiento a empresas y gobiernos en la toma de decisiones estratégicas, planificación económica, y estudios de mercado.</li>
        <li><strong>Organismos Internacionales:</strong> Trabajo en organismos multilaterales como el Banco Mundial, el FMI o las Naciones Unidas, participando en proyectos de desarrollo económico y asesoramiento a países en vías de desarrollo.</li>
        <li><strong>Empresas Privadas:</strong> Análisis económico y estratégico dentro de empresas privadas, enfocándose en la planificación financiera, evaluación de proyectos, y estrategias de mercado.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en el campo de la Economía en Bolivia varían según la especialización, experiencia, y el sector en el que se trabaje. Los economistas que trabajan en consultorías, el sector financiero o organismos internacionales suelen recibir salarios competitivos. Con la experiencia, los economistas pueden avanzar a roles de mayor responsabilidad, como la dirección de departamentos económicos o puestos de alta gerencia en instituciones financieras.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Microeconomía:</strong> Enfoque en el comportamiento económico de individuos y empresas, estudiando la formación de precios, la oferta y la demanda, y la teoría de los juegos.</li>
        <li><strong>Macroeconomía:</strong> Estudio de la economía en su conjunto, analizando indicadores como el PIB, la inflación, el desempleo, y la política monetaria y fiscal.</li>
        <li><strong>Economía Internacional:</strong> Análisis de las relaciones económicas entre países, el comercio internacional, las políticas de comercio y los mercados financieros globales.</li>
        <li><strong>Economía del Desarrollo:</strong> Enfoque en los problemas económicos de los países en desarrollo, incluyendo la pobreza, la desigualdad, y las políticas de desarrollo sostenible.</li>
        <li><strong>Econometría:</strong> Aplicación de métodos estadísticos y matemáticos para la medición y análisis de datos económicos.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Economía en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Crecimiento y Desarrollo:</strong> Bolivia es un país en desarrollo con una economía emergente, lo que ofrece una gran oportunidad para aplicar conocimientos económicos en la formulación de políticas que promuevan el crecimiento y el bienestar social.</li>
        <li><strong>Diversidad de Sectores:</strong> La economía boliviana incluye sectores diversos como la minería, agricultura, manufactura y servicios, lo que permite a los economistas especializarse en diferentes áreas según sus intereses.</li>
        <li><strong>Impacto Social:</strong> Los economistas juegan un papel crucial en la mejora del bienestar económico de la población, abordando problemas como la pobreza, el desempleo y la desigualdad.</li>
        <li><strong>Oportunidades Globales:</strong> La globalización y las relaciones económicas internacionales ofrecen a los economistas la oportunidad de trabajar en proyectos que van más allá de las fronteras nacionales, en colaboración con organismos internacionales y empresas multinacionales.</li>
    </ul>
</div>
`,
        /*contaduria publica*/
        "Contaduría Pública": `<div class="carrera">
    <h3 class="titulo-carrera">Contaduría Pública</h3>
    <p class="descripcion-carrera">La Contaduría Pública es una disciplina que se enfoca en la gestión financiera de las organizaciones. Los contadores públicos son profesionales clave en el registro, análisis y presentación de la información financiera, asegurando que las empresas cumplan con las normativas fiscales y contables. Además, proporcionan asesoramiento financiero y auditorías para garantizar la transparencia y la eficiencia en la administración de los recursos económicos.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Contador Público?</h4>
    <ul class="lista-habilidades">
        <li><strong>Registro Contable:</strong> Llevar el control detallado de las transacciones financieras de una empresa o entidad, incluyendo ingresos, gastos, activos y pasivos. Esto incluye la elaboración de libros contables, balances, y estados financieros.</li>
        <li><strong>Auditoría:</strong> Verificación de la exactitud y la legalidad de la información financiera presentada por una empresa. Los auditores evalúan si los estados financieros reflejan fielmente la situación económica de la empresa y si cumplen con las normas contables y fiscales.</li>
        <li><strong>Asesoría Fiscal:</strong> Proporcionar orientación sobre el cumplimiento de las obligaciones fiscales, la optimización de la carga impositiva y la planificación tributaria para evitar sanciones y mejorar la eficiencia financiera.</li>
        <li><strong>Gestión Financiera:</strong> Ayudar en la toma de decisiones estratégicas relacionadas con las finanzas, tales como inversiones, financiamiento y control de costos, contribuyendo a la estabilidad y crecimiento de la organización.</li>
        <li><strong>Control Interno:</strong> Implementación y supervisión de sistemas de control interno para proteger los activos de la organización y garantizar la integridad de la información financiera.</li>
        <li><strong>Consultoría Financiera:</strong> Asesoramiento a empresas y organizaciones en temas financieros, planificación presupuestaria, análisis de viabilidad de proyectos, y reestructuración financiera.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimiento profundo en contabilidad y finanzas para gestionar, analizar y reportar la información financiera de manera precisa.</li>
        <li>Habilidades analíticas y de resolución de problemas para interpretar datos financieros y asesorar en la toma de decisiones estratégicas.</li>
        <li>Dominio de la legislación fiscal y normativa contable para asegurar el cumplimiento de las obligaciones legales y fiscales de la empresa.</li>
        <li>Habilidades de organización y atención al detalle para manejar grandes volúmenes de información y detectar posibles inconsistencias o errores.</li>
        <li>Capacidad de comunicación para presentar informes financieros de manera clara y efectiva a la gerencia y otros stakeholders.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los contadores públicos suelen ser personas meticulosas, organizadas y con una gran capacidad de concentración. Tienen una alta ética profesional y sentido de la responsabilidad, ya que manejan información confidencial y toman decisiones que pueden tener un impacto significativo en las organizaciones. Son detallistas, orientados a resultados, y poseen habilidades para trabajar tanto de forma independiente como en equipo, colaborando con otros departamentos para lograr los objetivos financieros de la empresa.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, los contadores públicos encuentran oportunidades en una variedad de sectores:</p>
    <ul class="lista-oportunidades">
        <li><strong>Empresas Privadas:</strong> Manejo de las finanzas internas, elaboración de informes financieros, y cumplimiento de las obligaciones fiscales.</li>
        <li><strong>Firmas de Auditoría:</strong> Realización de auditorías externas para asegurar la transparencia y exactitud de los estados financieros de las empresas.</li>
        <li><strong>Instituciones Gubernamentales:</strong> Control y supervisión del uso de los recursos públicos, auditoría de cuentas gubernamentales, y elaboración de presupuestos estatales.</li>
        <li><strong>Consultorías Financieras:</strong> Asesoramiento a empresas en temas de contabilidad, impuestos, y planificación financiera estratégica.</li>
        <li><strong>Organismos Internacionales:</strong> Trabajo en proyectos internacionales que requieren la gestión y control de recursos financieros en contextos globales.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en Contaduría Pública en Bolivia varían según la experiencia, la especialización, y el sector de trabajo. Los contadores públicos pueden esperar un crecimiento en sus ingresos a medida que ganan experiencia, especializándose en áreas como auditoría, impuestos, o consultoría financiera. Además, existe la posibilidad de avanzar a roles de mayor responsabilidad, como gerente financiero, auditor senior, o director financiero (CFO).</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Auditoría Financiera:</strong> Verificación de la información financiera para asegurar su exactitud y cumplimiento con las normas contables.</li>
        <li><strong>Contabilidad Fiscal:</strong> Especialización en la preparación de declaraciones fiscales y la planificación tributaria para optimizar las obligaciones fiscales de la empresa.</li>
        <li><strong>Contabilidad de Gestión:</strong> Enfoque en el análisis de costos y la elaboración de presupuestos para apoyar la toma de decisiones estratégicas.</li>
        <li><strong>Contabilidad Internacional:</strong> Aplicación de normas contables internacionales (NIIF) para empresas que operan en múltiples países.</li>
        <li><strong>Consultoría Financiera:</strong> Asesoramiento en la planificación financiera, reestructuración de empresas, y evaluación de proyectos de inversión.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Contaduría Pública en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Demanda Constante:</strong> La contaduría es una de las profesiones más demandadas en Bolivia, tanto en el sector público como privado, debido a la necesidad constante de gestionar y controlar los recursos financieros.</li>
        <li><strong>Versatilidad Profesional:</strong> Los contadores públicos pueden trabajar en diversos sectores, desde pequeñas empresas hasta grandes corporaciones, así como en organizaciones sin fines de lucro y entidades gubernamentales.</li>
        <li><strong>Oportunidades de Especialización:</strong> La contaduría ofrece múltiples áreas de especialización que permiten a los profesionales enfocarse en áreas de su interés, como auditoría, impuestos, o consultoría.</li>
        <li><strong>Contribución al Crecimiento Económico:</strong> Los contadores públicos juegan un papel crucial en el crecimiento y la estabilidad financiera de las empresas y organizaciones, contribuyendo al desarrollo económico del país.</li>
        <li><strong>Impacto Social:</strong> Al asegurar la transparencia y el cumplimiento de las normativas fiscales, los contadores públicos ayudan a fortalecer la confianza en las instituciones y contribuyen a un ambiente económico más justo y sostenible.</li>
    </ul>
</div>
`,
        /*administracion de empresas*/
        "Administración de Empresas": `<div class="carrera">
    <h3 class="titulo-carrera">Administración de Empresas</h3>
    <p class="descripcion-carrera">La Administración de Empresas es una disciplina centrada en la planificación, organización, dirección y control de los recursos de una empresa para alcanzar sus objetivos de manera eficiente y efectiva. Los administradores de empresas son profesionales versátiles que supervisan las operaciones diarias, desarrollan estrategias para el crecimiento a largo plazo, y aseguran que la empresa se mantenga competitiva en un entorno de negocios en constante cambio.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Administrador de Empresas?</h4>
    <ul class="lista-habilidades">
        <li><strong>Planificación Estratégica:</strong> Desarrollar planes a corto, mediano y largo plazo para guiar el crecimiento de la empresa. Esto incluye la identificación de objetivos, la evaluación del entorno competitivo, y la asignación de recursos para alcanzar las metas.</li>
        <li><strong>Gestión de Recursos Humanos:</strong> Supervisar la contratación, capacitación, y desarrollo del personal. Los administradores se aseguran de que la empresa cuente con un equipo motivado y bien capacitado para cumplir con sus objetivos.</li>
        <li><strong>Control Financiero:</strong> Supervisar la gestión financiera de la empresa, incluyendo la elaboración de presupuestos, análisis de costos, y manejo de los flujos de efectivo. Garantizar que los recursos financieros se utilicen de manera eficiente y que la empresa mantenga su rentabilidad.</li>
        <li><strong>Marketing y Ventas:</strong> Desarrollar e implementar estrategias de marketing para promover los productos o servicios de la empresa. Esto incluye la investigación de mercado, la creación de campañas publicitarias, y la supervisión del equipo de ventas.</li>
        <li><strong>Operaciones y Logística:</strong> Gestionar la producción, distribución y logística de la empresa, asegurando que los productos o servicios se entreguen a los clientes de manera oportuna y eficiente.</li>
        <li><strong>Innovación y Desarrollo:</strong> Fomentar la innovación dentro de la empresa, buscando continuamente nuevas formas de mejorar productos, servicios, y procesos para mantenerse competitivos.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Liderazgo y toma de decisiones para dirigir equipos y tomar decisiones estratégicas que impacten en el futuro de la empresa.</li>
        <li>Habilidades de comunicación para interactuar efectivamente con empleados, clientes, proveedores, y otros stakeholders.</li>
        <li>Capacidad analítica para interpretar datos financieros, realizar estudios de mercado, y evaluar el desempeño de la empresa.</li>
        <li>Conocimientos en finanzas, marketing, y recursos humanos para gestionar diferentes áreas de la empresa de manera integral.</li>
        <li>Adaptabilidad y creatividad para responder a cambios en el mercado y encontrar soluciones innovadoras a los desafíos empresariales.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los administradores de empresas suelen ser personas con un fuerte sentido de la organización y capacidad para liderar equipos. Son estratégicos, analíticos y orientados a resultados, con una mentalidad proactiva y emprendedora. Además, deben ser comunicativos, con la capacidad de inspirar y motivar a los demás, y adaptarse rápidamente a los cambios en el entorno empresarial.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, los administradores de empresas tienen un campo laboral amplio y diverso:</p>
    <ul class="lista-oportunidades">
        <li><strong>Empresas Privadas:</strong> Trabajo en la gestión de operaciones, desarrollo de estrategias de crecimiento, y dirección de equipos en diversas industrias, desde pequeñas y medianas empresas hasta grandes corporaciones.</li>
        <li><strong>Empresas Familiares:</strong> Asesoría y gestión en la profesionalización y crecimiento de negocios familiares, asegurando su sostenibilidad a largo plazo.</li>
        <li><strong>Organizaciones Sin Fines de Lucro:</strong> Administración de recursos y gestión de proyectos en organizaciones dedicadas a causas sociales, asegurando el uso eficiente de fondos y la maximización del impacto social.</li>
        <li><strong>Sector Público:</strong> Dirección y supervisión de programas y políticas públicas en áreas como economía, desarrollo, y bienestar social.</li>
        <li><strong>Consultoría y Emprendimiento:</strong> Asesoramiento a otras empresas o la creación de nuevos negocios propios, aplicando los conocimientos en administración para desarrollar proyectos innovadores y exitosos.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en Administración de Empresas en Bolivia varían según la industria, el tamaño de la empresa, y la experiencia del profesional. Los administradores pueden ascender a roles de mayor responsabilidad, como gerentes de departamento, directores generales, o incluso CEO. Además, los administradores experimentados pueden optar por roles en consultoría, ayudando a otras empresas a optimizar sus operaciones y estrategias de negocio.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Administración Financiera:</strong> Enfoque en la gestión de recursos financieros, incluyendo inversiones, presupuestos, y análisis de riesgo.</li>
        <li><strong>Marketing y Ventas:</strong> Especialización en el desarrollo de estrategias de mercado, promoción de productos, y gestión de equipos de ventas.</li>
        <li><strong>Recursos Humanos:</strong> Gestión del talento humano, incluyendo contratación, desarrollo de personal, y gestión de relaciones laborales.</li>
        <li><strong>Gestión de Operaciones:</strong> Supervisión de la producción, logística, y procesos operativos para mejorar la eficiencia y la calidad.</li>
        <li><strong>Emprendimiento e Innovación:</strong> Desarrollo y gestión de nuevos negocios, productos, o servicios, con un enfoque en la innovación y la creación de valor.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Administración de Empresas en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Versatilidad Profesional:</strong> La Administración de Empresas ofrece una formación integral que permite a los profesionales trabajar en una amplia variedad de sectores y roles.</li>
        <li><strong>Demanda Constante:</strong> Las habilidades en administración son esenciales para cualquier organización, lo que garantiza una demanda continua de administradores capacitados.</li>
        <li><strong>Oportunidades de Crecimiento:</strong> La posibilidad de ascender a roles de mayor responsabilidad y liderazgo, así como la opción de emprender negocios propios, ofrece un gran potencial de desarrollo profesional.</li>
        <li><strong>Contribución al Desarrollo Económico:</strong> Los administradores de empresas juegan un papel crucial en el crecimiento y la sostenibilidad de las empresas, contribuyendo al desarrollo económico del país.</li>
        <li><strong>Entorno de Negocios Dinámico:</strong> Bolivia ofrece un entorno de negocios en crecimiento, con oportunidades en sectores emergentes como el comercio, la tecnología, y la producción industrial, lo que permite a los administradores desarrollar estrategias innovadoras y exitosas.</li>
    </ul>
</div>
`,
        /*gestion turistica y hotelera*/
        "Gestión Turística y Hotelera": `<div class="carrera">
    <h3 class="titulo-carrera">Gestión Turística y Hotelera</h3>
    <p class="descripcion-carrera">La Gestión Turística y Hotelera es una disciplina enfocada en la administración y operación de empresas turísticas y hoteleras, con el objetivo de ofrecer servicios de alta calidad a los clientes y maximizar la rentabilidad de las organizaciones en este sector. Los profesionales en esta área están capacitados para planificar, organizar y dirigir actividades relacionadas con el turismo y la hospitalidad, asegurando una experiencia positiva para los visitantes y contribuyendo al desarrollo económico y cultural de las regiones turísticas.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Gestor Turístico y Hotelero?</h4>
    <ul class="lista-habilidades">
        <li><strong>Administración de Hoteles y Alojamientos:</strong> Supervisar todas las operaciones de un hotel o alojamiento, desde la recepción de los huéspedes hasta la gestión de servicios de limpieza, mantenimiento, y alimentos y bebidas. Esto incluye la gestión de personal, la administración financiera, y la implementación de estrategias para mejorar la experiencia del cliente.</li>
        <li><strong>Planificación Turística:</strong> Desarrollar y promover destinos turísticos, creando itinerarios, paquetes de viaje, y experiencias culturales que atraigan a visitantes nacionales e internacionales. Esto incluye la colaboración con agencias de viaje, operadores turísticos, y organizaciones gubernamentales.</li>
        <li><strong>Marketing Turístico:</strong> Implementar estrategias de marketing para promocionar destinos y servicios turísticos, utilizando canales tradicionales y digitales para atraer a nuevos clientes. Esto abarca la creación de campañas publicitarias, el manejo de redes sociales, y la participación en ferias y eventos del sector.</li>
        <li><strong>Gestión de Eventos y Convenciones:</strong> Organizar y coordinar eventos, conferencias, y convenciones en hoteles y centros de convenciones, asegurando que todos los aspectos logísticos, técnicos, y de servicios se manejen de manera eficiente y profesional.</li>
        <li><strong>Sostenibilidad Turística:</strong> Implementar prácticas sostenibles en la gestión de empresas turísticas y hoteleras, promoviendo el turismo responsable y la conservación de los recursos naturales y culturales. Esto incluye el desarrollo de programas de ecoturismo y la adopción de medidas para reducir el impacto ambiental.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Capacidad de organización y atención al detalle para gestionar las operaciones diarias de hoteles y servicios turísticos.</li>
        <li>Habilidades interpersonales y de comunicación para interactuar con clientes, empleados y proveedores, asegurando un servicio al cliente de alta calidad.</li>
        <li>Conocimientos en administración financiera para supervisar presupuestos, costos operativos y maximizar la rentabilidad de las empresas turísticas.</li>
        <li>Creatividad e innovación para diseñar experiencias turísticas únicas y atractivas que diferencien a los destinos y servicios en un mercado competitivo.</li>
        <li>Conocimientos en marketing y ventas para promocionar destinos y servicios turísticos, y atraer a una clientela diversa.</li>
        <li>Conciencia cultural y sostenibilidad para promover prácticas turísticas que respeten el entorno y las comunidades locales.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los gestores turísticos y hoteleros suelen ser personas orientadas al servicio, con un fuerte sentido de hospitalidad y capacidad para trabajar en ambientes dinámicos. Son comunicativos, empáticos y capaces de resolver problemas rápidamente. Además, deben tener una mentalidad global, adaptarse a las necesidades de clientes de diferentes culturas, y estar comprometidos con la sostenibilidad y el desarrollo responsable del turismo.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, el sector de la gestión turística y hotelera está en crecimiento, impulsado por la riqueza cultural y natural del país:</p>
    <ul class="lista-oportunidades">
        <li><strong>Hoteles y Resorts:</strong> Trabajo en la gestión de operaciones diarias, desarrollo de servicios al cliente, y administración financiera en establecimientos de alojamiento, desde hoteles de lujo hasta posadas rurales.</li>
        <li><strong>Agencias de Viajes y Operadores Turísticos:</strong> Planificación y promoción de viajes, itinerarios y experiencias turísticas para atraer a visitantes nacionales e internacionales.</li>
        <li><strong>Organizaciones de Turismo y Gobierno:</strong> Desarrollo de políticas y estrategias para el fomento del turismo en regiones específicas, promoción de destinos turísticos, y organización de eventos y ferias turísticas.</li>
        <li><strong>Restaurantes y Servicios de Alimentos y Bebidas:</strong> Administración de establecimientos de comida y bebida, asegurando una experiencia gastronómica de alta calidad para los visitantes.</li>
        <li><strong>Ecoturismo y Turismo Comunitario:</strong> Gestión de proyectos turísticos sostenibles que promuevan la conservación del medio ambiente y el desarrollo de las comunidades locales.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en Gestión Turística y Hotelera en Bolivia varían según el tipo de establecimiento y la ubicación. Los profesionales en este campo pueden avanzar a roles de mayor responsabilidad, como gerentes generales de hoteles, directores de operaciones turísticas, o consultores en turismo sostenible. Además, existe la posibilidad de emprender en el sector turístico, creando y gestionando negocios propios, como hoteles boutique, agencias de viajes, o empresas de turismo de aventura.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Gestión Hotelera:</strong> Enfoque en la administración de alojamientos, desde la operación diaria hasta el desarrollo de estrategias para mejorar la experiencia del cliente.</li>
        <li><strong>Planificación y Desarrollo Turístico:</strong> Especialización en la creación de destinos turísticos, desarrollo de productos turísticos, y planificación de infraestructuras turísticas.</li>
        <li><strong>Marketing Turístico:</strong> Estrategias de promoción y ventas para destinos turísticos, hoteles, y servicios de hospitalidad.</li>
        <li><strong>Ecoturismo y Turismo Sostenible:</strong> Gestión de proyectos turísticos que promuevan la conservación del medio ambiente y el desarrollo de las comunidades locales.</li>
        <li><strong>Gestión de Eventos y Convenciones:</strong> Organización y coordinación de eventos, conferencias, y convenciones en destinos turísticos.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Gestión Turística y Hotelera en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Riqueza Cultural y Natural:</strong> Bolivia ofrece un entorno ideal para el desarrollo turístico, con una diversidad de paisajes y culturas que atraen a visitantes de todo el mundo.</li>
        <li><strong>Sector en Crecimiento:</strong> El turismo en Bolivia está en expansión, ofreciendo numerosas oportunidades para los profesionales en gestión turística y hotelera.</li>
        <li><strong>Impacto en el Desarrollo Local:</strong> La gestión turística contribuye al desarrollo económico y social de las comunidades, especialmente en áreas rurales y patrimoniales.</li>
        <li><strong>Oportunidades de Innovación:</strong> La creciente demanda de experiencias turísticas únicas y sostenibles abre un campo para la innovación en productos y servicios turísticos.</li>
        <li><strong>Diversidad de Opciones de Carrera:</strong> Desde la administración hotelera hasta el desarrollo de destinos turísticos y la promoción del turismo sostenible, la carrera ofrece una variedad de caminos profesionales que se adaptan a diferentes intereses y habilidades.</li>
    </ul>
</div>
`,
        /*comercio internacional*/
        "Comercio Internacional": `<div class="carrera">
    <h3 class="titulo-carrera">Comercio Internacional</h3>
    <p class="descripcion-carrera">El Comercio Internacional es una disciplina que se centra en el intercambio de bienes, servicios, y capitales entre países. Involucra una comprensión profunda de las leyes, políticas, y prácticas comerciales a nivel global, así como la capacidad de negociar, gestionar y ejecutar operaciones comerciales en diferentes mercados internacionales. Los profesionales en este campo trabajan para facilitar el comercio entre naciones, asegurando que las transacciones sean eficientes, legales y beneficiosas para todas las partes involucradas.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Profesional en Comercio Internacional?</h4>
    <ul class="lista-habilidades">
        <li><strong>Negociación y Contratos Internacionales:</strong> Participar en la negociación de acuerdos comerciales entre empresas de diferentes países, asegurando que los contratos sean justos y cumplan con las normativas internacionales y locales. Esto incluye la redacción de contratos, la negociación de precios, términos de entrega, y condiciones de pago.</li>
        <li><strong>Logística y Distribución Internacional:</strong> Gestionar el transporte, almacenamiento y distribución de bienes a nivel global, optimizando las cadenas de suministro para reducir costos y tiempos de entrega. Esto incluye la coordinación de aduanas, seguros, y transporte multimodal.</li>
        <li><strong>Estudios de Mercado Internacionales:</strong> Realizar investigaciones y análisis de mercados internacionales para identificar oportunidades de exportación e importación, evaluar la competencia, y adaptar productos y servicios a las preferencias de los consumidores en diferentes países.</li>
        <li><strong>Gestión de Riesgos y Cumplimiento:</strong> Identificar y gestionar los riesgos asociados al comercio internacional, como fluctuaciones en el tipo de cambio, barreras arancelarias, y riesgos políticos. Asegurar el cumplimiento de las normativas internacionales y locales en temas de comercio, aduanas, y regulaciones.</li>
        <li><strong>Finanzas y Pagos Internacionales:</strong> Manejar las transacciones financieras internacionales, incluyendo la elección de métodos de pago, la gestión de crédito y financiamiento, y la conversión de monedas. Esto también abarca la comprensión de los mecanismos de financiamiento de exportaciones, como cartas de crédito y seguros de crédito a la exportación.</li>
        <li><strong>Política Comercial y Regulaciones:</strong> Comprender y aplicar las políticas comerciales, tratados y acuerdos internacionales que afectan el comercio entre países. Esto incluye la interpretación de tratados de libre comercio, barreras no arancelarias, y políticas de exportación e importación.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Conocimientos en economía y finanzas internacionales para gestionar operaciones comerciales y financieras en mercados globales.</li>
        <li>Habilidades de negociación y comunicación intercultural para tratar con socios comerciales de diferentes países y culturas.</li>
        <li>Capacidad analítica y de investigación para evaluar mercados internacionales, identificar oportunidades de negocio y mitigar riesgos.</li>
        <li>Conocimientos en logística y cadenas de suministro para gestionar el transporte y distribución eficiente de productos a nivel global.</li>
        <li>Comprensión de las leyes y regulaciones internacionales que afectan el comercio, las aduanas y las políticas comerciales.</li>
        <li>Habilidades en gestión de riesgos y cumplimiento para garantizar que las operaciones comerciales cumplan con las normativas y estándares internacionales.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los profesionales en Comercio Internacional suelen ser personas con una mentalidad global y una gran capacidad para trabajar en ambientes multiculturales. Son analíticos, orientados a los detalles y excelentes negociadores. También necesitan ser flexibles, capaces de adaptarse a diferentes mercados y entornos regulatorios, y tener una fuerte ética profesional para manejar transacciones complejas y sensibles.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, el sector de Comercio Internacional ofrece múltiples oportunidades en áreas como:</p>
    <ul class="lista-oportunidades">
        <li><strong>Empresas Exportadoras e Importadoras:</strong> Trabajo en la gestión de operaciones comerciales, desde la identificación de mercados extranjeros hasta la negociación de acuerdos y la gestión de la logística.</li>
        <li><strong>Agencias de Aduanas y Logística:</strong> Gestión de procesos aduaneros, transporte internacional, y cumplimiento de regulaciones para facilitar el flujo de bienes a través de las fronteras.</li>
        <li><strong>Bancos y Entidades Financieras:</strong> Manejo de financiamiento de exportaciones, gestión de riesgos y pagos internacionales, y asesoramiento a empresas en transacciones internacionales.</li>
        <li><strong>Gobierno y Organismos Internacionales:</strong> Participación en la formulación y aplicación de políticas comerciales, negociaciones de tratados de libre comercio, y promoción de exportaciones.</li>
        <li><strong>Consultoría en Comercio Internacional:</strong> Asesoramiento a empresas en estrategias de entrada a mercados internacionales, cumplimiento regulatorio, y optimización de operaciones comerciales.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en el Comercio Internacional en Bolivia pueden variar según el tamaño de la empresa, la complejidad de las operaciones, y la experiencia del profesional. Aquellos con experiencia en mercados específicos o en sectores de alta demanda pueden encontrar oportunidades bien remuneradas. Con el tiempo, los profesionales en este campo pueden avanzar a roles de mayor responsabilidad, como gerentes de comercio internacional, directores de operaciones internacionales, o consultores especializados.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Logística y Cadenas de Suministro Internacionales:</strong> Gestión de la distribución y transporte de bienes a nivel global.</li>
        <li><strong>Negociación y Contratos Internacionales:</strong> Especialización en la redacción y negociación de contratos comerciales entre países.</li>
        <li><strong>Marketing Internacional:</strong> Estrategias para la promoción y venta de productos y servicios en mercados internacionales.</li>
        <li><strong>Finanzas y Pagos Internacionales:</strong> Gestión de las finanzas y transacciones monetarias en operaciones comerciales internacionales.</li>
        <li><strong>Cumplimiento y Regulación Comercial:</strong> Aseguramiento del cumplimiento de las normativas internacionales en comercio, aduanas, y políticas comerciales.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Comercio Internacional en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Ubicación Estratégica:</strong> Bolivia, con su ubicación geográfica en el corazón de Sudamérica, tiene acceso a múltiples mercados regionales, lo que ofrece oportunidades para el comercio transfronterizo.</li>
        <li><strong>Expansión del Comercio Exterior:</strong> El aumento de las exportaciones e importaciones bolivianas crea una demanda creciente de profesionales capacitados en comercio internacional.</li>
        <li><strong>Oportunidades en Diversos Sectores:</strong> Desde la agroindustria hasta la minería, Bolivia ofrece una diversidad de sectores en los que los profesionales de comercio internacional pueden desempeñarse.</li>
        <li><strong>Contribución al Desarrollo Económico:</strong> El comercio internacional es un motor clave para el crecimiento económico de Bolivia, y los profesionales en este campo pueden tener un impacto significativo en la economía del país.</li>
        <li><strong>Diversidad de Opciones de Carrera:</strong> La carrera ofrece un amplio rango de especializaciones y oportunidades, permitiendo a los estudiantes elegir áreas que se alineen con sus intereses y objetivos profesionales.</li>
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
        "Economía": 0,
        "Contaduría Pública": 0,
        "Administración de Empresas": 0,
        "Gestión Turística y Hotelera": 0,
        "Comercio Internacional": 0
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
                afinidad.habilidades+= 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta3') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta4') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta5') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta6') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta7') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta8') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta9') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta10') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
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
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
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
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta15') {
            if (valorRespuesta === '1') {
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
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