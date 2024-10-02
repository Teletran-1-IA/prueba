// Diccionario de carreras y sus categorías
const carreras = {
    "Medicina Veterinaria y Zootecnia": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería Agronómica": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería en Producción y Comercialización Agropecuaria": { intereses: 0, habilidades: 0, personalidad: 0 },
    "Ingeniería en Zootecnia e Industria Pecuaria": { intereses: 0, habilidades: 0, personalidad: 0 }
};

// Impacto de las respuestas en las carreras
const impactoRespuestas = {
    'pregunta1': { intereses: { "Medicina Veterinaria y Zootecnia": 2, "Ingeniería Agronómica": 2 } },
    'pregunta2': { intereses: { "Ingeniería en Producción y Comercialización Agropecuaria": 2, "Ingeniería en Zootecnia e Industria Pecuaria": 2 } },
    'pregunta3': { habilidades: { "Medicina Veterinaria y Zootecnia": 2, "Ingeniería Agronómica": 2 } },
    'pregunta4': { habilidades: { "Ingeniería en Producción y Comercialización Agropecuaria": 2, "Ingeniería en Zootecnia e Industria Pecuaria": 2 } },
    'pregunta5': { intereses: { "Medicina Veterinaria y Zootecnia": 2, "Ingeniería Agronómica": 2 } },
    'pregunta6': { personalidad: { "Ingeniería en Producción y Comercialización Agropecuaria": 2, "Ingeniería en Zootecnia e Industria Pecuaria": 2 } },
    'pregunta7': { intereses: { "Medicina Veterinaria y Zootecnia": 2, "Ingeniería Agronómica": 2 } },
    'pregunta8': { habilidades: { "Ingeniería en Producción y Comercialización Agropecuaria": 2, "Ingeniería en Zootecnia e Industria Pecuaria": 2 } }
};

