const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let subStr = "";
  let newSubStr;
  let addStr;
  if ("addition" in options) {
    if ("additionSeparator" in options) {
      addStr = options["addition"] + options["additionSeparator"];
      if ("additionRepeatTimes" in options) {
        subStr = str + addStr.repeat(`${options["additionRepeatTimes"]}`);
      } else {
        subStr = str + addStr;
      }
      newSubStr = subStr.substring(
        0,
        subStr.length - options["additionSeparator"].length
      );
    } else {
      addStr = options["addition"] + "|";
      if ("additionRepeatTimes" in options) {
        subStr = str + addStr.repeat(`${options["additionRepeatTimes"]}`);
      } else {
        subStr = str + addStr;
      }
      newSubStr = subStr.substring(0, subStr.length - 1);
    }
  } else {
    addStr = str;
    subStr = str;
    newSubStr = subStr;
  }

  let arr = [];
  if ("repeatTimes" in options) {
    for (i = 0; i < options["repeatTimes"]; i++) {
      arr.push(newSubStr);
    }
  } else {
    arr.push(newSubStr);
  }

  let ans;
  if ("separator" in options) {
    ans = arr.join(options["separator"]);
  } else {
    ans = arr.join("+");
  }
  return ans;
}

module.exports = {
  repeater,
};