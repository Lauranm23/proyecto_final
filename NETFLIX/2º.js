document.addEventListener("DOMContentLoaded", () => {
  // Selección de elementos
  const videoContainer = document.getElementById("video-container");
  const introVideo = document.getElementById("intro-video");
  const navbar = document.querySelector(".navbar"); // El contenedor de los botones de navegación

  // Deshabilitar los botones de la navbar inicialmente
  navbar.style.pointerEvents = "none"; // Deshabilita los botones hasta que el video termine

  // Escuchar cuando el video termine
  introVideo.addEventListener("ended", () => {
      // Ocultar el contenedor del video cuando termine
      videoContainer.style.display = "none";

      // Habilitar la interacción con los botones de la navbar
      navbar.style.pointerEvents = "auto"; // Habilita la interacción con los botones
  });

  // Opcional: si necesitas reiniciar el video al recargar la página
  introVideo.addEventListener("play", () => {
      // Mientras el video esté en reproducción, deshabilitar los botones de nuevo
      navbar.style.pointerEvents = "none";
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
  
        // Cerrar otras pestañas abiertas
        const openContent = document.querySelector(".accordion-content[style*='max-height']");
        if (openContent && openContent !== content) {
          openContent.style.maxHeight = null;
        }
  
        // Alternar la pestaña actual
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });
  