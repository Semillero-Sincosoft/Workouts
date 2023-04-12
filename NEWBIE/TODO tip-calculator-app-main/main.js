const contentOptionsTips = document.querySelector(".content-options-tips");
const into = document.getElementById("invoice").value
const resultTip = document.getElementById("result-tip")

function createButton ( clas, value, text) {
    const element = document.createElement("button");
    element.classList.add(clas);
    element.value = value;
    element.textContent = text;
    contentOptionsTips.append(element);
    
}
const button1 = createButton("button-one", 0.05, "5%");
const button2 = createButton("button-two", 0.1, "10%");
const button3 = createButton("button-three", 0.15, "15%");
const button4 = createButton("button-four", 0.25, "25%");
const button5 = createButton("button-five", 0.5, "50%");


const inputCustom = document.createElement("input");
inputCustom.classList.add("tip-custom-option");
inputCustom.type="number";
inputCustom.placeholder="Custom";
inputCustom.id = "custom";
contentOptionsTips.append(inputCustom);

function calculatePercentage (){
    
}


// const arrayButton = [5, 10, 15, 25, 50];
// arrayButton.map((el) =>{
//     const createButton = document.createElement ("button");
//     createButton.innerText = el + "%";
//     const valueType = el / 100;
//     createButton.value = valueType;
//     let into = document.getElementById("invoice").value;
//     let resultado = document.getElementById("result-tip");
//     resultado.innerText = "$" + into * createButton
//     return resultado
//     contentOptionsTips.append(createButton, inputCustom);
// })

// function calculatePercentage (){
//     let into = document.getElementById("invoice").value;
//     let custom = document.getElementById("custom").value;
//     let resultado = document.getElementById("result-tip");
//     resultado.innerText= "$" + into * ( custom / 100)  
//     return resultado
// }
// calculatePercentage ()

