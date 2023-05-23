const tareas = [];

// tareas.push({
//     hola: "asd",
// });
// {
//   texto: "ir al banco",
//   finalizada: false,
// },
// {
//   texto: "limpiar zapatos",
//   finalizada: true,
// },
// {
//   texto: "crear css",
//   finalizada: false,
// },

const input = document.getElementById("text");
const main = document.querySelector("main")
input.addEventListener("keyup", () => {
  function prueba() {
    if (event.keyCode == 13) {
      if (input.value === "") {
        alert("ingrese una tarea");
      } else {
        const div = document.createElement("div");
        div.classList.add("content-homeworks")
        main.append(div)
        const p = document.createElement("p");
        p.textContent = tareas;
        div.append(p);
        tareas.push(input.value);
      }
    }
  }
  prueba();
});
