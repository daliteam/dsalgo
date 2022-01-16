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
  const minuteTable = timetable.map((time) => stringTimetoMinute(time));
  minuteTable.sort((a, b) => a - b);

  const busTimeTable = getBusTable(n, t);

  if (timetable.length < m) {
    return minuteToStringTime(busTimeTable[busTimeTable.length - 1].time);
  }

  for (const time of minuteTable) {
    for (let i = 0; i < busTimeTable.length; i++) {
      if (
        busTimeTable[i].time >= time &&
        i === busTimeTable.length - 1 &&
        busTimeTable[i].people + 1 === m
      ) {
        return minuteToStringTime(time - 1);
      }
      if (busTimeTable[i].time >= time && busTimeTable[i].people + 1 <= m) {
        busTimeTable[i].people = busTimeTable[i].people + 1;
        break;
      }
    }
  }

  const lastBus = busTimeTable[busTimeTable.length - 1];
  if (lastBus.people < m) {
    return minuteToStringTime(lastBus.time);
  }
}
