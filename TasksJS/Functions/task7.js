const phoneRepair = (phone, tool = "утюг") => {
  let result
  return (result = `'При разборе телефона ${phone} использовался инструмент - ${tool}`)
}
console.log(phoneRepair("iphone", "отвертка"))
