
const scrollIndicator = document.getElementById("scrollIndicator");



function updateScrollIndicator(){
    const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY/totalScrollHeight) * 100;
    
    scrollIndicator.style.width = scrollPercentage + "%";

}

window.addEventListener("scroll",updateScrollIndicator);

updateScrollIndicator();