function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let n of number) {
    while (count < k && stack[stack.length - 1] < n) {
      stack.pop();
      count++;
    }
    stack.push(n);
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}

export { solution };
