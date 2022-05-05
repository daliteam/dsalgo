// 주차 요금 계산

const convertToMinute = (time) => {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
};

function solution(fees, records) {
  const answer = [];
  const car = {};
  const lastTime = convertToMinute('23:59');

  records.forEach((record, index) => {
    const [time, number, content] = record.split(' ');
    car[number] = car[number] || [];
    car[number].push(convertToMinute(time));
  });
  for (const num in car) {
    let parkingTime = 0;
    for (let i = 0; i < car[num].length; i += 2) {
      if (car[num][i + 1]) {
        parkingTime += car[num][i + 1] - car[num][i];
      } else {
        parkingTime += lastTime - car[num][i];
      }
    }
    answer.push([num, parkingTime]);
  }

  const [defaultTime, defaultFee, min, won] = fees;

  return answer
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map((ans) => {
      if (ans[1] > defaultTime) {
        return defaultFee + Math.ceil((ans[1] - defaultTime) / min) * won;
      }
      return defaultFee;
    });
}
