function solution(n, computers) {
  let count = 0;

  const isVisited = new Array(n).fill(false);

  for (let i = 0; i < n; i += 1) {
    if (!isVisited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;

  function dfs(vertex) {
    isVisited[vertex] = true;

    for (let i = 0; i < n; i += 1) {
      if (computers[vertex][i] && !isVisited[i]) {
        dfs(i);
      }
    }
  }
}

function testAll() {
  const inputs = [
    {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
    },
    {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ],
    },
  ];
  const expecteds = [2, 1];

  inputs.forEach((input, i) => {
    assert(expecteds[i], solution(input.n, input.computers));
  });
}

function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}

testAll();
