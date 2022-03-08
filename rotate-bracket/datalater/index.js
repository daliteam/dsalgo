export function solution(s) {
  const range = [...Array(s.length)].map((_, i) => i);

  return range
    .map((i) => isValid(rotate(s, i)))
    .reduce((acc, it) => (it ? acc + 1 : acc), 0);
}

export function rotate(s, n) {
  return s.slice(n) + s.slice(0, n);
}

export function isValid(s) {
  if (s.length % 2 !== 0 || isWrongStart(s)) {
    return false;
  }

  const stack = [];

  const [first] = s;
  s = s.slice(1);

  stack.push(first);

  while (s.length) {
    const [first] = s;
    s = s.slice(1);

    if (findPair(last(stack)) === first) {
      stack.pop();
    } else {
      stack.push(first);
    }
  }

  return stack.length === 0;
}

const pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function last(array) {
  return array[array.length - 1];
}

function findPair(one) {
  return pairs[one];
}

function isWrongStart(string) {
  return !Object.keys(pairs).includes(string[0]);
}
