function solution(N, road, K) {
  const answer = Array.from({ length: N + 1 }, () => 0);
  const b = [...road];
  const c = b.map((r) => [r[1], r[0], r[2]]);
  const newRoad = [...c, ...road];

  if (N === 1) return 1;

  const calLength = (K, nowCity, nextCity, nowLength, stack, length) => {
    answer[nowCity] += 1;
    nowLength += length;

    if (!stack.includes(nextCity)) {
      const start = newRoad.filter((ra) => ra[0] === nextCity);
      if (!start.length) return;
      for (const a of start) {
        if (nowLength <= K) {
          calLength(K, a[0], a[1], nowLength, [...stack, a[0]], a[2]);
        }
      }
    } else return;
  };

  const firstStart = newRoad.filter((ra) => ra[0] === 1);

  for (const a of firstStart) {
    calLength(K, a[0], a[1], 0, [a[0]], a[2]);
  }

  return answer.reduce((acc, curr) => {
    if (curr > 0) return acc + 1;
    return acc;
  }, 0);
}
