// 비밀지도

function solution(n, arr1, arr2) {
  const answer = [];

  const array1 = arr1.map((arr) => [
    ...arr.toString(2).padStart(n, '0').replace(/0/g, ' ').replace(/1/g, '#'),
  ]);
  const array2 = arr2.map((arr) => [
    ...arr.toString(2).padStart(n, '0').replace(/0/g, ' ').replace(/1/g, '#'),
  ]);

  for (let i = 0; i < n; i++) {
    let ans = '';
    for (let j = 0; j < n; j++) {
      let sumArray = array1[i][j] + array2[i][j];
      if (sumArray.trim() === '') {
        ans += ' ';
      } else {
        ans += '#';
      }
    }
    answer.push(ans);
  }

  return answer;
}
