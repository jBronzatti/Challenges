/*  Given a string describing the number of objects you bought in a shop, code a solution that gives
the total sum of products in the string:
a. Example: “32 Pencils, 15 Pens, 2 notebooks” - Answer: 49
b. Other strings to test:
i. “Nothing” – Answer: 0
ii. “23567” – Answer: 23567
iii. “adafgrgrgr56, adfddf2” – Answer 58 */

sumNumber = string => string.match(/\d+/g).map(Number).reduce((a, b) => a + b)

console.log(sumNumber('32 Pencils, 15 Pens, 2 notebooks'))
console.log(sumNumber('3223567'))
console.log(sumNumber('adafgrgrgr56, adfddf2'))