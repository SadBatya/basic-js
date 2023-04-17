const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = String(n).split('');
  let result = [];
  for(let i = 0; i <= array.length; i++) {
    array = String(n).split('');
    array.splice(i, 1); 
    result.push(array);
  }
let allRes = result.map(item => item.join(''));
 return Math.max(...allRes)
}
module.exports = {
  deleteDigit
};