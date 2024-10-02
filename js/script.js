const carreras = {
    "Medicina": ["intereses", "habilidades", "personalidad"],
    "Odontología": ["intereses", "habilidades", "personalidad"],
    "Enfermería": ["intereses", "habilidades", "personalidad"],
    "Nutrición y Dietética": ["intereses", "habilidades", "personalidad"],
    "Ingeniería Electrónica": ["habilidades", "personalidad"],
    "Ingeniería Eléctrica": ["habilidades", "personalidad"],
    "Ingeniería Civil": ["habilidades", "personalidad"],
    "Administración de Empresas": ["intereses", "habilidades", "personalidad"],
    "Economía": ["intereses", "habilidades", "personalidad"],
    "Medicina Veterinaria y Zootecnia": ["intereses", "habilidades"],
    "Ingeniería en Zootecnia e Industria Pecuaria": ["habilidades", "personalidad"],
    "Ingeniería Agronómica": ["intereses", "habilidades"],
    "Sociología": ["intereses", "personalidad"],
    "Trabajo Social": ["intereses", "personalidad"],
    "Ciencias de la Comunicación Social": ["intereses", "personalidad"],
    "Psicología": ["intereses", "habilidades", "personalidad"],
    "Ciencias del Desarrollo": ["intereses", "personalidad"],
    "Historia": ["intereses"],
    "Lingüística e Idiomas": ["intereses"],
    "Ciencias de la Educación": ["intereses", "habilidades"],
    "Educación Parvularia": ["intereses", "habilidades"],
    "Psicomotricidad y Deportes": ["intereses", "habilidades"],
    "Arquitectura": ["habilidades", "personalidad"],
    "Artes Plásticas": ["habilidades", "personalidad"],
    "Ingeniería de Gas y Petroquímica": ["habilidades"],
    "Derecho": ["intereses", "personalidad"],
    "Ciencias Políticas": ["intereses", "personalidad"],
    "Ingeniería de Sistemas": ["habilidades"],
    "Ciencias Físicas y Energías Alternativas": ["habilidades"],
    "Ingeniería en Producción y Comercialización Agropecuaria": ["habilidades"],
    "Diseño Gráfico": ["habilidades", "personalidad"],
    "Programa de Artes Musicales": ["habilidades", "personalidad"],
    "Bioquímica": ["habilidades"],
    "Química Farmacéutica": ["habilidades"],
    "Ingeniería Geográfica": ["habilidades"],
    "Ingeniería Geológica": ["habilidades"],
    "Biología": ["habilidades"],
    "Ciencias Químicas": ["habilidades"],
    "Estadística": ["habilidades"],
    "Física": ["habilidades"],
    "Informática": ["habilidades"],
    "Matemáticas": ["habilidades"],
    "Antropología y Arqueología": ["intereses", "personalidad"],
    "Bibliotecología y Ciencias de la Información": ["intereses"],
    "Filosofía": ["intereses"],
    "Literatura": ["intereses"],
    "Turismo": ["intereses", "personalidad"],
    "Ingeniería Industrial": ["habilidades"],
    "Ingeniería Mecánica y Electromecánica": ["habilidades"],
    "Ingeniería Metalúrgica y Materiales": ["habilidades"],
    "Ingeniería Petrolera": ["habilidades"],
    "Ingeniería Química": ["habilidades"],
    "Tecnología Médica": ["habilidades"],
    "Aeronáutica": ["habilidades"],
    "Construcciones Civiles": ["habilidades"],
    "Electricidad Industrial": ["habilidades"],
    "Electrónica y Telecomunicaciones": ["habilidades"],
    "Electromecánica": ["habilidades"],
    "Mecánica Automotriz": ["habilidades"],
    "Mecánica Industrial": ["habilidades"],
    "Química Industrial": ["habilidades"],
    "Geodesia, Topografía y Geomática": ["habilidades"]
};

