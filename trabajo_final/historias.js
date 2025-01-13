document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('monthModal');
  const modalImage = document.getElementById('modalImage');
  const modalMonth = document.getElementById('modalMonth');
  const closeModal = document.getElementById('closeModal');

  // Detectar clic en las imágenes del slider
  document.querySelectorAll('.slider__month-item').forEach(item => {
      item.addEventListener('click', () => {
          const image = item.querySelector('img');
          const monthName = item.querySelector('.slider__month-name').textContent;

          // Mostrar modal con datos
          modalImage.src = image.src;
          modalImage.alt = monthName;
          modalMonth.textContent = monthName;

          modal.style.display = 'flex';
      });
  });

  // Cerrar modal al hacer clic en el botón de cerrar
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
});
