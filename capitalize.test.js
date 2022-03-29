const capitalize = require('./capitalize.js')

describe('capitalize', () => {
  test('It should contain a string', () => {
    expect(capitalize('test')).toBe('Test');
  })

  test('It should not be empty', () => {
    expect(() => capitalize('')).toThrow('empty string exception');
  })

  test('It should start with a alphabet', () => {
    expect(() => capitalize('2test5test')).toThrow('string has non-alphabetic characters');
  })

})