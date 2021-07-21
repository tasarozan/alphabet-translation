const alphabets = require('./alphabets.json')

function getKeyByValue(object, value) {
  const replacement = Object.keys(object).filter((key) => object[key] == value)

  return replacement
}

function fromLatinToAnotherLang(stringified, targetLang) {
  Object.keys(alphabets[targetLang]).forEach((letter) => {
    if (!stringified.includes(letter)) return

    stringified = stringified.replaceAll(letter, alphabets[targetLang][letter])
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
function translation(string, targetLang = 'greek', originalLanguage = 'latin') {
  const stringified = String(string)

  if (originalLanguage == 'latin') {
    return fromLatinToAnotherLang(stringified, targetLang)
  }

  if (targetLang == 'latin') {
    return anotherLangToLatin(stringified, originalLanguage)
  }

  const latinString = anotherLangToLatin(stringified, originalLanguage)

  return fromLatinToAnotherLang(latinString, targetLang)
}

module.exports = translation
