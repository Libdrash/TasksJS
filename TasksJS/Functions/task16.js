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

//...

// map((v) => get('name')(v)) то же что и map(get('name'))

const names = arr.map(get("name")) // ['Igor', 'Alex'];
const alex = arr.find(propEq("name", "Alex")) // {name: 'Alex', age: 27, isStudent: false}
const igor = arr.find(propEq("name", "Igor"))

const ages = arr.map(get("age"))
const alexAge = arr.find(propEq("age", "27")) // 27
/* написать код, используя методы map, find, get и propEq */
console.log(getOr(["avatar", "alt"], "Cannot find", alex)) // undefined
console.log(getOr(["avatar", "alt"], "Cannot find", igor)) // 'Igor\'s Avatar'
console.log(getOr(["avatar", "someKey"], "Cannot find", igor)) // 'Cannot find'
