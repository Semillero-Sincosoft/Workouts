const navContainer = document.querySelector("nav");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

const checkSupport = document.getElementById("check-support")
const openSupport = document.getElementById("open-support");
const closeSupport = document.getElementById("close-support")

openMenu.addEventListener("click", ()=>{
    navContainer.classList.add("nav-open")
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
})
closeMenu.addEventListener("click",()=>{
    navContainer.classList.remove("nav-open");
    openMenu.style.display = "flex"
    closeMenu.style.display = "none"
})

openSupport.addEventListener("click",()=>{
    checkSupport.classList.add("popup-notification");
    checkSupport.style.display = "flex"
})
closeSupport.addEventListener("click",()=>{
    checkSupport.classList.remove("popup-notification")
    checkSupport.style.display = "none"
})