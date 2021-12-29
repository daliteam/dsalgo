function solution(cacheSize, cities) {
  let answer = 0;
  let cacheList = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((city) => {
    let searchedIdx = cacheList.indexOf(city.toUpperCase());
    if (searchedIdx > -1) {
      answer += 1;
      cacheList.splice(searchedIdx, 1);
    } else {
      answer += 5;
      if (cacheList.length === cacheSize) {
        cacheList.shift();
      }
    }
    cacheList.push(city.toUpperCase());
  });
  return answer;
}
