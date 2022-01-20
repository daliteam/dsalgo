const convertToMin = time => {
  const [hour, min] = time.split(':');
  return parseInt(hour, 10) * 60 + parseInt(min);
};

const converToTime = convertedMin => {
  const hour = parseInt(convertedMin / 60, 10);
  const min = convertedMin % 60;

  return `${hour < 10 ? `0${hour}` : hour}:${
    min === 0 ? '00' : min < 10 ? `0${min}` : min
  }`;
};

function solution(n, t, m, timetable) {
  const timeTable = [...timetable].map(convertToMin);

  timeTable.sort((a, b) => a - b);

  let nowTime = 540;

  for (let i = 0; i < n; i += 1) {
    const boardCount = timeTable.filter(t => t <= nowTime).length;

    if (i === n - 1) {
      if (boardCount >= m) {
        nowTime = timeTable[m - 1] - 1;
      }

      break;
    }

    timeTable.splice(0, boardCount > m ? m : boardCount);
    nowTime += t;
  }
  return converToTime(nowTime);
}
