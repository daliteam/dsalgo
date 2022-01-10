function equalBlockCheck(m, n, blockArr, checkArr) {
  // blockArr의 오른쪽, 아래, 대각선을 확인해서 같은지 체크, 전부 같으면 checkArr을 -1로 변경
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      let currentBlock = blockArr[i][j];
      let rightBlock = blockArr[i][j + 1];
      let bottomBlock = blockArr[i + 1][j];
      let diagonalBlock = blockArr[i + 1][j + 1];
      if (
        currentBlock !== null &&
        currentBlock === rightBlock &&
        currentBlock === bottomBlock &&
        currentBlock === diagonalBlock
      ) {
        checkArr[i][j] = -1;
        checkArr[i][j + 1] = -1;
        checkArr[i + 1][j] = -1;
        checkArr[i + 1][j + 1] = -1;
      }
    }
  }
  // 같은 블록제거 및 몇개인지 반환
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (checkArr[i][j] === -1) {
        count += 1;
        blockArr[i][j] = null;
      }
    }
  }

  return count;
}

function solution(m, n, board) {
  let answer = 0;
  const blockArr = [];
  let checkArr = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < board.length; i++) {
    const block = board[i].split("");
    blockArr.push(block);
  }

  // equalBlockCheck가 없을 때까지 반복
  while (equalBlockCheck(m, n, blockArr, checkArr)) {
    answer += equalBlockCheck(m, n, blockArr, checkArr);

    // 아래에 -1이 없을때까지 이동(이동시, 현재위치는 null로 변경)
    for (let i = 0; i < n; i++) {
      for (let j = m - 2; j > -1; j--) {
        if (blockArr[j][i] !== null) {
          let currentY = j;
          while (currentY < m - 1 && blockArr[currentY + 1][i] === null) {
            blockArr[currentY + 1][i] = blockArr[currentY][i];
            blockArr[currentY][i] = null;
            currentY += 1;
          }
        }
      }
    }

    // 이후 checkArr을 0으로 초기화
    checkArr = Array.from(Array(m), () => Array(n).fill(0));
  }

  return answer;
}
