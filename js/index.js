document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  const introVideo = document.querySelector(".video-container__intro-video");
  const navbar = document.querySelector(".header__menu");

  // Asegurarse de que el video ocupa toda la pantalla en dispositivos móviles
  function adjustIntroVideo() {
    if (window.innerWidth <= 480) {
      introVideo.style.width = "100%";
      introVideo.style.height = "100%";
      introVideo.style.objectFit = "cover";
    }
  }

  adjustIntroVideo();
  window.addEventListener("resize", adjustIntroVideo);

  // Desactivar interacción con el navbar mientras el video se reproduce
  navbar.style.pointerEvents = "none";

  introVideo.addEventListener("ended", () => {
    videoContainer.style.display = "none";
    navbar.style.pointerEvents = "auto";
  });

  // Configuración del acordeón
  const accordionHeaders = document.querySelectorAll(".accordion__header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const openContent = document.querySelector(".accordion__content[style*='max-height']");
      
      // Cerrar otros elementos del acordeón si están abiertos
      if (openContent && openContent !== content) {
        openContent.style.maxHeight = null;
      }

      // Alternar entre abrir y cerrar el contenido actual
      content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
  });

  // Asegurar que la imagen de perfil no se recorte
  const profileImage = document.querySelector(".about__profile-image");
  if (profileImage) {
    profileImage.style.objectFit = "cover";
    profileImage.style.width = "100%";
    profileImage.style.height = "auto";
    profileImage.style.maxWidth = "400px"; // Para mantener un tamaño razonable
  }
});
