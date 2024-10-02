const carreras = {
    "Aeronáutica": ["intereses", "habilidades", "personalidad"],
    "Construcciones Civiles": ["intereses", "habilidades", "personalidad"],
    "Electricidad Industrial": ["intereses", "habilidades", "personalidad"],
    "Electrónica y Telecomunicaciones": ["intereses", "habilidades", "personalidad"],
    "Electromecánica": ["intereses", "habilidades", "personalidad"],
    "Mecánica Automotriz": ["intereses", "habilidades", "personalidad"],
    "Mecánica Industrial": ["intereses", "habilidades", "personalidad"],
    "Química Industrial": ["intereses", "habilidades", "personalidad"],
    "Geodesia, Topografía y Geomática": ["intereses", "habilidades", "personalidad"],
    "Bioquímica": ["intereses", "habilidades", "personalidad"],
    "Química Farmacéutica": ["intereses", "habilidades", "personalidad"]
};

const impactoRespuestas = {
    '1': ["Aeronáutica", "Construcciones Civiles", "Electricidad Industrial"],
    '2': ["Electrónica y Telecomunicaciones", "Electromecánica", "Mecánica Automotriz", "Mecánica Industrial", "Química Industrial", "Geodesia, Topografía y Geomática"],
    '3': ["Bioquímica", "Química Farmacéutica"]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Aeronáutica": "La carrera de Aeronáutica se centra en el diseño, construcción y mantenimiento de aeronaves y sistemas aeroespaciales. Los profesionales en esta área trabajan en la innovación de tecnologías de vuelo, seguridad aeronáutica y la optimización de los sistemas de navegación aérea.",
        "Construcciones Civiles": "La carrera de Construcciones Civiles se enfoca en el diseño, construcción y mantenimiento de infraestructuras como edificios, puentes, carreteras y sistemas de abastecimiento. Los ingenieros civiles juegan un papel crucial en la creación de infraestructuras sostenibles y seguras.",
        "Electricidad Industrial": "La carrera de Electricidad Industrial se especializa en la instalación, mantenimiento y diseño de sistemas eléctricos en entornos industriales. Esto incluye la optimización de maquinaria eléctrica, sistemas de automatización y redes eléctricas industriales.",
        "Electrónica y Telecomunicaciones": "La carrera de Electrónica y Telecomunicaciones se centra en el diseño y desarrollo de sistemas electrónicos y de comunicación. Esto abarca desde el diseño de circuitos hasta la implementación de redes de telecomunicaciones avanzadas.",
        "Electromecánica": "La carrera de Electromecánica combina conocimientos de mecánica y electricidad para el diseño, mantenimiento y mejora de sistemas electromecánicos. Esto incluye la automatización industrial, maquinaria compleja y sistemas robóticos.",
        "Mecánica Automotriz": "La carrera de Mecánica Automotriz se enfoca en el diseño, mantenimiento y reparación de vehículos automotores. Los profesionales en esta área trabajan en la optimización de motores, sistemas de transmisión, y tecnologías de vehículos eléctricos e híbridos.",
        "Mecánica Industrial": "La carrera de Mecánica Industrial se dedica al diseño, fabricación y mantenimiento de maquinaria y sistemas industriales. Los ingenieros en esta área optimizan procesos de manufactura, aseguran la eficiencia en la producción y mejoran la maquinaria industrial.",
        "Química Industrial": "La carrera de Química Industrial se centra en la aplicación de principios químicos para la producción de bienes y servicios. Esto incluye el desarrollo de nuevos materiales, procesos de manufactura sostenible y la optimización de procesos químicos en la industria.",
        "Geodesia, Topografía y Geomática": "La carrera de Geodesia, Topografía y Geomática se especializa en la medición y representación de la superficie terrestre. Los profesionales en esta área trabajan en proyectos de mapeo, planificación territorial y la gestión de recursos naturales.",
        "Bioquímica": "La carrera de Bioquímica se enfoca en el estudio de las reacciones químicas que ocurren en los organismos vivos. Los bioquímicos trabajan en investigación, desarrollo de medicamentos, biotecnología y análisis clínicos.",
        "Química Farmacéutica": "La carrera de Química Farmacéutica se centra en el diseño, desarrollo y producción de medicamentos. Los profesionales en esta área trabajan en la investigación de nuevos fármacos, asegurando la calidad y seguridad de los productos farmacéuticos."
    };

    return descripciones[carrera] || "Descripción no disponible.";
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
        "Aeronáutica": 0,
        "Construcciones Civiles": 0,
        "Electricidad Industrial": 0,
        "Electrónica y Telecomunicaciones": 0,
        "Electromecánica": 0,
        "Mecánica Automotriz": 0,
        "Mecánica Industrial": 0,
        "Química Industrial": 0,
        "Geodesia, Topografía y Geomática": 0,
        "Bioquímica": 0,
        "Química Farmacéutica": 0
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
                afinidad.intereses += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.intereses += 1; // Incrementa ligeramente
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
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
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
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
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
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Las tres carreras sugeridas para ti son:</h2>
        <ul>
            ${carreras.map(carrera => `<li>${carrera}: ${obtenerDescripcionCarrera(carrera)}</li>`).join('')}
        </ul>
    `;

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
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)' // Añadido un color más para el cuarto valor
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)' // Añadido un color más para el cuarto valor
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

    resultDiv.style.display = 'block';
}
