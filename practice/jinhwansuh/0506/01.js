// 수 찾기

function solution(a1, a2, a3, a4) {
  const answer = [];

  a2.sort((a, b) => a - b);

  a4.forEach((a) => {
    let start = 0;
    let end = a1 - 1;
    let mid;
    let target = -1;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (a2[mid] === a) {
        target = mid;
        break;
      } else if (a2[mid] > a) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    answer.push(target);
  });

  return answer;
}

console.log(solution(5, [4, 1, 5, 2, 3], 5, [1, 3, 7, 9, 5]));
