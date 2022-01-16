const getBusTable = (n, t) => {
  const array = [];
  let time = 60 * 9;
  for (let i = 0; i < n; i++) {
    array.push({ time, people: 0 });
    time += t;
  }
  return array;
};

const stringTimetoMinute = (stringTime) => {
  const [hour, minute] = stringTime.split(':');
  return +hour * 60 + +minute;
};
const minuteToStringTime = (minuteTime) => {
  const hour = parseInt(minuteTime / 60, 10);
  const minute = minuteTime % 60;
  const time =
    String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
  return time === '24:00' ? '00:00' : time;
};

function solution(n, t, m, timetable) {
  var answer = '';
  // const totalPeople = m * n;
  const minuteTable = timetable.map((time) => stringTimetoMinute(time));
  minuteTable.sort((a, b) => a - b);
  minuteTable;
  const a = minuteTable.filter((minute) => minute < 550);
  a;
  minuteTable;
  // const minuteObject = minuteTable.reduce((accu, curr) => {
  //   accu[curr] = (accu[curr] || 0) + 1;
  //   return accu;
  // }, {});

  const busTimeTable = getBusTable(n, t);

  if (timetable.length < m) {
    return minuteToStringTime(busTimeTable[busTimeTable.length - 1].time);
  }

  for (const time of minuteTable) {
    for (const busTime of busTimeTable) {
      if (busTime.time >= time && busTime.people + 1 <= m) {
        busTime.people = busTime.people + 1;
        break;
      }
    }
  }

  const lastBus = busTimeTable[busTimeTable.length - 1];
  if (lastBus.people < m) {
    return minuteToStringTime(lastBus.time);
  } else if (lastBus.people === m) {
    return minuteToStringTime(minuteTable[minuteTable.length - 1] - 1);
  } else {
    // 여긴 들어오지도 않음 ㅇㅇ;
    let people = lastBus.people;
    minuteTable.filter((minute) => minute <= lastBus.time);
    for (let k = minuteTable.length - 1; k > -1; k--) {
      people--;
      if (people === m) {
        return minuteToStringTime(minuteTable[k] - 1);
      }
      if (people < m) {
        return minuteToStringTime(minuteTable[k]);
      }
    }
  }

  return answer;
}

console.log(solution(2, 10, 3, ['09:05', '09:09', '09:13']));
