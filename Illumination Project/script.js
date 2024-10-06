const Mouseevent = document.documentElement;

Mouseevent.addEventListener("mousemove",(e)=>{

    Mouseevent.style.setProperty("--x",e.clientX+"px");
    Mouseevent.style.setProperty("--y",e.clientY+"px");
})