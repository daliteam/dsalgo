// 순위 검색

function solution(info, query) {
  const answer = [];

  const mapInfo = info.map((n) => {
    const splitedN = n.split(' ');
    return {
      lan: splitedN[0],
      type: splitedN[1],
      career: splitedN[2],
      food: splitedN[3],
      score: +splitedN[4],
    };
  });

  query.forEach((q) => {
    const splitedQ = q.split(' and ');
    const [lan, type, career, foodScore] = splitedQ;
    const [food, score] = foodScore.split(' ');

    let i = 0;

    mapInfo.forEach((m) => {
      if (lan !== m.lan && lan !== '-') return;
      if (type !== m.type && type !== '-') return;
      if (career !== m.career && career !== '-') return;
      if (food !== m.food && food !== '-') return;
      if (+score <= m.score) i++;
    });
    answer.push(i);
  });

  return answer;
}
