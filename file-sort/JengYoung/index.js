function solution(files) {
  const refinedFiles = files.map((file, idx) => {
    let head = "";
    let numStr = "";
    let i = 0;
    while (!numStr || !isNaN(parseInt(file[i]))) {
      if (!isNaN(parseInt(file[i]))) numStr += file[i];
      if (!numStr) head += file[i];
      i += 1;
    }
    return [head, numStr, file.slice(i), idx];
  });
  return refinedFiles
    .sort((a, b) => {
      const [headA, numberA, tailA, idxA] = a;
      const [headB, numberB, tailB, idxB] = b;
      if (headA.toLowerCase() !== headB.toLowerCase())
        return headA.toLowerCase() < headB.toLowerCase() ? -1 : 1;
      if (parseInt(numberA) !== parseInt(numberB))
        return parseInt(numberA) - parseInt(numberB);
      return idxA - idxB;
    })
    .map(([head, number, tail, idx]) => `${head}${number}${tail ? tail : ""}`);
}
