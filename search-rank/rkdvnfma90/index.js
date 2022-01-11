function solution(info, query) {
  const answer = [];

  query.forEach(value => {
    const [language, field, career, foodAndPoint] = value.split(' and ');
    const [food, point] = foodAndPoint.split(' ');

    let filtered = info.filter(infoValue => {
      const [infoLanguage] = infoValue.split(' ');
      return infoLanguage === language || language === '-';
    });

    filtered = filtered.filter(infoValue => {
      const [, infoField] = infoValue.split(' ');
      return infoField === field || field === '-';
    });

    filtered = filtered.filter(infoValue => {
      const [, , infoCareer] = infoValue.split(' ');
      return infoCareer === career || career === '-';
    });

    filtered = filtered.filter(infoValue => {
      const [, , , infoFood] = infoValue.split(' ');
      return infoFood === food || food === '-';
    });

    filtered = filtered.filter(infoValue => {
      const [, , , , infoPoint] = infoValue.split(' ');
      return parseInt(infoPoint, 10) >= parseInt(point, 10);
    });

    answer.push(filtered.length);
  });

  return answer;
}
