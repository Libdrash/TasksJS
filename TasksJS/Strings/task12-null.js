let str = "1, 2, 3"
let deleteFirstLast = () => {
  const deleteFirstLast = str
    .substring(1, str.length - 1)
    .replaceAll(",", " ")
    .trim("")
  return deleteFirstLast ? deleteFirstLast : null
}
console.log(deleteFirstLast())
