// let sum = (...arguments) => {
//   let result = 0
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i]
//   }
//   return result
// }
// console.log(sum(4, 5, 6))

function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}
console.log(sumAll(1, 2, 3, 4, 5))
