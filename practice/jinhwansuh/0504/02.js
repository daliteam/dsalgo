// n진수 게임

function solution(n, t, m, p) {
  let answer = '';

  const array = [];
  const start = p - 1;
  array.push(...(0).toString(n).split(''));
  let number = 1;

  for (let i = start; i < t * m; i += m) {
    if (array[i]) {
      answer += array[i];
    } else {
      array.push(...number.toString(n).toUpperCase().split(''));
      number++;
      i -= m;
    }
  }

  return answer;
}
