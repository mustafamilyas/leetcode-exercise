function minCost(colors: string, neededTime: number[]): number {
    let minTime = 0;
    let isConsecutive = false;
    let localMaxTime = neededTime[0];
    let localSumTime = neededTime[0];

    for(let i = 1; i <= colors.length; i++) {
        if(colors?.[i] === colors[i - 1]) {
            if(!isConsecutive) isConsecutive = true;
            localSumTime += neededTime[i]
            localMaxTime = Math.max(localMaxTime, neededTime[i]);
        } else {
            if(isConsecutive) {
                minTime += localSumTime - localMaxTime;
                isConsecutive = false;
            }
            if(i < colors.length) {
                localSumTime = localMaxTime = neededTime[i];
            }
        }
    }

    return minTime;
};