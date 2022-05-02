const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  resArr: [],

  getLength() {
    return this.resArr.length;
  },

  addLink(value) {
    if (typeof value == 'undefined') {
      this.resArr.push(`( )`);
      return this;
    } else {
      this.resArr.push(`( ${value} )`);
      return this;
    };
  },

  removeLink(position) {
    if (isFinite(position) && (position > 0 && position <= this.resArr.length)) {
      this.resArr.splice(position - 1, 1);
      return this;
    } else {
      this.resArr.splice(0);
      throw new Error("You can't remove incorrect link!");
    };
  },

  reverseChain() {
    this.resArr.reverse();
    return this;
  },

  finishChain() {
    let resStr = this.resArr.join('~~');
    this.resArr.splice(0);
    return resStr;
  },
};

module.exports = {
  chainMaker
};
