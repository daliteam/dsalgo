function solution(n, times) {
  const sortedTimes = [...times].sort((a, b) => a - b);
  const timesLength = sortedTimes.length;

  let minTime = sortedTimes[0];
  let maxTime = sortedTimes[timesLength - 1] * n;
  let answer = maxTime;

  while (minTime <= maxTime) {
    let nowTime = Math.floor((minTime + maxTime) / 2);
    let count = 0;

    sortedTimes.forEach(time => {
      count += Math.floor(nowTime / time);

      if (count >= n) {
        answer = Math.min(nowTime, answer);
        return;
      }
    });

    if (count >= n) {
      maxTime = nowTime - 1;
      continue;
    }

    minTime = nowTime + 1;
  }

  return answer;
}
