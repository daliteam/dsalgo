// 큰 수 만들기

function solution(number, k) {
  let answer = ''
  let cnt = 0
  const arr = []
  for (let i = 0; i < number.length; i++) {
    while (arr.length != 0) {
      if (cnt === k) break
      if (arr[arr.length - 1] < number[i]) {
        ++cnt
        arr.pop()
      } else break
    }
    arr.push(number[i])
  }

  answer = arr.join('').substr(0, number.length - k)
  return answer
}

// 로또

function solution(lottos, win_nums) {
  const answer = []
  const rank = [6, 6, 5, 4, 3, 2, 1]
  let cnt = 0
  let zero = 0
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      cnt += 1
    }
    if (lottos[i] == 0) {
      zero += 1
    }
  }

  answer[0] = rank[cnt + zero]
  answer[1] = rank[cnt]
  return answer
}
