const button = document.getElementById("button");
const container = document.querySelector(".container");
const main2 = document.querySelector(".container-active");
const xd = document.querySelector(".raiting-selected");

function ocultarMostrar() {
  button.addEventListener("click", () => {
    container.style.display = "none";
    main2.style.display = "flex";
  });
}

const buttonsContainer = document.querySelector(".numbers");
const arrayButton = [1, 2, 3, 4, 5];
let calificacion = 0;
function crearEl() {
  arrayButton.map((el) => {
    const raiting = document.createElement("button");
    raiting.classList.add("num");
    raiting.innerText = el;
    buttonsContainer.appendChild(raiting);

    raiting.addEventListener("click", () => {
      raiting.classList.add("prueba");

      calificacion = el;
      ocultarMostrar();
    });
  });
  const raitingSelect = document.createElement("p");
  raitingSelect.classList.add("raiting-selected");
  raitingSelect.innerText = calificacion;
  xd.appendChild(raitingSelect);
}
crearEl();
