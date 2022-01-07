function solution(files) {
  const answer = [...files];

  answer.sort((a, b) => {
    const headA = a.match(/^\D+/)[0].toLowerCase();
    const headB = b.match(/^\D+/)[0].toLowerCase();

    const numberA = parseInt(a.match(/\d+/)[0], 10);
    const numberB = parseInt(b.match(/\d+/)[0], 10);

    if (headA < headB) return -1;
    if (headA > headB) return 1;

    return numberA - numberB;
  });

  return answer;
}
