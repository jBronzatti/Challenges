checkPalindrome = (str) => String(str) == String(str).split('').reverse().join('');

module.exports = checkPalindrome;

console.log(checkPalindrome(null));