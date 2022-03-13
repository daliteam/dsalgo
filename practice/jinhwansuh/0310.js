// https://leetcode.com/problems/3sum/submissions/
// 재귀?

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const answer = [];
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return answer;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return answer;
    if (nums[i] === nums[i - 1]) continue;

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      const sum = nums[low] + nums[i] + nums[high];

      if (sum === 0) {
        answer.push([nums[i], nums[low], nums[high]]);
        while (low < high && nums[low] === nums[low + 1]) low++;
        while (low < high && nums[high] === nums[high - 1]) high--;
        low++;
        high--;
        continue;
      }

      if (sum < 0) {
        while (low < high && nums[low] === nums[low + 1]) low++;
        low++;
        continue;
      }
      while (low < high && nums[high] === nums[high - 1]) high--;
      high--;
    }
  }
  return answer;
};

// https://leetcode.com/problems/generate-parentheses/submissions/
// 재귀, 스택

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];
  comb(n, 0, 0, '', answer);
  return answer;
};

const comb = (n, leftNum, rightNum, str, result) => {
  if (leftNum === n && rightNum === n) {
    if (isRight(str)) {
      result.push(str);
      return;
    }
  }
  if (leftNum > n || rightNum > n) return;

  comb(n, leftNum + 1, rightNum, str + '(', result);
  comb(n, leftNum, rightNum + 1, str + ')', result);
};

const isRight = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push('(');
    } else {
      const poped = stack.pop();
      if (poped !== '(') return false;
    }
  }
  return true;
};
