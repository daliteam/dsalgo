function solution(N, road, K) {
  const answer = Array.from({ length: N + 1 }, () => 0);
  const b = [...road];
  const a = b.map((r) => [r[1], r[0], r[2]]);
  const newRoad = [...new Set([...a, ...road])];

  const firstStart = newRoad.filter((ra) => ra[0] === 1);

  const calLength = (K, nowCity, nextCity, nowLength, stack) => {
    answer[nowCity] += 1;

    if (nowLength > K) return;
    else {
      if (!stack.includes(nextCity)) {
        const start = newRoad.filter((ra) => ra[0] === nextCity);
        if (!start.length) return;

        for (const a of start) {
          const nextLength = nowLength + a[2];
          calLength(K, a[0], a[1], nextLength, [...stack, a[0]]);
        }
      } else {
        return;
      }
    }
  };

  for (const a of firstStart) {
    calLength(K, a[0], a[1], a[2], [a[0]]);
  }

  return answer.reduce((acc, curr) => {
    if (curr > 0) return acc + 1;
    return acc;
  }, 0);
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
