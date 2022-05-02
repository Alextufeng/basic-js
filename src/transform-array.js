const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resArr = arr.slice();

  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] === "--discard-next") {
      resArr.splice(i + 1, 1);
    };
    
    if (resArr[i] === "--discard-prev" && i !== 0) {
      resArr.splice(i - 1, 1);
    };

    if (resArr[i] === "--double-next") {
      resArr.splice(i, 1, resArr[i + 1]);
    };

    if (resArr[i] === "--double-prev" && i !== 0) {
      resArr.splice(i, 1, resArr[i - 1]);
    };
  };

  resArr = resArr.filter(
    (item) =>
    item !== "--discard-next" &&
    item !== "--discard-prev" &&
    item !== "--double-next" &&
    item !== "--double-prev" &&
    item !== undefined
  );

  return resArr;
}

module.exports = {
  transform
};
