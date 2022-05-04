// 파일명 정렬

function solution(files) {
  const answer = [];

  files.forEach((file) => {
    const num = file.match(/\d+/)[0];
    const head = file.slice(0, file.indexOf(num));
    const tail = file.slice(file.indexOf(num) + num.length);

    answer.push([head, num, tail]);
  });

  answer.sort((a, b) => {
    const smallHead1 = a[0].toLowerCase();
    const smallHead2 = b[0].toLowerCase();

    if (smallHead1 === smallHead2) {
      return a[1].trim() - b[1].trim();
    } else {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    }
  });

  return answer.map((ans) => ans.join(''));
}
