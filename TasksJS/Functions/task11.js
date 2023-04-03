const findLongestWord = (str) => {
  let longerWords = str.split(" ")
  return longerWords.reduce((longest, words) => {
    return words.length > longest.length ? words : longest
  })
}
console.log(findLongestWord("принимает строку и находит кекекекекекекекеке"))
