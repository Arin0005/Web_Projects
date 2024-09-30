const generatebutton = document.getElementById("generatebutton");
const copybutton = document.getElementById("copybutton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("Password");

generatebutton.onclick = function generatePassword() {
    const characterSet = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%&*_";
    const passwordLength = 12;  // Set a 12-character length password
    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        generatedPassword += characterSet[randomIndex];
    }

    passwordInput.value = generatedPassword;
};

copybutton.onclick = function copyPassword() {
    const passwordValue = passwordInput.value;

    if (passwordValue.trim() === "") {
        alert("Password is empty. Generate a password first.");
    } else {
        navigator.clipboard.writeText(passwordValue).then(function () {
            show.innerHTML = `Your new password is:<br> ${passwordValue}`;
            show.classList.add("active");
            setTimeout(() => {
                show.classList.remove("active");
            }, 2000);
            passwordInput.value = "";
        });
    }
};
