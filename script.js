// Change text dynamically
document.getElementById("main-title").textContent = "JS says Hello";

// Modify CSS styles via JavaScript
document.getElementById("about-text").style.color = "darkgreen";
document.getElementById("about-text").style.fontWeight = "bold";

// Add or remove an element when a button is clicked
const button = document.getElementById("toggle-box-btn");
let boxExists = false;

button.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");

    if (!boxExists) {
        const box = document.createElement("div");
        box.id = "fun-box";
        box.textContent = "🎁 Surprise Box!";
        box.style.padding = "10px";
        box.style.marginTop = "10px";
        box.style.backgroundColor = "lightblue";
        box.style.border = "2px dashed #ff8800";
        aboutSection.appendChild(box);
        boxExists = true;
    } else {
        const existingBox = document.getElementById("fun-box");
        existingBox.remove();
        boxExists = false;
    }
});
