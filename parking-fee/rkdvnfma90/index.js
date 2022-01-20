const convertToMin = time => {
  const [hour, min] = time.split(':');
  return parseInt(hour, 10) * 60 + parseInt(min);
};

function solution(fees, records) {
  const accStack = {};
  const accTime = {};
  const [baseTime, baseFee, unitTime, unitFee] = fees;

  records.forEach(record => {
    const [rawTime, carNumber, status] = record.split(' ');
    const time = convertToMin(rawTime);

    if (status === 'IN') {
      accStack[carNumber]
        ? accStack[carNumber].push(time)
        : (accStack[carNumber] = [time]);
      return;
    }

    const beforeTime = accStack[carNumber].pop();
    accTime[carNumber] = accTime[carNumber]
      ? accTime[carNumber] + (time - beforeTime)
      : time - beforeTime;
  });

  Object.entries(accStack).forEach(entry => {
    const [carNumber, times] = entry;

    if (times.length === 0) {
      return;
    }

    accTime[carNumber] = accTime[carNumber]
      ? accTime[carNumber] + convertToMin('23:59') - times.pop()
      : convertToMin('23:59') - times.pop();
  });

  return Object.entries(accTime)
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .map(v => {
      const [, nowTime] = v;
      if (nowTime <= baseTime) {
        return baseFee;
      }

      return baseFee + Math.ceil((nowTime - baseTime) / unitTime) * unitFee;
    });
}
