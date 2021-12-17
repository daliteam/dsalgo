function solution(s) {
  var answer = {};
  const refinedS = s
    .replace(/{|}}/g, "")
    .split("},")
    .sort((a, b) => a.length - b.length)
    .map((v) => v.split(","));
  for (let i = 0; i < refinedS.length; i += 1) {
    const now = refinedS[i];
    const nowLength = now.length;
    for (let j = 0; j < nowLength; j += 1) {
      if (answer[now[j]] === undefined) answer[now[j]] = i;
    }
  }

  const result = [];
  for (const key in answer) {
    const order = answer[key];
    result[order] = parseInt(key);
  }
  return result;
}
