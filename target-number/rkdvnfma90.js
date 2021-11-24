function solution(numbers, target) {
  let answer = 0;

  const dfs = (nowIndex, sum) => {
    /*
    이렇게 했을 때 오답!
    nowIndex가 끝까지 도달했지만 sum === target을 만족하지 않을 수 있기 때문에
    무한 루프..
    if (sum === target && nowIndex === numbers.length) {
        answer += 1;
        return;
    }
    */

    if (nowIndex === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    dfs(nowIndex + 1, sum - numbers[nowIndex]);
    dfs(nowIndex + 1, sum + numbers[nowIndex]);
  };

  dfs(0, 0);

  return answer;
}
