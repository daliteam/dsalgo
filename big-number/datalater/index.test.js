import { solution } from "./index";

test("큰 수 만들기", () => {
  expect(solution("1924", 2)).toBe("94");
  expect(solution("1231234", 3)).toBe("3234");
  expect(solution("4177252841", 4)).toBe("775841");
  expect(solution("54321", 1)).toBe("5432");
});
