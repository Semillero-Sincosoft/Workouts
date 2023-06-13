export const obtenerTareas = () => {
  const tareas = JSON.parse(localStorage.getItem("arrayTareas")) != null ? JSON.parse(localStorage.getItem("arrayTareas")) : [];
  return tareas;
};
