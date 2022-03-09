import { optimize, solution } from "./index";

// test("110 옮기기", () => {
//   expect(solution(["1110", "100111100", "0111111010"])).toEqual([
//     "1101",
//     "100110110",
//     "0110110111",
//   ]);
// });

test("optimize", () => {
  expect(optimize("1110")).toEqual("1101");
});
