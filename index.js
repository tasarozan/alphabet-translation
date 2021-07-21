const alphabets = require('./alphabets.json')

function getKeyByValue(object, value) {
  const replacement = Object.keys(object).filter((key) => {
    if (object[key] == value) return key
  })
  return replacement
}
function translator(string, language = 'greek', translateFrom = 'latin') {
  if (typeof string == 'object') throw new Error('You can not pass an object!')

  let stringified = String(string)

  if (translateFrom == 'latin') {
    Object.keys(alphabets[language]).map((letter) => {
      if (stringified.includes(letter)) {
        stringified = stringified.replaceAll(
          letter,
          alphabets[language][letter]
        )
      }
    })
  } else if (language == 'latin') {
    const values = Object.keys(alphabets[translateFrom]).map(
      (value) => alphabets[translateFrom][value]
    )
    values.map((letter) => {
      if (stringified.includes(letter)) {
        let tempValue = values.filter((value) => value == letter)

        let replacementLetter = getKeyByValue(
          alphabets[translateFrom],
          tempValue
        )

        stringified = stringified.replaceAll(letter, replacementLetter)
      }
    })
  } else {
    const values = Object.keys(alphabets[translateFrom]).map(
      (value) => alphabets[translateFrom][value]
    )
    values.map((letter) => {
      if (stringified.includes(letter)) {
        let tempValue = values.filter((value) => value == letter)

        let replacementLetter = getKeyByValue(
          alphabets[translateFrom],
          tempValue
        )

        stringified = stringified.replaceAll(letter, replacementLetter)
      }
    })

    Object.keys(alphabets[language]).map((letter) => {
      if (stringified.includes(letter)) {
        stringified = stringified.replaceAll(
          letter,
          alphabets[language][letter]
        )
      }
    })
  }
  return stringified
}

module.exports = translator
