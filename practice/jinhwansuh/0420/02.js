// 메뉴 리뉴얼

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

function solution(orders, course) {
  const answer = [];

  course.sort((a, b) => b - a);

  for (const quantity of course) {
    const permutaitionsArray = orders
      .map((order) => order.split('').sort())
      .filter((order) => order.length >= quantity)
      .map((order) => getCombinations(order, quantity))
      .flat()
      .map((order) => order.join(''));

    const courseObject = {};

    for (let i = 0; i < permutaitionsArray.length; i++) {
      courseObject[permutaitionsArray[i]] =
        (courseObject[permutaitionsArray[i]] || 0) + 1;
    }

    const sortedObject = Object.entries(courseObject).sort(
      (a, b) => b[1] - a[1]
    );

    let max = 2;
    if (sortedObject[0]) {
      max = sortedObject[0][1] > max ? sortedObject[0][1] : 2;
    }
    for (let j = 0; j < sortedObject.length; j++) {
      if (sortedObject[j][1] === max) {
        answer.push(sortedObject[j][0]);
      } else {
        break;
      }
    }
  }

  return answer.sort();
}
