// 백준 https://www.acmicpc.net/problem/2504 괄호의 값

const ex1 = '(()[[]])([])';
const ex2 = '[][]((])';

const checkRightBracket = (value) => {
  const stack1 = [];
  const stack2 = [];

  for (let i = 0; i < value.length; i++) {
    switch (value[i]) {
      case '[':
        stack1.push(1);
        break;
      case '(':
        stack2.push(1);
        break;
      case ']':
        const a = stack1.pop();
        if (!a) {
          return false;
        }
        break;
      case ')':
        const b = stack2.pop();
        if (!b) {
          return false;
        }
        break;
      default:
        return false;
    }
  }
  if (!stack1.length && !stack2.length) {
    return true;
  } else {
    return false;
  }
};
const removeToken = (expression) => {
  return expression.replace(/(\(\)|\[\])/g, '1');
};

function solution1(ex) {
  // 올바른 괄호인지 체크하는 함수
  const exArray = ex.split('');
  if (!checkRightBracket(exArray)) {
    return 0;
  }

  const option = {
    '(': '+2*(',
    ')': ')',
    '[': '+3*[',
    ']': ']',
  };

  const ea = exArray.map((expression) => option[expression]).join('');
  const b = removeToken(ea);

  return eval(b);
}

console.log(solution1(ex1));
console.log(solution1(ex2));

// https://leetcode.com/problems/find-the-winner-of-the-circular-game/

const [n2, k2] = [5, 2];
function solution2(n, k) {
  const array = Array.from({ length: n }, (index, i) => i);

  let nowIndex = 0;

  function nextIndex(length, next) {
    if (next >= length) {
      return nextIndex(length, next - length);
    } else {
      return next;
    }
  }

  while (array.length > 1) {
    const nextLeaveIndex = nextIndex(array.length, nowIndex + (k - 1));
    array.splice(nextLeaveIndex, 1);
    nowIndex = nextLeaveIndex;
  }

  return array[0] + 1;
}

console.log(solution2(n2, k2));

// https://www.acmicpc.net/problem/1074 Z

const [N3, r3, c3] = [3, 7, 7];

function solution3(n, r, c) {
  const K = (n - 1) ** 2;
  const a = r + 1;
}
