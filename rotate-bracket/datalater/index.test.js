import { isValid, rotate, solution } from "./index";

test("x만큼 회전시켰을 때 올바른 괄호 문자열이 되는 개수", () => {
  expect(solution("[](){}")).toBe(3);
  expect(solution("}]()[{")).toBe(2);
  expect(solution("[)(])]")).toBe(0);
  expect(solution("}}}")).toBe(0);
  expect(solution("([{)}]")).toBe(0);
});

test("x만큼 회전", () => {
  expect(rotate("()", 1)).toBe(")(");
  expect(rotate("()", 2)).toBe("()");
  expect(rotate("())", 1)).toBe("))(");
  expect(rotate("[](){}", 4)).toBe("{}[]()");
  expect(rotate("[](){}", 5)).toBe("}[](){");
});

test("올바른 괄호", () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("())")).toBe(false);
  expect(isValid("[](){}")).toBe(true);
  expect(isValid("}[](){")).toBe(false);
  expect(isValid("[{}]()")).toBe(true);
  expect(isValid("{}]()[")).toBe(false);
});
