// 캐시

function solution(cacheSize, cities) {
  let answer = 0;

  const cacheArray = [];

  if (cacheSize === 0) return 5 * cities.length;
  for (const city of cities) {
    const nowCity = city.toLowerCase();
    const index = cacheArray.indexOf(nowCity);

    if (index > -1) {
      cacheArray.splice(index, 1);
      cacheArray.push(nowCity);
      answer += 1;
    } else {
      if (cacheSize <= cacheArray.length) cacheArray.shift();
      cacheArray.push(nowCity);
      answer += 5;
    }
  }

  return answer;
}
