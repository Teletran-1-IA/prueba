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
