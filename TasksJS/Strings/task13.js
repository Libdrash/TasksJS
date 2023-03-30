let str = "6 -1 9"
let minMaxChoice = (str) => {
  let arr = str.split(" ")
  arr.sort((a, b) => a - b)
  return `${arr[arr.length - 1]} ${arr[0]}`
}
console.log(minMaxChoice(str))
