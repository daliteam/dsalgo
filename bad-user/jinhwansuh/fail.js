function solution(user_id, banned_id) {
  var answer = 0;
  // combination 문제

  // console.log(user_id)
  const ban = banned_id.map((id) => [...id]);

  //     let array = banned_id.map(id => [...id]);
  //     console.log(array)

  //     const indexArray = [];
  //     for (const a of array) {
  //         const temp = []
  //         let element = '*';
  //         let idx = a.indexOf(element);
  //         while (idx != -1) {
  //           temp.push(idx);
  //           idx = a.indexOf(element, idx + 1);
  //         }
  //         indexArray.push(temp);
  //     }

  //     console.log(indexArray);
  const somethingArray = [];
  const temp = [];
  for (const banId of ban) {
    const banIdLength = banId.length;
    let j = 0;
    const t = [];
    for (const userId of user_id) {
      const userIdLength = userId.length;
      if (banIdLength === userIdLength) {
        for (let i = 0; i < banIdLength; i++) {
          if (i === banIdLength - 1) {
            if (banId[i] === userId[i] || banId[i] === '*') {
              t.push(userId);
              j++;
            }
          }
          if (banId[i] !== userId[i] && banId[i] !== '*') {
            break;
          }
        }
        if (t.length) temp.push([userId, ...t]);
      }
    }
    const idx = somethingArray.indexOf([banId.join(''), t]);
    somethingArray.push([banId.join(''), t]);
  }
  // console.log(temp)
  console.log(somethingArray);
  const result = {};
  somethingArray.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  console.log(result);

  return answer;
}
