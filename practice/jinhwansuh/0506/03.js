// 랜선 자르기

function solution(K, N, array) {
  let left = 1;
  let right = Math.max(...array);
  let mid;

  while (left <= right) {
    mid = parseInt((left + right) / 2);

    const count = array.reduce((acc, curr) => acc + parseInt(curr / mid), 0);

    if (count >= N) {
      left = mid + 1;
    } else if (count < N) {
      right = mid - 1;
    }
  }

  return right;
}

console.log(solution(4, 11, [802, 743, 457, 539]));
