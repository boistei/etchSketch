let num = 16;

const tiles = document.querySelector("#tiles");
let darkMode = false;

tiles.addEventListener("input", (e) => {
    document.querySelector("#tilesNum").textContent = `${tiles.value} x ${tiles.value}`;
})

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

function clearCanvas() {
    let rows = document.querySelectorAll(".row");
    let cols = document.querySelectorAll(".column");
    for (let row of rows) {
        for (let col of cols) {
            col.remove();
        }
        row.remove();
    }
}

generateBoard(num);
colorChanger();

let randColor = function () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}


function colorChanger() {
    let cells = document.querySelectorAll(".column");
    for (let cell of cells) {
        cell.addEventListener("mouseover", (f) => {
            cell.style.backgroundColor = `${randColor()}`;
        })
    }
}

function resetBoard() {
    let cells = document.querySelectorAll(".column");
    for (let cell of cells) {
        if (dark.checked === true) {
            cell.style.backgroundColor = `rgb(0, 5, 82)`;
        }
        else {
            cell.style.backgroundColor = 'white';
        }
    }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    resetBoard();
});

const change = document.querySelector("#change");
change.addEventListener("click", (e) => {
    num = parseInt(tiles.value);
    clearCanvas();
    generateBoard(num);
    colorChanger();
});

const dark = document.querySelector("#dark");
dark.addEventListener("click", (e) => {
    resetBoard();
    document.body.classList.toggle("dark");
})