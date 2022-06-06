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
