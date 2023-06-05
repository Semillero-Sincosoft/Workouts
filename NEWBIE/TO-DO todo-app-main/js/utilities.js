export const createTag = (tagName,className,text,id) => {
    const element = document.createElement(tagName);
    if(className){
        element.classList.add(className)
    };
    if(text){
        element.textContent = text;
    }
    if(id){
        element.setAttribute('id',id)
    }
    return element;
}
export const generarIdÚnico = () =>{
    const idAleatorio = Math.random().toString(8).substring(2,6);
    return idAleatorio
  }
//   const array = [createTag("h2","elementos-restantes","prueba de texto")]