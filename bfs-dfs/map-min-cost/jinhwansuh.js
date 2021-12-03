function solution(maps) {
  let x = 0,
    y = 0;
  let dx = [-1, 0, 1, 0],
    dy = [0, 1, 0, -1];
  let k = 1;
  let arr = [];

  maps[x][y] = 0;
  arr.push([x, y, k]);
  while (arr.length) {
    const [x, y, k] = arr.shift();
    if (x === maps.length - 1 && y === maps[0].length - 1) return k;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx > -1 &&
        ny > -1 &&
        nx < maps.length &&
        ny < maps[0].length &&
        maps[nx][ny]
      ) {
        maps[nx][ny] = 0;
        arr.push([nx, ny, k + 1]);
      }
    }
  }

  return -1;
}
