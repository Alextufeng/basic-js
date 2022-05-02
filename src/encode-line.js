const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
          
        counter++;
          
        if (str[i+1] !== str[i+2]) {
          result += (counter +str[i]);
        };

      } else if (str[i] !== str[i+1] && str[i] !== str[i-1] ) {

          result += str[i];

      } else {
          
        counter = 1;
      
      };
  }

  return result;
}


module.exports = {
  encodeLine
};
