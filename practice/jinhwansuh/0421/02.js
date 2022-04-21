const checkRightBracket = (string) => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(1);
    } else {
      const poped = stack.pop();
      if (poped !== 1) return false;
    }
  }
  return true;
};

const getBalacedBracket = (string) => {
  let lCount = 0,
    rCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      lCount++;
    } else {
      rCount++;
    }
    if (lCount === rCount) return string.slice(0, i + 1);
  }
  return '';
};

function solution(p) {
  if (!p.length) return '';

  const recur = (string) => {
    if (!string.length) return '';

    let u = getBalacedBracket(string);
    let v = string.slice(u.length);

    if (checkRightBracket(u)) {
      return u + recur(v);
    } else {
      let reverseU = '';
      for (let i = 1; i < u.length - 1; i++) {
        u[i] === '(' ? (reverseU += ')') : (reverseU += '(');
      }
      const newS = '(' + recur(v) + ')' + reverseU;

      return newS;
    }
  };

  return recur(p);
}
