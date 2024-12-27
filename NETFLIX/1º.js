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
  