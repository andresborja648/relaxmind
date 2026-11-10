/* ==========================================================================
   CONTROL DE ROLES Y VISTAS
   ========================================================================== */

let miGraficoPowerBI = null;
let relaxCurrentIndex = 0;
let currentRelaxTimeLeft = 15;
let relaxIntervalTimer = null;
let cuentaRegresivaInterval = null;
let enPausaOtestActivo = false;

const fasesRelajacion = [
    { badge: "Fase 1: Hombros y Cuello", titulo: "Deja caer los hombros", desc: "Desaprieta la mandíbula, separa los dientes suavemente y permite que los hombros caigan relajados hacia abajo.", icono: "💆‍♂️" },
    { badge: "Fase 2: Espalda y Postura", titulo: "Suelta la presión lumbar", desc: "Apoya la espalda cómodamente en el espaldar de la silla. Permite que la columna descanse sin esfuerzo.", icono: "🪑" },
    { badge: "Fase 3: Manos y Brazos", titulo: "Afloja los puños", desc: "Reposa las manos sueltas sobre las piernas. Siente cómo se libera la tensión de los dedos y las muñecas.", icono: "🤲" },
    { badge: "Fase 4: Rostro y Expresión", titulo: "Relaja el entrecejo", desc: "Suelta la tensión en la frente y alrededor de los ojos. Permite que los músculos de la cara se aflojen.", icono: "🌿" },
    { badge: "Fase 5: Quietud y Apoyo", titulo: "Contacto con el suelo", desc: "Siente firme el apoyo de los pies sobre el piso. Permanece en silencio respirando de forma pacífica.", icono: "🧘" }
];

document.addEventListener('DOMContentLoaded', () => {
    let tiempoGuardadoAdmin = localStorage.getItem('tornillo_config_tiempo');
    if (!tiempoGuardadoAdmin) {
        localStorage.setItem('tornillo_config_tiempo', '0.5'); // 30 segundos
        document.getElementById('inputAdminTiempo').value = '0.5';
    } else {
        document.getElementById('inputAdminTiempo').value = tiempoGuardadoAdmin;
    }

    iniciarTemporizadorDescanso();
    cambiarRol();
    inicializarGraficoPowerBI();
});

function cambiarRol() {
    const rol = document.getElementById('selectRol').value;
    const vistaAdmin = document.getElementById('vistaAdmin');
    const vistaUsuario = document.getElementById('vistaUsuario');

    if (rol === 'admin') {
        vistaAdmin.style.display = 'block';
        vistaUsuario.style.display = 'none';
        actualizarDashboardAdmin();
    } else {
        vistaAdmin.style.display = 'none';
        vistaUsuario.style.display = 'block';
    }
}

function cambiarSeccion(idSeccion, elementoBoton) {
    document.querySelectorAll('.section-view').forEach(seccion => seccion.classList.remove('active'));
    document.querySelectorAll('.main-tab').forEach(boton => boton.classList.remove('active'));
    document.getElementById(idSeccion).classList.add('active');
    elementoBoton.classList.add('active');
}

/* ==========================================================================
   TEMPORIZADOR Y MODAL
   ========================================================================== */
function guardarConfiguracionAdmin() {
    let nuevoTiempo = document.getElementById('inputAdminTiempo').value;
    localStorage.setItem('tornillo_config_tiempo', nuevoTiempo);
    alert("✓ Configuración guardada. Ciclo automático a " + (nuevoTiempo * 60) + " segundos.");
}

function iniciarTemporizadorDescanso() {
    clearInterval(cuentaRegresivaInterval);
    enPausaOtestActivo = false;

    let minutosConfigurados = parseFloat(localStorage.getItem('tornillo_config_tiempo') || '0.5');
    let tiempoRestante = Math.round(minutosConfigurados * 60);
    const display = document.getElementById('timerRestante');

    cuentaRegresivaInterval = setInterval(() => {
        if (enPausaOtestActivo) return;

        let min = Math.floor(tiempoRestante / 60);
        let seg = tiempoRestante % 60;
        if (display) display.innerText = `${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`;

        if (--tiempoRestante < 0) {
            clearInterval(cuentaRegresivaInterval);
            if (display) display.innerText = "00:00";
            abrirModalTest();
        }
    }, 1000);
}

function abrirModalTest() {
    enPausaOtestActivo = true;
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.getElementById('modalTestDescanso').classList.add('active');
}

function cerrarModalTest() {
    document.getElementById('modalTestDescanso').classList.remove('active');
}

/* ==========================================================================
   PROCESAR TEST POR VENDEDOR ESPECÍFICO
   ========================================================================== */
