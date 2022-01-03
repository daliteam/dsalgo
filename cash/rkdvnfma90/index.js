function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  // 캐시 사이즈가 0이라면 무조건 miss 이므로
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities
    .map(city => city.toLowerCase())
    .forEach(city => {
      const targetIndex = cache.indexOf(city);

      // cache miss
      if (targetIndex === -1) {
        // 이미 캐시가 꽉 차 있으면 맨 앞 요소를 제거한다. (맨 앞 요소가 가장 오래되었으므로)
        if (cache.length === cacheSize) {
          cache.splice(0, 1);
        }

        answer += 5;
        cache.push(city);
      } else {
        // cache hit
        // 현재 city가 캐시의 마지막이 아닌 곳에 위치한다면 오래되었다는 의미이기 때문에 지우고 마지막에 넣는다.
        if (targetIndex !== cacheSize - 1) {
          cache.splice(targetIndex, 1);
          cache.push(city);
        }

        answer += 1;
      }
    });

  return answer;
}
