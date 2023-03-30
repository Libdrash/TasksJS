const numbers = [7, 1, 11, 5, 15, 31, 100, 10]
const strings = ["10", "1", "17", "11", "120", "20", "2"]

console.log(
  numbers.sort((a, b) => a - b),
  strings.sort((a, b) => a - b)
)
