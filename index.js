const alphabets = require('./alphabets.json')

function getKeyByValue(object, value) {
  return Object.keys(object).filter((key) => object[key] == value)
}

function fromLatinToAnotherLang(stringified, targetLanguage) {
  Object.keys(alphabets[targetLanguage]).forEach((letter) => {
    if (!stringified.includes(letter)) return

    stringified = stringified.replaceAll(
      letter,
      alphabets[targetLanguage][letter]
    )
  })
  return stringified
}

function anotherLangToLatin(stringified, originalLanguage) {
  const values = Object.keys(alphabets[originalLanguage]).map(
    (value) => alphabets[originalLanguage][value]
  )

  values.forEach((letter) => {
    if (!stringified.includes(letter)) return

    const tempValue = values.filter((value) => value == letter)

    const replacementLetter = getKeyByValue(
      alphabets[originalLanguage],
      tempValue
    )

    stringified = stringified.replaceAll(letter, replacementLetter)
  })
  return stringified
}

function translator(
  string,
  targetLanguage = 'greek',
  originalLanguage = 'latin'
) {
  const stringified = String(string)

  if (originalLanguage == 'latin') {
    return fromLatinToAnotherLang(stringified, targetLanguage)
  }

  if (targetLanguage == 'latin') {
    return anotherLangToLatin(stringified, originalLanguage)
  }

  const latinString = anotherLangToLatin(stringified, originalLanguage)

  return fromLatinToAnotherLang(latinString, targetLanguage)
}

module.exports = translator
