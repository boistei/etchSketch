// const num = prompt("Enter the number of cells", 10);
const num = 20;
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

let cells = document.querySelectorAll(".column");
for (let cell of cells) {
    cell.addEventListener("mouseover", (f) => {
        cell.classList.add("changed");
    })
}