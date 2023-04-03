function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
const form = (a, b) => a + b
let sum = curry(form)
console.log(sum(1, 3))
console.log(sum(1)(3))
