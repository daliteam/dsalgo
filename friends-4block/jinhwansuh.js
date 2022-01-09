const changeStringtoArray = (board) => {
  const changedArray = [];
  board.map((board) => {
    changedArray.push(board.split(''));
  });
  return changedArray;
};

const replaceBoard = (m, n, boardArray) => {
  const sameStringArray = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let x = i,
        y = j;
      const a = boardArray[i][j];
      if (x + 1 < m && y + 1 < n) {
        if (
          boardArray[i + 1][j] === a &&
          boardArray[i][j + 1] === a &&
          boardArray[i + 1][j + 1] === a
        ) {
          sameStringArray.push([i, j]);
        }
      }
    }
  }
  sameStringArray.map(([a, b]) => {
    boardArray[a][b] = '';
    boardArray[a + 1][b] = '';
    boardArray[a][b + 1] = '';
    boardArray[a + 1][b + 1] = '';
  });
  return boardArray;
};

const moveToEmptyBottom = (m, n, array) => {
  let isTrue = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let x = i,
        y = j;
      if (x + 1 < m && y + 1 < n) {
        if (array[x][y] && array[x + 1][y] === '') {
          [array[x][y], array[x + 1][y]] = [array[x + 1][y], array[x][y]];
          isTrue = true;
        }
      }
    }
  }
  return [isTrue, array];
};

function solution(m, n, board) {
  const boardArray = changeStringtoArray(board);
  const array = replaceBoard(m, n, boardArray);
  let isEmpty = true,
    newArray = array;

  while (isEmpty) {
    const [empty1, array1] = moveToEmptyBottom(m, n, newArray);
    newArray = replaceBoard(m, n, array1);
    const [empty2, array2] = moveToEmptyBottom(m, n, newArray);
    if (!empty2) isEmpty = false;
  }

  let answer = 0;
  newArray.map((array) =>
    array.map((string) => {
      if (!string) answer++;
    })
  );
  return answer;
}
