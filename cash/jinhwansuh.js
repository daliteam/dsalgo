function solution(cacheSize, cities) {
  let answer = 0;
  const cacheArray = [];

  // cacheSize가 0일 경우 무조건 5의 시간이 걸린다.
  if (cacheSize === 0) return cities.length * 5;

  for (let city of cities) {
    city = city.toLowerCase();

    // cacheArray가 cacheSize보다 작을 경우;
    if (cacheArray.length < cacheSize) {
      // 작지만 중복으로 들어올 경우 예외처리
      if (cacheArray.includes(city)) {
        const index = cacheArray.indexOf(city);
        cacheArray.splice(index, 1);
        cacheArray.unshift(city);
        answer += 1;
        continue;
      }
      cacheArray.unshift(city);
      answer += 5;
      continue;
    }

    if (cacheArray.includes(city)) {
      // cacheArray에 포함될 경우 splice후 다시 앞에 처리
      const index = cacheArray.indexOf(city);
      cacheArray.splice(index, 1);
      cacheArray.unshift(city);
      answer += 1;
    } else {
      // 포함되지 않을 경우는 뒤에것을 빼고 앞에 넣는다.
      cacheArray.pop();
      cacheArray.unshift(city);
      answer += 5;
    }
  }

  return answer;
}
