const convertTime = (hour, minute) => {
  if (minute < 0) {
    return (
      String(hour - 1).padStart(2, '0') +
      ':' +
      String(minute + 60).padStart(2, '0')
    );
  }
  return String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
};

const busTimeTable = (n, t) => {
  const array = [];
  let hour = 9;
  let minute = 0;
  const time =
    String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
  array.push(time);
  for (let i = 0; i < n - 1; i++) {
    minute += t;
    if (minute >= 60) {
      hour++;
      minute -= 60;
    }
    const time =
      String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
    array.push(time);
  }
  return array;
};

function solution(n, t, m, timetable) {
  var answer = '';

  timetable.sort((a, b) => {
    const [hour1, minute1] = a.split(':');
    const [hour2, minute2] = b.split(':');
    if (hour1 === hour2) {
      return +minute1 - +minute2;
    }
    return +hour1 - +hour2;
  });
  const times = timetable.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  const timeArray = busTimeTable(n, t);

  const maxPeople = m * n;

  if (timetable.length < m) {
    // 한 타임에 타는 인원이 넘쳐난다면 마지막 시간에 타면 된다.
    return timeArray[timeArray.length - 1];
  } else {
    let people = 0;

    for (const b in times) {
      people += times[b];

      if (people >= maxPeople) {
        const [hour, minute] = b.split(':');
        return convertTime(+hour, +minute - 1);
      }
    }
  }

  return answer;
}

console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
