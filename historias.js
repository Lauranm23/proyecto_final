document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("monthModal");
    const modalImage = document.getElementById("modalImage");
    const modalMonth = document.getElementById("modalMonth");
    const closeModal = document.getElementById("closeModal");
  
    document.querySelectorAll(".slider__month-item").forEach(item => {
      item.addEventListener("click", () => {
        const image = item.querySelector("img");
        const monthName = item.querySelector(".slider__month-name").textContent;
  
        modalImage.src = image.src;
        modalMonth.textContent = monthName;
  
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  