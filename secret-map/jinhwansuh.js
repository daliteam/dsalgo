function solution(n, arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, '0');
    arr2[i] = arr2[i].toString(2).padStart(n, '0');
  }
  for (let i = 0; i < n; i++) {
    let k = '';
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        k += '#';
      } else {
        k += ' ';
      }
    }
    newArray.push(k);
  }

  return newArray;
}
