// 불량사용자

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
    a.push(temp);
  }

  // 도움!
  // 완전탐색
  // 아래 배열에서 1개씩 뽑는다.
  // 정렬해서 더한다.
  // set
  // 더한걸 정렬한다.
  // 마지막 set으로 갯수를 센다 (중복제거);

  // 재귀를 돈다.

  const sets = new Set();
  const d = [];
  const recur = (list, set) => {
    if (list.length === 0) {
      const result = [...set].sort().join('');
      sets.add(result);
      return;
    }
    const restList = list.slice(1);

    list[0].forEach((id) => {
      const copy = new Set([...set]);
      if (copy.has(id)) return;
      copy.add(id);
      recur(restList, copy);
    });
  };

  recur(a, new Set());

  return sets.size;
}
