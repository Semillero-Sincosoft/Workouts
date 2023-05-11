const navContainer = document.querySelector("nav");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", ()=>{
    navContainer.classList.toggle("prueba")
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
})
closeMenu.addEventListener("click",()=>{
    navContainer.classList.toggle("prueba");
    openMenu.style.display = "flex"
    closeMenu.style.display = "none"
})