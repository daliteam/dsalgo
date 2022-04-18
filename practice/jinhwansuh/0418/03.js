function solution(lines) {
  let answer = 1;

  // 2차원 배열
  const timeArray = lines.map((line) => {
    const [, times, duration] = line.split(' ');
    let [hour, minute, second] = times.split(':');
    hour = +hour * 60 * 60;
    minute = +minute * 60;
    second = +second;
    const secondTime = hour + minute + second;
    const duSecond = duration.slice(0, duration.length - 1);
    const ss = +duSecond;
    return [(secondTime - ss) * 1000, secondTime * 1000];
  });
  timeArray.sort((a, b) => a[0] - b[0]);

  // console.log(timeArray);
  const startTime = timeArray[0][0];
  const endStartTime = timeArray[timeArray.length - 1][0];

  for (let i = startTime; i < endStartTime; i++) {
    let k = 0;
    for (const tt of timeArray) {
      if (tt[0] <= i && i + 1000 <= tt[1]) k++;
      k > answer && (answer = k);
    }
  }

  return answer;
}
