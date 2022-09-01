// 길 찾기 게임

function solution(nodeinfo) {
  const nodeArray = nodeinfo
    .map((node, i) => [...node, i + 1])
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    });

  const pre = [];
  const post = [];
  function recur(array) {
    if (array.length === 0) return;
    const parent = array.shift();
    pre.push(parent[2]);
    const left = array.filter((a) => a[0] < parent[0]);
    const right = array.filter((a) => a[0] > parent[0]);
    recur(left);
    recur(right);
    post.push(parent[2]);
  }

  recur(nodeArray);

  return [pre, post];
}
