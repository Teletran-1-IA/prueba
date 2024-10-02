const carreras = {
    "Antropología y Arqueología": ["intereses", "habilidades", "personalidad"],
    "Psicología": ["intereses", "habilidades", "personalidad"],
    "Ciencias del Desarrollo": ["intereses", "habilidades", "personalidad"],
    "Ciencias de la Comunicación Social": ["intereses", "habilidades", "personalidad"],
    "Sociología": ["intereses", "habilidades", "personalidad"],
    "Trabajo Social": ["intereses", "habilidades", "personalidad"],
    "Ciencias Políticas y Gestión Pública": ["intereses", "habilidades", "personalidad"],
    "Derecho": ["intereses", "habilidades", "personalidad"],
    "Historia": ["intereses", "habilidades", "personalidad"],
    "Lingüística e Idiomas": ["intereses", "habilidades", "personalidad"]
};

const impactoRespuestas = {
    '1': [
        "Antropología y Arqueología", "Psicología", "Ciencias del Desarrollo"
    ],
    '2': [
        "Ciencias de la Comunicación Social", "Sociología", "Trabajo Social", "Ciencias Políticas y Gestión Pública"
    ],
    '3': [
        "Derecho", "Historia", "Lingüística e Idiomas"
    ]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        /*Antropología y Arqueología*/
        "Antropología y Arqueología": `<div class="carrera">
    <h3 class="titulo-carrera">Antropología y Arqueología</h3>
    <p class="descripcion-carrera">La Antropología y Arqueología son disciplinas académicas dedicadas al estudio integral de la humanidad, su historia, cultura y evolución. Mientras que la Antropología abarca el análisis de las diversas formas de vida humana a lo largo del tiempo, incluyendo aspectos biológicos, sociales y culturales, la Arqueología se enfoca en el estudio de las sociedades humanas pasadas a través de sus restos materiales. Ambas disciplinas buscan comprender la diversidad humana y la historia de las civilizaciones desde sus orígenes hasta la actualidad.</p>
    
    <h4 class="subtitulo">¿Qué implica ser un Antropólogo o Arqueólogo?</h4>
    <ul class="lista-habilidades">
        <li><strong>Estudio de Culturas y Sociedades:</strong> Los antropólogos investigan las diferentes culturas y sociedades, tanto contemporáneas como antiguas, para comprender sus costumbres, creencias, prácticas sociales, y estructuras políticas y económicas.</li>
        <li><strong>Investigación de Restos Materiales:</strong> Los arqueólogos excavan y analizan artefactos, restos arquitectónicos, y otros vestigios materiales para reconstruir la historia de las civilizaciones pasadas, incluyendo su organización social, tecnología, y vida cotidiana.</li>
        <li><strong>Trabajo de Campo:</strong> Tanto antropólogos como arqueólogos realizan trabajo de campo en diversos entornos, desde comunidades rurales hasta sitios arqueológicos, recolectando datos, entrevistas, y objetos que luego serán analizados.</li>
        <li><strong>Análisis e Interpretación de Datos:</strong> Utilizan métodos científicos y técnicas analíticas para interpretar los datos recolectados, construyendo teorías sobre el desarrollo humano, la evolución de las sociedades y la interacción entre diferentes culturas.</li>
        <li><strong>Conservación del Patrimonio Cultural:</strong> Participan en la preservación y gestión del patrimonio cultural y arqueológico, protegiendo sitios históricos y artefactos para futuras generaciones.</li>
    </ul>
    
    <h4 class="subtitulo">Habilidades Necesarias</h4>
    <ul class="lista-habilidades">
        <li>Capacidad de observación y análisis crítico: Habilidad para analizar y sintetizar información compleja sobre la cultura y el comportamiento humano.</li>
        <li>Conocimientos en métodos de investigación: Dominio de técnicas de recolección de datos, entrevistas, excavación arqueológica y análisis de materiales.</li>
        <li>Habilidades de comunicación: Capacidad para presentar hallazgos de manera clara y coherente, tanto de forma oral como escrita.</li>
        <li>Resistencia física y mental: Especialmente para el trabajo de campo, que puede implicar largas horas en condiciones difíciles.</li>
        <li>Aptitud para el trabajo interdisciplinario: Colaboración con otros especialistas en áreas como la historia, biología, geología y lingüística.</li>
    </ul>
    
    <h4 class="subtitulo">Personalidad Adecuada</h4>
    <p>Los antropólogos y arqueólogos suelen ser personas curiosas, con un fuerte deseo de entender las raíces y la diversidad de la experiencia humana. Son observadores, pacientes y meticulosos en su trabajo, ya que a menudo requieren de largos periodos de investigación y análisis detallado. También deben ser abiertos y respetuosos de las diferentes culturas, y tener la capacidad de adaptarse a diferentes entornos y contextos.</p>
    
    <h4 class="subtitulo">Mercado Laboral en Bolivia</h4>
    <p>En Bolivia, el campo de la Antropología y Arqueología ofrece diversas oportunidades:</p>
    <ul class="lista-oportunidades">
        <li><strong>Investigación Académica:</strong> Trabajo en universidades y centros de investigación, realizando estudios sobre culturas locales, evolución humana, y la historia precolombina.</li>
        <li><strong>Museos y Patrimonio Cultural:</strong> Empleo en museos y organizaciones dedicadas a la preservación y exhibición del patrimonio arqueológico y cultural.</li>
        <li><strong>Proyectos Arqueológicos:</strong> Participación en excavaciones y estudios arqueológicos, tanto en Bolivia como en otras regiones, colaborando con instituciones nacionales e internacionales.</li>
        <li><strong>Consultoría en Desarrollo Social:</strong> Colaboración con ONGs y organismos gubernamentales en proyectos de desarrollo comunitario, políticas culturales y programas de preservación del patrimonio.</li>
        <li><strong>Gestión del Patrimonio:</strong> Trabajo en la protección y gestión de sitios arqueológicos, monumentos y bienes culturales, garantizando su conservación para el futuro.</li>
    </ul>
    
    <h4 class="subtitulo">Salarios y Oportunidades de Crecimiento</h4>
    <p>Los salarios en Antropología y Arqueología en Bolivia varían según el sector y la experiencia. Profesionales en la academia o en grandes proyectos arqueológicos pueden obtener salarios competitivos, mientras que el trabajo en museos y ONG puede depender de la financiación de proyectos. Con experiencia, los antropólogos y arqueólogos pueden asumir roles de liderazgo en investigación, gestión de patrimonio o consultoría.</p>
    
    <h4 class="subtitulo">Especializaciones</h4>
    <ul class="lista-especializaciones">
        <li><strong>Antropología Social y Cultural:</strong> Estudio de las culturas contemporáneas y su evolución, con un enfoque en la estructura social, religión, economía y política.</li>
        <li><strong>Antropología Física o Biológica:</strong> Investigación sobre la evolución humana, genética, y la variación biológica entre diferentes poblaciones humanas.</li>
        <li><strong>Arqueología Precolombina:</strong> Enfoque en el estudio de las civilizaciones precolombinas en América Latina, incluyendo culturas como los Tiwanaku, Inca y otras.</li>
        <li><strong>Etnografía:</strong> Metodología de estudio centrada en la observación y descripción detallada de las prácticas culturales de una comunidad.</li>
        <li><strong>Conservación y Restauración:</strong> Especialización en la protección y restauración de artefactos y sitios arqueológicos, asegurando su preservación.</li>
    </ul>
    
    <h4 class="subtitulo">¿Por qué estudiar Antropología y Arqueología en Bolivia?</h4>
    <ul class="lista-motivos">
        <li><strong>Riqueza Cultural e Histórica:</strong> Bolivia cuenta con una diversidad cultural y una historia arqueológica rica y poco explorada, ofreciendo un campo de estudio vasto y único.</li>
        <li><strong>Patrimonio Arqueológico:</strong> El país alberga importantes sitios arqueológicos como Tiwanaku, que brindan oportunidades para la investigación y conservación de la herencia precolombina.</li>
        <li><strong>Contribución al Desarrollo Social:</strong> Los antropólogos y arqueólogos pueden influir en la política pública, trabajando para proteger las culturas indígenas y promover la diversidad cultural.</li>
        <li><strong>Oportunidades de Investigación Internacional:</strong> Bolivia está cada vez más integrada en redes de investigación arqueológica y antropológica global, proporcionando oportunidades para colaboración internacional y estudios comparativos.</li>
    </ul>
</div>
`,
        "Psicología": ``,
        "Ciencias del Desarrollo": ``,
        "Ciencias de la Comunicación Social": ``,
        "Sociología": ``,
        "Trabajo Social": ``,
        "Ciencias Políticas y Gestión Pública": ``,
        "Derecho": ``,
        "Historia": ``,
        "Lingüística e Idiomas": ``
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
        "Antropología y Arqueología": 0,
        "Psicología": 0,
        "Ciencias del Desarrollo": 0,
        "Ciencias de la Comunicación Social": 0,
        "Sociología": 0,
        "Trabajo Social": 0,
        "Ciencias Políticas y Gestión Pública": 0,
        "Derecho": 0,
        "Historia": 0,
        "Lingüística e Idiomas": 0
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
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
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
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }

        if (respuesta.name === 'pregunta8') {
            if (valorRespuesta === '1') {
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
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


//