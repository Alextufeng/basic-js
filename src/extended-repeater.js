const { NotImplementedError } = require('../extensions/index.js');

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
  str = str + '';
  let repeat = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let addRepeat = options.additionRepeatTimes;
  let addSeparator = options.additionSeparator;
  let resStr = '';

  if (repeat === undefined) {
    repeat = 1;
  };

  if (addRepeat === undefined) {
    addRepeat = 1;
  };

  if (separator === undefined) {
    separator = '+';
  };

  if (addSeparator === undefined) {
    addSeparator = '|';
  };

  for (let i = 0; i < repeat; i++) {
    resStr += str;
    for (let j = 0; j < addRepeat; j++) {
      if (j === addRepeat - 1) {
        resStr += addition;
      } else {
        resStr += addition + addSeparator;
      }
    };

    if (i === repeat - 1) {
      resStr += '';
    } else {
      resStr += separator;
    }
  };

  let result = resStr.replace(/undefined/gi, '')
  return result;
}

module.exports = {
  repeater
};
