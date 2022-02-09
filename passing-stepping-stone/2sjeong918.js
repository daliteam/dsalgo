function solution(stones, k) {
  let answer = 0;
  let count = 0;

  const sotredStones = [...stones].sort((a, b) => a - b);

  let startValue = sotredStones[0];
  let endValue = sotredStones[sotredStones.length - 1];

  while (startValue <= endValue) {
    let midValue = parseInt((startValue + endValue) / 2);

    for (let i = 0; i < stones.length; i++) {
      // 연속되어 넘어야하는 돌 갯수 세기
      if (stones[i] < midValue) {
        count += 1;
      }
      if (stones[i] >= midValue) {
        count = 0;
      }
      // 최대로 넘어야하는 돌을 넘어가게 되면 최댓값을 줄이기
      if (count >= k) {
        endValue = midValue - 1;
        break;
      }
    }
    // 현재 값에서 넘을 수 있으면 최솟값을 올리기
    if (count < k) {
      answer = midValue;
      startValue = midValue + 1;
      count = 0;
    } else {
      count = 0;
    }
  }

  return answer;
}
