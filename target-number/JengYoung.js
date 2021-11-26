class Queue {
  constructor(val = undefined) {
    this.queue = val ? [val] : [];
    this.front = 0;
    this.rear = this.queue.length;
  }
  enqueue(...args) {
    args.forEach((value) => (this.queue[this.rear++] = value));
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(numbers, target) {
  let answer = 0;
  const queue = new Queue([0, numbers]);

  while (queue.size()) {
    const [nowSum, nowArr] = queue.dequeue();
    if (!nowArr.length) {
      answer += nowSum === target;
      continue;
    }
    const nextArr = [...nowArr];
    const nowVal = nextArr.pop();
    queue.enqueue([nowSum + nowVal, nextArr], [nowSum - nowVal, nextArr]);
  }

  return answer;
}
