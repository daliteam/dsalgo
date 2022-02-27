function solution(K, A) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= K) {
      answer++;
      sum = 0;
      continue;
    } else {
      sum += A[i];
      if (sum >= K) {
        answer++;
        sum = 0;
      }
    }
  }
  return answer;
}
