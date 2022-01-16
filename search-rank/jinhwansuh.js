function solution(info, query) {
  const infoArray = [];
  info.map((info) => {
    const i = info.split(' ');
    const aa = {
      language: i[0],
      group: i[1],
      experience: i[2],
      soulFood: i[3],
      score: i[4],
    };
    infoArray.push(aa);
  });

  const queryArray = [];
  query.map((qq) => {
    const a = qq.split(' and ');
    const [soulFood, score] = a[3].split(' ');

    queryArray.push({
      language: a[0],
      group: a[1],
      experience: a[2],
      soulFood,
      score,
    });
  });

  const answer = [];
  queryArray.map(({ language, group, experience, soulFood, score }) => {
    const a = infoArray.filter((people) => {
      if (+score <= +people.score) {
        if (language !== '-' && people.language !== language) return false;
        if (group !== '-' && people.group !== group) return false;
        if (experience !== '-' && people.experience !== experience)
          return false;
        if (soulFood !== '-' && people.soulFood !== soulFood) return false;
        return true;
      }
      return false;
    });
    answer.push(a.length);
  });
  return answer;
}
