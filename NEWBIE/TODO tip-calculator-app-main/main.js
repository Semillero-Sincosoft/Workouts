function number (){
    let into = document.getElementById("invoice").value;
    let custom = document.getElementById("custom").value;
    let resultado = document.getElementById("result-tip");
    resultado.innerText= "$" + into * ( custom / 100)  
    return resultado
}
number ()

