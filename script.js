const grid = document.querySelector("#grid");
let counter = 16;
let length = 100 / counter;
generate(counter);
hover();

document.querySelector("#btn").addEventListener("click", () => {
    counter = prompt("How many squares?");
    if (counter > 100) counter = 100;
    else if (counter < 16) counter = 16;
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    length = 100 / counter;
    generate(counter);
    hover();
});



function generate(counter) {
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(" + counter + ", " + length + "%)";
    grid.style.gridTemplateRows = "repeat(" + counter + ", " + length + "%)";
    for (let j = 0; j < counter; j++) {
        for (let i = 0; i < counter; i++) {
            const element = document.createElement("div");
            element.classList.add("grid");
            grid.appendChild(element);
        }
    }
}

function hover() {
    const grids = document.querySelectorAll(".grid");
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener("mouseenter", () => {
            grids[i].style.backgroundColor = "yellow";
        })
    }
}