import icons from "../../imgs/svg.js";
import { createTag } from "../../utilities.js";
import { EventChecked } from "../../functionalities/checked.js";
import { cambiarEstadoHomeWork } from "../funcionalidad_tareas_/cambiar_estado_tarea.js";
import { eliminarTarea } from "../../functionalities/eliminar_tarea.js";

export function crearTarea(tarea,index) {
  const { texto, id } = tarea;
console.log(index,'marcador InDeX')
  const article = createTag("article", "homework");
  const localArrayTareas = JSON.parse(localStorage.getItem("arrayTareas"));
  console.log(localArrayTareas,'homeworks')
article.classList.add("no-completado")
  article.setAttribute("id", id);
  article.setAttribute("index", index);
  const div = createTag("div");
  
  const input = createTag("input", "circular-checkbox");
  input.setAttribute("type", "checkbox");
  console.log(input,'INPUT HEREEEE')
  localArrayTareas.map(tarea => {
    let estado = false;
    console.log(tarea,'AQUIIIII')
    if(tarea.id){
      estado = tarea.finalizado;
    }
    if(estado == true){
      input.checked = true
      // article.classList.remove("no-completado")
      // article.classList.add("completado")
    }else{
      input.checked = false
      // article.classList.remove("completado")
      // article.classList.add("no-completado")
    }
    console.log(estado,'miraaaaaaa')
  })
  const textHomework = createTag("span");
  textHomework.textContent = texto;

  const close = createTag("button","icon-delete");
  close.innerHTML = icons.cross;
  close.addEventListener('click',() => eliminarTarea(index))
  article.append(div);
  div.append(input, textHomework);

  article.addEventListener("mouseenter", function() {
    article.appendChild(close); 
  });
  article.addEventListener("mouseleave", function() {
    article.removeChild(close); 
  });


  input.addEventListener("change", () => EventChecked(input, textHomework));
  input.addEventListener("change", () => cambiarEstadoHomeWork(tarea, input));
  return article;
}
