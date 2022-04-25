// 실패율

function solution(N, stages) {
  const answer = Array.from({ length: N }, () => []);
  let user = stages.length;

  const stageObject = stages.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < N; i++) {
    const nowUser = stageObject[i + 1] || 0;
    answer[i].push(i, nowUser / user);
    user -= nowUser;
  }

  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((ans) => ans[0] + 1);
}
