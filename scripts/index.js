
console.log("hello world")

var activePart = "Home";

function setActive(item) {
    document.getElementById(activePart).classList.remove("active");
    document.getElementById(item).classList.add("active");
    activePart = item;
} 
