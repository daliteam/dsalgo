// https://jaejade.tistory.com/82 - 이해한 풀이
// https://kyun2da.github.io/2020/07/21/diskController/ - 음...

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];

function solution(jobs) {
  let answer = 0;
  let jobsLength = jobs.length;

  let jobQueue = jobs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let curTime = jobQueue[0][0];
  let waitQueue = [];

  while (jobQueue.length > 0) {
    let job = jobQueue[0];

    if (curTime > job[0]) {
      waitQueue.push(job);
      jobQueue.shift();
    } else {
      if (waitQueue.length > 0) {
        waitQueue.sort((a, b) => a[1] - b[1]);

        let waitJob = waitQueue.shift();
        curTime += waitJob[1];
        answer += curTime - waitJob[0];
      } else {
        curTime = job[0] + job[1];
        answer += job[1];
        jobQueue.shift();
      }
    }

    if (jobQueue.length === 0 && waitQueue.length > 0) {
      waitQueue.sort((a, b) => a[1] - b[1]);
      while (waitQueue.length > 0) {
        let waitJob = waitQueue.shift();
        curTime += waitJob[1];
        answer += curTime - waitJob[0];
      }
    }
  }

  return parseInt(answer / jobsLength);
}

console.log(solution(jobs));
