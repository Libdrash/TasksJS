const colors = ["green", "red", "blue"]
let button = document.querySelector("button")
let colorize = document.querySelector(".colorize")

const colorChange = () => {
  let random = colors[Math.floor(Math.random() * colors.length)]
  colorize.style.backgroundColor = random
}
button.addEventListener("click", colorChange)
