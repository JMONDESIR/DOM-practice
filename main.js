console.log("connected")

const display = document.getElementById("output")

const TACO = document.createElement("div")
const title = document.createElement("h1")
title.textContent = "This is on the DOM"
console.log(title)

TACO.appendChild(title)
display.appendChild(TACO)

const name = document.getElementById("name")
// name.textContent = "This is my life"

const fieldset = document.createElement("fieldset")
display.appendChild(fieldset)

const inputField = document.createElement("input")
inputField.id = "write"
fieldset.appendChild(inputField)

const red = document.createElement("button")
red.classList = "red_button"
red.textContent = "submit"

red.addEventListener("click", () => {
        console.log("I'm a red button")
})

const blue = document.createElement("button")
blue.classList = "blue_button"
blue.textContent = "submit"

const green = document.createElement("button")
green.classList = "green_button"
green.textContent = "submit"

fieldset.appendChild(red)
fieldset.appendChild(blue)
fieldset.appendChild(green)