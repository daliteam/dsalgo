# TIL

## 함수형 프로그래밍으로 리팩터링하기

```js
// as-is
function solution(dartResult) {
  const drArray = splitResult(dartResult);
  const objs = drArray.map((dr) => objectify(dr));

  return scorize(objs);
}

// to-be
function solution(dartResult) {
  return go(dartResult, splitResult, objectifyResult, scorize);
}
```

솔루션 함수만 봐서는 코드의 흐름을 파악하는 게 더 쉬워져서 코드 품질이 향상된 것처럼 보인다. 그런데 위와 같은 코드를 만들기 위해 아래와 같은 부수적인 함수가 생성되었다:

```js
function objectifyResult(arr) {
  return arr.map(objectify);
}
```

함수형 프로그래밍을 아직 잘 모르는 상태라 그런지, 이게 더 나은 것 같기도 하면서도 굳이 이렇게 하는 이점이 있는 건지 의구심이 들기도 한다. 그럼에도 불구하고 잘 모르는 분야에 대해 경험치를 쌓자는 마음으로 시도해본다.

## 동일한 정규식 패턴이 반복될 때 플래그 g 사용해서 한번에 추출하기

```js
// bad
function splitResult(dr) {
  const pattern = /(\d+[^\d]+)(\d+[^\d]+)(\d+[^\d]+)/;
  return [dr.match(pattern)[1], dr.match(pattern)[2], dr.match(pattern)[3]];
}

// better
function splitResult(dr) {
  const pattern = /(\d+[^\d]+)/g;

  return dr.match(pattern);
}
```

## 정규표현식 named capture group

```js
function objectify(dr) {
  const pattern = /(?<score>\d+)(?<bonus>[SDT])(?<option>[\*\#]?)/i;

  return {
    ...dr.match(pattern).groups,
    score: +dr.match(pattern).groups.score,
    bonus: transBonus(dr.match(pattern).groups.bonus),
  };
}
```
