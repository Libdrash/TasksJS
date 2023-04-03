const type = (value) => {
  if (value === null) {
    return "Null"
  } else if (Array.isArray(value)) {
    return "Array"
  } else if (value instanceof RegExp) {
    return "RegExp"
  }
  let result = typeof value
  return result[0].toUpperCase() + result.slice(1)
}
console.log(type())
