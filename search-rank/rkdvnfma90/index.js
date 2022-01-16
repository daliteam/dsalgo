function solution(info, query) {
  const answer = [];
  const infos = info.map(infoValue => infoValue.split(' '));
  const queries = query.map(queryValue =>
    queryValue.split(' ').filter(queryValue => queryValue !== 'and')
  );

  queries.forEach(q => {
    const [language, field, career, food, point] = q;
    const filtered = infos.filter(infoValue => {
      const [infoLanguage, infoField, infoCareer, infoFood, infoPoint] =
        infoValue;

      if (
        (infoLanguage === language || language === '-') &&
        (infoField === field || field === '-') &&
        (infoCareer === career || career === '-') &&
        (infoFood === food || food === '-') &&
        parseInt(infoPoint, 10) >= parseInt(point, 10)
      ) {
        return true;
      }

      return false;
    });

    answer.push(filtered.length);
  });

  return answer;
}
