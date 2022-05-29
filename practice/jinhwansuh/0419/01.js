// 신규 아이디 추천

function solution(new_id) {
  let answer = new_id.toLowerCase()
                  .replace(/[^\w-._]+/g,'')
                  .replace(/\.+/g, '.')
                  .replace(/^\.|\.$/g, '');
  
  if (answer.length === 0) answer = 'a';
  if (answer.length >= 16) {
      answer = answer.slice(0, 15).replace(/\.$/, '');
  }
  while (answer.length <= 2) {
      answer += answer[answer.length - 1];
  }
  
  return answer;
}