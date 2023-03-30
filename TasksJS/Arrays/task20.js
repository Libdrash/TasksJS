const users = [
  { name: "Sveta", age: 23 },
  { name: "Petya", age: 31 },
  { name: "Sasha", age: 27 },
  { name: "Anna", age: 25 },
]
const newUsers = []
users.forEach((item) => newUsers.push(item))
newUsers.sort((a, b) => a.age - b.age)
console.log(newUsers)
