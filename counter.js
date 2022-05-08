let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count  
}

function decrement() {
    count = count - 1
    countEl.innerText = count  
}

let saveCount = document.getElementById("save-count")

function save() {
    saveCount.innerText = count
}
