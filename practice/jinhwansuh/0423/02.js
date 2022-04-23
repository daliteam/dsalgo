function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const str1Stack = [];
  const str2Stack = [];
  const count1 = {};
  const count2 = {};

  const reg = /^[a-z]*$/;

  for (let i = 0; i < str1.length - 1; i++) {
    const a = str1.slice(i, i + 2);

    if (reg.test(a)) {
      count1[a] = (count1[a] || 0) + 1;
      str1Stack.push(a);
    }
  }
  for (let j = 0; j < str2.length - 1; j++) {
    const a = str2.slice(j, j + 2);

    if (reg.test(a)) {
      count2[a] = (count2[a] || 0) + 1;
      str2Stack.push(a);
    }
  }
  if (!str1Stack.length && !str2Stack.length) return 65536;
  const sumArray = [...new Set([...str1Stack, ...str2Stack])];

  const newSum = [...sumArray];
  for (const sum of sumArray) {
    if (count1[sum] || count2[sum]) {
      const max = Math.max(
        count1[sum] ? count1[sum] : 0,
        count2[sum] ? count2[sum] : 0
      );
      for (let k = 0; k < max - 1; k++) {
        newSum.push(sum);
      }
    }
  }
  const cl = [...new Set(str1Stack.filter((s) => str2Stack.includes(s)))];
  const newCl = [...cl];

  for (const sum of cl) {
    if (count1[sum] > 1 && count2[sum] > 1) {
      const min = Math.min(count1[sum], count2[sum]);
      for (let k = 0; k < min - 1; k++) {
        newCl.push(sum);
      }
    }
  }

  const simil = newCl.length / newSum.length;

  return parseInt(simil * 65536, 10);
}
