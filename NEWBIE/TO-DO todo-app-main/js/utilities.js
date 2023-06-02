export const createTag = (tagName,className) => {
    const element = document.createElement(tagName);
    if(className){
        element.classList.add(className)
    };
    return element;
}
export const generarIdÚnico = () =>{
    const idAleatorio = Math.random().toString(8).substring(2,6);
    return idAleatorio
  }