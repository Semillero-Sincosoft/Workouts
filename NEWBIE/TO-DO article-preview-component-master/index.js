const shareButton = document.querySelector("#boton-redes");
const shareredes = document.querySelector("#redes");

shareButton.addEventListener("click", () => {
  shareredes.classList.toggle("hiden");
});
