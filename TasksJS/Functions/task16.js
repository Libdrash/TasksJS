const arr = [
  {
    name: "Igor",
    age: 17,
    isStudent: true,
    avatar: {
      src: "google.com",
      alt: "Igor's Avatar",
    },
  },
  {
    name: "Alex",
    age: 27,
    isStudent: false,
    avatar: {
      src: "google.com",
      alt: undefined,
    },
  },
]
const get = (key) => {
  return (v) => {
    return v[key]
  }
}
const propEq = (key, value) => {
  return (v) => {
    if (v[key] === value) {
      return v
    }
  }
}
const getOr = (findOptions, str, user) => {
  const userAvatar = user[findOptions[0]]

  if (userAvatar[findOptions[1]]) {
    return userAvatar[findOptions[1]]
  } else if (userAvatar.alt === undefined) {
    return userAvatar.alt
  } else {
    return str
  }
}
const names = arr.map(get("name"))
console.log(names)

const alex = arr.find(propEq("name", "Alex"))
const igor = arr.find(propEq("name", "Igor"))
console.log(alex, igor)

const alexAge = [alex].map(get("age"))
const igorAge = [igor].map(get("age"))
console.log(alexAge, igorAge)

console.log(getOr(["avatar", "alt"], "Cannot find", alex))
console.log(getOr(["avatar", "alt"], "Cannot find", igor))
console.log(getOr(["avatar", "some"], "Cannot find", igor))
