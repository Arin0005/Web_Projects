const tabreact = document.querySelector(".react");
const tabvue = document.querySelector(".vue");
const tabangular = document.querySelector(".angular");
const tabpython = document.querySelector(".python");
const tabflutter = document.querySelector(".flutter");
const tabc = document.querySelector(".c");
const tabdart = document.querySelector(".dart");
const tabcss = document.querySelector(".css");
const tabhtml = document.querySelector(".html");
const tabjs = document.querySelector(".js");
const tabnode = document.querySelector(".node");
const tabgithub = document.querySelector(".github");
const tabhive = document.querySelector(".hive");
const tabjava = document.querySelector(".java");
const tabstack_overflow = document.querySelector(".so");
const tabgo = document.querySelector(".go");
const tabphp = document.querySelector(".php");
const tabrust = document.querySelector(".rust");

const item = document.querySelector(".item");
const icon = document.querySelector(".big-icon");
const body = document.body;



// Function to set colors, icon, and tab states
function setColors(bgColor, iconClass, iconColor) {
    body.style.backgroundColor = bgColor;
    icon.className = iconClass;
    icon.style.color = iconColor;
}

// Function to remove bold from all tabs
function removeBold() {
    const tabs = document.querySelectorAll("nav a");
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    });
}

// React Tab
tabreact.addEventListener("click", () => {
    setColors("#00d8ff", "fab fa-react", "#00d8ff");
});

// Vue Tab
tabvue.addEventListener("click", () => {
    setColors("#42b883", "fab fa-vuejs", "#42b883");
});

// Angular Tab
tabangular.addEventListener("click", () => {
    setColors("#dd1b16", "fab fa-angular", "#dd1b16");
});

// Python Tab
tabpython.addEventListener("click", () => {
    setColors("#306998", "fab fa-python", "#306998");
});

// Flutter Tab
tabflutter.addEventListener("click", () => {
    setColors("#02569B", "fab fa-flutter", "#02569B");
});

// C Tab
tabc.addEventListener("click", () => {
    setColors("#00599C", "fas fa-c", "#00599C");
});

// Dart Tab
tabdart.addEventListener("click", () => {
    setColors("#0f2cb3", "fab fa-dart-lang", "#0f2cb3");
});

// CSS Tab
tabcss.addEventListener("click", () => {
    setColors("#2965F1", "fab fa-css3-alt", "#2965F1");
});

// HTML Tab
tabhtml.addEventListener("click", () => {
    setColors("#E34F26", "fab fa-html5", "#E34F26");
});

// JavaScript Tab
tabjs.addEventListener("click", () => {
    setColors("#F7DF1E", "fab fa-js", "#F7DF1E");
});

tabnode.addEventListener("click", () => {
    setColors("#68a063", "fab fa-node", "#68a063");
});

// GitHub Tab
tabgithub.addEventListener("click", () => {
    setColors("#6e5494", "fab fa-github", "#6e5494");
});

// Hive Tab
tabhive.addEventListener("click", () => {
    setColors("#ffcc00", "fab fa-hive", "#ffcc00");
});

// Java Tab
tabjava.addEventListener("click", () => {
    setColors("#900000", "fab fa-java", "#900000");
});

// Stack Overflow Tab
tabstack_overflow.addEventListener("click", () => {
    setColors("#ff6600", "fab fa-stack-overflow", "#ff6600");
});

// Golang Tab (using a generic code icon)
tabgo.addEventListener("click", () => {
    setColors("#00add8", "fa-brands fa-golang", "#00add8");
});

// PHP Tab
tabphp.addEventListener("click", () => {
    setColors("#8892bf", "fab fa-php", "#8892bf");
});

// Rust Tab (Rust doesn't have a Font Awesome icon, using a generic cog icon)
tabrust.addEventListener("click", () => {
    setColors("#dea584", "fa-brands fa-rust", "#dea584");
});


rgb(75, 139, 190)
rgb(255, 212, 59)

//#ff1565c0