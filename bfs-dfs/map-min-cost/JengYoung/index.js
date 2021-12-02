class Queue {
  constructor(initValue = undefined) {
    this.queue = initValue ? [initValue] : [];
    this.front = 0;
    this.rear = this.queue.length;
  }
  enqueue(...args) {
    this.queue.push(...args);
    this.rear += args.length;
  }
  dequeue() {
    const value = this.queue[this.front];
    this.front += 1;
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}

const isPossible = (nx, ny, maps, targetX, targetY) => {
  return nx <= targetX && nx >= 0 && ny <= targetY && ny >= 0 && maps[nx][ny];
};

const solution = (maps) => {
  let [targetX, targetY] = [maps.length - 1, maps[0].length - 1];

  maps[0][0] = 0;
  const queue = new Queue([0, 0, 1]);

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.size()) {
    let [nowX, nowY, cnt] = queue.dequeue();
    if (nowX === targetX && nowY === targetY) {
      return cnt;
    }
    directions.forEach(([dx, dy]) => {
      const nx = nowX + dx;
      const ny = nowY + dy;

      if (isPossible(nx, ny, maps, targetX, targetY)) {
        maps[nx][ny] = 0;
        queue.enqueue([nx, ny, cnt + 1]);
      }
    });
  }
  return -1;
};
