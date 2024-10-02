const carreras = {
    "Física": ["intereses", "habilidades", "personalidad"],
    "Química": ["intereses", "habilidades", "personalidad"],
    "Estadística": ["intereses", "habilidades", "personalidad"],
    "Matemáticas": ["intereses", "habilidades", "personalidad"],
    "Informática": ["intereses", "habilidades", "personalidad"]
};

const impactoRespuestas = {
    '1': [
        "Física", "Química", "Estadística"
    ],
    '2': [
        "Matemáticas", "Informática"
    ],
    '3': [
        "Informática", "Matemáticas"
    ]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Física": "Estudia las leyes fundamentales que rigen el comportamiento del universo.",
        "Química": "Se enfoca en el estudio de la composición, estructura y reacciones de la materia.",
        "Estadística": "Analiza y interpreta datos para tomar decisiones basadas en evidencia.",
        "Matemáticas": "Investiga patrones, estructuras y relaciones abstractas a través de números y fórmulas.",
        "Informática": "Cubre el diseño, desarrollo y gestión de sistemas de computación y software."
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
        "Física": 0,
        "Química": 0,
        "Estadística": 0,
        "Matemáticas": 0,
        "Informática": 0
    };

    // Procesa cada respuesta seleccionada
    respuestas.forEach(respuesta => {
        const valorRespuesta = respuesta.value;
        if (respuesta.name === 'pregunta1') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
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
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
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
