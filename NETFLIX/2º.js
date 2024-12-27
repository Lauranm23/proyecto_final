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
  