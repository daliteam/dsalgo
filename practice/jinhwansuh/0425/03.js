// 불량 사용자

function solution(user_id, banned_id) {
  const answer = [];

  const a = [];

  for (const banId of banned_id) {
    const splitedBanId = banId.split('');
    const temp = [];
    for (const userId of user_id) {
      if (banId.length === userId.length) {
        let s = '';
        for (let i = 0; i < splitedBanId.length; i++) {
          if (splitedBanId[i] === '*') {
            s += userId[i];
            continue;
          }
          if (splitedBanId[i] !== userId[i]) break;
          else s += userId[i];
        }
        if (s === userId) temp.push(s);
      }
    }
    a.push([banId, temp]);
  }
  console.log(a);

  const allCombinations = [];
  let index = 0;

  // 도움!
  // 아래 배열에서 1개씩 뽑는다.
  // 정렬해서 더한다.
  // 더한걸 정렬한다.
  // 마지막 set으로 갯수를 센다 (중복제거);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; i < 4; j++) {}
  }

  return answer;
}
