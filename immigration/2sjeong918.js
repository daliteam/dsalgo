function solution(n, times) {
  let answer = 0;
  const sortedTimes = times.sort((a, b) => a - b);
  let left = sortedTimes[0];
  let right = sortedTimes[sortedTimes.length - 1] * n;
  let count = 0;

  while (left <= right) {
    let mid = parseInt((right + left) / 2);
    for (const time of sortedTimes) {
      count += parseInt(mid / time);
      if (count > n) {
        answer = mid;
        right = mid - 1;
        break;
      }
    }
    if (count < n) {
      left = mid + 1;
    }
    if (count === n) {
      answer = mid;
      right = mid - 1;
    }
    count = 0;
  }
  return answer;
}
