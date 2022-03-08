function solution(s) {
  let answer = 0;
  let currentStr = s;
  let prevStr = "";
  if (s.length === 1) {
    return 0;
  }
  for (let i = 0; i < s.length; i++) {
    if ([")", "}", "]"].includes(currentStr[0])) {
      currentStr = currentStr.slice(1) + currentStr[0];
      continue;
    }
    for (let j = 0; j < currentStr.length; j++) {
      if (["(", "{", "["].includes(currentStr[j])) {
        prevStr = prevStr + currentStr[j];
      } else {
        if (currentStr[j] === ")") {
          if (prevStr.slice(-1) === "(") {
            prevStr = prevStr.slice(0, -1);
          } else {
            prevStr = prevStr + currentStr[j];
            break;
          }
        }
        if (currentStr[j] === "}") {
          if (prevStr.slice(-1) === "{") {
            prevStr = prevStr.slice(0, -1);
          } else {
            prevStr = prevStr + currentStr[j];
            break;
          }
        }
        if (currentStr[j] === "]") {
          if (prevStr.slice(-1) === "[") {
            prevStr = prevStr.slice(0, -1);
          } else {
            prevStr = prevStr + currentStr[j];
            break;
          }
        }
      }
    }
    if (prevStr === "") {
      answer += 1;
    }
    prevStr = "";
    currentStr = currentStr.slice(1) + currentStr[0];
  }

  return answer;
}
