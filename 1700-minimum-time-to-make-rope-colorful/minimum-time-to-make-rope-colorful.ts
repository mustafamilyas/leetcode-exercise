function minCost(colors: string, neededTime: number[]): number {
    let cost = 0;
    let prev = neededTime[0];
    for(let i = 1; i < colors.length; i++) {
        if(colors[i] == colors[i - 1]) {
            if(neededTime[i] > prev) {
                cost += prev;
                prev = neededTime[i]
            } else {
                cost += neededTime[i];
            }
        } else {
            prev = neededTime[i];
        }
    }
    return cost;
};