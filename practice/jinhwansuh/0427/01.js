// 다트게임

function solution(dartResult) {
  let answer = 0;
  let prevScore = 0;
  let nowScore = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === '0' || +dartResult[i] > 0 || +dartResult[i] < 10) {
      prevScore = nowScore;
      answer += prevScore;
      if (dartResult[i] + dartResult[i + 1] === '10') {
        nowScore = 10;
        i = i + 1;
      } else {
        nowScore = +dartResult[i];
      }
      continue;
    }
    if (dartResult[i] === 'S') {
      nowScore = Math.pow(nowScore, 1);
    } else if (dartResult[i] === 'D') {
      nowScore = Math.pow(nowScore, 2);
    } else if (dartResult[i] === 'T') {
      nowScore = Math.pow(nowScore, 3);
    } else {
      if (dartResult[i] === '*') {
        answer -= prevScore;
        answer += prevScore * 2;

        nowScore *= 2;
      } else if (dartResult[i] === '#') {
        nowScore *= -1;
      }
    }
  }
  answer += nowScore;

  return answer;
}
