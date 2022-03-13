function solution(s) {
  const answer = [];

  const number110 = '110';
  const a = '0111111010';

  for (let number of s) {
    const something = [];

    if (!number.includes(number110)) {
      answer.push(number);
      break;
    }
    let index110 = number.indexOf('110');
    let index111 = number.indexOf('111');
    let index00 = number.indexOf('00');

    while ((index111 !== -1 && index111 < index110) || index110 < index00) {
      const arr = number.split('');
      if (index111 !== -1 && index111 < index110) {
        arr.splice(index110, 3);
        arr.splice(index111, 0, '1', '1', '0');
        number = arr.join('');
        index110 = number.indexOf('110', index111);
        index111 = number.indexOf('111');
        index00 = number.indexOf('00');
        continue;
      }
      if (index110 < index00) {
        arr.splice(index110, 3);
        arr.splice(index00 - 1, 0, '1', '1', '0');
        number = arr.join('');
        index110 = number.indexOf('110');
        index111 = number.indexOf('111');
        index00 = number.indexOf('00');
        continue;
      }
    }

    answer.push(number);
  }

  return answer;
}
