let sayHi = (str) => {
  if (typeof str === "string") {
    return str
  } else if (typeof str === "number") {
    return "Это не строка"
  } else {
    return "Ничего не передано"
  }
}
console.log(sayHi(55))
