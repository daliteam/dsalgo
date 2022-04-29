// 프렌즈 4블록

function solution(m, n, board) {
  let answer = 0;
  const copy = [...board.map((c) => [...c])];
  board = board.map((b) => [...b]);

  let count = 0;

  function deleteBlock() {
    count = 0;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] !== '0' &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          copy[i][j] = '';
          copy[i][j + 1] = '';
          copy[i + 1][j + 1] = '';
          copy[i + 1][j] = '';
          count++;
        }
      }
    }
  }

  function moveToBottom() {
    for (let j = 0; j < n; j++) {
      let s = '';
      for (let i = 0; i < m; i++) {
        s += copy[i][j];
      }
      s = s.padStart(m, '0');
      for (let i = 0; i < m; i++) {
        copy[i][j] = s[i];
      }
    }
  }
  while (true) {
    deleteBlock();

    if (count === 0) break;
    moveToBottom();
    board = [...copy.map((d) => [...d])];
  }

  board.forEach((bb) => {
    bb.forEach((b) => {
      if (b === '0') answer++;
    });
  });

  return answer;
}
