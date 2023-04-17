const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  let arr1 = [];
  for (let file in arr) {
    if (arr1.indexOf(arr[file]) > -1) {
      let index = 1;
      while (arr1.indexOf(arr[file] + "(" + index + ")") > -1) {
        index++;
      }
      let str = arr[file] + "(" + index + ")";
      arr1.push(str);
    } else {
      arr1.push(arr[file]);
    }
  }
  return arr1;
}

module.exports = {
  renameFiles,
};