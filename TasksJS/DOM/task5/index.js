const inputNumber = document.querySelectorAll("input")
let inputNumber1 = inputNumber[0]
let inputNumber2 = inputNumber[1]
const inputText = document.querySelector(".inputText")
const resultText = document.querySelector(".resultText")

const optionSelect1 = document.querySelector(".optionSelect1")
const optionSelect2 = document.querySelector(".optionSelect2")
const res = document.getElementById("res")
const start = document.getElementById("start")

const onInput1 = (event) => {
  if (optionSelect1.value == "Доллар США") {
    res.value = Math.round(parseFloat(event.target.value * 82.56) * 100) / 100
    optionSelect2.value = "Российский рубль"
  } else {
    res.value = Math.round(parseFloat(event.target.value / 82.56) * 1000) / 1000
    optionSelect2.value = "Доллар США"
  }
  inputText.textContent = `${event.target.value} ${optionSelect1.value}  равно`
  resultText.textContent = `${res.value} ${optionSelect2.value}`
}
inputNumber1.addEventListener("input", onInput1)
