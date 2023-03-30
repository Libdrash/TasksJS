const box1 = ["Апельсин", "Банан", "Ананас"]
const box2 = ["Мандарин", "Арбуз", "Персик"]
const sharedBox = ["Яблоко"]

sharedBox.push(...box1, ...box2)

console.log(sharedBox)
