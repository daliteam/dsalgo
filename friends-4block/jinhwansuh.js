const replaceBoard = (m, n, boardArray) => {
  const sameStringArray = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let x = i,
        y = j;
      if (boardArray[i][j]) {
        const string = boardArray[i][j];
        if (x + 1 < m && y + 1 < n) {
          if (
            boardArray[i + 1][j] === string &&
            boardArray[i][j + 1] === string &&
            boardArray[i + 1][j + 1] === string
          ) {
            sameStringArray.push([i, j]);
          }
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
  return [boardArray, sameStringArray];
};

const moveToEmptyBottom = (m, n, array) => {
  for (let i = m - 1; i > 0; i--) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] !== '') {
        continue;
      }
      for (let k = i - 1; k > -1; k--) {
        if (array[k][j] !== '') {
          [array[i][j], array[k][j]] = [array[k][j], array[i][j]];
          break;
        }
      }
    }
  }
  return array;
};

function solution(m, n, board) {
  let boardArray = [...board.map((v) => [...v])];

  let indexArray = [],
    boardArray1,
    array1;

  while (true) {
    [boardArray1, indexArray] = replaceBoard(m, n, boardArray);
    if (indexArray.length === 0) break;
    array1 = moveToEmptyBottom(m, n, boardArray1);
    boardArray = [...array1];
  }

  let answer = 0;
  boardArray.map((array) =>
    array.map((string) => {
      if (!string) answer++;
    })
  );
  return answer;
}
