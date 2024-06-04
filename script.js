// Script para el carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carousel) => {
      const slides = carousel.querySelectorAll(".slide");
      let index = 0;
  
      function showSlide() {
        slides.forEach((slide) => {
          slide.style.display = "none";
        });
        slides[index].style.display = "block";
      }
  
      function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide();
      }
  
      function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
      }
  
      showSlide();
  
      const nextBtn = document.createElement("button");
      nextBtn.textContent = "Siguiente";
      nextBtn.classList.add("Siguiente");
      carousel.appendChild(nextBtn);
  
      const prevBtn = document.createElement("button");
      prevBtn.textContent = "Retroceder";
      prevBtn.classList.add("Retroceder");
      carousel.appendChild(prevBtn);
  
      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('suggestionForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtener el valor del campo de sugerencia
      const suggestion = document.getElementById('suggestion').value;
  
      // Guardar la sugerencia en localStorage
      localStorage.setItem('suggestion', suggestion);
  
      // Mostrar mensaje de confirmación
      confirmationMessage.style.display = 'block';
  
      // Opcional: podrías reiniciar el formulario después de enviarlo
      form.reset();
    });
  
    // Verificar si hay una sugerencia guardada previamente y mostrarla si existe
    const savedSuggestion = localStorage.getItem('suggestion');
    if (savedSuggestion) {
      document.getElementById('suggestion').value = savedSuggestion;
    }
  });
  


  