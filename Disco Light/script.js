const lights = document.querySelectorAll(".light");
const body = document.body;

let active = 0;

setInterval(() => {
    changeColor();
}, 1000);

function changeColor() {
    // Remove active class from previous light
    lights.forEach(light => light.classList.remove('active'));

    // Set body background color and add active class to the current light
    const currentColor = getComputedStyle(lights[active]).getPropertyValue('--light-color');
    body.style.backgroundColor = currentColor;
    lights[active].classList.add('active');

    // Move to the next light
    active = (active + 1) % lights.length;
}
