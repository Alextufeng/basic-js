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
  
  let str = n.toString();
  let arr = [];
  
  for (let i = 0; i < str.length; i++) {
    let compare = new RegExp(str[i]);
    arr.push(str.replace(compare, ''));
  }

  let result = Math.max.apply(null, arr);
  
  return result;
}

module.exports = {
  deleteDigit
};
