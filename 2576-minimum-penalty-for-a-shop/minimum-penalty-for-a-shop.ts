function bestClosingTime(customers: string): number {
    const rightSum = new Array(customers.length).fill(0);
    for(let i = customers.length - 1; i >= 0; i--) {
        rightSum[i] = (rightSum?.[i + 1] ?? 0) + (customers[i] === 'Y' ? 1 : 0) 
    }
    let leftCost = 0;
    let minCloseIndex = 0;
    let minCloseCost = rightSum[0];
    for(let i = 1; i <= customers.length; i++) {
        if(customers[i - 1] === 'N') leftCost++
        const curCost = leftCost + (rightSum?.[i] ?? 0);
        if(curCost < minCloseCost) {
            minCloseCost = curCost;
            minCloseIndex = i;
        }
    }
    return minCloseIndex;
};