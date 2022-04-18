// https://velog.io/@tunakim/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JS-%EB%B0%B0%EB%8B%AC

function solution(N, road, K) {
  let adj = Array.from(Array(N + 1), () => new Array(N + 1).fill(Infinity));
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    adj[i][i] = 0;
  }

  road.forEach((r) => {
    const [s, e, dist] = r;

    // 중복 제거
    if (adj[s][e] !== Infinity) {
      adj[s][e] = adj[e][s] = Math.min(adj[s][e], dist);
    } else {
      adj[s][e] = adj[e][s] = dist;
    }
  });

  // 와샬 알고리즘
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (adj[i][k] + adj[k][j] < adj[i][j]) {
          adj[i][j] = adj[i][k] + adj[k][j];
        }
      }
    }
  }

  adj;

  for (let i = 1; i <= N; i++) {
    if (adj[1][i] <= K) answer++;
  }

  return answer;
}

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
