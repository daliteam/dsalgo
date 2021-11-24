# TDD Guide

> 일부 내용(solution 함수)은 프로그래머스 기준으로 작성되었다

> 빠른 피드백을 받기 위해 VSCode에서 Quokka를 사용하여 진행하자

## 준비

01 프로그래머스 solution 함수를 가져온다

```js
function solution(dartResult) {
  var answer = 0;
  return answer;
}
```

02 테스트 결과를 출력 받기 위해 헬퍼 함수 assert를 만든다

```js
function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}
```

사용법 예시:

```js
function testSplitResult() {
  const expected = ["1S", "2D*", "3T"];
  const actual = splitResult(dartResult);

  assert(expected, actual);
}
```

## TDD

### 01 첫번째 입력 케이스에 대해 테스트 함수를 만든다

앞으로 이 함수에 필요한 작업을 차례대로 함수명으로 작성해나갈 것이다

형식:

```js
function testProcess() {
  const input = 첫번째_테스트케이스_입력;

  // 입력이 정답으로 가기 위해 필요한 첫번째 결과물을 적는다
  const expected = 첫번째_작업_결과물;
  const actual = 첫번째_필요한_작업(dartResult);

  assert(expected, actual);
}
```

예시:

```js
function testProcess() {
  const dartResult = "1D#2S*3S";

  // 개별 다트 결과를 나눠서 담고 있는 배열을 원한다
  const expected = ["1D#", "2S*", "3S"];
  const drArray = splitResult(dartResult);

  assert(expected, actual);
}

// 테스트 코드 작성 영역

testProcess(); // RED
```

### 02 테스트를 통과시키기 위해, 첫번째 작업 함수에 대한 테스트 코드를 작성한다

여기서 중요한 점은 "**필요한 작업은 모두 함수로 쪼개서 작성한다**"는 점과, "**테스트 코드를 먼저 작성한다**"는 점이다.

```js
function testSplitResult() {
  const dartResult = "1D#2S*3S";

  const expected = ["1D#", "2S*", "3S"];
  const actual = splitResult(dartResult);

  assert(expected, actual);
}

// 테스트 코드 작성 영역

testSplitResult(); // RED
```

### 03 테스트 코드를 통과시키기 위해 구현한다

```js
function splitResult(dr) {
  const pattern = /(\d+[^\d]+)(\d+[^\d]+)(\d+[^\d]+)/;

  return [dr.match(pattern)[1], dr.match(pattern)[2], dr.match(pattern)[3]];
}

// 테스트 코드 작성 영역

testSplitResult(); // GREEN
```

테스트가 통과되었으므로 두번째로 필요한 작업이 무엇인지 함수 이름으로 나타낸다

### 04 가능하다면 문제의 범위를 축소시켜서 테스트 함수를 작성하는 게 훨씬 유리하다

```js
function testProcess() {
  const dartResult = "1D#2S*3S";

  const expected = ["1D#", "2S*", "3S"];
  const drArray = splitResult(dartResult);

  /*
  이제 필요한 작업은 배열 개별 요소에 공통적으로 적용하는 작업이다
  여기서부터는 배열이 아니라 문제의 크기를 축소시키기 위해 
  배열 요소인 문자열에 대한 테스트를 따로 작성해나갈 것이다

  현재 내가 원하는 작업은 개별 다트 결과(ex. 1D#)에서 보너스를 숫자로 바꿔주는 것이다

  testProcess는 전체 배열에 대한 코드이므로 여기서 벗어나서 문자열에 대한 독립적인 테스트 코드를 작성하자
  */

  assert(expected, actual);
}
```

```js
function testTransBonus() {
  const bonus = "S";
  const expected = 1;
  const actual = transBonus(bonus);

  assert(expected, actual);
}

// test area

testTransBonus(); // RED
```

```js
function transBonus(bonus) {
  const bonusMap = {
    S: 1,
    D: 2,
    T: 3,
  };

  return bonusMap[bonus];
}

// test area

testTransBonus(); // GREEN
```

생각해보니 다트 결과 문자열을 점수, 보너스, 옵션을 담고 있는 객체로 관리하면 편할 것 같다:

```js
function testObjectify() {
  const dr = "1S";
  const expected = { score: 1, bonus: "1", option: "" };
  const actual = objectify(dr);

  assert(expected, actual);
}

// test arefa

testObjectify(); // RED
```

```js
function objectify(dr) {
  const pattern = /(?<score>\d+)(?<bonus>[SDT])(?<option>[\*\#]?)/i;

  return {
    ...dr.match(pattern).groups,
    score: +dr.match(pattern).groups.score, // 나중에 점수 합산을 위해 숫자형으로 변환한다
    bonus: transBonus(dr.match(pattern).groups.bonus),
  };
}

// test arefa

testObjectify(); // GREEN
```

이제 object로 잘 나온다. 옵션에 대한 계산은 하나의 다트 결과만으로는 계산할 수 없고 전체 다트 결과가 필요하므로 이제 배열을 대상 범위로 작업해야 한다. 따라서 testProcess에 코드를 작성한다.

```js
function testProcess() {
  const dartResult = "1D#2S*3S";
  const expected = 5;

  const drArray = splitResult(dartResult);
  const objs = drArray.map((dr) => objectify(dr));

  // 이제 다트 결과 오브젝트 배열을 점수로 만들어주고 싶다
  const actual = scorefy(objs);

  assert(expected, actual);
}
```

```js
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

// test area

testScorefy(); // RED
```

```js
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

// test area

testScorefy(); // GREEN
```

전체가 완성되었으므로 testProcess를 실행한다

```js
testProcess(); // GREEN
```

### 05 전체 입력 케이스에 대한 테스트 코드를 작성한다

먼저 testProcess를 토대로 솔루션 함수를 완성시켜준다

```js
function solution(dartResult) {
  const drArray = splitResult(dartResult);
  const objs = drArray.map((dr) => objectify(dr));

  return scorefy(objs);
}
```

전체 입력 케이스에 대한 테스트 코드를 작성한다

```js
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

// test area

testAll(); // GREEN
```

만약 일부 테스트 케이스에서 통과하지 못한다면 기존에 만들어둔 testProcess에 테스트가 깨지는 input을 넣는다. 기존 테스트 케이스를 유지하면서 원하는 케이스만 범위를 좁혀서 바로 디버깅할 수 있으므로 매우 편리하다.
