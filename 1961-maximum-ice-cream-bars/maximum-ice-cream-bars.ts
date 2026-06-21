function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b)=> a-b);
    let i = 0;
    while(i < costs.length && costs[i] <= coins) {
        coins -= costs[i++]
    }
    return i;
};