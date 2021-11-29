function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridgeArr = [];
    let totalWeight = 0;
    
    while(truck_weights.length){      
        answer += 1;
        
        if(bridgeArr.length == bridge_length) {
            totalWeight -= bridgeArr.shift();
        }
        
        if(totalWeight + truck_weights[0] > weight) {
            bridgeArr.push(0);
        }else{
            totalWeight += truck_weights[0];
            bridgeArr.push(truck_weights.shift());
        }
    }

    return answer+bridge_length;
}

