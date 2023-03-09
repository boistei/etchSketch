let num = 16;

const tiles = document.querySelector("#tiles");

tiles.addEventListener("input", (e) => {
    document.querySelector("#tilesNum").textContent = `${tiles.value} x ${tiles.value}`;
})

const change = document.querySelector("#change");
change.addEventListener("click", (e) => {
    num = parseInt(tiles.value);
    // generateBoard(num);
});

const container = document.querySelector("#container");

function generateBoard(num) {
    for (let i = 0; i < parseInt(num); i++) {
        let row = document.createElement("div")
        row.classList.add("row");
        container.append(row);
        for (let j = 0; j < parseInt(num); j++) {
            let col = document.createElement("div")
            col.classList.add("column");
            row.append(col);
        }
    }
}

generateBoard(num);

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

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    for (let cell of cells) {
        cell.style.backgroundColor = 'white';
    }
})