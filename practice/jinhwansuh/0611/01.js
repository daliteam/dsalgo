// 백준 11726

{
  const a = [0, 1, 2];

  function dp(number) {
    if (number === 1) return 1;
    if (number === 2) return 2;

    if (a[number]) return a[number];
    else {
      a[number] = dp(number - 1) + dp(number - 2);
      return a[number];
    }
  }
  console.log(a[55]);

  console.log(dp(2));
  console.log(dp(9));
}
