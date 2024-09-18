// selectall takes the group of queries in a single set 
const letters = document.querySelectorAll(".letters span");

letters.forEach((letter)=>{

    // works as the onviewclick listner, which on clicked it executes a set of codes
    letter.addEventListener("click",(e)=>{
        
        e.target.classList.add("active");  //it targets the class fron css which has active key animations


        // It is used to run the animation continously without refeshing the page 
        setTimeout(()=>{   
            e.target.classList.remove("active");  // Remove the active class after 1 second to reset the state 
        
        },1000); // seconds to remove the active class of css
    });

});