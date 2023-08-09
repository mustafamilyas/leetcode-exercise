function minimumCost(cost: number[]): number {
    cost.sort((a,b)=>b-a);
    let totalCost = 0;
    for(let i = 0; i < cost.length; i++) {
        if(i % 3 !== 2) {
            totalCost += cost[i]
        }
    }
    return totalCost
};