document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    let timer;
  
    // Clonar todos los slides
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });
  
    function updateSlider() {
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex++;
      updateSlider();
      
      if (currentIndex >= slides.length) {
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIndex = 0;
          slider.style.transform = `translateX(0)`;
        }, 500);
      }
      resetTimer();
    }
  
    function prevSlide() {
      if (currentIndex === 0) {
        slider.style.transition = 'none';
        currentIndex = slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
          slider.style.transition = 'transform 0.5s ease-in-out';
          currentIndex--;
          updateSlider();
        }, 10);
      } else {
        currentIndex--;
        updateSlider();
      }
      resetTimer();
    }
  
    function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(nextSlide, 5000);
    }
  
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);
  
    // Iniciar el temporizador
    resetTimer();
  });