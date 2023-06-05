export const tareas = [];

function elementsLeft() {
  const itemsLeft = document.getElementsByClassName("p0");
  const elementosFaltantes = tareas.filter(
    (elemento) => elemento.finalizado == false
  );
  const numeroDeElementos = elementosFaltantes.length;
  console.log(itemsLeft,"pruebaDe items")
  itemsLeft[0].textContent = numeroDeElementos + " items left";
}

export const insertarDatosTarea = (text, id) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas);

  elementsLeft();
  localStorage.setItem("arrayTareas",JSON.stringify(tareas))
  const local = JSON.parse( localStorage.getItem("arrayTareas") )
  console.log(local)
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


export const mostrarTareasCompletadas = function () {

  const tareasFinalizadas = tareas.filter(function(tarea) {
    return tarea.finalizado === false;
  });
  console.log(tareasFinalizadas,'SOBRE finalizadas')
  tareasFinalizadas.forEach(function(tarea) {
    const article = document.getElementById(tarea.id);
    article.classList.add("hidden")
  });
}

export const mostrarTodasTareasCompletadas2 = function () {

  const todasTareas = tareas
  todasTareas.forEach(function(tarea) {
    const article = document.getElementById(tarea.id);
    if(tarea.finalizado === false){
      article.classList.add("hidden");
    }else{
      article.classList.remove("hidden");
    }
    // console.log(tarea,'sobre tarea')
    // const article = document.getElementById(tarea.id);
    // article.classList.remove("hidden")
  });
}


export const mostrarTareasPendientes = function () {

  const tareasPendientes = tareas
  
  console.log(tareasPendientes,'SOBRE finalizadas')
  tareasPendientes.forEach(function(tarea) {
    const article = document.getElementById(tarea.id);
    if(tarea.finalizado === true){
      article.classList.add("hidden");
    }else{
      article.classList.remove("hidden");
    }
    // const article = document.getElementById(tarea.id);
    // article.classList.add("hidden")
  });
}

export const mostrarTodasTareas = function () {

  const todasTareas = tareas

  todasTareas.forEach(function(tarea) {
    console.log(tarea,'sobre tarea')
    const article = document.getElementById(tarea.id);
    article.classList.remove("hidden")
  });
}