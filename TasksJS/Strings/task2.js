const str = "Каждый охотник желает знать"
function delete_characters(str, length) {
  return str.slice(0, length)
}
console.log(delete_characters(str, 6))
