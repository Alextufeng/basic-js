const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rowY = matrix.length;
  let rowX = matrix[0].length;
  let res = [];

  function countMines(y, x, matrix) {
    let counter = 0;
    for (let i = -1; i < 2; i++){
      for (let j = -1; j < 2; j++){
        if (y + i > -1 && x + j > -1 && (y + i !== y || x + j !== x) && y + i < rowY && x + j < rowX){
  
          if (matrix[y + i][x + j]) counter++;  
        }  
      }  
    }
    return counter;
  }

  for (let i = 0; i < matrix.length; i++) {
    res.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      res[i].push(countMines(i,j, matrix));
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
