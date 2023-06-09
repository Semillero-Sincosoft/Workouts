export const tareas = JSON.parse(localStorage.getItem("arrayTareas")) != null ? JSON.parse(localStorage.getItem("arrayTareas")) : [];   
console.log(tareas,'ORIGINAL')
export const obtenerTareas = () => {
  const local = tareas
  console.log(local,'LOCAL OR')
  localStorage.setItem("arrayTareas", JSON.stringify(local));

  return local;
};

