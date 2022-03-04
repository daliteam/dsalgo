function solution(jobs) {
  var answer = 0;

  // 처음엔 요청이 들어온 순서대로 정렬
  jobs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  jobs.sort((a, b) => {
    if (a[1] > b[0]) {
      return a[1] - a[0] - (b[1] - b[0]);
    } else {
      return a[0] - b[0];
    }
  });

  // console.log(jobs);

  const jobLength = jobs.length;
  const array = Array.from({ length: jobLength }, () => 0);
  const endTime = [...array];

  // 작업을 수행하지 않을때 파악하기

  // 완전 탐색의 느낌.

  array[0] = jobs[0][1];
  endTime[0] = jobs[0][0] + jobs[0][1];

  for (let i = 1; i < jobLength; i++) {
    array[i] = jobs[i][1] + (endTime[i - 1] - jobs[i][0]);
    endTime[i] = endTime[i - 1] + jobs[i][1];
  }
  console.log(array);
  console.log(endTime);

  return Math.floor(array.reduce((acc, curr) => acc + curr, 0) / jobLength);
}

// 테스트케이스만 맞는...
