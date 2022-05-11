// 블록이동하기

function solution(board) {
  const answer = [];

  const headDx = [0, 0, 0, 0];
  const headDy = [1, -1, 1, -1];

  const tailDx = [0, 0, 1, -1];
  const tailDy = [1, -1, 0, 0];

  const recur = (head, tail, count, visited) => {
    if (
      board[tail[0]][tail[1]] === 1 ||
      board[head[0]][head[1]] === 1 ||
      head[0] < 0 ||
      head[1] < 0 ||
      tail[0] < 0 ||
      tail[1] < 0 ||
      tail[0] >= board.length ||
      tail[1] >= board.length ||
      head[0] >= board.length ||
      head[1] >= board.length
    )
      return;

    visited[tail[0]][tail[1]] = true;

    if (tail[0] === board.length - 1 && tail[1] === board.length - 1) {
      answer.push(count);
      return;
    }

    for (let i = 0; i < headDx.length; i++) {
      head[0] += headDx[i];
      head[1] += headDy[i];
      tail[0] += tailDx[i];
      tail[1] += tailDy[i];

      if (visited[tail[0]][tail[1]]) return;
      recur(head, tail, count + 1, visited);
    }
    return;
  };

  recur(
    [0, 0],
    [0, 1],
    0,
    Array.from({ length: board.length }, () => Array(board.length).fill(false))
  );

  console.log(answer);

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    7
  )
);
