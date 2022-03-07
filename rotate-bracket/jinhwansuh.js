const isCorrectBracket = (brackets) => {
  const bracketArray = [...brackets];
  const stack = [];

  for (const bracket of bracketArray) {
    switch (bracket) {
      case '(':
        stack.push('(');
        break;
      case '[':
        stack.push('[');
        break;
      case '{':
        stack.push('{');
        break;
      case ')':
        const a = stack.pop();
        if (a !== '(') return false;
        break;
      case ']':
        const b = stack.pop();
        if (b !== '[') return false;
        break;
      case '}':
        const c = stack.pop();
        if (c !== '{') return false;
        break;
      default:
        return false;
    }
  }
  return true;
};

function solution(s) {
  let answer = 0;
  if (s.length % 2 !== 0) return 0;

  const newS = s + s;

  for (let i = 0; i < s.length; i++) {
    const rotateBracket = newS.slice(i, i + s.length);
    if (isCorrectBracket(rotateBracket)) answer += 1;
  }
  return answer;
}
