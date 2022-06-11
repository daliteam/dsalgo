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
