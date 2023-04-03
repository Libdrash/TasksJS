const getNumbers = (arr, num) => {
  let result = arr.filter((item) => item > num)
  return result
}
console.log(getNumbers([1, 3, 5, 6, 8, 10, 15], 7))
