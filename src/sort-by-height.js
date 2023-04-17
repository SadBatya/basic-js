const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let pos = [];
  let preSort = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      pos.push(i);
    } else {
      preSort.push(arr[i]);
    }
  }
  let sort = preSort.sort((a, b) => a - b);
  let ans = [];
  for (let j = 0; j < arr.length; j++) {
    if (pos.indexOf(j) === -1) {
      ans.push(sort[j]);
    } else {
      ans.push(-1);
      sort.splice(j, 0, -1);
    }
  }
  return ans;
}

module.exports = {
  sortByHeight,
};