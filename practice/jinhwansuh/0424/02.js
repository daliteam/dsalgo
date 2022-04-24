// 보석 쇼핑 (효율성 X)

function solution(gems) {
  const answer = [];

  const quantity = new Set([...gems]).size;

  for (let i = 0; i < gems.length - quantity + 1; i++) {
    let j = i + quantity;

    for (let k = j; k < gems.length + 1; k++) {
      const sliced = gems.slice(i, k);

      const slicedSet = new Set([...sliced]);

      if (slicedSet.size === quantity) {
        answer.push([i + 1, k]);
        break;
      }
    }
  }
  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
}