const impactoRespuestas = {
    'a': [
        "Medicina", "Enfermería", "Nutrición y Dietética", "Ingeniería Electrónica",
        "Tecnología en Mecánica Dental", "Medicina Veterinaria y Zootecnia", "Ingeniería Agronómica",
        "Psicología", "Biología", "Ciencias Químicas", "Tecnología Médica"
    ],
    'b': [
        "Ingeniería Civil", "Administración de Empresas", "Economía", "Ingeniería Eléctrica",
        "Ingeniería en Producción Empresarial", "Ingeniería Autotrónica", "Ingeniería Textil",
        "Ingeniería Ambiental", "Contaduría Pública", "Gestión Turística y Hotelera", "Comercio Internacional",
        "Ingeniería en Zootecnia e Industria Pecuaria", "Ingeniería de Sistemas", "Ciencias Físicas y Energías Alternativas",
        "Ingeniería en Producción y Comercialización Agropecuaria", "Ingeniería Industrial", "Ingeniería Mecánica y Electromecánica",
        "Ingeniería Metalúrgica y Materiales", "Ingeniería Petrolera", "Ingeniería Química", "Aeronáutica", "Construcciones Civiles",
        "Electricidad Industrial", "Electrónica y Telecomunicaciones", "Electromecánica", "Mecánica Automotriz", "Mecánica Industrial",
        "Química Industrial", "Geodesia, Topografía y Geomática"
    ],
    'c': [
        "Odontología", "Ingeniería Electrónica", "Economía", "Sociología", "Trabajo Social",
        "Ciencias de la Comunicación Social", "Ciencias del Desarrollo", "Historia", "Lingüística e Idiomas",
        "Ciencias de la Educación", "Educación Parvularia", "Psicomotricidad y Deportes", "Arquitectura", "Artes Plásticas",
        "Ingeniería de Gas y Petroquímica", "Derecho", "Ciencias Políticas", "Diseño Gráfico", "Programa de Artes Musicales",
        "Bioquímica", "Química Farmacéutica", "Ingeniería Geográfica", "Ingeniería Geológica", "Estadística", "Física", "Informática",
        "Matemáticas", "Antropología y Arqueología", "Bibliotecología y Ciencias de la Información", "Filosofía", "Literatura", "Turismo"
    ]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Medicina": "Estudia el cuerpo humano y trata enfermedades para mejorar la salud de las personas.",
        "Odontología": "Cuida de la salud bucodental y realiza tratamientos para mantener la higiene y salud dental.",
        "Enfermería": "Proporciona cuidados médicos y de apoyo a pacientes en diferentes contextos de salud.",
        "Nutrición y Dietética": "Estudia la alimentación y nutrición para promover la salud y prevenir enfermedades.",
        "Tecnología en Mecánica Dental": "Diseña y fabrica prótesis y dispositivos dentales.",
        "Ingeniería Electrónica": "Diseña y desarrolla sistemas electrónicos y dispositivos tecnológicos.",
        "Ingeniería Eléctrica": "Diseña, desarrolla y mantiene sistemas eléctricos y de energía.",
        "Ingeniería Civil": "Planifica, diseña y supervisa la construcción de infraestructuras y edificios.",
        "Ingeniería en Producción Empresarial": "Optimiza procesos de producción y gestión empresarial para mejorar la eficiencia.",
        "Ingeniería Autotrónica": "Integra sistemas electrónicos y mecánicos en vehículos para mejorar su funcionamiento.",
        "Ingeniería Textil": "Desarrolla y mejora procesos de producción de textiles y materiales.",
        "Ingeniería Ambiental": "Estudia y desarrolla soluciones para problemas ambientales y sostenibilidad.",
        "Economía": "Analiza la producción, distribución y consumo de bienes y servicios en la sociedad.",
        "Contaduría Pública": "Gestiona y supervisa la contabilidad y finanzas de organizaciones.",
        "Administración de Empresas": "Gestiona recursos, planifica y dirige operaciones en organizaciones.",
        "Gestión Turística y Hotelera": "Administra y gestiona servicios turísticos y hoteleros.",
        "Comercio Internacional": "Estudia y facilita las transacciones comerciales entre países.",
        "Medicina Veterinaria y Zootecnia": "Cuida de la salud de los animales y gestiona la producción animal.",
        "Ingeniería en Zootecnia e Industria Pecuaria": "Optimiza la producción y gestión de animales de granja.",
        "Ingeniería Agronómica": "Desarrolla técnicas y tecnologías para mejorar la producción agrícola.",
        "Sociología": "Estudia el comportamiento social y las estructuras de las sociedades.",
        "Trabajo Social": "Apoya y ayuda a personas y comunidades en situaciones de vulnerabilidad.",
        "Ciencias de la Comunicación Social": "Estudia los procesos de comunicación y su impacto en la sociedad.",
        "Psicología": "Estudia el comportamiento humano y los procesos mentales para ayudar a las personas.",
        "Ciencias del Desarrollo": "Analiza y promueve el desarrollo económico y social en comunidades.",
        "Historia": "Estudia y analiza eventos pasados para comprender el presente.",
        "Lingüística e Idiomas": "Estudia el lenguaje y la estructura de diferentes idiomas.",
        "Ciencias de la Educación": "Forma y capacita a profesionales de la educación.",
        "Educación Parvularia": "Se enfoca en la educación y desarrollo de niños en edad preescolar.",
        "Psicomotricidad y Deportes": "Promueve el desarrollo físico y motriz a través del deporte y actividades físicas.",
        "Arquitectura": "Diseña y planifica edificios y espacios urbanos.",
        "Artes Plásticas": "Crea y estudia obras de arte visuales como pintura y escultura.",
        "Ingeniería de Gas y Petroquímica": "Desarrolla y optimiza procesos relacionados con el gas y productos petroquímicos.",
        "Derecho": "Estudia y aplica las leyes para resolver conflictos y promover la justicia.",
        "Ciencias Políticas": "Analiza sistemas de gobierno y procesos políticos.",
        "Ingeniería de Sistemas": "Desarrolla y gestiona sistemas informáticos y de software.",
        "Ciencias Físicas y Energías Alternativas": "Estudia la física y desarrolla tecnologías de energía sostenible.",
        "Ingeniería en Producción y Comercialización Agropecuaria": "Optimiza la producción y comercialización de productos agrícolas.",
        "Diseño Gráfico": "Crea y comunica ideas visuales a través de gráficos y diseño.",
        "Programa de Artes Musicales": "Estudia y practica la música en diversas formas y contextos.",
        "Bioquímica": "Estudia las bases químicas de los procesos biológicos.",
        "Química Farmacéutica": "Desarrolla y produce medicamentos y productos farmacéuticos.",
        "Ingeniería Geográfica": "Analiza y gestiona la información geográfica para diversas aplicaciones.",
        "Ingeniería Geológica": "Estudia la tierra y sus procesos para aplicaciones en minería y construcción.",
        "Biología": "Estudia los seres vivos y sus interacciones con el entorno.",
        "Ciencias Químicas": "Estudia las propiedades y reacciones de las sustancias químicas.",
        "Estadística": "Analiza datos para extraer conclusiones y apoyar la toma de decisiones.",
        "Física": "Estudia las leyes fundamentales que gobiernan el universo y la materia.",
        "Informática": "Desarrolla y gestiona sistemas y software informático.",
        "Matemáticas": "Estudia las estructuras y relaciones numéricas y lógicas.",
        "Antropología y Arqueología": "Estudia las culturas humanas y restos materiales del pasado.",
        "Bibliotecología y Ciencias de la Información": "Gestiona y organiza información en bibliotecas y otros entornos.",
        "Filosofía": "Estudia cuestiones fundamentales sobre la existencia, el conocimiento y la ética.",
        "Literatura": "Analiza y crea obras literarias en diversos géneros.",
        "Turismo": "Promueve y gestiona actividades y servicios turísticos.",
        "Ingeniería Industrial": "Optimiza sistemas y procesos en industrias para mejorar la eficiencia.",
        "Ingeniería Mecánica y Electromecánica": "Diseña y mantiene sistemas mecánicos y electromecánicos.",
        "Ingeniería Metalúrgica y Materiales": "Desarrolla y mejora materiales y procesos metalúrgicos.",
        "Ingeniería Petrolera": "Explora y produce petróleo y gas.",
        "Ingeniería Química": "Desarrolla procesos para la producción de productos químicos.",
        "Tecnología Médica": "Aplica tecnología para diagnósticos y tratamientos médicos.",
        "Aeronáutica": "Diseña y mantiene aeronaves y sistemas aeroespaciales.",
        "Construcciones Civiles": "Planifica y ejecuta proyectos de construcción de infraestructuras.",
        "Electricidad Industrial": "Desarrolla y mantiene sistemas eléctricos en entornos industriales.",
        "Electrónica y Telecomunicaciones": "Desarrolla sistemas de comunicación y dispositivos electrónicos.",
        "Electromecánica": "Integra sistemas eléctricos y mecánicos en diversas aplicaciones.",
        "Mecánica Automotriz": "Mantiene y repara vehículos automotores.",
        "Mecánica Industrial": "Diseña y mantiene sistemas y equipos industriales.",
        "Química Industrial": "Aplica procesos químicos en la industria para la producción de bienes.",
        "Geodesia, Topografía y Geomática": "Estudia y representa la tierra para diversas aplicaciones técnicas."
    };
    
    return descripciones[carrera] || "Esta carrera se enfoca en áreas específicas de estudio y práctica profesional.";
}

