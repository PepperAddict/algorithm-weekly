//get back to this. omg this is hard.

var printBoard = function (board) {
  let newboard = board.length;
  let count = 0;
  let count2 = 0;
  for (let rows = 0; rows < newboard; rows++) {
    process.stdout.write('\n')
    if (rows % 3 === 0 && rows != 0 && rows < 9) {
      process.stdout.write('\n' + '-----------------------------------' + '\n')

    }
    for (let columns = 0; columns < newboard; columns++) {
      if (columns % 3 === 0 && columns !=0) {
        process.stdout.write(' | ')
      }
      process.stdout.write(board[rows][columns] + ' ')
    }
  }

};
var checkIfValid = function(board, number, position) {
  //check row first 
  for (let column = 0; row < board[0].length; row++) {
    if (board[0][column] == number && position.column != column) {
      return false
    }
  }

}

var findAnEmpty = function(board) {

  for (let rows= 0; rows < board.length; rows++) {
    for (let columns =0; columns < board.length; columns++) {
      if (board[rows][columns] === '.') {
        //finds first empty, gives row and column. 
        return {row: rows, column: columns}
      }
    }
  }

}
var solveSudoku = function (board) {
  let oneNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(findAnEmpty(board))
  printBoard(board);

};

solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],

  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],

  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
