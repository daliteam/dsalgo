const pipe =
  (...cb) =>
  (target) =>
    cb.reduce((acc, curCb) => curCb(acc), target);

const comb = (n) => (order) => {
  const res = [];
  const arr = [...order];
  if (n === 1) return arr.map((val) => [val]);
  arr.forEach((now, idx) => {
    const nextOrder = arr.filter((_, i) => idx < i);
    const nextCombOrder = comb(n - 1)(nextOrder);
    nextCombOrder.map((next) => res.push([now, ...next].join("")));
  });
  return res;
};

const getFlattenArr = (arr) => arr.flat();

const getInitializedCounts = (course) => (counts) => {
  course.map((n) => (counts[n] = {}));
  return counts;
};

const getCombs = (course) => (order) => course.map((n) => comb(n)(order));
const getAllCombs = (cb) => (orders) => orders.map(cb);
const getFlattenCombs = (course) => (orders) => {
  return pipe(
    getAllCombs(pipe(getSortedValues(), getCombs(course))),
    getFlattenArr,
    getFlattenArr
  )(orders);
};

const getAllMenuCounts = (combs) => (counts) => {
  return combs.reduce(
    (acc, comb) => ({
      ...acc,
      [comb.length]: {
        ...acc[comb.length],
        [comb]: (acc[comb.length][comb] || 0) + 1,
      },
    }),
    counts
  );
};

const getCounts = (orders, course) => {
  const flattenCombs = pipe(getFlattenCombs(course))(orders);
  const counts = pipe(
    getInitializedCounts(course),
    getAllMenuCounts(flattenCombs)
  )({});

  return counts;
};

const getSortedValues =
  (cb = undefined) =>
  (arr) => {
    return [...arr].sort(cb);
  };

const getMaxMenuArr = (counts) => {
  return Object.values(counts).map((obj) => {
    const entries = Object.entries(obj);
    const maxValue = Math.max(...entries.map((arr) => arr[1]));
    return entries
      .filter((entry) => entry[1] === Math.max(2, maxValue))
      .map((v) => v[0]);
  });
};

const getResult = (arr) => pipe(getFlattenArr, getSortedValues())(arr);

const solution = (orders, course) => {
  return pipe(getMaxMenuArr, getResult)(getCounts(orders, course));
};

(() => {
  const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
  const course = [2, 3, 4];
  console.log(solution(orders, course)); // ["AC", "ACDE", "BCFG", "CDE"]
})();

(() => {
  const orders = ["XYZ", "XWY", "WXA"];
  const course = [2, 3, 4];
  console.log(solution(orders, course)); // ["AC", "ACDE", "BCFG", "CDE"]
})();
