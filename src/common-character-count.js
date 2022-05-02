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
  
  let common = 0;
  let array = s2.split('');

  for (let e of s1) {
    let i = array.indexOf(e);
    
    if (i === -1) {
      continue;
    } else {
      common += 1;
      array.splice(i, 1);
    };
  
  };

  return common;
}

module.exports = {
  getCommonCharacterCount
};
