const checkAllSame = arr => {
  const first = arr[0];
  return arr.every(value => value === first);
};

function solution(m, n, board) {
  let answer = 0;
  const newBoard = board.map(v => [...v]);

  while (true) {
    const allSameIndexes = [];

    for (let i = 0; i < m - 1; i += 1) {
      for (let j = 0; j < n - 1; j += 1) {
        // 부셔져야 할 공간은 체크하지 않는다.
        if (newBoard[i][j] === '') {
          continue;
        }

        if (
          checkAllSame([
            newBoard[i][j],
            newBoard[i][j + 1],
            newBoard[i + 1][j],
            newBoard[i + 1][j + 1],
          ])
        ) {
          allSameIndexes.push([i, j]);
        }
      }
    }

    if (allSameIndexes.length === 0) {
      break;
    }

    // 부실 곳은 ''로 표시해 준다.
    allSameIndexes.forEach(([i, j]) => {
      newBoard[i][j] = '';
      newBoard[i][j + 1] = '';
      newBoard[i + 1][j] = '';
      newBoard[i + 1][j + 1] = '';
    });

    // ''는 부셔야 하므로 위에 남아 있는 블록을 아래로 내려야 한다.
    for (let i = m - 1; i > 0; i -= 1) {
      for (let j = 0; j < n; j += 1) {
        if (newBoard[i][j] !== '') {
          continue;
        }

        for (let u = i - 1; u >= 0; u -= 1) {
          if (newBoard[u][j] !== '') {
            [newBoard[i][j], newBoard[u][j]] = [newBoard[u][j], newBoard[i][j]];
            break;
          }
        }
      }
    }
  }

  // ''의 개수를 센다.
  newBoard.forEach(board => {
    answer += board.filter(v => v === '').length;
  });

  return answer;
}
