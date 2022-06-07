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

  let max = Math.max(prefixArray[0]);
  for (let i = nums; i < array.length; i++) {
    let preSum = prefixArray[i - nums];
    preSum -= array[i - nums];
    preSum += array[i];
    prefixArray.push(preSum);

    max = Math.max(max, preSum);
  }
  max;
}
