import keyExists from './keyExists'

const KEY = 'needle'
const DIFFERENT_KEY = 'hammer'
const VAL = 'pointy'
const HAYSTACK = {
  [KEY]: VAL
}
const WRONG_HAYSTACK = {}
test('empty object', () => {
  expect(keyExists({}, KEY, [KEY, VAL])).toBe(false)
})

test('Negative case', () => {
  expect(keyExists(WRONG_HAYSTACK, KEY, [KEY, VAL])).toBe(false)
})

test('Positive case', () => {
  expect(keyExists(HAYSTACK, KEY, [KEY, VAL])).toBe(true)
})

test('Key mismatch', () => {
  expect(keyExists(HAYSTACK, DIFFERENT_KEY, [KEY, VAL])).toBe(false)
})

test('Inverted key mismatch', () => {
  expect(keyExists(HAYSTACK, KEY, [DIFFERENT_KEY, VAL])).toBe(false)
})
