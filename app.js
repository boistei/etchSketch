let num = 16;
num = prompt("Enter the number of cells", 16);
const container = document.querySelector("#container");

for (let i = 0; i < parseInt(num); i++) {
    let row = document.createElement("div")
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < parseInt(num); j++) {
        let col = document.createElement("div")
        col.classList.add("column");
        row.appendChild(col);
    }
}


let randColor = function () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}

let cells = document.querySelectorAll(".column");
for (let cell of cells) {
    cell.addEventListener("mouseover", (f) => {
        cell.style.backgroundColor = `${randColor()}`;
    })
}