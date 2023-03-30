const toDoList = [
  { name: "Купить хлеб", done: false },
  { name: "Купить сливочное масло", done: false },
  { name: "Провести уборку в квартире", done: true },
  { name: "Покормить кота", done: false },
]
console.log(toDoList.splice(0, 3), toDoList)
