function solution(s) {
  const range = [...Array(s.length)].map((_, i) => i);

  // return undefined;
  return range.map((i) => optimize(s[i]));
}

/**
할일 목록

1. [ ] 가장 왼쪽에서 커서를 오른쪽으로 한칸씩 이동하면서 111과 110이 만나면 교환한다.
*/
function optimize(s) {
  const it = "110";

  for (let i = 0; i < s.length - it.length; i += 1) {
    const lll = s.slice(i, i + it.length);
    const lastIndex = s.lastIndexOf(it);

    if (lll === "111") {
      const array = Array.from(s);
      array[i + 2] = 0;
      array[lastIndex + 2] = 1;

      s = array.join("");
    }
  }

  return s;
}

testOptimize();

function testOptimize() {
  assert("1101", optimize("1110"), "testOptimize");
  assert("100110110", optimize("100111100"), "testOptimize");
  assert("01101", optimize("01110"), "testOptimize");
}

function assert(expected, actual, name = "") {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  if (!result) {
    console.log({ name, expected, actual, result });
  } else {
    console.log({ name, result });
  }
}
