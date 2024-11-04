const container = document.getElementById("_container");

let greenColorCodes = ["#7cfc00", "#78ab46", "#00c957", "#66ff66", "#228b22", "#006400"]; 
let blueColorCodes = ["#7ec8e3", "#55acee", "#0073e6", "#1e90ff", "#0000cd", "#00008b"]; 
let redColorCodes = ["#ff6347", "#ff4500", "#d12d2d", "#ff9999", "#b22222", "#800000"]; 

const numberOfSquares = 107; 
let colorCycle = 0; 

for (let i = 0; i < numberOfSquares; i++) {
    const activity = document.createElement("div");
    activity.classList.add("activity");

    activity.addEventListener("mouseover", () => {
        addColor(activity);
    });

    activity.addEventListener("mouseout", () => {
        stickColor(activity);
    });

    container.appendChild(activity);
}

function addColor(squareTile) {
    let color;
    if (colorCycle === 0) {
        color = greenColor();
    } else if (colorCycle === 1) {
        color = blueColor();
    } else {
        color = redColor();
    }

    squareTile.style.backgroundColor = color;
    squareTile.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function stickColor(squareTile) {
    let color;
    if (colorCycle === 0) {
        color = greenColor();
        colorCycle = 1; 
    } else if (colorCycle === 1) {
        color = blueColor();
        colorCycle = 2; 
    } else {
        color = redColor();
        colorCycle = 0; 
    }

    squareTile.style.backgroundColor = color;
    squareTile.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}


function greenColor() {
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}

function blueColor() {
    return blueColorCodes[Math.floor(Math.random() * blueColorCodes.length)];
}

function redColor() {
    return redColorCodes[Math.floor(Math.random() * redColorCodes.length)];
}
