export const progressGame = (board) => {
  const nextTurn = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const firstRow = board[0];

  for (let column of firstRow) {
    if(board[0][column] === 1 && board[1][column] === 1 && board[2][column] === 1){
        nextTurn[1][column] = 1;
      }
  }

  if(board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
        nextTurn[1][1] = 1;
    }

    if(board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
        nextTurn[1][1] = 1;
    }

  return checkAllRows(board, nextTurn);
};

export const setupBoard = (rows, columns) => {

    const board = [];

    for (let i = 0; i < rows; i++){
        const row = []
        for (let j = 0; j < columns; j++){
            row.push(0)
        }
        board.push(row)
    }
    console.log(board)
  return board;
};

const wholeRowAlive = (row) => {
    return row[0] === 1 && row[1] === 1 && row[2] === 1
}

const checkAllRows = (board, nextTurn) => {
    const newNextTurn = nextTurn;
    for (let rowIndex in board){
        if (wholeRowAlive(board[rowIndex])) {
            newNextTurn[rowIndex][1] = 1;
       }
    }
    return newNextTurn;
}

