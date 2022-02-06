function solution(stones, k) {
  const maxLength = stones.length;

  let stone = [...stones];
  let people = 0;
  let bt = 1;

  while (1) {
    for (let i = 0; i < maxLength; i++) {
      if (stone[i]) {
        stone[i]--;
      } else {
        let j = i;

        for (let j = i + 1; j < maxLength; j++) {
          if (stone[j] === 0) {
            bt++;
            if (bt > k) {
              return people;
            }
          } else {
            if (bt > k) {
              return people;
            } else {
              bt = 1;
            }
          }
        }
      }
    }
    people++;
  }
}

// 질문하기를 보니 이분탐색으로 푸는것이라고 하네요.
