const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click",()=>{

if(menu.style.display === "block"){
menu.style.display = "none"
}else{
menu.style.display = "block"
}

})