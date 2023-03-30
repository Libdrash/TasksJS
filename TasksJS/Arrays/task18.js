const pens = [
  "красная шариковая ручка",
  "черная шариковая ручка",
  "шариковая ручка с медвежатами",
  "красная шариковая ручка",
  "черная шариковая ручка",
]

// pens.forEach((element, index) => {
//   ;`${element} - ${index} - ${pens.indexOf(element)}`
// })
// let uniquePens = pens.filter((element, index) => {
//   return pens.indexOf(element) === index
// })
// console.log(uniquePens)

const result = new Set(pens)
const arrPens = []
result.forEach((item) => arrPens.push(item))
console.log(arrPens)
