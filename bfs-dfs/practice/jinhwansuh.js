// 음료수 얼려먹기

const iced = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

let [N, K] = [3, 3];

const DFS1 = (x, y) => {
  if (x <= -1 || x >= N || y <= -1 || y >= K) {
    return false;
  }
  if (iced[x][y] === 0) {
    iced[x][y] = 1;

    DFS1(x - 1, y);
    DFS1(x, y - 1);
    DFS1(x + 1, y);
    DFS1(x, y + 1);
    return true;
  }

  return false;
};

function solution1() {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      if (DFS1(i, j) === true) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution1());

// 프로그래머스 네트워크

const maps1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const n1 = 3;

const maps2 = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
const n2 = 3;

function solution2(n, maps) {
  console.log(maps);

  const visited = maps.map((_) => false);
  console.log(visited);

  let answer = 0;

  function DFS(index) {
    visited[index] = true;

    for (let i = 0; i < maps.length; i++) {
      if (maps[index][i] === 1 && !visited[i]) {
        DFS(i);
      }
    }
  }

  for (let i = 0; i < maps.length; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}

console.log(solution2(n1, maps1));
console.log(solution2(n2, maps2));

// 백준 미로

const maze1 = [['101111'], ['101010'], ['101011'], ['111011']];
const maze2 = [[110110], [110110], [111111], [111101]];

function solution3(maze) {
  const graph = maze.flatMap((item) => item.map((a) => [...a]));

  console.log(graph);

  const visited = Array.from({ length: maze.length }, () =>
    Array(graph[0].length).fill(0)
  );
  console.log(visited);

  function bfs(xx, yy) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const queue = [];

    queue.push([xx, yy]);
    visited[xx][yy] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= maze.length || ny >= graph[0].length)
          continue;

        if (graph[nx][ny] && !visited[nx][ny]) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);
  console.log(visited);
  return visited[graph.length - 1][graph[0].length - 1];
}
console.log(solution3(maze1));
