// ==========================================
// MÓDULO DE PAUSAS GUIADAS Y DESCONEXIÓN
// ==========================================
  const listaEstiramientos = [
    {
      titulo: "1. Relaja el cuello",
      desc: "Inclina suavemente la cabeza hacia el hombro derecho, sostiene unos segundos y cambia al lado izquierdo.",
      icono: "🧘‍♂️"
    },
    {
      titulo: "2. Estiramiento de trapecio",
      desc: "Gira la cabeza mirando hacia tu diagonal derecha e inclínala suavemente hacia abajo. Repite al lado opuesto.",
      icono: "💆‍♂️"
    },
    {
      titulo: "3. Rotación de hombros",
      desc: "Realiza giros amplios y lentos con tus hombros hacia atrás 5 veces y luego hacia adelante.",
      icono: "🔄"
    },
    {
      titulo: "4. Extensión de brazos y pecho",
      desc: "Entrelaza las manos detrás de la espalda, estira los brazos y abre el pecho mirando levemente hacia arriba.",
      icono: "🙆‍♂️"
    },
    {
      titulo: "5. Estiramiento de antebrazos",
      desc: "Extiende un brazo hacia adelante con la palma hacia arriba y usa la otra mano para presionar suavemente los dedos hacia abajo.",
      icono: "✋"
    },
    {
      titulo: "6. Flexión de muñecas",
      desc: "Realiza giros en círculos con ambas muñecas en ambas direcciones para liberar la tensión del teclado y ratón.",
      icono: "🖐️"
    },
    {
      titulo: "7. Estiramiento lateral de columna",
      desc: "Lleva el brazo derecho sobre la cabeza e inclina el torso hacia la izquierda. Sostiene y cambia de lado.",
      icono: "🌾"
    },
    {
      titulo: "8. Torsión suave de espalda",
      desc: "Sentado en la silla, gira el torso hacia la derecha sujetando el espaldar. Sostiene y cambia a la izquierda.",
      icono: "🪑"
    },
    {
      titulo: "9. Extensión de piernas",
      desc: "Extiende una pierna hacia adelante mientras estás sentado y apunta la punta del pie hacia arriba.",
      icono: "🦵"
    },
    {
      titulo: "10. Respiración y soltura general",
      desc: "Sacude suavemente tus manos y brazos, inhala profundo y suelta todo el aire relajando el cuerpo completo.",
      icono: "✨"
    }
  ];

  const fasesDescansoVisual = [
    {
      badge: "Fase 1: Enfoque Lejano",
      titulo: "Mira a lo lejos (> 6 metros)",
      desc: "Aparta la mirada de la pantalla. Enfoca un punto lejano (por la ventana o al fondo del recinto) para relajar el músculo ciliar del ojo.",
      icono: "🔭"
    },
    {
      badge: "Fase 2: Parpadeo Consciente",
      titulo: "Parpadea lentamente",
      desc: "Abre y cierra los ojos de forma suave varias veces. Esto ayuda a rehidratar la córnea y reducir la sequedad visual.",
      icono: "👀"
    },
    {
      badge: "Fase 3: Oscuridad y Relajación",
      titulo: "Cierra los ojos suavemente",
      desc: "Cubre o cierra tus ojos unos segundos. Siente cómo descansa la vista de la luz azul antes de reanudar.",
      icono: "🙈"
    }
  ];

  const fasesRelajacion = [
    {
      badge: "Fase 1: Hombros y Cuello",
      titulo: "Deja caer los hombros",
      desc: "Desaprieta la mandíbula, separa los dientes suavemente y permite que los hombros caigan relajados hacia abajo.",
      icono: "💆‍♂️"
    },
    {
      badge: "Fase 2: Espalda y Postura",
      titulo: "Suelta la presión lumbar",
      desc: "Apoya la espalda cómodamente en el espaldar de la silla. Permite que la columna descanse sin esfuerzo.",
      icono: "🪑"
    },
    {
      badge: "Fase 3: Manos y Brazos",
      titulo: "Afloja los puños",
      desc: "Reposa las manos sueltas sobre las piernas. Siente cómo se libera la tensión de los dedos y las muñecas.",
      icono: "🤲"
    },
    {
      badge: "Fase 4: Rostro y Expresión",
      titulo: "Relaja el entrecejo",
      desc: "Suelta la tensión en la frente y alrededor de los ojos. Permite que los músculos de la cara se aflojen.",
      icono: "🌿"
    },
    {
      badge: "Fase 5: Quietud y Apoyo",
      titulo: "Contacto con el suelo",
      desc: "Siente firme el apoyo de los pies sobre el piso. Permanece en silencio respirando de forma pacífica.",
      icono: "🧘"
    }
  ];

  const fasesMindfulness = [
    {
      badge: "Paso 1: Entorno",
      titulo: "Conciencia de Sonidos",
      desc: "Cierra los ojos un instante. Identifica tres sonidos en tu entorno sin juzgarlos, solo permítete escucharlos.",
      icono: "🧠"
    },
    {
      badge: "Paso 2: Cuerpo",
      titulo: "Sensaciones Físicas",
      desc: "Lleva tu atención al contacto de tus manos sobre las piernas y la planta de tus pies firmes apoyados en el suelo.",
      icono: "🌱"
    },
    {
      badge: "Paso 3: Anclaje",
      titulo: "Respiración Natural",
      desc: "Observa cómo entra y sale el aire de tu cuerpo de forma natural. Si tu mente se distrae, tráela de regreso suavemente.",
      icono: "✨"
    }
  ];

  const fasesPausaActiva = [
    {
      badge: "Paso 1: Articulaciones",
      titulo: "Muñecas y Tobillos",
      desc: "Ponte de pie junto a tu silla. Realiza círculos suaves con tus muñecas y ambos tobillos para liberar la rigidez.",
      icono: "🔄"
    },
    {
      badge: "Paso 2: Circulación",
      titulo: "Elevación de Talones",
      desc: "Sube de puntillas sobre la punta de tus pies y vuelve a bajar lentamente de forma repetida para activar la circulación en las piernas.",
      icono: "👟"
    },
    {
      badge: "Paso 3: Cadera",
      titulo: "Rotación de Cadera",
      desc: "Coloca las manos en la cintura y haz círculos amplios y lentos con la cadera hacia la derecha y luego hacia la izquierda.",
      icono: "⭕"
    },
    {
      badge: "Paso 4: Marcha Suave",
      titulo: "Marcha en el Puesto",
      desc: "Camina o marcha suavemente en tu mismo lugar elevando un poco las rodillas y braceando de forma relajada.",
      icono: "🚶‍♂️"
    }
  ];

  // Elementos UI Pausas
  const activeStepBadge = document.getElementById('active-step-badge');
  const activeIcon = document.getElementById('active-icon');
  const activeTitle = document.getElementById('active-title');
  const activeDesc = document.getElementById('active-desc');
  const activeStepTimer = document.getElementById('active-step-timer');

  let activeCurrentIndex = 0;
  let timePerActiveStep = 15;
  let currentActiveTimeLeft = 15;

  function mostrarFasePausaActivaActual() {
    const fase = fasesPausaActiva[activeCurrentIndex];
    if (activeStepBadge) activeStepBadge.textContent = fase.badge;
    if (activeIcon) activeIcon.textContent = fase.icono;
    if (activeTitle) activeTitle.textContent = fase.titulo;
    if (activeDesc) activeDesc.textContent = fase.desc;
    if (activeStepTimer) activeStepTimer.textContent = `${currentActiveTimeLeft}s`;
  }

  const mindStepBadge = document.getElementById('mind-step-badge');
  const mindIcon = document.getElementById('mind-icon');
  const mindTitle = document.getElementById('mind-title');
  const mindDesc = document.getElementById('mind-desc');
  const mindStepTimer = document.getElementById('mind-step-timer');

  let mindCurrentIndex = 0;
  let timePerMindStep = 20;
  let currentMindTimeLeft = 20;

  function mostrarFaseMindfulnessActual() {
    const fase = fasesMindfulness[mindCurrentIndex];
    if (mindStepBadge) mindStepBadge.textContent = fase.badge;
    if (mindIcon) mindIcon.textContent = fase.icono;
    if (mindTitle) mindTitle.textContent = fase.titulo;
    if (mindDesc) mindDesc.textContent = fase.desc;
    if (mindStepTimer) mindStepTimer.textContent = `${currentMindTimeLeft}s`;
  }

  const relaxStepBadge = document.getElementById('relax-step-badge');
  const relaxIcon = document.getElementById('relax-icon');
  const relaxTitle = document.getElementById('relax-title');
  const relaxDesc = document.getElementById('relax-desc');
  const relaxStepTimer = document.getElementById('relax-step-timer');

  let relaxCurrentIndex = 0;
  let timePerRelaxStep = 15;
  let currentRelaxTimeLeft = 15;

  function mostrarFaseRelajacionActual() {
    const fase = fasesRelajacion[relaxCurrentIndex];
    if (relaxStepBadge) relaxStepBadge.textContent = fase.badge;
    if (relaxIcon) relaxIcon.textContent = fase.icono;
    if (relaxTitle) relaxTitle.textContent = fase.titulo;
    if (relaxDesc) relaxDesc.textContent = fase.desc;
    if (relaxStepTimer) relaxStepTimer.textContent = `${currentRelaxTimeLeft}s`;
  }

  const eyePhaseBadge = document.getElementById('eye-phase-badge');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeTitle = document.getElementById('eye-title');
  const eyeDesc = document.getElementById('eye-desc');
  const eyeStepTimer = document.getElementById('eye-step-timer');

  let eyeCurrentIndex = 0;
  let currentEyeTimeLeft = 20;

  function mostrarFaseVisualActual() {
    const fase = fasesDescansoVisual[eyeCurrentIndex];
    if (eyePhaseBadge) eyePhaseBadge.textContent = fase.badge;
    if (eyeIcon) eyeIcon.textContent = fase.icono;
    if (eyeTitle) eyeTitle.textContent = fase.titulo;
    if (eyeDesc) eyeDesc.textContent = fase.desc;
    if (eyeStepTimer) eyeStepTimer.textContent = `${currentEyeTimeLeft}s`;
  }

  const selectPauseType = document.getElementById('select-pause-type');
  const selectPauseTime = document.getElementById('select-pause-time');
  const pauseTimerDisplay = document.getElementById('pause-timer-display');
  const btnPauseToggle = document.getElementById('btn-pause-toggle');
  const breathCircle = document.getElementById('breath-circle');
  const breathText = document.getElementById('breath-text');

  const stretchStepBadge = document.getElementById('stretch-step-badge');
  const stretchIcon = document.getElementById('stretch-icon');
  const stretchTitle = document.getElementById('stretch-title');
  const stretchDesc = document.getElementById('stretch-desc');
  const stretchStepTimer = document.getElementById('stretch-step-timer');

  let pauseInterval = null;
  let breathCycleInterval = null;
  let isPauseActive = false;
  let pauseTimeLeft = 120;

  let stretchCurrentIndex = 0;
  let timePerStretch = 12;
  let currentStretchTimeLeft = 12;

  function formatearTiempoPausa(segundos) {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function mostrarEstiramientoActual() {
    const est = listaEstiramientos[stretchCurrentIndex];
    if (stretchStepBadge) stretchStepBadge.textContent = `Paso ${stretchCurrentIndex + 1} de ${listaEstiramientos.length}`;
    if (stretchIcon) stretchIcon.textContent = est.icono;
    if (stretchTitle) stretchTitle.textContent = est.titulo;
    if (stretchDesc) stretchDesc.textContent = est.desc;
    if (stretchStepTimer) stretchStepTimer.textContent = `${currentStretchTimeLeft}s`;
  }

  function recalcularTiemposPorSubvista() {
    const selectedType = selectPauseType ? selectPauseType.value : 'respiracion';

    timePerStretch = Math.floor(pauseTimeLeft / listaEstiramientos.length);
    currentStretchTimeLeft = timePerStretch > 0 ? timePerStretch : 1;
    if (selectedType === 'estiramientos') mostrarEstiramientoActual();

    currentEyeTimeLeft = 20;
    if (selectedType === 'descanso_visual') mostrarFaseVisualActual();

    timePerRelaxStep = Math.floor(pauseTimeLeft / fasesRelajacion.length);
    currentRelaxTimeLeft = timePerRelaxStep > 0 ? timePerRelaxStep : 1;
    if (selectedType === 'relajacion') mostrarFaseRelajacionActual();

    timePerMindStep = Math.floor(pauseTimeLeft / fasesMindfulness.length);
    currentMindTimeLeft = timePerMindStep > 0 ? timePerMindStep : 1;
    if (selectedType === 'mindfulness') mostrarFaseMindfulnessActual();

    timePerActiveStep = Math.floor(pauseTimeLeft / fasesPausaActiva.length);
    currentActiveTimeLeft = timePerActiveStep > 0 ? timePerActiveStep : 1;
    if (selectedType === 'pausa_activa') mostrarFasePausaActivaActual();
  }

  function cambiarVistaPausa() {
    detenerPausa();
    const selectedType = selectPauseType ? selectPauseType.value : 'respiracion';
    
    document.querySelectorAll('.pause-view').forEach(view => view.classList.add('hidden'));
    const activeView = document.getElementById(`pause-view-${selectedType}`);
    if (activeView) activeView.classList.remove('hidden');

    stretchCurrentIndex = 0;
    eyeCurrentIndex = 0;
    relaxCurrentIndex = 0;

    if (selectPauseTime) {
      pauseTimeLeft = parseInt(selectPauseTime.value);
      if (pauseTimerDisplay) pauseTimerDisplay.textContent = formatearTiempoPausa(pauseTimeLeft);
    } else if (selectedType === 'pausa_activa') {
      activeCurrentIndex = 0;
      timePerActiveStep = Math.floor(pauseTimeLeft / fasesPausaActiva.length);
      currentActiveTimeLeft = timePerActiveStep;
      mostrarFasePausaActivaActual();
    }

    recalcularTiemposPorSubvista();
  }

  if (selectPauseType) {
    selectPauseType.addEventListener('change', cambiarVistaPausa);
  }

  if (selectPauseTime) {
    selectPauseTime.addEventListener('change', () => {
      detenerPausa();
      pauseTimeLeft = parseInt(selectPauseTime.value);
      if (pauseTimerDisplay) pauseTimerDisplay.textContent = formatearTiempoPausa(pauseTimeLeft);

      stretchCurrentIndex = 0;
      eyeCurrentIndex = 0;
      relaxCurrentIndex = 0;
      mindCurrentIndex = 0;
      activeCurrentIndex = 0;

      recalcularTiemposPorSubvista();
    });
  }

  function cicloRespiracion() {
    if (!isPauseActive) return;
    if (breathText) breathText.textContent = "Inhalar...";
    if (breathCircle) breathCircle.className = "breathing-circle inhale";

    setTimeout(() => {
      if (!isPauseActive) return;
      if (breathText) breathText.textContent = "Mantener";
      if (breathCircle) breathCircle.className = "breathing-circle hold";

      setTimeout(() => {
        if (!isPauseActive) return;
        if (breathText) breathText.textContent = "Exhalar...";
        if (breathCircle) breathCircle.className = "breathing-circle exhale";
      }, 2000);

    }, 4000);
  }

  function iniciarPausa() {
    isPauseActive = true;
    if (btnPauseToggle) btnPauseToggle.textContent = "Detener Pausa";
    reproducirSonido('start');

    const selectedType = selectPauseType ? selectPauseType.value : 'respiracion';

    if (selectedType === 'respiracion') {
      cicloRespiracion();
      breathCycleInterval = setInterval(cicloRespiracion, 10000);
    } else if (selectedType === 'estiramientos') {
      stretchCurrentIndex = 0;
      timePerStretch = Math.floor(pauseTimeLeft / listaEstiramientos.length);
      currentStretchTimeLeft = timePerStretch;
      mostrarEstiramientoActual();
    } else if (selectedType === 'descanso_visual') {
      eyeCurrentIndex = 0;
      currentEyeTimeLeft = 20;
      mostrarFaseVisualActual();
    } else if (selectedType === 'relajacion') {
      relaxCurrentIndex = 0;
      timePerRelaxStep = Math.floor(pauseTimeLeft / fasesRelajacion.length);
      currentRelaxTimeLeft = timePerRelaxStep;
      mostrarFaseRelajacionActual();
    } else if (selectedType === 'mindfulness') {
      mindCurrentIndex = 0;
      timePerMindStep = Math.floor(pauseTimeLeft / fasesMindfulness.length);
      currentMindTimeLeft = timePerMindStep > 0 ? timePerMindStep : 1;
      mostrarFaseMindfulnessActual();
    } else if (selectedType === 'pausa_activa') {
      activeCurrentIndex = 0;
      timePerActiveStep = Math.floor(pauseTimeLeft / fasesPausaActiva.length);
      currentActiveTimeLeft = timePerActiveStep > 0 ? timePerActiveStep : 1;
      mostrarFasePausaActivaActual();
    }

    pauseInterval = setInterval(() => {
      if (pauseTimeLeft > 0) {
        pauseTimeLeft--;
        if (pauseTimerDisplay) pauseTimerDisplay.textContent = formatearTiempoPausa(pauseTimeLeft);

        if (selectedType === 'estiramientos') {
          currentStretchTimeLeft--;
          if (stretchStepTimer) stretchStepTimer.textContent = `${currentStretchTimeLeft}s`;
          if (currentStretchTimeLeft <= 0 && stretchCurrentIndex < listaEstiramientos.length - 1) {
            stretchCurrentIndex++;
            currentStretchTimeLeft = timePerStretch;
            reproducirSonido('start');
            mostrarEstiramientoActual();
          }
        }

        if (selectedType === 'descanso_visual') {
          currentEyeTimeLeft--;
          if (eyeStepTimer) eyeStepTimer.textContent = `${currentEyeTimeLeft}s`;
          if (currentEyeTimeLeft <= 0) {
            eyeCurrentIndex = (eyeCurrentIndex + 1) % fasesDescansoVisual.length;
            currentEyeTimeLeft = 20;
            reproducirSonido('start');
            mostrarFaseVisualActual();
          }
        }

        if (selectedType === 'relajacion') {
          currentRelaxTimeLeft--;
          if (relaxStepTimer) relaxStepTimer.textContent = `${currentRelaxTimeLeft}s`;
          if (currentRelaxTimeLeft <= 0 && relaxCurrentIndex < fasesRelajacion.length - 1) {
            relaxCurrentIndex++;
            currentRelaxTimeLeft = timePerRelaxStep;
            reproducirSonido('start');
            mostrarFaseRelajacionActual();
          }
        }

        if (selectedType === 'mindfulness') {
          currentMindTimeLeft--;
          if (mindStepTimer) mindStepTimer.textContent = `${currentMindTimeLeft}s`;
          if (currentMindTimeLeft <= 0 && mindCurrentIndex < fasesMindfulness.length - 1) {
            mindCurrentIndex++;
            currentMindTimeLeft = timePerMindStep;
            reproducirSonido('start');
            mostrarFaseMindfulnessActual();
          }
        }

        if (selectedType === 'pausa_activa') {
          currentActiveTimeLeft--;
          if (activeStepTimer) activeStepTimer.textContent = `${currentActiveTimeLeft}s`;
          if (currentActiveTimeLeft <= 0 && activeCurrentIndex < fasesPausaActiva.length - 1) {
            activeCurrentIndex++;
            currentActiveTimeLeft = timePerActiveStep;
            reproducirSonido('start');
            mostrarFasePausaActivaActual();
          }
        }
      } else {
        finalizarPausa();
      }
    }, 1000);
  }

  function detenerPausa() {
    isPauseActive = false;
    clearInterval(pauseInterval);
    clearInterval(breathCycleInterval);

    if (btnPauseToggle) btnPauseToggle.textContent = "Iniciar Pausa";
    if (breathText) breathText.textContent = "Inhalar";
    if (breathCircle) breathCircle.className = "breathing-circle";

    if (selectPauseTime) {
      pauseTimeLeft = parseInt(selectPauseTime.value);
      if (pauseTimerDisplay) pauseTimerDisplay.textContent = formatearTiempoPausa(pauseTimeLeft);
    }

    const selectedType = selectPauseType ? selectPauseType.value : 'respiracion';
    recalcularTiemposPorSubvista();
  }

  function finalizarPausa() {
    detenerPausa();
    reproducirSonido('end');
    if (pauseTimerDisplay) pauseTimerDisplay.textContent = "00:00";

    // --- GUARDAR PAUSA EN LOCALSTORAGE ---
    const fechaActual = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
    const tipoPausaTexto = selectPauseType ? selectPauseType.options[selectPauseType.selectedIndex].text : "Pausa General";
    
    const pausaLogs = JSON.parse(localStorage.getItem('relaxmind_pausa_logs') || '[]');
    pausaLogs.unshift({
      fecha: fechaActual,
      tipo: tipoPausaTexto,
      estado: "Completado"
    });
    localStorage.setItem('relaxmind_pausa_logs', JSON.stringify(pausaLogs));

    alert("🎉 ¡Pausa de descanso completada! Regresa a tus actividades con energía renovada.");
  }

  if (btnPauseToggle) {
    btnPauseToggle.addEventListener('click', () => {
      if (!isPauseActive) {
        iniciarPausa();
      } else {
        detenerPausa();
      }
    });
  }


// ==========================================
// MÓDULO DE FOCO PRODUCTIVO, SONIDOS Y LOGS
// ==========================================
  let audioCtx = null;
  let activeNoiseNode = null;
  let activeGainNode = null;

  function obtenerAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function detenerSonidoAmbiente() {
    if (activeNoiseNode) {
      try {
        activeNoiseNode.stop();
        activeNoiseNode.disconnect();
      } catch (e) {}
      activeNoiseNode = null;
    }
  }

  function iniciarSonidoAmbiente(tipo) {
    detenerSonidoAmbiente();
    if (tipo === 'none') return;

    try {
      const ctx = obtenerAudioContext();
      if (!ctx) return;

      const bufferSize = ctx.sampleRate;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      activeNoiseNode = ctx.createBufferSource();
      activeNoiseNode.buffer = buffer;
      activeNoiseNode.loop = true;

      activeGainNode = ctx.createGain();
      const filterNode = ctx.createBiquadFilter();

      if (tipo === 'white') {
        filterNode.type = 'highpass';
        filterNode.frequency.value = 100;
        activeGainNode.gain.setValueAtTime(0.04, ctx.currentTime);
      } else if (tipo === 'pink') {
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 2200;
        activeGainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      } else if (tipo === 'brown') {
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 400;
        activeGainNode.gain.setValueAtTime(0.15, ctx.currentTime);
      } else if (tipo === 'rain') {
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 1200;
        activeGainNode.gain.setValueAtTime(0.18, ctx.currentTime);
      } else if (tipo === 'forest') {
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 600;
        activeGainNode.gain.setValueAtTime(0.20, ctx.currentTime);
      }

      activeNoiseNode.connect(filterNode);
      filterNode.connect(activeGainNode);
      activeGainNode.connect(ctx.destination);

      activeNoiseNode.start();
    } catch (e) {
      console.log("Error al iniciar audio ambiental:", e);
    }
  }

  const focoDisplay = document.getElementById('foco-display');
  const btnFocoToggle = document.getElementById('btn-foco-toggle');
  const btnFocoReset = document.getElementById('btn-foco-reset');
  const focoStatusText = document.getElementById('foco-status-text');
  const modeButtons = document.querySelectorAll('.mode-btn');
  const customMinutesInput = document.getElementById('custom-minutes');
  const btnSetCustom = document.getElementById('btn-set-custom');
  const taskInput = document.getElementById('foco-task-input');
  const selectSound = document.getElementById('select-ambient-sound');
  const logsTbody = document.getElementById('foco-logs-tbody');
  const btnClearLogs = document.getElementById('btn-clear-logs');

  const feedbackModal = document.getElementById('foco-feedback-modal');
  const btnSaveLog = document.getElementById('btn-save-log');
  const feedbackRating = document.getElementById('feedback-rating');
  const feedbackNotes = document.getElementById('feedback-notes');

  let focoInterval = null;
  let totalSeconds = 1500; 
  let initialDuration = 1500; 
  let isRunning = false;
  let currentTaskObj = "";

  function formatearTiempoFoco(segundos) {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function actualizarDisplayFoco() {
    if (focoDisplay) {
      focoDisplay.textContent = formatearTiempoFoco(totalSeconds);
    }
  }

  function cargarHistorialLogs() {
    if (!logsTbody) return;
    const logs = JSON.parse(localStorage.getItem('relaxmind_foco_logs') || '[]');
    logsTbody.innerHTML = '';

    if (logs.length === 0) {
      logsTbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-slate-400">No hay sesiones registradas aún.</td></tr>`;
      return;
    }

    logs.forEach(log => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="py-2 px-3 text-xs text-slate-500">${log.fecha}</td>
        <td class="py-2 px-3 font-medium text-slate-800">${log.tarea || 'Sin título'}</td>
        <td class="py-2 px-3">${log.duracion} min</td>
        <td class="py-2 px-3"><span class="px-2 py-0.5 rounded text-xs font-semibold ${log.estado === 'Completado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${log.estado}</span></td>
        <td class="py-2 px-3 text-xs">${log.calificacion || '-'}</td>
        <td class="py-2 px-3 text-xs text-slate-600">${log.notas || '-'}</td>
      `;
      logsTbody.appendChild(tr);
    });
  }

  function guardarLogEnStorage(logObj) {
    const logs = JSON.parse(localStorage.getItem('relaxmind_foco_logs') || '[]');
    logs.unshift(logObj);
    localStorage.setItem('relaxmind_foco_logs', JSON.stringify(logs));
    cargarHistorialLogs();
  }

  function iniciarTemporizadorFoco() {
    if (isRunning) return;
    isRunning = true;
    currentTaskObj = taskInput ? taskInput.value.trim() : "Sesión de foco";
    reproducirSonido('start');

    if (selectSound && selectSound.value !== 'none') {
      iniciarSonidoAmbiente(selectSound.value);
    }

    if (btnFocoToggle) btnFocoToggle.textContent = "Pausar";
    if (focoStatusText) focoStatusText.textContent = `🔥 Enfoque: ${currentTaskObj || 'En curso...'}`;

    focoInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        actualizarDisplayFoco();
      } else {
        detenerTemporizadorFoco();
        detenerSonidoAmbiente();
        reproducirSonido('end');
        if (focoStatusText) focoStatusText.textContent = "🎉 ¡Tiempo cumplido!";
        if (feedbackModal) feedbackModal.classList.remove('hidden');
      }
    }, 1000);
  }

  function pausarTemporizadorFoco() {
    isRunning = false;
    clearInterval(focoInterval);
    detenerSonidoAmbiente();
    reproducirSonido('pause');

    if (btnFocoToggle) btnFocoToggle.textContent = "Reanudar";
    if (focoStatusText) focoStatusText.textContent = "⏸️ Temporizador en pausa";

    const minutosTranscurridos = Math.round((initialDuration - totalSeconds) / 60);
    if (minutosTranscurridos > 0) {
      const fechaActual = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
      guardarLogEnStorage({
        fecha: fechaActual,
        tarea: currentTaskObj || "Sesión libre",
        duracion: minutosTranscurridos,
        estado: "Detenido / Incompleto",
        calificacion: "⏸️ Pausado",
        notas: "Sesión interrumpida antes de tiempo."
      });
    }
  }

  function detenerTemporizadorFoco() {
    isRunning = false;
    clearInterval(focoInterval);
    detenerSonidoAmbiente();
    if (btnFocoToggle) btnFocoToggle.textContent = "Iniciar Foco";
  }

  if (btnFocoToggle) {
    btnFocoToggle.addEventListener('click', () => {
      if (!isRunning) iniciarTemporizadorFoco();
      else pausarTemporizadorFoco();
    });
  }

  if (btnFocoReset) {
    btnFocoReset.addEventListener('click', () => {
      detenerTemporizadorFoco();
      detenerSonidoAmbiente();
      reproducirSonido('pause');
      totalSeconds = initialDuration;
      actualizarDisplayFoco();
      if (focoStatusText) focoStatusText.textContent = "Listo para comenzar";
    });
  }

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      detenerTemporizadorFoco();
      detenerSonidoAmbiente();
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const timeVal = parseInt(btn.getAttribute('data-time'));
      totalSeconds = timeVal;
      initialDuration = timeVal;
      if (customMinutesInput) customMinutesInput.value = Math.floor(timeVal / 60);
      actualizarDisplayFoco();
      if (focoStatusText) focoStatusText.textContent = "Listo para comenzar";
    });
  });

  if (btnSetCustom) {
    btnSetCustom.addEventListener('click', () => {
      const customVal = parseInt(customMinutesInput.value);
      if (customVal && customVal > 0 && customVal <= 180) {
        detenerTemporizadorFoco();
        detenerSonidoAmbiente();
        modeButtons.forEach(b => b.classList.remove('active'));
        totalSeconds = customVal * 60;
        initialDuration = customVal * 60;
        actualizarDisplayFoco();
        if (focoStatusText) focoStatusText.textContent = `Tiempo fijado en ${customVal} min`;
      } else {
        alert("Por favor ingresa un número de minutos válido entre 1 y 180.");
      }
    });
  }

  if (btnSaveLog) {
    btnSaveLog.addEventListener('click', () => {
      const fechaActual = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
      guardarLogEnStorage({
        fecha: fechaActual,
        tarea: currentTaskObj || "Sesión libre",
        duracion: Math.round(initialDuration / 60),
        estado: "Completado",
        calificacion: feedbackRating ? feedbackRating.value : "⭐⭐⭐⭐⭐",
        notas: feedbackNotes ? feedbackNotes.value.trim() : "¡Objetivo logrado!"
      });

      if (feedbackModal) feedbackModal.classList.add('hidden');
      if (feedbackNotes) feedbackNotes.value = '';
    });
  }

  if (btnClearLogs) {
    btnClearLogs.addEventListener('click', () => {
      if (confirm("¿Deseas borrar todo el historial de sesiones guardadas?")) {
        localStorage.removeItem('relaxmind_foco_logs');
        cargarHistorialLogs();
      }
    });
  }

  function reproducirSonido(tipo) {
    try {
      const ctx = obtenerAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (tipo === 'start') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (tipo === 'pause') {
        osc.frequency.setValueAtTime(300, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (tipo === 'end') {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.12);
        osc.frequency.setValueAtTime(783.99, now + 0.24);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      }
    } catch (e) {
      console.log("Audio omitido por restricciones del navegador.");
    }
  }

  cargarHistorialLogs();


// ==========================
// MÓDULO DE TEST DE BIENESTAR
// ==========================
  const btnStartTest = document.getElementById('btn-start-test');
  const btnSubmitTest = document.getElementById('btn-submit-test');
  const btnRetakeTest = document.getElementById('btn-retake-test');
  const btnGotoRecommended = document.getElementById('btn-goto-recommended');
  const btnClearTestLogs = document.getElementById('btn-clear-test-logs');

  const testIntroContainer = document.getElementById('test-intro-container');
  const testFormContainer = document.getElementById('test-form-container');
  const testResultContainer = document.getElementById('test-result-container');

  const resultIconBadge = document.getElementById('result-icon-badge');
  const resultTitle = document.getElementById('result-title');
  const resultDescription = document.getElementById('result-description');
  const resultRecommendationText = document.getElementById('result-recommendation-text');
  const testLogsTbody = document.getElementById('test-logs-tbody');

  let ultimaRecomendacionTab = 'foco';
  let tiempoSugeridoPausa = 3;

  function cargarHistorialTests() {
    if (!testLogsTbody) return;
    const logs = JSON.parse(localStorage.getItem('relaxmind_test_logs') || '[]');
    testLogsTbody.innerHTML = '';

    if (logs.length === 0) {
      testLogsTbody.innerHTML = `<tr><td colspan="3" class="text-center py-4 text-slate-400">No hay tests registrados aún.</td></tr>`;
      return;
    }

    logs.forEach(log => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="py-2 px-3 text-xs text-slate-500">${log.fecha}</td>
        <td class="py-2 px-3 font-medium text-slate-800">${log.puntuacion} / 16 pts</td>
        <td class="py-2 px-3"><span class="px-2 py-0.5 rounded text-xs font-semibold ${log.claseBadge}">${log.nivel}</span></td>
      `;
      testLogsTbody.appendChild(tr);
    });
  }

  function guardarTestEnStorage(testObj) {
    const logs = JSON.parse(localStorage.getItem('relaxmind_test_logs') || '[]');
    logs.unshift(testObj);
    localStorage.setItem('relaxmind_test_logs', JSON.stringify(logs));
    cargarHistorialTests();
  }

  if (btnStartTest) {
    btnStartTest.addEventListener('click', () => {
      testIntroContainer.classList.add('hidden');
      testFormContainer.classList.remove('hidden');
    });
  }

  if (btnSubmitTest) {
    btnSubmitTest.addEventListener('click', () => {
      const p1 = document.querySelector('input[name="p1"]:checked');
      const p2 = document.querySelector('input[name="p2"]:checked');
      const p3 = document.querySelector('input[name="p3"]:checked');
      const p4 = document.querySelector('input[name="p4"]:checked');

      if (!p1 || !p2 || !p3 || !p4) {
        alert("Por favor responde todas las preguntas para obtener tu diagnóstico de bienestar.");
        return;
      }

      const score = parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value) + parseInt(p4.value);
      
      let nivel = "";
      let icono = "";
      let claseBadge = "";
      let descripcion = "";
      let recomendacion = "";

      if (score <= 6) {
        nivel = "Óptimo / Fresco";
        icono = "🟢";
        claseBadge = "bg-emerald-100 text-emerald-700";
        descripcion = "¡Excelente estado mental! Tu nivel de fatiga es bajo y tienes buena disposición.";
        recomendacion = "Estás listo para mantener el ritmo. Te sugerimos abrir la pestaña de **Temporizador Foco** por **25 minutos** con ruido rosa o marrón.";
        ultimaRecomendacionTab = "foco";
        tiempoSugeridoPausa = 25;
      } else if (score <= 11) {
        nivel = "Fatiga Moderada";
        icono = "🟡";
        claseBadge = "bg-amber-100 text-amber-700";
        descripcion = "Presentas indicios de cansancio acumulado o ligera distracción.";
        recomendacion = "Te sugerimos tomar una **Pausa Guiada de 3 minutos** (Descanso Visual 20-20-20 o Estiramientos) para refrescar la mente antes de continuar.";
        ultimaRecomendacionTab = "pausa";
        tiempoSugeridoPausa = 3;
      } else {
        nivel = "Fatiga Alta / Estrés";
        icono = "🔴";
        claseBadge = "bg-red-100 text-red-700";
        descripcion = "¡Atención! Tus niveles de fatiga y tensión son elevados por tiempo prolongado frente a pantallas.";
        recomendacion = "Es momento de hacer una desconexión total. Te recomendamos una **Pausa Guiada completa de 5 minutos** (Mindfulness o Relajación / Body Scan).";
        ultimaRecomendacionTab = "pausa";
        tiempoSugeridoPausa = 5;
      }

      resultIconBadge.textContent = icono;
      resultTitle.textContent = `Nivel: ${nivel}`;
      resultDescription.textContent = descripcion;
      resultRecommendationText.textContent = recomendacion;

      testFormContainer.classList.add('hidden');
      testResultContainer.classList.remove('hidden');

      const fechaActual = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
      guardarTestEnStorage({
        fecha: fechaActual,
        puntuacion: score,
        nivel: nivel,
        claseBadge: claseBadge
      });
    });
  }

  if (btnRetakeTest) {
    btnRetakeTest.addEventListener('click', () => {
      document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
      testResultContainer.classList.add('hidden');
      testIntroContainer.classList.remove('hidden');
    });
  }

  if (btnGotoRecommended) {
    btnGotoRecommended.addEventListener('click', () => {
      const selectPauseTime = document.getElementById('select-pause-time');

      if (selectPauseTime && ultimaRecomendacionTab === 'pausa') {
        const tiempoEnSegundos = tiempoSugeridoPausa * 60;
        let opcionEncontrada = Array.from(selectPauseTime.options).find(
          opt => parseInt(opt.value) === tiempoEnSegundos || parseInt(opt.value) === tiempoSugeridoPausa
        );

        if (opcionEncontrada) {
          selectPauseTime.value = opcionEncontrada.value;
        } else if (selectPauseTime.options.length > 0) {
          selectPauseTime.selectedIndex = 0;
        }

        detenerPausa();
        pauseTimeLeft = parseInt(selectPauseTime.value);
        if (pauseTimerDisplay) pauseTimerDisplay.textContent = formatearTiempoPausa(pauseTimeLeft);

        if (typeof recalcularTiemposPorSubvista === 'function') {
          recalcularTiemposPorSubvista();
        }
      }

      const botonesTab = document.querySelectorAll('.rm-tab-btn');
      botonesTab.forEach(btn => {
        const tabTarget = btn.getAttribute('data-tab');
        if (ultimaRecomendacionTab === 'foco' && tabTarget === 'tab-foco') {
          btn.click();
        } else if (ultimaRecomendacionTab === 'pausa' && tabTarget === 'tab-pausa') {
          btn.click();
        }
      });
    });
  }

  if (btnClearTestLogs) {
    btnClearTestLogs.addEventListener('click', () => {
      if (confirm("¿Deseas borrar todo el historial de tests guardados?")) {
        localStorage.removeItem('relaxmind_test_logs');
        cargarHistorialTests();
      }
    });
  }

  cargarHistorialTests();


