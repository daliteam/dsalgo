function solution(board, moves) {
  let count = 0;
  const stack = [];

  for (let move of moves) {
    move = move - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][move]) {
        stack.push(board[i][move]);
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          count += 2;
        }
        board[i][move] = 0;
        break;
      }
    }
  }
  return count;
}