function enviarTestCompleto() {
    const vendedorId = document.getElementById('selectVendedorActual').value; // 'carlos' o 'ana'
    const p1 = document.querySelector('input[name="p1"]:checked');
    const p2 = document.querySelector('input[name="p2"]:checked');
    const p3 = document.querySelector('input[name="p3"]:checked');
    const p4 = document.querySelector('input[name="p4"]:checked');

    if (!p1 || !p2 || !p3 || !p4) {
        alert("Por favor responde todas las preguntas de la autoevaluación.");
        return;
    }

    const prefijo = 'vendedor_' + vendedorId + '_';
    localStorage.setItem(prefijo + 'test_q1', p1.value);
    localStorage.setItem(prefijo + 'test_q2', p2.value);
    localStorage.setItem(prefijo + 'test_q3', p3.value);
    localStorage.setItem(prefijo + 'test_q4', p4.value);

    let testsU = parseInt(localStorage.getItem(prefijo + 'tests_completados') || '0') + 1;
    localStorage.setItem(prefijo + 'tests_completados', testsU);

    let pausasU = parseInt(localStorage.getItem(prefijo + 'pausas_count') || '0') + 1;
    localStorage.setItem(prefijo + 'pausas_count', pausasU);

    let totalTests = parseInt(localStorage.getItem('tornillo_tests_completados') || '0') + 1;
    localStorage.setItem('tornillo_tests_completados', totalTests);

    let totalPausas = parseInt(localStorage.getItem('tornillo_pausas_count') || '0') + 1;
    localStorage.setItem('tornillo_pausas_count', totalPausas);

    let conteoFatiga = JSON.parse(localStorage.getItem('tornillo_conteo_fatiga') || '{"Fresco":0, "Leve":0, "Moderada":0, "Exhausto":0}');
    if (p1.value.includes("Fresco")) conteoFatiga.Fresco++;
    else if (p1.value.includes("Ligeramente")) conteoFatiga.Leve++;
    else if (p1.value.includes("Fatiga moderada")) conteoFatiga.Moderada++;
    else conteoFatiga.Exhausto++;
    localStorage.setItem('tornillo_conteo_fatiga', JSON.stringify(conteoFatiga));

    cerrarModalTest();

    const tieneFatigaAlta = p1.value.includes("Fatiga moderada") || p1.value.includes("Exhausto");
    const tieneEstresAlto = p2.value.includes("Estresado") || p2.value.includes("Muy tenso");

    if (tieneFatigaAlta || tieneEstresAlto) {
        alert("⚠️ Nivel elevado de tensión detectado. Iniciando Pausa de Relajación.");
        iniciarPausaRelajacionGuiada();
    } else {
        alert("✓ Autoevaluación registrada correctamente.");
        iniciarTemporizadorDescanso();
    }
}

/* ==========================================================================
   PAUSA DE RELAJACIÓN GUIADA
   ========================================================================== */
function iniciarPausaRelajacionGuiada() {
    enPausaOtestActivo = true;
    document.getElementById('panelControlTimer').style.display = 'none';
    document.getElementById('pause-decision-card').style.display = 'none';
    document.getElementById('guide-content-box').style.display = 'block';
    document.getElementById('pause-view-relajacion').classList.add('active');

    relaxCurrentIndex = 0;
    currentRelaxTimeLeft = 15;
    mostrarFaseRelajacionActual();

    clearInterval(relaxIntervalTimer);
    relaxIntervalTimer = setInterval(() => {
        currentRelaxTimeLeft--;
        const timerEl = document.getElementById('relax-step-timer');
        if (timerEl) timerEl.textContent = `${currentRelaxTimeLeft}s`;

        if (currentRelaxTimeLeft <= 0) {
            relaxCurrentIndex++;
            if (relaxCurrentIndex < fasesRelajacion.length) {
                currentRelaxTimeLeft = 15;
                mostrarFaseRelajacionActual();
            } else {
                clearInterval(relaxIntervalTimer);
                mostrarPantallaDecisionRelajacion();
            }
        }
    }, 1000);
}

function mostrarFaseRelajacionActual() {
    const fase = fasesRelajacion[relaxCurrentIndex];
    document.getElementById('relax-step-badge').textContent = fase.badge;
    document.getElementById('relax-icon').textContent = fase.icono;
    document.getElementById('relax-title').textContent = fase.titulo;
    document.getElementById('relax-desc').textContent = fase.desc;
    document.getElementById('relax-step-timer').textContent = `${currentRelaxTimeLeft}s`;
}

function mostrarPantallaDecisionRelajacion() {
    document.getElementById('guide-content-box').style.display = 'none';
    document.getElementById('pause-decision-card').style.display = 'block';
}

function finalizarPausaSuficiente() {
    document.getElementById('pause-view-relajacion').classList.remove('active');
    document.getElementById('panelControlTimer').style.display = 'block';
    alert("👍 ¡Pausa completada con éxito!");
    iniciarTemporizadorDescanso();
}

function repetirPausaRelajacion() {
    iniciarPausaRelajacionGuiada();
}

/* ==========================================================================
   DASHBOARD ADMIN (FILTRO & EXPORTAR EXCEL)
   ========================================================================== */
function inicializarGraficoPowerBI() {
    const ctx = document.getElementById('powerBiChart').getContext('2d');
    let conteoFatiga = JSON.parse(localStorage.getItem('tornillo_conteo_fatiga') || '{"Fresco":1, "Leve":2, "Moderada":1, "Exhausto":0}');

    miGraficoPowerBI = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Fresco', 'Ligeramente Cansado', 'Fatiga Moderada', 'Exhausto'],
            datasets: [{
                label: 'Nivel de Fatiga Registrado',
                data: [conteoFatiga.Fresco, conteoFatiga.Leve, conteoFatiga.Moderada, conteoFatiga.Exhausto],
                backgroundColor: ['#10b981', '#0ea5e9', '#f59e0b', '#ef4444'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
        }
    });
}

