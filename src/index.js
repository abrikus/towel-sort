
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  let arr = [];

  for (let i = 0; i < matrix.length; i++) {

    if (i % 2) {
      arr.concat(matrix[i].reverse());
    }

    arr = arr.concat(matrix[i]);
  }

  return arr;
}
