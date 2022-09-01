// 방금그곡

const convertToMinute = (time) => {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
};

const findAll = (str, element) => {
  const indices = [];
  let index = str.indexOf(element);
  while (index != -1) {
    if (str[index + element.length] === '#') {
      index = str.indexOf(element, index + 1);
    } else {
      index = str.indexOf(element, index);
      return index;
    }
  }
};

function solution(m, musicinfos) {
  const answer = [];
  const infoArray = [];
  const musicArray = [];

  musicinfos.forEach((info) => {
    const splitedInfo = info.split(',');
    const [start, end, name, music] = splitedInfo;
    const playtime = convertToMinute(end) - convertToMinute(start);
    const musicLength = music.replace(/#/g, '').length;
    const int = Math.ceil(playtime / musicLength);

    infoArray.push(music.repeat(int).slice(0, playtime).repeat(2));
    musicArray.push([name, playtime]);
  });

  for (let i = 0; i < infoArray.length; i++) {
    if (infoArray[i].includes(m)) {
      const index = infoArray[i].indexOf(m);

      if (m[m.length - 1] !== 'm') {
        const idx = findAll(infoArray[i], m);
        if (idx !== undefined) {
          answer.push([...musicArray[i], idx]);
        }
      } else {
        answer.push([...musicArray[i], index]);
      }
    }
  }

  return answer.length > 0
    ? answer.sort((a, b) => {
        if (a[1] === b[1]) {
          return a[2] - b[2];
        }
        return b[1] - a[1];
      })[0][0]
    : '(None)';
}
