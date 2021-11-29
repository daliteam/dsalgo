function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);

  const dfs = index => {
    visited[index] = true;

    for (let i = 0; i < n; i += 1) {
      // 연결되어 있고, 방문하지 않았으면 재귀로 또 탐색한다.
      if (computers[index][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i += 1) {
    // 아직 방문하지 않았을 경우 모든 원소를 탐색한다.
    if (!visited[i]) {
      dfs(i);
      // 탐색이 끝나면 answer 증가
      answer += 1;
    }
  }

  return answer;
}