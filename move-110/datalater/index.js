function solution(s) {
  const range = [...Array(s.length)].map((_, i) => i);

  return range.map((i) => optimize(filterOut(s[i], "110")));
}

class _ {
  static slice(s, start, count) {
    const endIndex = start + count;

    return s.slice(start, endIndex);
  }
}

function filterOut(s, it) {
  let str = "";
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    str += s[i];

    if (str.length >= it.length) {
      if (_.slice(s, str.length - it.length, 3) === it) {
        count += 1;
        str = str.slice(0, str.length - it.length);
      }
    }
  }

  return [str, count];
}

function optimize(str, count) {
  const lzl = str.lastIndexOf("0");

  let result = "";

  if (lzl === -1) {
    while (count--) {
      result += it;
    }

    result += str;

    return result;
  }

  for (let i = 0; i < str.length; i += 1) {
    if (i === lzl) {
      result += str[i];

      while (count--) {
        result += it;
      }
    } else {
      result += str[i];
    }
  }

  return result;
}

export { optimize, solution };
