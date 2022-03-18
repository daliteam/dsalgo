const solution = (number, k) => {
  const reversedNumberArr = [...number].reverse();
  const result = [];
  let nextStartIndex = 0;

  while (k !== 0 && reversedNumberArr.length) {
    nextStartIndex += 1;
    const now = reversedNumberArr.pop();
    while (k !== 0 && result.length && result[result.length - 1] < now) {
      result.pop();
      k -= 1;
    }

    result.push(now);
  }

  if (k) {
    for (let i = 0; i < k; i += 1) {
      result.pop();
    }
  }
  
  return result.join('') + number.slice(nextStartIndex);
}