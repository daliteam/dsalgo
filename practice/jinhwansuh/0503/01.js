const convertToMinute = (time) => {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
};

function solution(m, musicinfos) {
  const score = {
    C: 'A',
    'C#': 'B',
    D: 'C',
    'D#': 'D',
    E: 'X',
    F: 'Z',
    'F#': 'G',
    G: 'H',
    'G#': 'I',
    A: 'J',
    'A#': 'K',
    B: 'H',
  };

  const answer = [];
  const infoArray = [];
  const musicArray = [];

  let uniqueM = changeToUniqueString(m);

  function changeToUniqueString(str) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === 'C' ||
        str[i] === 'D' ||
        str[i] === 'F' ||
        str[i] === 'A' ||
        str[i] === 'G'
      ) {
        if (str[i + 1] === '#') {
          temp += score[str[i] + '#'];
          i++;
        } else {
          temp += score[str[i]];
        }
      } else {
        temp += score[str[i]];
      }
    }
    return temp;
  }

  musicinfos.forEach((info) => {
    const splitedInfo = info.split(',');
    const [start, end, name, music] = splitedInfo;
    const playtime = convertToMinute(end) - convertToMinute(start);
    const musicLength = music.replace(/#/g, '').length;
    const int = Math.ceil(playtime / musicLength);

    const copyMusic = music
      .repeat(int)
      .slice(0, playtime + (music.length - musicLength))
      .repeat(m.length);

    infoArray.push(changeToUniqueString(copyMusic));
    musicArray.push([name, playtime]);
  });

  // console.log(infoArray);
  // console.log(musicArray);

  for (let i = 0; i < infoArray.length; i++) {
    if (infoArray[i].includes(uniqueM)) {
      answer.push([...musicArray[i], infoArray[i].indexOf(uniqueM)]);
    }
  }

  // console.log(answer)

  return answer.length > 0
    ? answer.sort((a, b) => {
        return b[1] - a[1];
      })[0][0]
    : '(None)';
}
