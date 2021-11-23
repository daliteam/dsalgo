function solution(numbers, target) {
  const combs = combinate(numbers);
  const sums = combs.map((comb) => comb.reduce((a, b) => a + b));

  return sums.filter((sum) => sum === target).length;
}

function testAll() {
  const inputs = [{ numbers: [1, 1, 1, 1, 1], target: 3 }];
  const expecteds = [5];

  inputs.forEach((input, i) => {
    assert(expecteds[i], solution(input.numbers, input.target));
  });
}

function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}

function testProcess() {
  const numbers = [1, 1, 1, 1, 1];
  const target = 3;
  const expected = 5;

  const combs = combinate(numbers);
  const sums = combs.map((comb) => comb.reduce((a, b) => a + b));
  const actual = sums.filter((sum) => sum === target).length;

  assert(expected, actual);
}

function testNegatify() {
  const number = 1;
  const expected = -1;

  assert(expected, negatify(number));
}

function testCombinate() {
  const numbers = [1];
  const expected = [[1], [-1]];

  assert(expected, combinate(numbers));
}

function negatify(number) {
  return parseInt(`-${number}`, 10);
}

function combinate(numbers) {
  return numbers.reduce(
    (acc, number) => {
      const case1 = number;
      const case2 = negatify(number);

      return acc
        .map((arr) => {
          const arr1 = [...arr, case1];
          const arr2 = [...arr, case2];

          return [arr1, arr2];
        })
        .flat();
    },
    [[]]
  );
}

// testProcess();
// testNegatify();
// testCombinate();
testAll();
