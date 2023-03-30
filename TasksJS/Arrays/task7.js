const toDoList = [
  { name: "Купить хлеб", done: false },
  { name: "Купить сливочное масло", done: false },
  { name: "Провести уборку в квартире", done: true },
  { name: "Покормить кота", done: false },
]
const notCompleted = toDoList.filter((item) => item.done !== true)
console.log(notCompleted.length)
