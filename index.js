document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  const introVideo = document.querySelector(".video-container__intro-video");
  const navbar = document.querySelector(".header__menu");

  navbar.style.pointerEvents = "none";

  introVideo.addEventListener("ended", () => {
    videoContainer.style.display = "none";
    navbar.style.pointerEvents = "auto";
  });

  const accordionHeaders = document.querySelectorAll(".accordion__header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const openContent = document.querySelector(".accordion__content[style*='max-height']");
      if (openContent && openContent !== content) {
        openContent.style.maxHeight = null;
      }
      content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
  });
});
