function calcDart(score, bonus) {
  return bonus === "D"
    ? Math.pow(score, 2)
    : bonus === "T"
    ? Math.pow(score, 3)
    : score;
}

function solution(dartResult) {
  let result = 0;
  let answer = 0;
  let score = 0;
  let scores = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "0") {
      score = dartResult[i - 1] && dartResult[i - 1] === "1" ? 10 : 0;
    } else if (Number(dartResult[i])) {
      score = Number(dartResult[i]);
    } else {
      if (dartResult[i] === "*") {
        if (scores[scores.length - 2]) {
          scores[scores.length - 2] *= 2;
        }
        scores[scores.length - 1] *= 2;
      } else if (dartResult[i] === "#") {
        scores[scores.length - 1] *= -1;
      } else {
        answer = calcDart(score, dartResult[i]);
        scores.push(answer);
      }
    }
  }
  scores.forEach((num) => (result += num));
  return result;
}
