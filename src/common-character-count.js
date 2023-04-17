const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let one =''
  let two=''
  if(s1.length >= s2.length) {
   one = s1.split('')
   two = s2.split('')
  } else {
    one = s2.split('')
    two = s1.split('')
  }
  let count = 0;
  one.forEach(item => {
    if(two.includes(item)) {
     count++;
     two.splice(two.indexOf(item), 1)
    }
  })
  return count
}


module.exports = {
  getCommonCharacterCount
};