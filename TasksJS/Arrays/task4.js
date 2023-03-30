const products = [
  { name: "Книга по основам JS", price: 1900 },
  { name: "Кошачий корм", price: 200 },
  { name: "Самоучитель “Как написать скрипт для кормления кота”", price: 1799 },
]
const result = products.reduce((sum, product) => sum + product.price, 0)

console.log(result)