// ==========================
// MÓDULO DASHBOARD CONTROL
// ==========================
  function obtenerMinutosNumericos(val) {
    if (!val) return 0;
    if (typeof val === 'number') return val;
    const match = val.toString().match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  function actualizarDashboardMetrics() {
    // 1. Métricas de Foco
    const focoLogs = JSON.parse(localStorage.getItem('relaxmind_foco_logs') || '[]');
    let totalMinutos = 0;
    let sesionesCompletadas = 0;

    focoLogs.forEach(log => {
      totalMinutos += obtenerMinutosNumericos(log.duracion);
      if (log.estado === 'Completado' || (!log.estado.includes('Detenido') && !log.estado.includes('Pausado'))) {
        sesionesCompletadas++;
      }
    });

    const kpiMinutos = document.getElementById('kpi-foco-minutos');
    const kpiSesiones = document.getElementById('kpi-foco-sesiones');
    if (kpiMinutos) kpiMinutos.textContent = `${totalMinutos} min`;
    if (kpiSesiones) kpiSesiones.textContent = sesionesCompletadas;

    // 2. Métricas de Pausas Activas
    const pausaLogs = JSON.parse(localStorage.getItem('relaxmind_pausa_logs') || '[]');
    const kpiPausasCount = document.getElementById('kpi-pausas-count');
    if (kpiPausasCount) {
      kpiPausasCount.textContent = pausaLogs.length;
    }

    // 3. Estado Mental (Test de Bienestar)
    const testLogs = JSON.parse(localStorage.getItem('relaxmind_test_logs') || '[]');
    const kpiEstadoIcono = document.getElementById('kpi-estado-icono');
    const kpiEstadoTexto = document.getElementById('kpi-estado-texto');
    const dashStatusDesc = document.getElementById('dash-status-desc');

    if (testLogs.length > 0) {
      const ultimoTest = testLogs[0];
      if (kpiEstadoTexto) {
        kpiEstadoTexto.textContent = ultimoTest.nivel ? ultimoTest.nivel.split('/')[0].trim() : 'Evaluado';
      }
      
      if (ultimoTest.nivel && ultimoTest.nivel.includes('Óptimo')) {
        if (kpiEstadoIcono) kpiEstadoIcono.textContent = '🟢';
        if (dashStatusDesc) dashStatusDesc.textContent = 'Tu último test indica que estás en un excelente estado mental. ¡Buen momento para avanzar en tus actividades!';
      } else if (ultimoTest.nivel && ultimoTest.nivel.includes('Moderada')) {
        if (kpiEstadoIcono) kpiEstadoIcono.textContent = '🟡';
        if (dashStatusDesc) dashStatusDesc.textContent = 'Presentas fatiga moderada acumulada. Te recomendamos tomar una pausa activa de 3 minutos.';
      } else {
        if (kpiEstadoIcono) kpiEstadoIcono.textContent = '🔴';
        if (dashStatusDesc) dashStatusDesc.textContent = 'Tu nivel de fatiga es elevado. Se sugiere realizar una desconexión y una pausa guiada de 5 minutos.';
      }
    }

    // 4. Actividad Reciente unificada en el Dashboard
    const recentList = document.getElementById('dash-recent-activity');
    if (recentList) {
      recentList.innerHTML = '';
      
      // Combinar foco y pausas para el feed reciente
      const actividadCombinada = [
        ...focoLogs.map(l => ({ ...l, tipoItem: 'foco', texto: l.tarea || 'Sesión de Foco', badge: `${l.duracion} min` })),
        ...pausaLogs.map(l => ({ ...l, tipoItem: 'pausa', texto: l.tipo || 'Pausa Guiada', badge: 'Completado' }))
      ];

      if (actividadCombinada.length === 0) {
        recentList.innerHTML = `<li class="text-xs text-slate-400 py-3 text-center">No hay actividad registrada aún.</li>`;
      } else {
        actividadCombinada.slice(0, 4).forEach(item => {
          const li = document.createElement('li');
          li.className = 'activity-item';
          li.innerHTML = `
            <div>
              <span class="font-semibold text-slate-700 block">${item.texto}</span>
              <span class="text-xs text-slate-400 block">${item.fecha || ''}</span>
            </div>
            <span class="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">${item.badge}</span>
          `;
          recentList.appendChild(li);
        });
      }
    }
  }

  // --- ESCUCHAR CAMBIOS DE PESTAÑA PARA REFRESCAR DASHBOARD ---
  const tabButtonsList = document.querySelectorAll('.rm-tab-btn');
  tabButtonsList.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('data-tab') === 'tab-dashboard') {
        actualizarDashboardMetrics();
      }
    });
  });

  // Accesos rápidos del Dashboard
  const dashBtnTest = document.getElementById('dash-btn-test');
  const dashQuickFoco = document.getElementById('dash-quick-foco');
  const dashQuickPausa = document.getElementById('dash-quick-pausa');

  if (dashBtnTest) {
    dashBtnTest.addEventListener('click', () => {
      const btn = document.querySelector('[data-tab="tab-encuesta"]');
      if (btn) btn.click();
    });
  }

  if (dashQuickFoco) {
    dashQuickFoco.addEventListener('click', () => {
      const btn = document.querySelector('[data-tab="tab-foco"]');
      if (btn) btn.click();
    });
  }

  if (dashQuickPausa) {
    dashQuickPausa.addEventListener('click', () => {
      const btn = document.querySelector('[data-tab="tab-pausa"]');
      if (btn) btn.click();
    });
  }

  // Ejecutar al iniciar
  actualizarDashboardMetrics();