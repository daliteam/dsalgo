// 거리두기

const getDistance = (array1, array2) => {
  return Math.abs(array1[0] - array2[0]) + Math.abs(array1[1] - array2[1]) <= 2
    ? true
    : false;
};

function solution(places) {
  const answer = [];

  const dx = [-1, 0, 1, 0],
    dy = [0, -1, 0, 1];

  const recur = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[0].length; j++) {
        if (array[i][j] === 'P') {
          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];

            if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
              if (array[nx][ny] === 'X') continue;
              if (array[nx][ny] === 'P') return 0;
              if (array[nx][ny] === 'O') {
                for (let m = 0; m < 4; m++) {
                  const nnx = nx + dx[m];
                  const nny = ny + dy[m];
                  if (
                    nnx >= 0 &&
                    nny >= 0 &&
                    nny < 5 &&
                    nnx < 5 &&
                    i !== nnx &&
                    j !== nny
                  ) {
                    if (array[nnx][nny] === 'X') continue;
                    if (array[nnx][nny] === 'P') {
                      if (getDistance([i, j], [nnx, nny])) return 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return 1;
  };

  for (const place of places) {
    const array = place.map((pl) => [...pl]);
    // console.log(array);

    answer.push(recur(array));
  }
  return answer;
}
