function solution(msg) {
  const answer = [];
  let indexArray = {};
  let index = 1;

  for (let i = 65; i <= 90; i++) {
    indexArray[String.fromCharCode(i)] = index;
    index++;
  }

  for (let j = 0; j < msg.length; j++) {
    let next = j;
    let sliceCount = 1;
    while (true) {
      let w = msg.slice(j, j + sliceCount);
      let c = msg[next + 1] ? msg[next + 1] : '';
      let wc = w + c;

      if (indexArray[wc] && w.length >= sliceCount) {
        sliceCount++;
        next++;
      } else {
        answer.push(indexArray[w]);
        indexArray[wc] = index;
        index++;
        j = next;
        break;
      }
    }
  }

  return answer;
}

console.log(solution('KAKAO'));
