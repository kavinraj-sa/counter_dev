// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments
let saveEl = document.getElementById("save-el")
let count = 0

console.log(countEl)


function increment() {
    count += 1
    countEl.textContent = count
}


// 1. Grab the save-el paragrah and store it in a variable called saveEl
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - " 
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0

}