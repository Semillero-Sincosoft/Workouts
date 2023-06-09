export const tareas = [];

export const obtenerTareas = () => {
  const local = JSON.parse(localStorage.getItem("arrayTareas"));
  localStorage.setItem("arrayTareas", JSON.stringify(local));

  return tareas;
};
