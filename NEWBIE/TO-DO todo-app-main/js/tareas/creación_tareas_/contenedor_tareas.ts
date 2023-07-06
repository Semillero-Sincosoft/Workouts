export const obtenerTareas = (): any[] => {
  const tareas: any[] =
    localStorage.getItem("arrayTareas") !== null
      ? JSON.parse(localStorage.getItem("arrayTareas")!)
      : [];
  return tareas;
};
