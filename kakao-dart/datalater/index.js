function solution(dartResult) {
  const drArray = splitResult(dartResult);
  const objs = drArray.map((dr) => objectify(dr));

  return scorefy(objs);
}

function testAll() {
  const drs = [
    "1S2D*3T",
    "1D2S#10S",
    "1D2S0T",
    "1S*2T*3S",
    "1D#2S*3S",
    "1T2D3D#",
    "1D2S3T*",
  ];
  const expecteds = [37, 9, 3, 23, 5, -4, 59];

  drs.forEach((dr, i) => {
    assert(expecteds[i], solution(dr));
  });
}

function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}

function testProcess() {
  const dartResult = "1D#2S*3S";
  const expected = 5;

  const drArray = splitResult(dartResult);
  const objs = drArray.map((dr) => objectify(dr));

  const actual = scorefy(objs);

  assert(expected, actual);
}

function testSplitResult() {
  const dartResult = "1S2D*3T";

  const expected = ["1S", "2D*", "3T"];
  const actual = splitResult(dartResult);

  assert(expected, actual);
}

function testTransBonus() {
  const bonus = "S";
  const expected = 1;
  const actual = transBonus(bonus);

  assert(expected, actual);
}

function testObjectify() {
  const dr = "1S";
  const expected = { score: 1, bonus: "1", option: "" };
  const actual = objectify(dr);

  assert(expected, actual);
}

function testScorefy() {
  const objectifieds = [
    { score: 1, bonus: 1, option: "" },
    { score: 2, bonus: 2, option: "*" },
    { score: 3, bonus: 3, option: "" },
  ];

  const expected = 37;

  const actual = scorefy(objectifieds);

  assert(expected, actual);
}

function splitResult(dr) {
  const pattern = /(\d+[^\d]+)/g;

  return dr.match(pattern);
}

function transBonus(bonus) {
  const bonusMap = {
    S: 1,
    D: 2,
    T: 3,
  };

  return bonusMap[bonus];
}

function objectify(dr) {
  const pattern = /(?<score>\d+)(?<bonus>[SDT])(?<option>[\*\#]?)/i;

  return {
    ...dr.match(pattern).groups,
    score: +dr.match(pattern).groups.score,
    bonus: transBonus(dr.match(pattern).groups.bonus),
  };
}

const objectifieds = [
  { score: 1, bonus: 1, option: "" },
  { score: 2, bonus: 2, option: "*" },
  { score: 3, bonus: 3, option: "" },
];

function scorefy(objs) {
  objs.forEach(({ score, bonus, option }, i) => {
    objs[i].total = Math.pow(score, bonus);

    if (option === "*") {
      objs[i].total *= 2;

      if (objs[i - 1]) {
        objs[i - 1].total *= 2;
        objs[i - 1].effect = "double";
      }
    }

    if (option === "#") {
      objs[i].total *= -1;
    }
  });

  return objs.reduce((acc, cur) => acc + cur.total, 0);
}

// testProcess();
// testSplitresult();
// testTransBonus();
// testObjectify();
// testScorefy();
testAll();
