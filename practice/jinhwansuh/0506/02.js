// 입국심사

function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = 1;
  let right = times[times.length - 1] * n;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    const people = times.reduce((acc, curr) => acc + Math.floor(mid / curr), 0);

    if (people >= n) right = mid - 1;
    else if (people < n) left = mid + 1;
  }

  return left;
}
