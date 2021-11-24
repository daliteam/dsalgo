function solution(dartResult) {
  let array = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (-1 < parseInt(dartResult[i], 10) && parseInt(dartResult[i], 10) < 10) {
      array.push(temp);
      if (dartResult[i] === '1') {
        if (dartResult[i + 1] === '0') {
          i = i + 1;
          temp = 10;
          continue;
        }
      }
      temp = +dartResult[i];
    }

    if (dartResult[i] === 'S') temp = temp ** 1;
    if (dartResult[i] === 'D') temp = temp ** 2;
    if (dartResult[i] === 'T') temp = temp ** 3;
    if (dartResult[i] === '*') {
      let poped = array.pop();
      array.push(poped * 2);
      temp = temp * 2;
    }
    if (dartResult[i] === '#') temp = temp * -1;
  }
  array.push(temp);

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
