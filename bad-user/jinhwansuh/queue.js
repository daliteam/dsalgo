const arr = [
  ['frodo', 'fradi'],
  ['frodo', 'crodo'],
  ['abc123', 'frodoc'],
  ['abc123', 'frodoc'],
];

const queue = [];

/* 
  1. 큐에서는 (현재 배열, 넣지 않은 배열)을 넣습니다.
  2. 넣지 않은 배열에서 배열을 하나 빼서 포문을 돌리며 현재 배열에 있는지 체크합니다.
  3. 포문으로 돌렸을때의 값이 현재배열에 있다면 continue
  , 아니라면 큐에 넣어줍니다.
  4. 만약 넣지않은 배열의 크기가 0이라면 결과배열에 현재 모두 처리한배열을 넣어줍니다. 
*/