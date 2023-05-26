const writtenHomeworks = document.getElementById("content-written-homeworks");

export const modal = document.createElement("div");
modal.classList.add("modal");
 const card = document.createElement("div");
card.classList.add("card-alert");

const contenido = document.createElement("p");
contenido.textContent = "Lo siento, tienes que escribir una tarea";
contenido.classList.add("card-content");

const btnAlert = document.createElement("button");
btnAlert.textContent = "continuar";

writtenHomeworks.append(modal);
modal.append(card);
card.append(contenido, btnAlert);

btnAlert.addEventListener("click",()=>{

    
})