export const tareas = [];

export const insertarDatosTarea = (text) => {
  const nuevaTarea = { texto: text, finalizado: false };
  tareas.push(nuevaTarea);
};
export const obtenerTareas = () => {
  return tareas;
};
console.log(tareas);
