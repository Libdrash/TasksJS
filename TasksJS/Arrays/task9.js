const users = [
  { name: "Sveta", birthYear: "14.05.1997", phone: 81231231212 },
  { name: "Petya", birthYear: "24.07.2000", phone: 82232232212 },
  { name: "Sasha", birthYear: "10.03.1993", phone: 83233233212 },
  { name: "Anna", birthYear: "05.08.1998", phone: 84234234212 },
]
const result = users.forEach((user) => {
  console.log(`Пользователь ${user.name} , год рождения  ${user.birthYear.toString()}. Номер телефона: ${user.phone}.`)
})
