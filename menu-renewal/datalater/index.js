function solution(orders, course) {
  return course
    .map((n) => combinateStrings(orders, n))
    .flatMap(mostFrequent)
    .sort();
}

function count(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function mostFrequent(array) {
  const countMap = count(array);

  const max = Math.max(...Object.values(countMap));

  return max > 1
    ? Object.keys(countMap).filter((key) => countMap[key] === max)
    : [];
}

function combinateString(s, n) {
  if (s.length < n) {
    return [];
  }

  const result = [];

  function dfs(index, path) {
    if (path.length === n) {
      result.push(Array.from(path).sort().join(""));
      return;
    }

    for (let i = index; i < s.length; i++) {
      dfs(i + 1, path + s[i]);
    }
  }

  dfs(0, "");

  return result;
}

function combinateStrings(array, n) {
  return array
    .map((s) => combinateString(s, n))
    .reduce((acc, cur) => [...acc, ...cur], [])
    .sort();
}

export { count, mostFrequent, combinateString, combinateStrings, solution };
