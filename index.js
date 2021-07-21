const alphabets = require('./alphabets.json')

function getKeyByValue(object, value) {
  const replacement = Object.keys(object).filter((key) => object[key] == value)

  return replacement
}

function fromLatinToAnotherLang(stringified, targetLanguage) {
  Object.keys(alphabets[targetLanguage]).forEach((letter) => {
    if (stringified.includes(letter)) {
      stringified = stringified.replaceAll(
        letter,
        alphabets[targetLanguage][letter]
      )
    }
  })
  return stringified
}

function anotherLangToLatin(stringified, originalLang) {
  const values = Object.keys(alphabets[originalLang]).map(
    (value) => alphabets[originalLang][value]
  )

  values.forEach((letter) => {
    if (stringified.includes(letter)) {
      const tempValue = values.filter((value) => value == letter)

      const replacementLetter = getKeyByValue(
        alphabets[originalLang],
        tempValue
      )

      stringified = stringified.replaceAll(letter, replacementLetter)
    }
  })
  return stringified
}
function translator(string, targetLanguage = 'greek', originalLang = 'latin') {
  if (typeof string == 'object') throw new Error('You can not pass an object!')

  const stringified = String(string)

  if (originalLang == 'latin') {
    const result = fromLatinToAnotherLang(stringified, targetLanguage)

    return result
  }

  if (targetLanguage == 'latin') {
    const result = anotherLangToLatin(stringified, originalLang)

    return result
  }

  const latinString = anotherLangToLatin(stringified, originalLang)

  const result = fromLatinToAnotherLang(latinString, targetLanguage)

  return result
}

module.exports = translator
