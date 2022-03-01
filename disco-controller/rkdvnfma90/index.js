function solution(jobs) {
  const jobsLength = jobs.length;
  let answer = 0;
  let start = -1;
  let now = 0;
  let count = 0;

  jobs.sort((a, b) => {
    return a[0] - b[0];
  });

  const queue = [];
  while (count < jobsLength) {
    jobs.forEach(job => {
      if (start < job[0] && job[0] <= now) {
        console.log(job, count);
        queue.push(job);
      }
    });

    if (queue.length > 0) {
      queue.sort((a, b) => a[1] - b[1]);

      const firstJob = queue.shift();
      const workingRequestTime = firstJob[0];
      const workingTime = firstJob[1];

      start = now;
      now += workingTime;
      answer += now - workingRequestTime;
      count += 1;
    } else {
      now += 1;
    }
  }
  return parseInt(answer / jobsLength);
}
