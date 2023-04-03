const getEvenNumber = (arr) => {
  let result = arr.filter((item) => item % 2 === 0)
  return result
}
console.log(getEvenNumber([1, 2, 3, 4, 5, 6, 7]))
