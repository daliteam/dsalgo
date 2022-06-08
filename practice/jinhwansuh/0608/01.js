// 프로그래머스 네트워크

{
  function solution(n, computers) {
    const graph = Array.from(Array(n + 1), () => []);
    const visited = Array.from(Array(n + 1), () => false);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < computers[i].length; j++) {
        if (i === j) continue;
        if (computers[i][j] === 1) graph[i + 1].push(j + 1);
      }
    }

    function bfs(node) {
      visited[node] = true;
      const queue = [node];
      while (queue.length > 0) {
        const num = queue.shift();
        for (const data of graph[num]) {
          if (!visited[data]) {
            queue.push(data);
            visited[data] = true;
          }
        }
      }
    }
    let count = 0;

    for (let i = 1; i < n + 1; i++) {
      if (!visited[i]) {
        count += 1;
        bfs(i);
      }
    }
    return count;
  }
}
