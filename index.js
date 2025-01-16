document.addEventListener("DOMContentLoaded", () => {
  // Selección del contenedor del video
  const videoContainer = document.querySelector(".video-container");
  // Selección del video introductorio
  const introVideo = document.querySelector(".video-container__intro-video");
  // Selección de la barra de navegación
  const navbar = document.querySelector(".header__menu");

  // Deshabilitar la interacción con los enlaces del menú inicialmente
  navbar.style.pointerEvents = "none";

  // Escuchar cuando el video termine
  introVideo.addEventListener("ended", () => {
    // Ocultar el contenedor del video
    videoContainer.style.display = "none";
    // Habilitar la interacción con los enlaces del menú
    navbar.style.pointerEvents = "auto";
  });

  // Funcionalidad del acordeón
  const accordionHeaders = document.querySelectorAll(".accordion__header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      // Cerrar cualquier otro acordeón abierto
      const openContent = document.querySelector(".accordion__content[style*='max-height']");
      if (openContent && openContent !== content) {
        openContent.style.maxHeight = null;
      }
      // Alternar el contenido actual
      content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
  });
});
