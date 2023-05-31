export const tareas = [
  { texto: "ir al banco", finalizado: true },
  { texto: "limpiar zapatos", finalizado: false },
  { texto: "barrer la calle", finalizado: true },
];

export const insertarDatosTarea = (text) => {
  const nuevaTarea = { texto: text, finalizado: false };
  tareas.push(nuevaTarea);
};
export const obtenerTareas = () => {
  return tareas;
};
console.log(tareas);
