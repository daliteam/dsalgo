import {
  count,
  mostFrequent,
  combinateString,
  combinateStrings,
  solution,
} from "./index";

test("메뉴 리뉴얼", () => {
  expect(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
  ).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});

test("주어진 문자열에서 특정한 길이만큼 조합한다", () => {
  expect(combinateString("ABC", 2)).toEqual(["AB", "AC", "BC"]);
  expect(combinateString("ABCFG", 2)).toEqual([
    "AB",
    "AC",
    "AF",
    "AG",
    "BC",
    "BF",
    "BG",
    "CF",
    "CG",
    "FG",
  ]);
});

test("배열에서 요소의 빈도 수를 계산해서 객체로 만든다", () => {
  expect(count(["AB", "AC", "BC", "AB"])).toEqual({ AB: 2, AC: 1, BC: 1 });
});

test("배열에서 최빈값 요소를 구한다", () => {
  expect(mostFrequent(["A", "B", "C", "A"])).toEqual(["A"]);
  expect(mostFrequent(["A", "B", "C"])).toEqual([]);
  expect(mostFrequent(["A", "B", "C", "A", "C"])).toEqual(["A", "C"]);
});

test("주어진 문자열에서 특정한 길이만큼 조합한다", () => {
  expect(combinateString("ABC", 2)).toEqual(["AB", "AC", "BC"]);
  expect(combinateString("ABCFG", 2)).toEqual([
    "AB",
    "AC",
    "AF",
    "AG",
    "BC",
    "BF",
    "BG",
    "CF",
    "CG",
    "FG",
  ]);
});

test("문자열 배열이 주어졌을 때 주어진 길이만큼 조합한다", () => {
  expect(combinateStrings(["XYZ", "XWY", "WXA"], 2)).toEqual([
    "AW",
    "AX",
    "WX",
    "WX",
    "WY",
    "XY",
    "XY",
    "XZ",
    "YZ",
  ]);
});
