function dfs(sum, index, numbers, target) {
    if(index === numbers.length){
        return sum===target? 1: 0;
    } 
    let answer = 0;
    answer += dfs(sum + numbers[index], index+1, numbers, target);
    answer += dfs(sum - numbers[index], index+1, numbers, target);
    return answer;
}

function solution(numbers, target) {
    let answer = 0;
    
    answer = dfs(0, 0, numbers, target);
    return answer;
}

