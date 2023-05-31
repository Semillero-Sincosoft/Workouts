import { createTag } from "./utilities.js";
import icons from "./imgs.js/svg.js"
import { EventChecked } from "./checked.js";
export function crearTarea(tarea) {
  const { texto, finalizado } = tarea;

  const article = createTag("article","homework")

  const div = createTag("div")

  const input = createTag("input","circular-checkbox");
  input.setAttribute("type", "checkbox");

  const textHomework = createTag("span")
  textHomework.textContent = texto;

  input.addEventListener('change',()=>EventChecked(input,textHomework))

  const close = createTag("button")
  close.innerHTML = icons.cross;

  article.append(div, close);
  div.append(input, textHomework);
  
  input.addEventListener('change',()=>cambiarEstadoHomeWork(tarea,input))
 
  return article;
}

const cambiarEstadoHomeWork = (tarea,input) => {
   if(input.checked){
    tarea.finalizado = true;
   }else{
    tarea.finalizado = false;
   }
   console.log(tarea)
}