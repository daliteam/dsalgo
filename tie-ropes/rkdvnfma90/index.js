function solution(K, A) {
  let answer = 0;
  let ropeLength = 0;

  for (let i = 0; i < A.length; i += 1) {
    ropeLength += A[i];

    if (ropeLength >= K) {
      answer += 1;
      ropeLength = 0;
    }
  }

  return answer;
}
