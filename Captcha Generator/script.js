
const display = document.getElementById("_status");
const submit = document.getElementById("_submit");
const body = document.body;
const refresh = document.getElementById("_refresh");
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let captcha ="";

function generateCaptcha(){
    captcha = "";
    const captchaLength = 6;
    for(let i =0; i<captchaLength; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha +=char.substring(randomIndex,randomIndex + 1);
    }
    document.getElementById("_generator").value = captcha;
    display.innerText= "Enter the Captcha";
};



body.onload = generateCaptcha();


submit.onclick = function checkInput(){
    const input = document.getElementById("_client-text").value;
    if(input===""){
        display.innerText = "Please enter the text shown below.";
    }else if(input === captcha){
        display.innerText= "Matched !";
    }else {
        display.innerText="Not-Matched !";
    }
};



refresh.onclick = function refreshCaptcha(){
    
    generateCaptcha();
    display.innerText="Enter the new Captcha";
};