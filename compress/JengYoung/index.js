const initializeMemo = () => {
    const memos = {};
    for (let i = 65; i <= 90; i += 1) {
        memos[String.fromCharCode(i)] = i - 64;
    }
    return memos;
}
function solution(msg) {
    const answer = [];
    const memos = initializeMemo();
    let prev = '';
    let last = 27;
    
    for (let i = 0; i < msg.length; i += 1) {
        const now = msg[i];
        const next = prev + now;
        
        if (!memos[next]) {
            answer.push(memos[prev])
            memos[next] = last;
            last += 1;
            prev = now;
        } else {
            prev = next;
        }
    }
    answer.push(memos[prev])
    
    return answer;
}