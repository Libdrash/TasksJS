const getNumberMatches = (str, letter) => {
  let regexp = new RegExp(letter, "g")
  let result = str.match(regexp)
  // let result = [...str].filter((item) => item === letter).length
  return result.length
}

console.log(getNumberMatches("обморожение", "о"))
