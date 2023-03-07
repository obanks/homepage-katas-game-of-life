export const progressGame = (board) => {
  const boardRows = board.length;
  const boardColumns = board[0].length;
  const nextTurn = [];
  for (let i=0; i < boardRows; i++) {
    const newRow = [];
    for (let j=0; j < boardColumns; j++) {
      newRow.push(0);
    }
    nextTurn.push(newRow);
  }

  const firstRow = board[0];

  for (let i=0; i < boardRows; i++) {
    for (let j=0; j < boardColumns; j++) {
      const neighbours = []
      if(board[i][j] === 1) {
        neighbours.push(board[i]?.[j-1]) // west
        neighbours.push(board[i]?.[j+1]) // east
        neighbours.push(board[i-1]?.[j]) // north
        neighbours.push(board[i+1]?.[j]) // south
        neighbours.push(board[i-1]?.[j-1]) // nw
        neighbours.push(board[i-1]?.[j+1]) // ne
        neighbours.push(board[i+1]?.[j-1]) // sw
        neighbours.push(board[i+1]?.[j+1]) // se
      }

      const livingNeighbours.filter((neighbour) => neighbour === 1)

      // started progressing this function to find all neighbours, with the intention of filtering it to find living neighbours.
      // we can then apply the rules based on how many neighbours are alive.
    }
  }

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

