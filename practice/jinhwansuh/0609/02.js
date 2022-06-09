// 단어 변환

function solution(begin, target, words) {
  const visited = [];
  const queue = [[begin, 0]];

  while (queue.length) {
    let [w, c] = queue.shift();
    if (w === target) return c;

    words.forEach((word) => {
      if (!visited.includes(word)) {
        if (checked(w, word)) {
          queue.push([word, ++c]);
          visited.push(word);
        }
      }
    });
  }

  return 0;
}

function checked(str1, str2) {
  let check = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) check++;
  }
  return check === 1;
}
