//hamburger collapse
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const hamburguerIcon = document.querySelector(".hambuguer_button");
const navLink = document.querySelectorAll(".navlink");


// ------------------ function to hide the hamburguer bar ------------------
function closeHamburguerMenu(){
    //header container
    header.classList.toggle("header_mobile_hamburguer_on");
    //nav
    nav.classList.toggle("nav_mobile_hamburguer_on");
    //links
    for(item of navLink){
        item.classList.toggle("navlink_hamburguer_on");
    }
    
    //hamburguer icon
    hamburguerIcon.classList.toggle("hambuguer_button_on");
    hamburguerIcon.classList.toggle("fa-bars");
    hamburguerIcon.classList.toggle("fa-xmark");
}


hamburguerIcon.addEventListener("click", function(){
    closeHamburguerMenu();
})

for(let item of navLink){
    
    item.addEventListener("click", function(){
        closeHamburguerMenu();
        saveCurrentSection(item);
    })
}