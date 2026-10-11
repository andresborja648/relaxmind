document.addEventListener('DOMContentLoaded', () => {
  const sicauContent = document.getElementById('sicau-content');
  const relaxmindContent = document.getElementById('relaxmind-content');
  
  const btnOpenRelaxmind = document.getElementById('btn-open-relaxmind');
  const navRelaxmind = document.getElementById('nav-relaxmind');
  const navInicio = document.getElementById('nav-inicio');
  const btnBackSicau = document.getElementById('btn-back-sicau');

  // Función para cambiar a la vista de Relax Mind
  function openRelaxMind() {
    sicauContent.classList.add('hidden');
    relaxmindContent.classList.remove('hidden');
    navInicio.classList.remove('active');
    navRelaxmind.classList.add('active');
  }

  // Función para volver a SICAU
  function openSicau() {
    relaxmindContent.classList.add('hidden');
    sicauContent.classList.remove('hidden');
    navRelaxmind.classList.remove('active');
    navInicio.classList.add('active');
  }

  // Event Listeners
  btnOpenRelaxmind.addEventListener('click', openRelaxMind);
  navRelaxmind.addEventListener('click', (e) => {
    e.preventDefault();
    openRelaxMind();
  });

  navInicio.addEventListener('click', (e) => {
    e.preventDefault();
    openSicau();
  });

  btnBackSicau.addEventListener('click', openSicau);

  // Lógica simple de LocalStorage para retos
  const btnStartFocus = document.getElementById('btn-start-focus');
  const retosCounter = document.getElementById('retos-counter');
  
  let retos = parseInt(localStorage.getItem('retosRelaxMind')) || 2;
  retosCounter.textContent = `${retos} / 5`;

  btnStartFocus.addEventListener('click', () => {
    if (retos < 5) {
      retos++;
      localStorage.setItem('retosRelaxMind', retos);
      retosCounter.textContent = `${retos} / 5`;
      alert('🎉 ¡Iniciaste el reto de Foco de 25 minutos! Progreso guardado.');
    } else {
      alert('🏆 ¡Felicidades! Ya completaste todos los retos de la semana.');
    }
  });
});

// --- LÓGICA DE CAMBIO DE IMÁGENES EN EL BANNER ---
const bannerImg = document.getElementById('banner-img');
const btnPrev = document.getElementById('btn-banner-prev');
const btnNext = document.getElementById('btn-banner-next');

// Lista con las rutas de las imágenes que descargaste
const imagenesBanner = [
  'assets/banne1.png',
  'assets/banner2.png',
  'assets/banner3.jpg',
  'assets/banner4.png'
];
let indexActual = 0;
let intervaloBanner;

function mostrarSiguiente() {
  indexActual = (indexActual + 1) % imagenesBanner.length;
  bannerImg.src = imagenesBanner[indexActual];
}

function iniciarAutoplay() {
  intervaloBanner = setInterval(mostrarSiguiente, 2000); 
}

function reiniciarAutoplay() {
  clearInterval(intervaloBanner);
  iniciarAutoplay();
}

if (bannerImg && btnPrev && btnNext) {
  btnNext.addEventListener('click', () => {
    mostrarSiguiente();
    reiniciarAutoplay();
  });

  btnPrev.addEventListener('click', () => {
    indexActual = (indexActual - 1 + imagenesBanner.length) % imagenesBanner.length;
    bannerImg.src = imagenesBanner[indexActual];
    reiniciarAutoplay();
  });

  iniciarAutoplay();
}

// --- NAVEGACIÓN INTERNA EN RELAX MIND ---
const rmTabBtns = document.querySelectorAll('.rm-tab-btn');
const rmTabContents = document.querySelectorAll('.rm-tab-content');

rmTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.getAttribute('data-tab');

    // Desactivar todos los botones y ocultar contenidos
    rmTabBtns.forEach(b => b.classList.remove('active'));
    rmTabContents.forEach(c => c.classList.add('hidden'));

    // Activar botón seleccionado y mostrar su contenido
    btn.classList.add('active');
    document.getElementById(targetTab).classList.remove('hidden');
  });
});

