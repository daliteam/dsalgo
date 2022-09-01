// 기둥과 보 설치

function solution(n, build_frame) {
  const pillarEnd = [];
  const boardEnd = [];

  build_frame
    .sort((a, b) => {
      if (a[2] === b[2]) {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        }
        return a[2] - b[2];
      }

      return a[1] - b[1];
    })
    .sort((a, b) => b[3] - a[3]);

  console.log(build_frame);

  for (const build of build_frame) {
    const [x, y, a, b] = build;
    if (a === 0) {
      // 기둥
      if (b === 1) {
        if (
          y === 0 ||
          boardEnd.includes(`${x} ${y} 1`) ||
          pillarEnd.includes(`${x} ${y} 0`)
        ) {
          pillarEnd.push(`${x} ${y + 1} 0`);
        }
      } else {
        if (
          pillarEnd.includes(`${x} ${y + 1} 0`) &&
          boardEnd.includes(`${x} ${y + 1} 1`) &&
          boardEnd.includes(`${x + 1} ${y + 1} 1`)
        ) {
          pillarEnd.splice(pillarEnd.indexOf(`${x} ${y + 1} 0`), 1);
        }
      }
    } else {
      // 보
      if (b === 1) {
        if (
          y !== 0 &&
          (pillarEnd.includes(`${x} ${y} 0`) ||
            boardEnd.includes(`${x} ${y} 1`))
        ) {
          boardEnd.push(`${x + 1} ${y} 1`);
        }
      } else {
        if (
          boardEnd.includes(`${x + 1} ${y} 1`) &&
          !boardEnd.includes(`${x + 2} ${y} 1`)
        ) {
          boardEnd.splice(boardEnd.indexOf(`${x + 1} ${y} 1`), 1);
        }
      }
    }
  }

  const s = [...pillarEnd, ...boardEnd];

  const answer = s.map((ss) => {
    const [x, y, type] = ss.split(' ');
    if (type === '0') {
      return [+x, +y - 1, 0];
    } else {
      return [+x - 1, +y, 1];
    }
  });

  return answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
}
