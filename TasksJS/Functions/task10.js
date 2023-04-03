const count = (num) => {
  return (result = () => (num += 1))
}
const incCount = count(7)
console.log(incCount())
console.log(incCount())