function verificarRespuestasCompletas() {
    const preguntas = document.querySelectorAll('.pregunta'); // Selecciona todas las preguntas
    let todasCompletas = true;

    preguntas.forEach((pregunta) => {
        const opciones = pregunta.querySelectorAll('input[type="radio"]');
        let respondida = false;

        opciones.forEach((opcion) => {
            if (opcion.checked) {
                respondida = true;
            }
        });

        if (!respondida) {
            todasCompletas = false;
        }
    });

    return todasCompletas;
}

function calcularResultado() {
    if (verificarRespuestasCompletas()) {
        const respuestas = document.querySelectorAll('input[type="radio"]:checked');
        const conteoCarreras = {};

        respuestas.forEach(respuesta => {
            const valorRespuesta = respuesta.value;
            impactoRespuestas[valorRespuesta].forEach(carrera => {
                if (conteoCarreras[carrera]) {
                    conteoCarreras[carrera]++;
                } else {
                    conteoCarreras[carrera] = 1;
                }
            });
        });

        const carrerasOrdenadas = Object.entries(conteoCarreras)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(entry => entry[0]);

        mostrarResultado(carrerasOrdenadas);
    } else {
        // Muestra un mensaje de que el test no está completo
        alert('Por favor, responde todas las preguntas antes de ver el resultado del test.');
        document.getElementById('mensaje-error').innerText = 'Por favor, responde todas las preguntas antes de ver el resultado del test.';
        document.getElementById('mensaje-error').style.display = 'block';
    }
}

function mostrarResultado(carreras) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Las tres carreras sugeridas para ti son:</h2>
        <ul>
            ${carreras.map(carrera => `<li>${carrera}: ${obtenerDescripcionCarrera(carrera)}</li>`).join('')}
        </ul>
    `;
    resultDiv.style.display = 'block';
}