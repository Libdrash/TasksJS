// function deleteValue(arr, del) {
//   index = arr.indexof(del)
//   return arr + arr[index]
// }
// console.log(deleteValue(["красный", "желтый", "зеленый", "синий"], "желтый"))

const deleteValue = (arr, del) => {
  let result = arr.filter((item) => item !== del)
  return result
}
console.log(deleteValue(["красный", "желтый", "зеленый", "синий"], "желтый"))
