const convertBase = (base, targetNumber) => {
  return targetNumber.toString(base).toUpperCase();
};

function solution(n, t, m, p) {
  let answer = '';
  let numbers = '';
  let number = 0;

  while (numbers.length < m * t) {
    numbers += convertBase(n, number);
    number += 1;
  }

  let count = 0;
  let nowIndex = p - 1;

  while (count < t) {
    answer += numbers[nowIndex];
    count += 1;
    nowIndex += m;
  }

  return answer;
}
