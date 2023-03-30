let str = "Sam Dmith"
let arr = str
  .split(" ")
  .map((initials) => initials[0].toUpperCase())
  .join(".")
console.log(arr)
