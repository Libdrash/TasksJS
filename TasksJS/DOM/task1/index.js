let input = document.querySelector("input")

let result = document.querySelector(".result")

const onInput = (event) => {
  result.textContent = event.target.value
}
input.addEventListener("input", onInput)