function actualizarDashboardAdmin() {
    const filtro = document.getElementById('selectFiltroAdmin').value;
    
    let totalTests = '0', pausas = '0', ultimaQ1 = 'Sin registros';

    if (filtro === 'global') {
        totalTests = localStorage.getItem('tornillo_tests_completados') || '0';
        pausas = localStorage.getItem('tornillo_pausas_count') || '0';
        ultimaQ1 = localStorage.getItem('tornillo_test_q1') || 'Sin registros';
    } else {
        const prefijo = 'vendedor_' + filtro + '_';
        totalTests = localStorage.getItem(prefijo + 'tests_completados') || '0';
        pausas = localStorage.getItem(prefijo + 'pausas_count') || '0';
        ultimaQ1 = localStorage.getItem(prefijo + 'test_q1') || 'Sin registros';
    }

    document.getElementById('adminTotalTests').innerText = totalTests;
    document.getElementById('adminTotalPausas').innerText = pausas;
    document.getElementById('adminUltimoReporte').innerText = ultimaQ1;

    document.getElementById('biResumenTexto').innerHTML = 
        `Filtro activo: <b>${filtro.toUpperCase()}</b> | Evaluaciones: <b>${totalTests}</b> | Pausas: <b>${pausas}</b><br>Último estado visual: <b>${ultimaQ1}</b>`;

    if (miGraficoPowerBI) {
        let conteoFatiga = JSON.parse(localStorage.getItem('tornillo_conteo_fatiga') || '{"Fresco":1, "Leve":2, "Moderada":1, "Exhausto":0}');
        miGraficoPowerBI.data.datasets[0].data = [conteoFatiga.Fresco, conteoFatiga.Leve, conteoFatiga.Moderada, conteoFatiga.Exhausto];
        miGraficoPowerBI.update();
    }
}

// Función para descargar reporte Excel real (.xlsx)
function exportarExcelBienestar() {
    const filtro = document.getElementById('selectFiltroAdmin').value;
    const fechaImpresion = new Date().toLocaleString();

    // Obtener datos globales y personales
    const carlosTests = localStorage.getItem('vendedor_carlos_tests_completados') || '0';
    const carlosPausas = localStorage.getItem('vendedor_carlos_pausas_count') || '0';
    const carlosEstado = localStorage.getItem('vendedor_carlos_test_q1') || 'Sin registros';

    const anaTests = localStorage.getItem('vendedor_ana_tests_completados') || '0';
    const anaPausas = localStorage.getItem('vendedor_ana_pausas_count') || '0';
    const anaEstado = localStorage.getItem('vendedor_ana_test_q1') || 'Sin registros';

    const conteoFatiga = JSON.parse(localStorage.getItem('tornillo_conteo_fatiga') || '{"Fresco":0, "Leve":0, "Moderada":0, "Exhausto":0}');

    // Construcción de la matriz para SheetJS
    const datosExcel = [
        ["REPORTE GERENCIAL DE BIENESTAR DIGITAL Y SALUD LABORAL"],
        ["Ferretería El Tornillo Torcido S.A.S. - Módulo Relax Mind"],
        ["Fecha de Generación:", fechaImpresion],
        ["Filtro de Exportación:", filtro.toUpperCase()],
        [""],
        ["COLABORADOR", "CARGO / MESÓN", "TESTS REALIZADOS", "PAUSAS COMPLETADAS", "ÚLTIMA CONDICIÓN VISUAL"],
        ["Carlos Pérez", "Asesor Principal - Mesón 1", carlosTests, carlosPausas, carlosEstado],
        ["Ana Gómez", "Asesora Comercial - Mesón 2", anaTests, anaPausas, anaEstado],
        [""],
        ["RESUMEN GLOBAL DE NIVELES DE FATIGA COGNITIVA"],
        ["Nivel de Cansancio", "Cantidad de Colaboradores"],
        ["Fresco / Despejado", conteoFatiga.Fresco],
        ["Ligeramente Cansado", conteoFatiga.Leve],
        ["Fatiga Moderada", conteoFatiga.Moderada],
        ["Exhausto / Visión Borrosa", conteoFatiga.Exhausto]
    ];

    // Crear libro de Excel y hoja
    const libro = XLSX.utils.book_new();
    const hoja = XLSX.utils.aoa_to_sheet(datosExcel);
    
    // Ancho de columnas sugerido
    hoja['!cols'] = [
        { wch: 25 },
        { wch: 30 },
        { wch: 20 },
        { wch: 20 },
        { wch: 30 }
    ];

    XLSX.utils.book_append_sheet(libro, hoja, "Reporte_Bienestar");
    XLSX.writeFile(libro, `Reporte_Bienestar_TornilloTorcido_${filtro}.xlsx`);
}

function limpiarDatosAdmin() {
    localStorage.clear();
    location.reload();
}