const users = [
  { id: "1", email: "test1@mail.ru", name: "John" },
  { id: "2", email: "test2@mail.ru", name: "Max" },
  { id: "3", email: "test3@mail.ru", name: "Tony" },
]

const result = users.map((user) => {
  return { label: user.name, value: user.id }
})
console.log(result)
