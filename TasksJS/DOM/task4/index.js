const url = "https://jsonplaceholder.typicode.com/users"
const userList = document.querySelector(".userList")
const promise = fetch(url)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => (userList.innerHTML += `<li>${user.name}</li>`))
  })
