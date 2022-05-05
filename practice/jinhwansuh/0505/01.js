// k진수에서 소수 개수 구하기

function isPrime(num) {
  num = Number(num);

  if (num <= 1) return false;

  if (num % 2 === 0) return num === 2 ? true : false;

  const sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) return false;
  }

  return true;
}

function solution(n, k) {
  let answer = 0;
  n.toString(k)
    .split('0')
    .forEach((bb) => {
      if (bb.length && isPrime(bb)) answer++;
    });

  return answer;
}
