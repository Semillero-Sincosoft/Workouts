import { insertarTarea } from "./validationHomework.js";
export const tareas = [];

function elementsLeft() {
  const itemsLeft = document.getElementsByClassName("p0");
  const elementosFaltantes = tareas.filter(
    (elemento) => elemento.finalizado == false
  );
  const numeroDeElementos = elementosFaltantes.length;
  itemsLeft[0].textContent = numeroDeElementos + " items left";
}

export const insertarDatosTarea = (text, id) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas);

  elementsLeft();
  // localStorage.setItem("arrayTareas", JSON.stringify(tareas));
  // const local = JSON.parse(localStorage.getItem("arrayTareas"));
  // console.log(local);
};
export const obtenerTareas = () => {
  return tareas;
};

export const cambiarEstadoHomeWork = (tarea, input) => {
  const tareas = obtenerTareas();
  if (input.checked) {
    tarea.finalizado = true;
  } else {
    tarea.finalizado = false;
  }

  tareas.map((t) => {
    if (t.id === tarea.id) {
      t.finalizado = tarea.finalizado;
    }

    return t;
  });

  elementsLeft();
};

export const eliminarCompletados = function () {
  const tareas = obtenerTareas();
  for (let i = tareas.length - 1; i >= 0; i--) {
    if (tareas[i].finalizado) {
      tareas.splice(i, 1);
    }
  }
  const divContent = document.getElementById("contenedor-tareas");
  divContent.innerHTML = "";
  console.log(tareas, "eliminados PR");
  tareas.forEach(insertarTarea);
  return tareas;
};


export const mostrarTareasPorEstado = function (estado) {
  const TareaCompletada = document.querySelectorAll(".homework");
  TareaCompletada.forEach((article) => {
    if(estado === true && article.classList.contains("completado")){
      article.classList.add("hidden")
    }else if(estado === false && article.classList.contains("no-completado")){
      article.classList.add('hidden')
    }else{
      article.classList.remove('hidden')
    }
  });
};
