// 문자열 압축 (성공)
function solution(s) {
  let answer = s.length;

  for (let i = 1; i < parseInt(s.length / 2, 10) + 1; i++) {
    let string = '';
    let repeat = 1;
    for (let j = 0; j < s.length; j += i) {
      const sliced = s.slice(j, j + i);
      const nextSliced = s.slice(j + i, j + i + i);

      if (sliced === nextSliced) {
        for (let k = j; k < s.length; k += i) {
          const nextSliced = s.slice(k + i, k + i + i);
          if (sliced !== nextSliced) break;
          repeat++;
        }
        string += repeat + sliced;
        j += (repeat - 1) * i;
        repeat = 1;
      } else {
        string += sliced;
      }
    }
    // console.log('i : ', i ,string);
    answer > string.length && (answer = string.length);
  }

  return answer;
}
/* 
// 문자열 압축 (실패)
function solution(s) {
  let answer = s.length;
  console.log(s);
  const splitedS = s.split('');
  for (let i = 1; i < parseInt(s.length / 2, 10) + 1; i++) {
    let string = '';
    let repeat = 1;
    let end = 0;
    for (let j = 0; j < s.length; j++) {
      const sliced = s.slice(j, j + i);
      const nextSliced = s.slice(j + i, j + i + i);
      if (sliced === nextSliced) {
        for (let k = j; k < s.length; k += i) {
          const sliced = s.slice(k, k + i);
          const nextSliced = s.slice(k + i, k + i + i);
          end = k + i;
          if (sliced !== nextSliced) break;
          repeat++;
        }
        string += repeat + sliced;
        j = end - 1;
        repeat = 1;
      } else {
        string += s[j];
      }
    }
    console.log('i : ', i, string);
    answer > string.length && (answer = string.length);
  }
  return answer;
} */
