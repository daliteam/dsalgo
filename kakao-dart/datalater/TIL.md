# TIL

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
