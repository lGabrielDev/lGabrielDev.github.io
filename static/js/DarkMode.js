//apply light mode
const body = document.querySelector("body");
const icon = document.querySelector("img.night_mode_icon");

//funtion light mode ON and OFF
function lightsOn(){
    body.classList.add("light_mode_on");
    icon.setAttribute("src", "./static/img/moon_icon.svg");
}

function lightsOff(){
    body.classList.remove("light_mode_on");
    icon.setAttribute("src", "./static/img/sun_icon.svg");
}


//event sun and moon icon
icon.addEventListener("click", function(){
    if(body.classList.contains("light_mode_on")){
        lightsOff();
        localStorage.removeItem("lightMode");
    }
    else{
        lightsOn();
        localStorage.setItem("lightMode", true);
    }
})

//local storage - refresh page
if(localStorage.getItem("lightMode") != null){
    lightsOn();
}
else{
    lightsOff();
}