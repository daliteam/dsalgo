function solution(cacheSize, cities) {
  let answer = 0;

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  const cache = Array.from({ length: cacheSize }, () => 0);

  for (let i = 0; i < cities.length; i++) {
    let lowerCaseCity = cities[i].toLowerCase();
    let index = cache.indexOf(lowerCaseCity);
    if (index === -1) {
      cache.shift();
      cache.push(lowerCaseCity);
      answer += 5;
    } else {
      cache.splice(index, 1);
      cache.push(lowerCaseCity);
      answer += 1;
    }
  }

  return answer;
}
