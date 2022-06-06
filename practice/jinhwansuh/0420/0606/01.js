// 백준 1926 그림
{
  const n = 6;
  const m = 5;
  const a1 = '1 1 0 1 1';
  const a2 = '0 1 1 0 0';
  const a3 = '0 0 0 0 0';
  const a4 = '1 0 1 1 1';
  const a5 = '0 0 1 1 1';
  const a6 = '0 0 1 1 1';

  const graph = [];

  graph.push(a1.split(' '));
  graph.push(a2.split(' '));
  graph.push(a3.split(' '));
  graph.push(a4.split(' '));
  graph.push(a5.split(' '));
  graph.push(a6.split(' '));

  const visited = Array.from(Array(n), () => Array(m).fill(false));

  let count = 0;
  let maxArea = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function bfs(i, j) {
    let area = 1;
    visited[i][j] = true;

    const queue = [];
    queue.push([i, j]);

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (graph[nx][ny] == 1 && !visited[nx][ny]) {
            area += 1;
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }
    return area;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] == 1 && !visited[i][j]) {
        count += 1;
        maxArea = Math.max(maxArea, bfs(i, j));
      }
    }
  }
  count;
  maxArea;
}

// 백준 2667
{
  const N = 7;
  const a1 = '0110100';
  const a2 = '0110101';
  const a3 = '1110101';
  const a4 = '0000111';
  const a5 = '0100000';
  const a6 = '0111110';
  const a7 = '0111000';

  const graph = [];

  graph.push(a1.split(''));
  graph.push(a2.split(''));
  graph.push(a3.split(''));
  graph.push(a4.split(''));
  graph.push(a5.split(''));
  graph.push(a6.split(''));
  graph.push(a7.split(''));

  const visited = Array.from(Array(N), () => Array(N).fill(false));
  const answer = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  function bfs(i, j) {
    let area = 1;
    visited[i][j] = true;
    const queue = [];
    queue.push([i, j]);

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          if (graph[nx][ny] === '1' && !visited[nx][ny]) {
            area += 1;
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }
    return area;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === '1' && !visited[i][j]) {
        answer.push(bfs(i, j));
      }
    }
  }

  answer;
}

// 백준 15649

{
  const K = 4;
  const N = 2;

  const answer = [];
  const rs = [];
  const visited = Array.from(Array(K + 1), () => false);
  let result = '';

  function recur(num) {
    if (num === N) {
      result += rs.join('');
      answer.push(rs);
      return rs;
    }
    for (let i = 1; i < K + 1; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        rs.push(i);

        recur(num + 1);
        rs.pop();
        visited[i] = false;
      }
    }
  }

  recur(0);

  answer;
  result;
}
