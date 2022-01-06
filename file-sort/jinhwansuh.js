const sortFiles = (files) => {
  const array = [];

  for (const file of files) {
    let head = '',
      number = '';
    const tempArray = [];
    for (let i = 0; i < file.length; i++) {
      if (+file[i] + 1) {
        number += file[i];
        if (file[i + 1] !== ' ' && +file[i + 1] + 1) {
          // 다음이 공백이 아니고 숫자이면.
          if (number.length === 5) {
            tempArray.push(number);
            tempArray.push(file.slice(i + 1));
            break;
          }
          continue;
        } else {
          // 다음이 숫자가 아니라면
          tempArray.push(number);
          tempArray.push(file.slice(i + 1));
          break;
        }
      } else {
        head += file[i];
        if (+file[i + 1] + 1) {
          // 다음이 숫자이면 push
          tempArray.push(head);
        }
      }
    }
    array.push(tempArray);
  }
  return array;
};

function solution(files) {
  const sortedArray = sortFiles(files);
  // sortedArray는 아래처럼 나온다.

  sortedArray.sort((a, b) => {
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      const x = +a[1],
        y = +b[1];
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
  });

  return sortedArray.map((array) => array.join(''));
}

/* 
[
  [ 'img', '12', '.png' ],
  [ 'img', '10', '.png' ],
  [ 'img', '02', '.png' ],
  [ 'img', '1', '.png' ],
  [ 'IMG', '01', '.GIF' ],
  [ 'img', '2', '.JPG' ]
] 
*/

/* 
[
  [ 'F-', '5', ' Freedom Fighter' ],
  [ 'B-', '50', ' Superfortress' ],
  [ 'A-', '10', ' Thunderbolt II' ],
  [ 'F-', '14', ' Tomcat' ]
]
*/
