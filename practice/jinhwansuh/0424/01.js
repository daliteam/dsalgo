// 표 편집 (실패 ㅠ)

function solution(n, k, cmd) {
  const answer = Array.from({ length: n }, () => 'O');
  const oj = [];
  for (let i = 0; i < n; i++) {
    oj.push([i, i]);
  }

  const copy = [...oj];

  let now = k;

  const recent = [];

  for (const command of cmd) {
    let [how, count] = command.split(' ');
    count = +count;
    const copyLength = copy.length;

    if (how === 'D') {
      now = now + count >= copyLength - 1 ? copyLength - 1 : now + count;
    } else if (how === 'U') {
      now = now - count <= 0 ? 0 : now - count;
    } else if (how === 'C') {
      const deleted = copy.splice(now, 1);

      recent.push(deleted[0]);
      now = now >= copy.length - 1 ? copy.length - 1 : now;
    } else if (how === 'Z') {
      const rr = recent.pop();
      const [index, who] = rr;
      copy.splice(index, 0, rr);
      now = now >= index ? now + 1 : now;
    }
  }

  for (const re of recent) {
    answer[re[1]] = 'X';
  }

  return answer.join('');
}
