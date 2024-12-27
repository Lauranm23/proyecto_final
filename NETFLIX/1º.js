document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento ha sido cargado correctamente.");
    // Puedes agregar aquí cualquier funcionalidad adicional que necesites.
});

document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector(".splash-screen");
    const splashVideo = document.querySelector(".splash-video");
  
    splashVideo.addEventListener("ended", () => {
      splashScreen.style.transition = "opacity 1s ease";
      splashScreen.style.opacity = "0";
  
      setTimeout(() => {
        splashScreen.remove();
        document.body.classList.add("content-loaded");
      }, 1000);
    });
  });
  
  // Obtener elementos del modal
const modal = document.getElementById('monthModal');
const modalImage = document.getElementById('modalImage');
const modalMonth = document.getElementById('modalMonth');
const closeModal = document.getElementById('closeModal');

// Detectar clic en imágenes
document.querySelectorAll('.month-item').forEach(item => {
  item.addEventListener('click', () => {
    const image = item.querySelector('img');
    const monthName = item.querySelector('.month-name').textContent;

    // Mostrar modal con datos
    modalImage.src = image.src;
    modalImage.alt = monthName;
    modalMonth.textContent = monthName;

    modal.style.display = 'flex'; // Mostrar modal
  });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