// Función para obtener la descripción de la carrera
function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Medicina Veterinaria y Zootecnia": `<div class="carrera">
        <h3 class="titulo-carrera">Medicina Veterinaria y Zootecnia</h3>
        <p class="descripcion-carrera">La Medicina Veterinaria y Zootecnia es una disciplina que se dedica al cuidado de la salud animal, la producción y el manejo de animales domésticos y de granja, y la mejora de las especies a través de técnicas de cría y reproducción. Los veterinarios y zootecnistas juegan un papel crucial en la protección del bienestar animal, la seguridad alimentaria, y la prevención de enfermedades zoonóticas que pueden afectar tanto a los animales como a los seres humanos.</p>
        
        <h4 class="subtitulo">¿Qué implica ser un Médico Veterinario y Zootecnista?</h4>
        <ul class="lista-habilidades">
            <li><strong>Atención Clínica Veterinaria:</strong> Diagnóstico, tratamiento y prevención de enfermedades en animales domésticos, de granja y silvestres. Incluye cirugía, medicina preventiva, y manejo de emergencias veterinarias.</li>
            <li><strong>Producción Animal:</strong> Manejo y mejora de la producción ganadera, avícola, porcina, y otras especies, enfocándose en la eficiencia, calidad y sostenibilidad de la producción de alimentos de origen animal.</li>
            <li><strong>Reproducción y Genética Animal:</strong> Aplicación de técnicas de cría y biotecnología para mejorar las razas y la productividad de los animales, incluyendo inseminación artificial, clonación y mejoramiento genético.</li>
            <li><strong>Sanidad Animal y Control de Enfermedades:</strong> Implementación de programas de vacunación, control de plagas y enfermedades zoonóticas, así como inspección sanitaria en instalaciones productivas y mercados.</li>
            <li><strong>Bienestar Animal y Ética:</strong> Promoción del bienestar animal, asegurando que los animales bajo cuidado humano reciban un trato ético, adecuado y libre de sufrimiento innecesario.</li>
            <li><strong>Salud Pública Veterinaria:</strong> Participación en la prevención y control de enfermedades que pueden transmitirse de animales a humanos, garantizando la seguridad alimentaria y la salud pública.</li>
        </ul>
        
        <h4 class="subtitulo">Habilidades Necesarias</h4>
        <ul class="lista-habilidades">
            <li>Conocimientos sólidos en biología, anatomía y fisiología animal para el diagnóstico y tratamiento de enfermedades.</li>
            <li>Habilidades clínicas y quirúrgicas para el manejo adecuado de procedimientos veterinarios.</li>
            <li>Capacidad para trabajar en ambientes rurales y urbanos, adaptándose a diferentes contextos de producción animal.</li>
            <li>Conocimientos en genética y reproducción para la mejora de especies y la producción eficiente.</li>
            <li>Habilidades de gestión y administración para manejar clínicas veterinarias, granjas, y proyectos de producción animal.</li>
        </ul>
        
        <h4 class="subtitulo">Personalidad Adecuada</h4>
        <p>Los médicos veterinarios y zootecnistas suelen ser personas apasionadas por los animales, con un fuerte sentido de la responsabilidad y compromiso con el bienestar animal. Son observadores, analíticos y detallistas, capaces de tomar decisiones rápidas en situaciones de emergencia. Además, tienen la capacidad de trabajar en entornos diversos, desde clínicas urbanas hasta granjas rurales, y deben ser comunicativos para interactuar con dueños de animales y otros profesionales del campo.</p>
        
        <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
        <p>En Bolivia, la Medicina Veterinaria y Zootecnia tiene un mercado laboral amplio y diversificado:</p>
        <ul class="lista-oportunidades">
            <li><strong>Clínicas y Hospitales Veterinarios:</strong> Trabajo en la atención médica de animales domésticos y mascotas, incluyendo medicina preventiva, cirugía y tratamientos especializados.</li>
            <li><strong>Granjas y Producción Animal:</strong> Manejo de ganado, aves, cerdos, y otros animales de granja, enfocándose en la eficiencia productiva y el bienestar animal.</li>
            <li><strong>Instituciones Públicas y de Salud Animal:</strong> Participación en programas de salud pública veterinaria, control de enfermedades zoonóticas, y bienestar animal.</li>
            <li><strong>Industria Agroalimentaria:</strong> Trabajo en la inspección sanitaria, calidad de productos de origen animal, y seguridad alimentaria.</li>
            <li><strong>Conservación y Fauna Silvestre:</strong> Participación en proyectos de conservación de especies y manejo de vida silvestre en zoológicos, reservas naturales, y programas de reintroducción.</li>
        </ul>
        
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios en Medicina Veterinaria y Zootecnia en Bolivia varían según la especialización, experiencia, y ubicación. Veterinarios en clínicas urbanas pueden tener ingresos más altos que aquellos en áreas rurales, aunque los especialistas en producción animal y salud pública pueden encontrar oportunidades bien remuneradas en la industria agroalimentaria y gubernamental. Con la experiencia, los veterinarios pueden avanzar a roles de mayor responsabilidad, como gerencia de clínicas o dirección de programas de salud animal.</p>
        
        <h4 class="subtitulo">Especializaciones</h4>
        <ul class="lista-especializaciones">
            <li><strong>Medicina de Animales Pequeños:</strong> Especialización en la atención de mascotas como perros, gatos, y otros animales domésticos.</li>
            <li><strong>Medicina de Grandes Animales:</strong> Atención a ganado, caballos, y otros animales de granja, incluyendo manejo de producción y salud.</li>
            <li><strong>Reproducción Animal:</strong> Enfoque en la biotecnología reproductiva, mejoramiento genético, y cría de especies.</li>
            <li><strong>Salud Pública Veterinaria:</strong> Trabajo en la prevención de enfermedades zoonóticas y control sanitario.</li>
            <li><strong>Conservación y Fauna Silvestre:</strong> Enfoque en el manejo y conservación de especies en peligro y vida silvestre.</li>
        </ul>
        
        <h4 class="subtitulo">¿Por qué estudiar Medicina Veterinaria y Zootecnia en Bolivia?</h4>
        <ul class="lista-motivos">
            <li><strong>Diversidad Biológica:</strong> Bolivia cuenta con una rica biodiversidad, lo que ofrece un campo amplio para la práctica veterinaria en diferentes contextos, desde la clínica urbana hasta la conservación de fauna silvestre.</li>
            <li><strong>Sector Agropecuario en Crecimiento:</strong> Con una economía agrícola en expansión, los veterinarios y zootecnistas tienen un papel crucial en la mejora de la producción animal y la seguridad alimentaria.</li>
            <li><strong>Impacto en la Salud Pública:</strong> Los veterinarios son fundamentales en la prevención y control de enfermedades que afectan tanto a animales como a humanos, contribuyendo significativamente a la salud pública.</li>
            <li><strong>Oportunidades de Especialización:</strong> La amplia gama de especializaciones dentro de la Medicina Veterinaria y Zootecnia permite a los estudiantes enfocarse en áreas que se alineen con sus intereses y objetivos profesionales.</li>
        </ul>
    </div>
    `,
        /*ingenieria agronomica*/
        "Ingeniería Agronómica": `<div class="carrera">
        <h3 class="titulo-carrera">Ingeniería Agronómica</h3>
        <p class="descripcion-carrera">La Ingeniería Agronómica es una disciplina que se dedica al estudio y la aplicación de técnicas y conocimientos científicos para mejorar la producción agrícola, optimizar el uso de los recursos naturales, y garantizar la sostenibilidad y seguridad alimentaria. Los ingenieros agrónomos desempeñan un papel esencial en el desarrollo de prácticas agrícolas eficientes y sostenibles, contribuyendo al crecimiento económico y al bienestar de las comunidades rurales.</p>
        
        <h4 class="subtitulo">¿Qué implica ser un Ingeniero Agrónomo?</h4>
        <ul class="lista-habilidades">
            <li><strong>Producción y Gestión de Cultivos:</strong> Desarrollo de técnicas avanzadas para la siembra, cultivo y cosecha de diversos tipos de plantas, buscando maximizar el rendimiento y la calidad de las cosechas. Incluye el manejo de plagas, control de enfermedades y la mejora del suelo.</li>
            <li><strong>Manejo de Recursos Naturales:</strong> Optimización del uso del agua, suelo, y otros recursos naturales en la producción agrícola, promoviendo prácticas sostenibles como la conservación del suelo, la rotación de cultivos, y el uso eficiente del agua.</li>
            <li><strong>Innovación en Tecnología Agrícola:</strong> Implementación de tecnologías modernas, como la agricultura de precisión, drones, y sensores, para mejorar la eficiencia y productividad agrícola. Esto incluye la automatización de procesos y la aplicación de biotecnología en la agricultura.</li>
            <li><strong>Desarrollo Rural y Sostenibilidad:</strong> Participación en proyectos de desarrollo rural que mejoren las condiciones de vida de las comunidades agrícolas, promoviendo la sostenibilidad económica, social, y ambiental de las prácticas agrícolas.</li>
            <li><strong>Mejora Genética y Biotecnología:</strong> Aplicación de técnicas de mejoramiento genético y biotecnología para desarrollar nuevas variedades de cultivos que sean más resistentes a enfermedades, sequías, y otros desafíos ambientales.</li>
            <li><strong>Planificación y Gestión de Proyectos Agrícolas:</strong> Diseño y gestión de proyectos agrícolas que optimicen la producción y la rentabilidad, considerando factores como la demanda del mercado, el costo de producción, y la sostenibilidad.</li>
        </ul>
        
        <h4 class="subtitulo">Habilidades Necesarias</h4>
        <ul class="lista-habilidades">
            <li>Conocimientos sólidos en biología, química y suelos para entender y mejorar los procesos agrícolas.</li>
            <li>Habilidades en tecnología agrícola para aplicar innovaciones que aumenten la eficiencia de la producción.</li>
            <li>Capacidad de análisis y resolución de problemas para enfrentar los desafíos en la producción agrícola.</li>
            <li>Habilidades de gestión y liderazgo para dirigir proyectos agrícolas y manejar equipos de trabajo.</li>
            <li>Sensibilidad ambiental y compromiso con la sostenibilidad en todas las prácticas agrícolas.</li>
        </ul>
        
        <h4 class="subtitulo">Personalidad Adecuada</h4>
        <p>Los ingenieros agrónomos suelen ser personas apasionadas por la naturaleza y el trabajo al aire libre. Tienen un fuerte sentido de la responsabilidad hacia el medio ambiente y las comunidades rurales. Son innovadores y creativos, con una capacidad para analizar problemas complejos y desarrollar soluciones prácticas. Además, son personas organizadas y comunicativas, capaces de liderar equipos y gestionar proyectos a gran escala.</p>
        
        <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
        <p>En Bolivia, la Ingeniería Agronómica tiene un mercado laboral con oportunidades en diversas áreas:</p>
        <ul class="lista-oportunidades">
            <li><strong>Empresas Agrícolas y Agroindustriales:</strong> Trabajo en la producción y procesamiento de alimentos, mejorando la eficiencia y calidad de los productos agrícolas.</li>
            <li><strong>Instituciones Públicas:</strong> Participación en programas gubernamentales para el desarrollo rural, la sostenibilidad agrícola, y la seguridad alimentaria.</li>
            <li><strong>Organizaciones Internacionales:</strong> Colaboración en proyectos de desarrollo agrícola y sostenibilidad financiados por organismos internacionales.</li>
            <li><strong>Consultoría Agrícola:</strong> Asesoramiento a agricultores y empresas en la implementación de tecnologías y prácticas agrícolas sostenibles.</li>
            <li><strong>Investigación y Desarrollo:</strong> Trabajo en centros de investigación para el desarrollo de nuevas variedades de cultivos, tecnologías agrícolas, y prácticas sostenibles.</li>
        </ul>
        
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios en Ingeniería Agronómica en Bolivia varían según la especialización, experiencia, y ubicación. Ingenieros que trabajan en proyectos de desarrollo rural o en la industria agroindustrial pueden encontrar oportunidades bien remuneradas, especialmente aquellos que se especializan en tecnologías avanzadas o biotecnología. Con la experiencia, los ingenieros agrónomos pueden avanzar a roles de mayor responsabilidad, como la dirección de proyectos agrícolas, consultoría, o investigación.</p>
        
        <h4 class="subtitulo">Especializaciones</h4>
        <ul class="lista-especializaciones">
            <li><strong>Agroecología:</strong> Enfoque en prácticas agrícolas sostenibles que conservan los recursos naturales y promueven la biodiversidad.</li>
            <li><strong>Biotecnología Agrícola:</strong> Aplicación de la biotecnología en la mejora de cultivos y la producción agrícola.</li>
            <li><strong>Sistemas de Riego:</strong> Diseño y gestión de sistemas de riego eficientes y sostenibles para maximizar el uso del agua.</li>
            <li><strong>Manejo Integrado de Plagas:</strong> Desarrollo de estrategias para el control de plagas que minimizan el impacto ambiental y promueven la salud del ecosistema.</li>
            <li><strong>Economía Agrícola:</strong> Análisis y planificación económica para mejorar la rentabilidad y sostenibilidad de las actividades agrícolas.</li>
        </ul>
        
        <h4 class="subtitulo">¿Por qué estudiar Ingeniería Agronómica en Bolivia?</h4>
        <ul class="lista-motivos">
            <li><strong>Riqueza de Recursos Naturales:</strong> Bolivia cuenta con una gran diversidad de suelos, climas, y recursos naturales que ofrecen un campo amplio para la innovación y el desarrollo en la agricultura.</li>
            <li><strong>Sector Agrícola en Crecimiento:</strong> Con una economía agrícola en expansión, los ingenieros agrónomos juegan un papel clave en la mejora de la producción y la sostenibilidad.</li>
            <li><strong>Impacto en el Desarrollo Rural:</strong> Los ingenieros agrónomos son fundamentales en la mejora de las condiciones de vida en las comunidades rurales, promoviendo la sostenibilidad y el desarrollo económico.</li>
            <li><strong>Oportunidades de Innovación:</strong> La aplicación de nuevas tecnologías en la agricultura ofrece un campo emocionante para la innovación y el desarrollo en Bolivia.</li>
        </ul>
    </div>
    `,
        /*ingenieria en produccion y comercializacion agropecuaria*/
        "Ingeniería en Producción y Comercialización Agropecuaria": `<div class="carrera">
        <h3 class="titulo-carrera">Ingeniería en Producción y Comercialización Agropecuaria</h3>
        <p class="descripcion-carrera">La Ingeniería en Producción y Comercialización Agropecuaria es una disciplina que combina conocimientos técnicos de producción agrícola y ganadera con habilidades en gestión y comercialización de productos agropecuarios. Los ingenieros en este campo se encargan de optimizar los procesos productivos en la agricultura y la ganadería, así como de asegurar que los productos lleguen al mercado de manera eficiente, cumpliendo con los estándares de calidad y sostenibilidad.</p>
        
        <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Producción y Comercialización Agropecuaria?</h4>
        <ul class="lista-habilidades">
            <li><strong>Producción Agrícola y Ganadera:</strong> Desarrollo y aplicación de técnicas avanzadas para mejorar la eficiencia y calidad de la producción agrícola y ganadera. Esto incluye la gestión de cultivos, el manejo del ganado, y la implementación de prácticas sostenibles en la producción de alimentos.</li>
            <li><strong>Gestión de la Cadena de Suministro:</strong> Planificación y optimización de la cadena de suministro desde la producción hasta la comercialización. Incluye la logística, el transporte, el almacenamiento, y la distribución de productos agropecuarios, asegurando que lleguen al mercado de manera eficiente.</li>
            <li><strong>Control de Calidad y Seguridad Alimentaria:</strong> Implementación de estándares de calidad y seguridad alimentaria en la producción agropecuaria, asegurando que los productos cumplan con las normativas vigentes y sean seguros para el consumo.</li>
            <li><strong>Comercialización y Marketing:</strong> Desarrollo de estrategias de marketing y ventas para los productos agropecuarios, incluyendo la identificación de mercados, la negociación de precios, y la promoción de productos. Los ingenieros también se encargan de analizar las tendencias del mercado y adaptar las estrategias de comercialización.</li>
            <li><strong>Innovación y Tecnología en la Producción:</strong> Aplicación de nuevas tecnologías y prácticas innovadoras en la producción agropecuaria para mejorar la eficiencia, reducir costos y aumentar la sostenibilidad. Esto incluye la agricultura de precisión, el uso de drones, y la biotecnología.</li>
            <li><strong>Desarrollo Rural y Sostenibilidad:</strong> Participación en proyectos que promuevan el desarrollo rural sostenible, mejorando las condiciones de vida en las comunidades agrícolas y asegurando la viabilidad económica de las prácticas productivas.</li>
        </ul>
        
        <h4 class="subtitulo">Habilidades Necesarias</h4>
        <ul class="lista-habilidades">
            <li>Conocimientos sólidos en producción agrícola y ganadera para optimizar los procesos productivos.</li>
            <li>Habilidades en gestión y logística para manejar la cadena de suministro de manera eficiente.</li>
            <li>Capacidad de análisis de mercados para identificar oportunidades de comercialización y desarrollar estrategias efectivas.</li>
            <li>Conocimientos en calidad y seguridad alimentaria para asegurar que los productos cumplan con los estándares exigidos.</li>
            <li>Habilidades en tecnología agrícola para implementar innovaciones que mejoren la eficiencia y sostenibilidad de la producción.</li>
        </ul>
        
        <h4 class="subtitulo">Personalidad Adecuada</h4>
        <p>Los ingenieros en Producción y Comercialización Agropecuaria suelen ser personas orientadas al logro y con una fuerte capacidad para planificar y organizar. Tienen un enfoque analítico, lo que les permite resolver problemas complejos y tomar decisiones informadas. Además, son innovadores y están siempre en busca de nuevas maneras de mejorar los procesos productivos y comerciales. Suelen ser buenos comunicadores, capaces de negociar y coordinar con diferentes actores dentro de la cadena de suministro.</p>
        
        <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
        <p>En Bolivia, la Ingeniería en Producción y Comercialización Agropecuaria tiene un mercado laboral amplio con oportunidades en diversos sectores:</p>
        <ul class="lista-oportunidades">
            <li><strong>Empresas Agroindustriales:</strong> Trabajo en la producción, procesamiento y comercialización de productos agrícolas y ganaderos, con enfoque en la eficiencia y calidad.</li>
            <li><strong>Cooperativas y Asociaciones de Productores:</strong> Asesoramiento y gestión en la producción y comercialización, ayudando a los productores a mejorar su competitividad en el mercado.</li>
            <li><strong>Instituciones Públicas y ONG's:</strong> Participación en programas de desarrollo rural y sostenibilidad, enfocados en mejorar la producción y comercialización en comunidades agrícolas.</li>
            <li><strong>Consultoría Agrícola:</strong> Asesoramiento a empresas y productores en la implementación de nuevas tecnologías y prácticas de gestión y comercialización.</li>
            <li><strong>Empresas de Exportación:</strong> Gestión y planificación de la exportación de productos agropecuarios, cumpliendo con los requisitos internacionales de calidad y seguridad alimentaria.</li>
        </ul>
        
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios en Ingeniería en Producción y Comercialización Agropecuaria en Bolivia varían según la especialización, experiencia, y ubicación. Los ingenieros que trabajan en empresas agroindustriales o en la exportación de productos agropecuarios pueden encontrar oportunidades bien remuneradas. Con la experiencia, pueden avanzar a roles de mayor responsabilidad, como la gerencia de proyectos, consultoría especializada, o dirección de empresas agropecuarias.</p>
        
        <h4 class="subtitulo">Especializaciones</h4>
        <ul class="lista-especializaciones">
            <li><strong>Agronegocios:</strong> Enfoque en la gestión y comercialización de productos agropecuarios, con énfasis en estrategias de mercado y exportación.</li>
            <li><strong>Agricultura Sostenible:</strong> Desarrollo de prácticas agrícolas que promuevan la sostenibilidad económica y ambiental.</li>
            <li><strong>Gestión de la Cadena de Suministro:</strong> Optimización de la cadena de suministro agropecuaria, desde la producción hasta la comercialización.</li>
            <li><strong>Tecnología en la Producción:</strong> Aplicación de tecnologías avanzadas para mejorar la eficiencia y sostenibilidad de la producción agrícola y ganadera.</li>
            <li><strong>Seguridad y Calidad Alimentaria:</strong> Implementación de estándares de calidad y seguridad alimentaria en la producción y comercialización de productos agropecuarios.</li>
        </ul>
        
        <h4 class="subtitulo">¿Por qué estudiar Ingeniería en Producción y Comercialización Agropecuaria en Bolivia?</h4>
        <ul class="lista-motivos">
            <li><strong>Economía Agropecuaria en Crecimiento:</strong> Bolivia cuenta con un sector agropecuario en expansión, ofreciendo amplias oportunidades para los ingenieros en esta área.</li>
            <li><strong>Diversidad de Climas y Ecosistemas:</strong> La variedad de climas y suelos en Bolivia permite a los ingenieros trabajar en una amplia gama de proyectos productivos, desde la agricultura de montaña hasta la producción ganadera en los llanos.</li>
            <li><strong>Impacto en el Desarrollo Rural:</strong> Los ingenieros en Producción y Comercialización Agropecuaria juegan un papel clave en la mejora de la calidad de vida en las comunidades rurales, promoviendo prácticas sostenibles y rentables.</li>
            <li><strong>Oportunidades de Innovación:</strong> La aplicación de nuevas tecnologías en la producción y comercialización agropecuaria ofrece un campo emocionante para la innovación y el desarrollo en Bolivia.</li>
        </ul>
    </div>
    `,
        /*ingenieria en zootecnia e industria pecuaria*/
        "Ingeniería en Zootecnia e Industria Pecuaria": `
        <div class="carrera">
        <h3 class="titulo-carrera">Ingeniería en Zootecnia e Industria Pecuaria</h3>
        <p class="descripcion-carrera">La Ingeniería en Zootecnia e Industria Pecuaria es una disciplina dedicada a la producción, mejora y manejo de los animales de granja, con un enfoque en la eficiencia, sostenibilidad y bienestar animal. Los ingenieros en esta área se especializan en optimizar la producción pecuaria, aplicando conocimientos científicos y técnicos para mejorar la calidad y cantidad de productos de origen animal, como carne, leche, huevos, y otros derivados.</p>
        
        <h4 class="subtitulo">¿Qué implica ser un Ingeniero en Zootecnia e Industria Pecuaria?</h4>
        <ul class="lista-habilidades">
            <li><strong>Manejo de Producción Animal:</strong> Desarrollo y aplicación de técnicas para mejorar la cría, alimentación y manejo de animales de granja, incluyendo ganado bovino, porcino, avícola, ovino y caprino. Se busca maximizar la productividad de manera eficiente y sostenible.</li>
            <li><strong>Mejoramiento Genético:</strong> Implementación de programas de selección y cruzamiento de animales para mejorar características deseadas como la producción de leche, carne, o lana. Esto incluye el uso de biotecnología, inseminación artificial, y clonación.</li>
            <li><strong>Nutrición y Alimentación Animal:</strong> Formulación de dietas balanceadas y eficientes para diferentes tipos de ganado, asegurando una alimentación adecuada que maximice la producción y el bienestar de los animales.</li>
            <li><strong>Sanidad Animal y Bienestar:</strong> Control de enfermedades y parásitos en los animales de granja mediante la implementación de programas de salud animal, vacunación y manejo sanitario. Se asegura también que los animales vivan en condiciones que promuevan su bienestar y eviten el sufrimiento innecesario.</li>
            <li><strong>Gestión de la Industria Pecuaria:</strong> Administración de explotaciones pecuarias, incluyendo la planificación y control de la producción, manejo de recursos, y comercialización de productos. Esto también involucra la aplicación de tecnologías y prácticas innovadoras en la industria.</li>
            <li><strong>Sostenibilidad y Medio Ambiente:</strong> Aplicación de prácticas sostenibles en la producción pecuaria para minimizar el impacto ambiental, incluyendo la gestión de residuos, el uso eficiente de recursos, y la implementación de sistemas de producción integrados.</li>
        </ul>
        
        <h4 class="subtitulo">Habilidades Necesarias</h4>
        <ul class="lista-habilidades">
            <li>Conocimientos sólidos en biología y fisiología animal para manejar de manera efectiva la producción y salud de los animales de granja.</li>
            <li>Habilidades en genética y reproducción animal para implementar programas de mejoramiento genético y aumentar la productividad.</li>
            <li>Capacidad de planificación y gestión para administrar explotaciones pecuarias y optimizar la producción de manera sostenible.</li>
            <li>Conocimientos en nutrición animal para formular dietas que maximicen la producción y el bienestar de los animales.</li>
            <li>Compromiso con el bienestar animal y la sostenibilidad, asegurando que las prácticas productivas sean éticas y respetuosas con el medio ambiente.</li>
        </ul>
        
        <h4 class="subtitulo">Personalidad Adecuada</h4>
        <p>Los ingenieros en Zootecnia e Industria Pecuaria suelen ser personas dedicadas y apasionadas por el bienestar animal y la producción sostenible. Son observadores, detallistas y tienen un enfoque analítico, lo que les permite mejorar continuamente los procesos productivos. Suelen ser buenos gestores y comunicadores, capaces de coordinar equipos y trabajar con diferentes actores en la industria pecuaria. También son innovadores, buscando siempre nuevas maneras de optimizar la producción y mejorar el bienestar animal.</p>
        
        <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
        <p>En Bolivia, la Ingeniería en Zootecnia e Industria Pecuaria tiene un mercado laboral diverso y con amplias oportunidades:</p>
        <ul class="lista-oportunidades">
            <li><strong>Granjas y Empresas Pecuarias:</strong> Trabajo en la producción y manejo de ganado, aves, cerdos, y otros animales de granja, enfocándose en la eficiencia productiva y la sostenibilidad.</li>
            <li><strong>Instituciones Públicas y de Investigación:</strong> Participación en programas de mejora genética, sanidad animal, y desarrollo rural, promoviendo la producción pecuaria sostenible.</li>
            <li><strong>Industria Agroalimentaria:</strong> Trabajo en la producción, procesamiento y comercialización de productos de origen animal, asegurando la calidad y seguridad alimentaria.</li>
            <li><strong>Consultoría y Asesoría Técnica:</strong> Asesoramiento a productores y empresas en la implementación de nuevas tecnologías y prácticas para mejorar la productividad y sostenibilidad en la industria pecuaria.</li>
            <li><strong>Proyectos de Desarrollo Rural:</strong> Participación en iniciativas que promuevan el desarrollo rural y la mejora de las condiciones de vida en las comunidades agrícolas.</li>
        </ul>
        
        <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
        <p>Los salarios en Ingeniería en Zootecnia e Industria Pecuaria en Bolivia varían según la especialización, experiencia, y ubicación. Ingenieros que trabajan en la industria agroalimentaria o en proyectos de desarrollo rural pueden encontrar oportunidades bien remuneradas, especialmente aquellos que se especializan en áreas como el mejoramiento genético o la sanidad animal. Con la experiencia, pueden avanzar a roles de mayor responsabilidad, como la dirección de explotaciones pecuarias o consultoría especializada.</p>
        
        <h4 class="subtitulo">Especializaciones</h4>
        <ul class="lista-especializaciones">
            <li><strong>Producción Animal:</strong> Enfoque en la optimización de la cría, alimentación y manejo de animales de granja para maximizar la producción de manera sostenible.</li>
            <li><strong>Mejoramiento Genético:</strong> Desarrollo e implementación de programas de selección genética y cruzamiento para mejorar las características productivas de los animales.</li>
            <li><strong>Sanidad y Bienestar Animal:</strong> Implementación de programas de control de enfermedades, manejo sanitario y bienestar animal en explotaciones pecuarias.</li>
            <li><strong>Gestión Pecuaria:</strong> Administración y optimización de explotaciones pecuarias, incluyendo la planificación de la producción y la comercialización de productos.</li>
            <li><strong>Sostenibilidad en la Producción Pecuaria:</strong> Aplicación de prácticas sostenibles para minimizar el impacto ambiental de la producción pecuaria.</li>
        </ul>
        
        <h4 class="subtitulo">¿Por qué estudiar Ingeniería en Zootecnia e Industria Pecuaria en Bolivia?</h4>
        <ul class="lista-motivos">
            <li><strong>Sector Agropecuario en Crecimiento:</strong> Bolivia tiene un sector agropecuario en expansión, ofreciendo amplias oportunidades para ingenieros en Zootecnia e Industria Pecuaria.</li>
            <li><strong>Diversidad de Climas y Especies:</strong> La diversidad climática y geográfica de Bolivia permite trabajar con una amplia variedad de especies y sistemas de producción, desde el altiplano hasta los llanos.</li>
            <li><strong>Impacto en el Desarrollo Rural:</strong> Los ingenieros en Zootecnia e Industria Pecuaria juegan un papel clave en la mejora de la producción animal y el desarrollo rural sostenible.</li>
            <li><strong>Innovación y Tecnología:</strong> La creciente incorporación de tecnologías en la producción pecuaria ofrece un campo emocionante para la innovación y el desarrollo en Bolivia.</li>
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
    const afinidad = Object.keys(carreras).reduce((acc, carrera) => {
        acc[carrera] = { intereses: 0, habilidades: 0, personalidad: 0 };
        return acc;
    }, {});

    // Procesa cada respuesta seleccionada
    respuestas.forEach(respuesta => {
        const nombrePregunta = respuesta.name;
        const valorRespuesta = parseInt(respuesta.value);

        if (impactoRespuestas[nombrePregunta]) {
            for (const [categoria, carrerasImpacto] of Object.entries(impactoRespuestas[nombrePregunta])) {
                for (const [carrera, impacto] of Object.entries(carrerasImpacto)) {
                    afinidad[carrera][categoria] += valorRespuesta === 1 ? impacto : impacto / 2; // Ajuste de impacto
                }
            }
        }
    });

    // Ordenar las carreras por afinidad total
    const carrerasOrdenadas = Object.keys(afinidad).sort((a, b) => {
        const totalAfinidadA = Object.values(afinidad[a]).reduce((sum, val) => sum + val, 0);
        const totalAfinidadB = Object.values(afinidad[b]).reduce((sum, val) => sum + val, 0);
        return totalAfinidadB - totalAfinidadA;
    });

    // Mostrar las tres carreras con mayor afinidad
    const resultadosDiv = document.getElementById('resultado');
    resultadosDiv.innerHTML = ''; // Limpiar resultados previos

    for (let i = 0; i < Math.min(3, carrerasOrdenadas.length); i++) {
        const carrera = carrerasOrdenadas[i];
        const carreraDiv = document.createElement('div');
        carreraDiv.innerHTML = `<h3>${carrera}</h3><p>${obtenerDescripcionCarrera(carrera)}</p>`;
        resultadosDiv.appendChild(carreraDiv);
    }

    resultadosDiv.style.display = 'block';
    
    // Mostrar el gráfico
    mostrarGrafico(afinidad, carrerasOrdenadas.slice(0, 3));
}

// Función para mostrar un gráfico de afinidad por carrera
function mostrarGrafico(afinidad, carrerasTop3) {
    const ctx = document.getElementById('afinidadChart').getContext('2d');
    const data = {
        labels: carrerasTop3,
        datasets: [{
            label: 'Afinidad',
            data: carrerasTop3.map(carrera => 
                Object.values(afinidad[carrera]).reduce((sum, val) => sum + val, 0)),
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
