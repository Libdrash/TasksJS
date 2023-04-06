let button = document.querySelector("button")
let input = document.querySelector("input")

const clear = () => {
  input.value = ""
}
const funckFilter = (e) => {
  const result = e.target.value.replace(/[^привет]/g, "")
  input.value = result
}

input.addEventListener("input", funckFilter)
button.addEventListener("click", clear)
