function bonus_score(score, bonus) {
  let total_score = 0;
  if (bonus === "S") {
    total_score = parseInt(score);
  }
  if (bonus === "D") {
    total_score = parseInt(score) ** 2;
  }
  if (bonus === "T") {
    total_score = parseInt(score) ** 3;
  }
  return total_score;
}

function solution(dartResult) {
  let answer = 0;
  const dart_result_arr = []; // ['1S', '2D*', 3T]
  const total_score_arr = []; // [2, 8, 27]

  // 입력 값을 영역에 맞는 숫자 배열로 변환
  const numberReg = /^[0-9]/g;
  let currentIndex = 0;

  for (let i = 2; i < dartResult.length; i++) {
    if (numberReg.test(dartResult[i])) {
      dart_result_arr.push(dartResult.slice(currentIndex, i));
      currentIndex = i;
    }
    if (i === dartResult.length - 1) {
      dart_result_arr.push(dartResult.slice(currentIndex));
    }
  }

  // 만약에 옵션이 있는 경우 옵션까지 반영해서 배열로 변환
  dart_result_arr.forEach((result) => {
    if (result[result.length - 1] === "*") {
      let currentScore = bonus_score(result.slice(0, -2), result.slice(-2, -1));
      let prev_score = total_score_arr.pop();
      if (prev_score) {
        prev_score = prev_score * 2;
        total_score_arr.push(prev_score);
        total_score_arr.push(currentScore * 2);
      } else {
        total_score_arr.push(currentScore * 2);
      }
    } else if (result[result.length - 1] === "#") {
      let currentScore = bonus_score(result.slice(0, -2), result.slice(-2, -1));
      total_score_arr.push(currentScore * -1);
    } else {
      total_score_arr.push(bonus_score(result.slice(0, -1), result.slice(-1)));
    }
  });

  answer = total_score_arr.reduce((prev, curr) => prev + curr);
  return answer;
}
