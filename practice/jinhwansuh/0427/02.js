// 튜플

function solution(s) {
  const answer = [];
  const splitedS = s
    .replace('}}', '')
    .replace('{{', '')
    .split('},{')
    .map((ss) => ss.split(','));

  splitedS.sort((a, b) => a.length - b.length);
  for (let i = 0; i < splitedS.length; i++) {
    for (let j = 0; j < splitedS[i].length; j++) {
      if (!answer.includes(+splitedS[i][j])) answer.push(+splitedS[i][j]);
    }
  }
  return answer;
}
