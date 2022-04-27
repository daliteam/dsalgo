// 경주로 건설
function solution(board) {
  var answer = [];

  const costArray = Array.from({ length: board.length }, () =>
    Array(board.length).fill(Infinity)
  );
  const visitedArray = Array.from({ length: board.length }, () =>
    Array(board.length).fill(false)
  );
  costArray[0][0] = 0;
  visitedArray[0][0] = true;

  const dy = [1, 0, -1, 0],
    dx = [0, 1, 0, -1];

  function dfs([x, y], visited, cost, direction) {
    direction = direction >= 4 ? 0 : direction;
    if (
      x < 0 ||
      y < 0 ||
      x >= board.length ||
      y >= board.length ||
      visited[x][y] ||
      board[x][y]
    )
      return;

    visited[x][y] = true;
    costArray[x][y] = cost;

    if (costArray[x][y] < cost) return;

    if (x === board.length - 1 && y === board.length - 1) {
      answer.push(cost);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < board.length &&
        ny < board.length &&
        !visited[nx][ny] &&
        !board[nx][ny]
      ) {
        if (i === direction) {
          dfs([nx, ny], visited, cost + 100, i);
          visited[nx][ny] = false;
        } else {
          dfs([nx, ny], visited, cost + 600, i);
          visited[nx][ny] = false;
        }
      }
    }

    return;
  }

  dfs([1, 0], visitedArray, 100, 1);
  dfs([0, 1], visitedArray, 100, 0);

  return answer.sort((a, b) => a - b)[0];
}
