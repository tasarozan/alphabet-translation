const alphabets = require('./alphabets.json')

function translator(string, language = 'greek') {
  if (typeof string != 'string') return 'Argument must be a string!'
  if (string == '') return 'String can not be empty!'

  for (let i = 0; i < string.length; i++) {
    if (alphabets[language][string[i]]) {
      string = string.replace(string[i], alphabets[language][string[i]])
    }
  }

  return string
}

module.exports = translator
