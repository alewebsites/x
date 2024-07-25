// language-detector.js

// Función para detectar el idioma
function determineLanguage(browserLanguage, country) {
  const spanishSpeakingCountries = ['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ'];
  
  if (browserLanguage.startsWith('es') || spanishSpeakingCountries.includes(country)) {
    return 'es';
  } else {
    return 'en';
  }
}

// Función principal
function detectAndSetLanguage() {
  const userLanguage = navigator.language || navigator.userLanguage;

  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const userCountry = data.country_code;
      const language = determineLanguage(userLanguage, userCountry);
      
      if (language === 'es' && !window.location.pathname.startsWith('/es')) {
        window.location.href = '/es' + window.location.pathname;
      } else if (language === 'en' && window.location.pathname.startsWith('/es')) {
        window.location.href = window.location.pathname.replace(/^\/es/, '');
      }
    })
    .catch(error => {
      console.error('Error al obtener la ubicación:', error);
      // Si hay un error, usa solo el idioma del navegador
      const language = determineLanguage(userLanguage, '');
      // Aquí puedes agregar lógica adicional si lo deseas
    });
}

// Ejecutar la función cuando se carga la página
window.addEventListener('load', detectAndSetLanguage);