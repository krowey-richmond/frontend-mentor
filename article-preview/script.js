const buttons = document.querySelectorAll(".article-share-button");
const sharePanel = document.querySelector(".article-share-active");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    sharePanel.classList.toggle("active");
  });
});
