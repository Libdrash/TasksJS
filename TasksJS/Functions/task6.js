let sum = (...arguments) => {
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}
console.log(sum(4, 5, 6))
