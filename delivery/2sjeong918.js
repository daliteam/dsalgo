function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  const check = Array.from({ length: N + 1 }, () => 0);
  let countHour = 0;
  const deliveryVillage = [];

  for (let [a, b, c] of road) {
    if (graph[a][b] !== 0 && graph[a][b] < c) {
      continue;
    } else {
      graph[a][b] = c;
      graph[b][a] = c;
    }
  }
  function DFS(v) {
    for (let i = 2; i < N + 1; i++) {
      if (graph[v][i] > 0 && check[i] === 0) {
        countHour += graph[v][i];
        if (countHour <= K) {
          check[i] = 1;
          !deliveryVillage.includes(i) && deliveryVillage.push(i);
          DFS(i);
          check[i] = 0;
          countHour -= graph[v][i];
        } else {
          countHour -= graph[v][i];
        }
      }
    }
  }
  check[1] = 1;
  deliveryVillage.push(1);
  DFS(1);

  return deliveryVillage.length;
}
