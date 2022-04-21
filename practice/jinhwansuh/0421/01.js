function solution(numbers, hand) {
  let answer = '';
  const left = [1, 4, 7];
  const middle = [2, 5, 8, 0];
  const right = [3, 6, 9];

  let leftIndex = [0, 3];
  let rightIndex = [2, 3];

  const getHandIndex = (num) => {
    if (left.includes(num)) {
      const lIdx = left.indexOf(num);
      answer += 'L';
      leftIndex = [0, lIdx];
    } else if (right.includes(num)) {
      const rIdx = right.indexOf(num);
      answer += 'R';
      rightIndex = [2, rIdx];
    } else {
      const mIdx = [1, middle.indexOf(num)];
      const distanceL =
        Math.abs(mIdx[0] - leftIndex[0]) + Math.abs(mIdx[1] - leftIndex[1]);
      const distanceR =
        Math.abs(mIdx[0] - rightIndex[0]) + Math.abs(mIdx[1] - rightIndex[1]);
      if (distanceL > distanceR) {
        rightIndex = [1, mIdx[1]];
        answer += 'R';
      } else if (distanceL < distanceR) {
        leftIndex = [1, mIdx[1]];
        answer += 'L';
      } else {
        if (hand === 'left') {
          leftIndex = [1, mIdx[1]];
          answer += 'L';
        } else {
          rightIndex = [1, mIdx[1]];
          answer += 'R';
        }
      }
    }
  };

  for (const number of numbers) {
    getHandIndex(number);
  }

  return answer;
}
