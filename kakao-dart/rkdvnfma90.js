function solution(dartResult) {
  const computedValues = [];

  let isNumberBefore = false;
  [...dartResult].forEach(value => {
    const lastIndex = computedValues.length - 1;

    if (!isNaN(value)) {
      if (isNumberBefore) {
        computedValues[lastIndex] = parseInt(
          computedValues[lastIndex] + value,
          10
        );
      } else {
        computedValues.push(parseInt(value, 10));
      }

      isNumberBefore = true;
    } else {
      isNumberBefore = false;
      switch (value) {
        case 'D':
          computedValues[lastIndex] = computedValues[lastIndex] ** 2;
          break;

        case 'T':
          computedValues[lastIndex] = computedValues[lastIndex] ** 3;
          break;

        case '*':
          if (computedValues[lastIndex - 1]) {
            computedValues[lastIndex - 1] = computedValues[lastIndex - 1] * 2;
          }

          if (computedValues[lastIndex]) {
            computedValues[lastIndex] = computedValues[lastIndex] * 2;
          }
          break;

        case '#':
          computedValues[lastIndex] = computedValues[lastIndex] * -1;
          break;

        default:
          break;
      }
    }
  });

  return computedValues.reduce((acc, cur) => acc + cur);
}
