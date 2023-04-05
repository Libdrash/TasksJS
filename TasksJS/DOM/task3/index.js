let button = document.querySelector("button")
let input = document.querySelector("input")

let str = "привет".split("")
console.log(str)

const clear = () => {
  input.value = ""
}
const funckFilter = (e) => {
  console.log(e.data)
  // if ((...str) === e.data){
  alert("ppp")
}
// if (e[data] !== str[key])
// }

input.addEventListener("input", funckFilter)
button.addEventListener("click", clear)
