function solution(cacheSize, cities) {
  let answer = 0;
  let cachedKeywords = [];
  cities.forEach((city, idx) => {
    const now = city.toLowerCase();
    const isCached = cachedKeywords.includes(now);

    if (isCached) {
      cachedKeywords = cachedKeywords.filter((keyword) => keyword !== now);
    }
    cachedKeywords.push(now);
    answer += isCached ? 1 : 5;

    if (cachedKeywords.length > cacheSize) cachedKeywords.shift();
  });
  return answer;
}
