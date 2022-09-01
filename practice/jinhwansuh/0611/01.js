// 백준 11726

{
  const array = [0, 1, 2];

  function dp(number) {
    if (number === 1) return 1;
    if (number === 2) return 2;

    if (array[number]) return array[number];
    else {
      array[number] = dp(number - 1) + dp(number - 2);
      return array[number];
    }
  }

  console.log(dp(2));
  console.log(dp(9));
}

// 백준 11727
{
  const array = [0, 1, 2];

  function dp(number) {
    if (number === 1) return 1;
    if (number === 2) return 2;

    if (array[number]) return array[number];
    else {
      array[number] = dp(number - 1) + 2 * dp(number - 2);
      return array[number];
    }
  }

  console.log(dp(2));
  console.log(dp(9));
}

// 백준 2133
{
  const array = [1, 0, 3];

  function dp(number) {
    if (number === 0) return 1;
    if (number === 1) return 0;
    if (number === 2) return 3;

    if (array[number]) return array[number];

    let result = 3 * dp(number - 2);

    for (let i = 3; i <= number.length; i++) {
      if (i % 2 === 0) {
        result += 2 * dp(x - i);
      }
    }
    array[number] = result;
    return array[number];
  }

  console.log(dp(2));
  console.log(dp(10));
}
