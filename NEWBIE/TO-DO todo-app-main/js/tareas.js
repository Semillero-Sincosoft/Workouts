export const tareas = [];

export const insertarDatosTarea = (text) => {
  const nuevaTarea = { texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas);
};
export const obtenerTareas = () => {
  return tareas;
};

