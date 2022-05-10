
let countEl = document.getElementById("count-el")

let saveCount = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count  
}

function decrement() {
    count -= 1
    countEl.innerText = count  
}

function save() {
    let countDash = count + " | "
    saveCount.textContent += countDash
}

function reset() {
    countEl.textContent = 0
    count = 0
}
