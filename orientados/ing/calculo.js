const carreras = {
    "Ingeniería Civil": { personalidad: 3, habilidades: 5, intereses: 4 },
    "Ingeniería Petrolera": { personalidad: 3, habilidades: 5, intereses: 4 },
    "Ingeniería Química": { personalidad: 4, habilidades: 4, intereses: 3 },
    "Ingeniería Electrónica": { personalidad: 3, habilidades: 5, intereses: 5 },
    "Ingeniería Industrial": { personalidad: 4, habilidades: 3, intereses: 4 },
    "Ingeniería Mecánica y Electromecánica": { personalidad: 4, habilidades: 4, intereses: 5 },
    "Ingeniería Metalúrgica y de Materiales": { personalidad: 3, habilidades: 4, intereses: 3 },
    "Ingeniería Ambiental": { personalidad: 5, habilidades: 3, intereses: 5 },
    "Ingeniería Eléctrica": { personalidad: 3, habilidades: 5, intereses: 4 },
    "Ingeniería en Producción Empresarial": { personalidad: 4, habilidades: 3, intereses: 4 },
    "Ingeniería Autotrónica": { personalidad: 3, habilidades: 5, intereses: 5 },
    "Ingeniería Textil": { personalidad: 4, habilidades: 3, intereses: 3 },
    "Ingeniería de Sistemas": { personalidad: 4, habilidades: 5, intereses: 5 },
    "Ingeniería de Software": { personalidad: 4, habilidades: 5, intereses: 5 },
    "Ingeniería en Telecomunicaciones": { personalidad: 3, habilidades: 5, intereses: 4 },
    "Ingeniería Biomédica": { personalidad: 5, habilidades: 4, intereses: 4 },
    "Ingeniería en Energías Renovables": { personalidad: 4, habilidades: 4, intereses: 5 }
};

// Función para obtener las respuestas del usuario
function obtenerRespuestas() {
    const respuestas = {};
    let todasRespondidas = true;

    // Recolectar respuestas de las preguntas
    for (let i = 1; i <= 9; i++) {
        const pregunta = `pregunta${i}`;
        const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (respuestaSeleccionada) {
            respuestas[pregunta] = parseInt(respuestaSeleccionada.value);
        } else {
            respuestas[pregunta] = 0;  // Si no ha seleccionado ninguna respuesta
            todasRespondidas = false;  // Marca que no están todas respondidas
        }
    }

    return { respuestas, todasRespondidas };
}

// Función para calcular los resultados de afinidad
function calcularResultado() {
    const { respuestas, todasRespondidas } = obtenerRespuestas();
    const pesos = { personalidad: 0.4, habilidades: 0.3, intereses: 0.3 };

    // Afinidades de carreras
    const afinidades = {};
    for (const carrera in carreras) {
        let afinidad = 0;

        // Ponderación de respuestas sobre las carreras según la afinidad específica
        afinidad += respuestas.pregunta1 * carreras[carrera].personalidad * pesos.personalidad; // Pregunta de personalidad
        afinidad += respuestas.pregunta4 * carreras[carrera].habilidades * pesos.habilidades;  // Pregunta de habilidades
        afinidad += respuestas.pregunta7 * carreras[carrera].intereses * pesos.intereses;    // Pregunta de intereses

        afinidades[carrera] = afinidad;
    }

    // Ordenar carreras por afinidades
    const carrerasOrdenadas = Object.keys(afinidades).sort((a, b) => afinidades[b] - afinidades[a]);

    // Mostrar las 3 mejores opciones si todas las preguntas están respondidas
    if (todasRespondidas) {
        mostrarResultados(carrerasOrdenadas.slice(0, 3));
    }
}

// Función para mostrar los resultados
function mostrarResultados(carreras) {
    const carrerasRecomendadas = document.getElementById("carrerasRecomendadas");
    carrerasRecomendadas.innerHTML = "<h3>Carreras recomendadas:</h3>";
    carreras.forEach(carrera => {
        carrerasRecomendadas.innerHTML += `<p>${carrera}</p>`;
    });
}

// Asignar el evento 'onchange' a las preguntas para hacer el cálculo dinámico
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', calcularResultado);
});
