// 백준 2559

{
  const range = 10;
  const nums = 5;
  const array = '3 -2 -4 -9 0 3 7 13 8 -3'.split(' ').map((arr) => Number(arr));

  let prefixArray = [];
  let pre = 0;
  for (let i = 0; i < nums; i++) {
    pre += array[i];
  }
  prefixArray.push(pre);

  let max = pre;
  for (let i = nums; i < array.length; i++) {
    pre -= array[i - nums];
    pre += array[i];
    prefixArray.push(pre);

    max = Math.max(max, pre);
  }
  max;
}

{
  const n = 5;
  const m = 5;
  const data = [1, 2, 3, 2, 5];

  let result = 0;
  let summary = 0;
  let end = 0;

  for (let start = 0; start < data.length; start++) {
    while (summary < m && summary < n) {
      summary += data[end];
      end += 1;
    }
    if (summary == m) {
      result += 1;
    }
    summary -= data[start];
  }
}

// 구간 합
{
  const data = [10, 20, 30, 40, 50];

  const prefixSum = [0];

  let summary = 0;

  for (const i of data) {
    summary += i;
    prefixSum.push(summary);
  }

  prefixSum;
  const left = 3;
  const right = 4;
  console.log(prefixSum[right] - prefixSum[left - 1]);
}
