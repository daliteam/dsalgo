const findAllIndex = (string, target) => {
  const indices = [];
  const element = target;
  let idx = string.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = string.indexOf(element, idx + 1);
  }
  return indices;
};

function solution(s) {
  const answer = [];

  for (let number of s) {
    if (!number.includes('110')) {
      answer.push(number);
      break;
    }
    let index110Array = findAllIndex(number, '110');
    let index111Array = findAllIndex(number, '111');
    let index00Array = findAllIndex(number, '00');

    while (
      (index111Array.length &&
        index111Array[0] < index110Array[index110Array.length - 1]) ||
      (index00Array.length &&
        index110Array[0] < index00Array[index00Array.length - 1])
    ) {
      const arr = number.split('');
      if (
        index111Array.length &&
        index111Array[0] < index110Array[index110Array.length - 1]
      ) {
        arr.splice(index110Array[index110Array.length - 1], 3);
        arr.splice(index111Array[0], 0, '1', '1', '0');
        number = arr.join('');
        index110Array = findAllIndex(number, '110');
        index111Array = findAllIndex(number, '111');
        index00Array = findAllIndex(number, '00');
        continue;
      }
      if (
        index00Array.length &&
        index110Array[0] < index00Array[index00Array.length - 1]
      ) {
        arr.splice(index110Array[0], 3);
        arr.splice(index00Array[index00Array.length - 1] - 2, 0, '1', '1', '0');
        number = arr.join('');
        index110Array = findAllIndex(number, '110');
        index111Array = findAllIndex(number, '111');
        index00Array = findAllIndex(number, '00');
        continue;
      }
    }

    answer.push(number);
  }

  return answer;
}
