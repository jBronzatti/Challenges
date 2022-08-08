const checkPalindrome = require('./palindrome');

test('abc expected to be false', () => expect(checkPalindrome('abc')).toBe(false));

test('abcba expected to be true', () => expect(checkPalindrome('abcba')).toBe(true));

test('12321 expected to be true', () => expect(checkPalindrome('12321')).toBe(true));

test('123 expected to be false', () => expect(checkPalindrome('123')).toBe(false));

test('null expected to be false', () => expect(checkPalindrome()).toBe(false));