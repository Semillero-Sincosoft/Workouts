document.getElementById("miDiv").addEventListener("click", function() {
  document.getElementById("prueba").checked = true;
});
const nav = {
  element: document.getElementById("nav-content"),
  iconOpen: document.getElementById("open"),
  iconClose: document.getElementById("close"),
  show: function () {
    this.element.classList.remove("oculto");
    this.iconOpen.classList.add("oculto");
    this.iconClose.classList.remove("oculto");
  },
  hidden: function () {
    this.element.classList.add("oculto");
    this.iconOpen.classList.remove("oculto");
    this.iconClose.classList.add("oculto");
  },
};
const dialog = {
  elemento: document.getElementById("dialog-support"),
  mostrar: function () {
    this.elemento.classList.remove("oculto");
  },
  ocultar: function () {
    this.elemento.classList.add("oculto");
  },
};
