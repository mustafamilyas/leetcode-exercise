function bestClosingTime(customers: string): number {
    const leftSum = [];
    const rightSum = new Array(customers.length).fill(0);
    for(let i = 0; i < customers.length; i++) {
        const curValue = (leftSum?.[i - 1] ?? 0) + (customers[i] === 'N' ? 1 : 0) 
        leftSum.push(curValue)
    }
    for(let i = customers.length - 1; i >= 0; i--) {
        rightSum[i] = (rightSum?.[i + 1] ?? 0) + (customers[i] === 'Y' ? 1 : 0) 
    }
    let minCloseIndex = 0;
    let minCloseCost = rightSum[0];
    for(let i = 1; i <= customers.length; i++) {
        const curCost = leftSum[i - 1] + (rightSum?.[i] ?? 0);
        if(curCost < minCloseCost) {
            minCloseCost = curCost;
            minCloseIndex = i;
        }
    }
    return minCloseIndex;
};