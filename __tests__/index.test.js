/* eslint-disable no-undef */
const alphabets = require('../index')

describe('alphabet-translation test', () => {
  it('alphabet-translation should translate latin alphabet to greek alphabet by default', () => {
    const result = alphabets('sinus')

    expect(result).toBe('σινψσ')
  })
  it('alphabet-translation should translate latin alphabet to cyrillic-macedonian alphabet', () => {
    const result = alphabets('sinus', 'cyrillic-macedonian')

    expect(result).toBe('синус')
  })
  it('alphabet-translation should translate latin alphabet to cyrillic-bulgarian alphabet', () => {
    const result = alphabets('sinus', 'cyrillic-bulgarian')

    expect(result).toBe('синус')
  })
  it('alphabet-translation should translate latin alphabet to cyrillic-ukrainian alphabet', () => {
    const result = alphabets('sinus', 'cyrillic-ukrainian')

    expect(result).toBe('сiнус')
  })
  it('alphabet-translation should translate vice versa', () => {
    const result = alphabets('oζαν', 'latin', 'greek')

    expect(result).toBe('ozan')
  })
  it('alphabet-translation should translate from greek to cyrillic-ukrainian', () => {
    const result = alphabets('oζαν', 'cyrillic-ukrainian', 'greek')

    expect(result).toBe('oзaн')
  })
})
