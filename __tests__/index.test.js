/* eslint-disable no-undef */
const alphabets = require('../index')

describe('alphabet-translator test', () => {
  it('alphabet-translator should translate latin alphabet to greek alphabet by default', () => {
    const result = alphabets('sinus')

    expect(result).toBe('σινψσ')
  })
  it('alphabet-translator should translate latin alphabet to cyrillic-macedonian alphabet', () => {
    const result = alphabets('sinus', 'cyrillic-macedonian')

    expect(result).toBe('синус')
  })
  it('alphabet-translator should translate latin alphabet to cyrillic-bulgarian alphabet', () => {
    const result = alphabets('sinus', 'cyrillic-bulgarian')

    expect(result).toBe('синус')
  })
  it('alphabet-translator should translate latin alphabet to cyrillic-ukrainian alphabet', () => {
    const result = alphabets('sinus', 'cyrillic-ukrainian')

    expect(result).toBe('сiнус')
  })
  it('alphabet-translator should throw an error when it receives invalid argument', () => {
    const result = alphabets(121)

    expect(result).toBe('Argument must be a string!')
  })
  it('alphabet-translator should throw an error when it receives empty string', () => {
    const result = alphabets('')

    expect(result).toBe('String can not be empty!')
  })
})
