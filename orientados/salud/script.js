const carreras = {
    "Medicina": ["intereses", "habilidades", "personalidad"],
    "Odontología": ["intereses", "habilidades", "personalidad"],
    "Nutrición y Dietética": ["intereses", "habilidades", "personalidad"],
    "Enfermería": ["intereses", "habilidades", "personalidad"],
    "Tecnología Médica": ["intereses", "habilidades", "personalidad"]
};

const impactoRespuestas = {
    '1': [
        "Medicina", "Odontología", "Nutrición y Dietética"
    ],
    '2': [
        "Enfermería", "Tecnología Médica", "Nutrición y Dietética"
    ],
    '3': [
        "Enfermería", "Tecnología Médica", "Odontología"
    ]
};

function obtenerDescripcionCarrera(carrera) {
    const descripciones = {
        "Medicina": ``,
        "Odontología": `<div class="carrera">
        <h3 class="titulo-carrera">Odontología en Bolivia</h3>
        <p class="descripcion-carrera">La <strong>carrera de Odontología</strong> en Bolivia se enfoca en la formación de profesionales capacitados para diagnosticar, prevenir y tratar enfermedades bucodentales. Esta disciplina es esencial para la salud pública y el bienestar de la población, y su desarrollo ha sido significativo en el país. A continuación, se presenta una descripción detallada de esta carrera, su perfil profesional, áreas de acción y las instituciones que la ofrecen.</p>
    
        <h4 class="subtitulo">Perfil Profesional</h4>
        <p>El odontólogo está preparado para:</p>
        <ul class="lista-habilidades">
            <li><strong>Realizar diagnósticos precisos</strong> sobre condiciones bucodentales.</li>
            <li><strong>Desarrollar planes de tratamiento</strong> individualizados para cada paciente.</li>
            <li><strong>Ejecutar procedimientos clínicos</strong> como extracciones, endodoncias (tratamientos de conducto), ortodoncia y cirugía bucal.</li>
            <li><strong>Promover la salud oral</strong> a través de la educación y prevención.</li>
        </ul>
    
        <h4 class="subtitulo">Áreas de Acción</h4>
        <p>Los graduados en Odontología pueden desempeñarse en diversas áreas, tales como:</p>
        <ul class="lista-areas">
            <li><strong>Odontología General:</strong> Atención integral a pacientes, realizando tratamientos preventivos y curativos.</li>
            <li><strong>Odontopediatría:</strong> Especialización en el tratamiento dental de niños y adolescentes.</li>
            <li><strong>Ortodoncia:</strong> Corrección de dientes y mandíbulas desalineadas mediante aparatos ortodónticos.</li>
            <li><strong>Implantología:</strong> Inserción de implantes dentales para reemplazar dientes perdidos.</li>
            <li><strong>Rehabilitación Oral:</strong> Restauración de dientes dañados o perdidos utilizando prótesis fijas o removibles.</li>
            <li><strong>Cirugía Bucal:</strong> Realización de procedimientos quirúrgicos relacionados con la cavidad oral.</li>
        </ul>
    
        <h4 class="subtitulo">Instituciones que Ofrecen la Carrera</h4>
        <ul class="lista-instituciones">
            <li><strong>Universidad Mayor de San Andrés (UMSA):</strong> Ofrece un programa completo con un enfoque práctico que incluye asignaturas como anatomía, patología bucal, y cirugía dental.</li>
            <li><strong>Universidad Autónoma Gabriel René Moreno (UAGRM):</strong> Proporciona formación sólida en odontología con énfasis en atención clínica y salud pública.</li>
            <li><strong>Universidad Privada Franz Tamayo (Unifranz):</strong> Se centra en el desarrollo práctico y teórico, preparando a los estudiantes para enfrentar los desafíos del sector dental.</li>
            <li><strong>Universidad San Francisco Xavier (USFX):</strong> Ofrece un currículo integral que abarca aspectos clínicos y teóricos esenciales para la práctica odontológica.</li>
            <li><strong>Universidad Cristiana de Bolivia (UCEBOL):</strong> Proporciona una formación académica sólida con un enfoque en el desarrollo ético y profesional del odontólogo.</li>
        </ul>
    
        <h4 class="subtitulo">Conclusión</h4>
        <p>La carrera de Odontología en Bolivia es fundamental para mejorar la salud bucal de la población. Los profesionales formados en esta área no solo adquieren habilidades técnicas esenciales, sino que también desarrollan una comprensión profunda de la importancia de la salud oral en el bienestar general. Con un enfoque creciente en especialidades como la implantología y la rehabilitación estética, los odontólogos bolivianos están bien preparados para atender las necesidades del mercado y contribuir a la salud pública del país.</p>
    </div> `,
        "Nutrición y Dietética": "Estudia la alimentación y su impacto en la salud, desarrollando planes alimenticios adecuados.",
        "Enfermería": `<div class="carrera">
    <h3 class="titulo-carrera">Enfermería en Bolivia</h3>
    <p class="descripcion-carrera">La <strong>carrera de Enfermería</strong> en Bolivia se centra en la formación de profesionales capacitados para brindar atención integral a la salud, abarcando desde el cuidado directo de los pacientes hasta la gestión y administración de servicios de salud. A continuación se presenta una descripción detallada de esta carrera, su perfil profesional, áreas de acción y las instituciones que la ofrecen.</p>

    <h4 class="subtitulo">Perfil Profesional</h4>
    <p>El profesional en enfermería está preparado para:</p>
    <ul class="lista-habilidades">
        <li><strong>Proporcionar cuidados de salud</strong> a personas, familias y comunidades.</li>
        <li><strong>Diagnosticar problemas de salud</strong> y desarrollar planes de cuidado.</li>
        <li><strong>Administrar tratamientos médicos</strong> y medicamentos bajo prescripción.</li>
        <li><strong>Participar en la educación y promoción</strong> de la salud en diferentes contextos.</li>
        <li><strong>Colaborar con otros profesionales</strong> del área de la salud en equipos multidisciplinarios.</li>
    </ul>

    <h4 class="subtitulo">Áreas de Acción</h4>
    <p>Los graduados en Enfermería pueden desempeñarse en diversas áreas, tales como:</p>
    <ul class="lista-areas">
        <li><strong>Atención Clínica:</strong> Provisión de cuidados directos a pacientes en hospitales, clínicas y centros de salud.</li>
        <li><strong>Salud Pública:</strong> Implementación de programas de prevención y promoción de la salud en comunidades.</li>
        <li><strong>Educación y Capacitación:</strong> Formación de futuros profesionales en instituciones educativas o capacitación continua del personal existente.</li>
        <li><strong>Investigación:</strong> Desarrollo de estudios que contribuyan al avance del conocimiento en el campo de la enfermería y la salud.</li>
        <li><strong>Gestión y Administración:</strong> Organización y supervisión de servicios de enfermería en diferentes niveles del sistema sanitario.</li>
    </ul>

    <h4 class="subtitulo">Instituciones que Ofrecen la Carrera</h4>
    <ul class="lista-instituciones">
        <li><strong>Universidad Mayor de San Andrés (UMSA):</strong> Con 75 años de trayectoria, esta universidad forma profesionales con un enfoque crítico y comprometido con las políticas de salud del país.</li>
        <li><strong>Universidad Evangélica Boliviana (UEB):</strong> Ofrece un plan de estudios centrado en lo profesional, personal y productivo, preparando a los estudiantes para el cuidado integral.</li>
        <li><strong>Universidad Autónoma Gabriel René Moreno (UAGRM):</strong> La carrera tiene una duración de cinco años y se ofrece en varias localidades del departamento de Santa Cruz.</li>
        <li><strong>Universidad Pública de El Alto (UPEA):</strong> Ofrece una formación integral con un enfoque práctico, preparando a los estudiantes para desempeñarse efectivamente en diversas áreas.</li>
        <li><strong>Universidad Técnica de Oruro (UTO):</strong> Su programa está diseñado para formar profesionales competentes que respondan a las necesidades del sistema sanitario.</li>
    </ul>

    <h4 class="subtitulo">Conclusión</h4>
    <p>La carrera de Enfermería en Bolivia es esencial para el desarrollo del sistema de salud del país. Los profesionales formados no solo adquieren habilidades técnicas, sino que también desarrollan una fuerte ética profesional y un compromiso social hacia el bienestar comunitario. Con un enfoque creciente en la investigación y la educación, los enfermeros bolivianos están bien preparados para enfrentar los desafíos del sector salud tanto a nivel nacional como internacional.</p>
</div> `,
        "Tecnología Médica": `<div class="carrera">
    <h3 class="titulo-carrera">Tecnología Médica en Bolivia</h3>
    <p class="descripcion-carrera">La <strong>carrera de Tecnología Médica</strong> en Bolivia se enfoca en la formación de profesionales que aplican conocimientos técnicos y científicos en el diagnóstico, tratamiento y prevención de enfermedades. Esta disciplina es fundamental para el funcionamiento eficiente de los sistemas de salud, ya que los tecnólogos médicos desempeñan un papel crucial en diversas áreas clínicas y de laboratorio.</p>

    <h4 class="subtitulo">Perfil Profesional</h4>
    <p>El tecnólogo médico está capacitado para:</p>
    <ul class="lista-habilidades">
        <li><strong>Realizar exámenes y pruebas diagnósticas</strong> en laboratorios clínicos.</li>
        <li><strong>Interpretar resultados de análisis</strong> y colaborar en la toma de decisiones médicas.</li>
        <li><strong>Ejecutar procedimientos</strong> en áreas como bioanálisis, radiología y fisioterapia.</li>
        <li><strong>Participar en la investigación</strong> y desarrollo de nuevas tecnologías y métodos diagnósticos.</li>
        <li><strong>Promover la salud pública</strong> a través de programas de prevención y educación.</li>
    </ul>

    <h4 class="subtitulo">Áreas de Acción</h4>
    <p>Los graduados pueden desempeñarse en diversas especialidades, tales como:</p>
    <ul class="lista-areas">
        <li><strong>Laboratorio Clínico:</strong> Realización de pruebas en microbiología, hematología, bioquímica y anatomía patológica.</li>
        <li><strong>Radiología:</strong> Uso de tecnologías de imagen para el diagnóstico médico, incluyendo rayos X, ultrasonido y resonancia magnética.</li>
        <li><strong>Fisioterapia:</strong> Evaluación y tratamiento de pacientes con problemas físicos mediante técnicas terapéuticas.</li>
        <li><strong>Banco de Sangre:</strong> Manejo y análisis de donaciones de sangre, así como la preparación para transfusiones.</li>
        <li><strong>Salud Pública:</strong> Implementación de programas comunitarios para la prevención de enfermedades y promoción del bienestar.</li>
    </ul>

    <h4 class="subtitulo">Instituciones que Ofrecen la Carrera</h4>
    <ul class="lista-instituciones">
        <li><strong>Universidad Mayor de San Andrés (UMSA):</strong> Ofrece un programa integral que prepara a los estudiantes con una sólida base teórica y práctica en tecnología médica.</li>
        <li><strong>Universidad Autónoma Gabriel René Moreno (UAGRM):</strong> Proporciona formación técnica y científica enfocada en las necesidades del sistema sanitario boliviano.</li>
        <li><strong>Universidad Técnica de Oruro (UTO):</strong> Su programa abarca diversas especialidades, preparando a los estudiantes para enfrentar los desafíos del sector salud.</li>
        <li><strong>Universidad Privada Franz Tamayo (Unifranz):</strong> Se centra en el desarrollo práctico y teórico, formando profesionales competentes en tecnología médica.</li>
        <li><strong>Instituto Tecnológico Santa Cruz (ITSC):</strong> Ofrece un enfoque práctico en la formación, preparando a los estudiantes para trabajar en entornos clínicos reales.</li>
    </ul>

    <h4 class="subtitulo">Conclusión</h4>
    <p>La carrera de Tecnología Médica en Bolivia es esencial para el desarrollo del sistema de salud del país. Los tecnólogos médicos no solo adquieren habilidades técnicas, sino que también desarrollan una comprensión profunda del impacto que su trabajo tiene en la salud pública. Con un enfoque creciente en la investigación y la innovación tecnológica, estos profesionales están bien preparados para contribuir significativamente al bienestar social y a la mejora continua del sistema sanitario boliviano.</p>
</div>  `
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
        "Medicina": 0,
        "Odontología": 0,
        "Nutrición y Dietética": 0,
        "Enfermería": 0,
        "Tecnología Médica": 0
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
                afinidad.personalidad += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.personalidad += 1; // Incrementa ligeramente
            }
        }
        if (respuesta.name === 'pregunta14') {
            if (valorRespuesta === '1') {
                afinidad.habilidades += 2; // Incrementa significativamente
            } else if (valorRespuesta === '2') {
                afinidad.habilidades += 1; // Incrementa ligeramente
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
