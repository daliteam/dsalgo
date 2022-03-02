// https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript
// 영어 끝말잇기

function solution(n, words) {
  const stack = [];
  let i = 0;

  for (i = 0; i < words.length; i++) {
    let nowWord = words[i];
    if (stack.includes(nowWord)) {
      break;
    } else {
      stack.push(nowWord);
    }

    if (stack[i - 1]) {
      const prev = stack[i - 1];
      if (words[i][0] !== prev[prev.length - 1]) {
        break;
      }
    }
  }

  if (i === words.length) return [0, 0];
  else {
    const a = (i + 1) % n === 0 ? (i + 1) / n : parseInt((i + 1) / n) + 1;
    const b = (i + 1) % n === 0 ? n : (i + 1) % n;
    return [b, a];
  }
}

// https://programmers.co.kr/learn/courses/30/lessons/87946?language=javascript
// 피로도
// dfs
// 참고 : https://velog.io/@duboo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level-2-%ED%94%BC%EB%A1%9C%EB%8F%84-JS

function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);
  let clearCount = 0;

  const dfs = (k, currCount) => {
    clearCount = Math.max(currCount, clearCount);

    for (let i = 0; i < dungeons.length; i++) {
      const [minHp, usingHp] = dungeons[i];

      if (k >= minHp && !visited[i]) {
        visited[i] = true;
        dfs(k - usingHp, currCount + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);
  return clearCount;
}

// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
// 타겟넘버
// dfs, 재귀

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/84512?language=javascript
// 모음사전
// 재귀

function solution(word) {
  const alpha = ['A', 'E', 'I', 'O', 'U'];
  const dict = [];

  const recursive = (depth, curWord) => {
    if (depth === 5) return;
    dict.push(curWord);
    for (const a of alpha) {
      recursive(depth + 1, curWord + a);
    }
  };

  alpha.forEach((word) => recursive(0, word));
  return dict.indexOf(word) + 1;
}
