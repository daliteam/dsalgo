// 완전탐색으로 하려다가
/* 
  실행한 결괏값 ["1101","100011011","0101101111"]이(가) 기댓값 ["1101","100110110","0110110111"]와(과) 다릅니다.
*/

const countNumber = (string) => {
  const a = string.match(/1/g).length;
  const b = string.match(/0/g).length;

  return [a, b];
};

const findNumber = (minNumber, endNumber, ea1, ea2, realLength) => {
  while (minNumber < endNumber) {
    const numString = minNumber.toString(2);
    if (numString.includes('110')) {
      const [r1, r2] = countNumber(numString);
      if (r1 === ea1 && r2 === ea2) {
        return numString.padStart(realLength, '0');
      }
    }
    minNumber++;
  }

  return endNumber.toString(2).padStart(realLength, '0');
};

function solution(s) {
  const answer = [];

  for (const b of s) {
    const realLength = b.length;
    const realNumber = parseInt(b, 2);

    const d = realNumber.toString(2);
    const nowLength = d.length;
    const [ea1, ea2] = countNumber(d);
    let max = 1;
    for (let i = 0; i < nowLength; i++) max *= 2;
    let start = max / 2;
    max -= 1;

    answer.push(findNumber(start, realNumber, ea1, ea2, realLength));
  }
  return answer;
}
