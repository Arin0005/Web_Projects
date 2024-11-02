const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.getElementById("_button");
const searchicon = document.querySelector(".fa-search");
const closeicon = document.querySelector(".fa-times");

button.addEventListener("click",()=>{
    container.classList.toggle("active");
    button.classList.toggle("active");

    if(container.classList.contains("active")){
        searchicon.style.opacity = 0;
        closeicon.style.opacity = 1;
        input.focus();
    }else{
        searchicon.style.opacity = 1;
        closeicon.style.opacity = 0;
    }

})

