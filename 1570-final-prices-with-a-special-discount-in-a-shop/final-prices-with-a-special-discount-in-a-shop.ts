function finalPrices(prices: number[]): number[] {
    const stack = [prices[prices.length - 1]];
    for(let i = prices.length - 2; i >= 0; i--) {
        while(stack.length && prices[i] < stack[stack.length - 1]) {
            stack.pop();
        }
        const top = stack[stack.length - 1];
        stack.push(prices[i])
        if(top) prices[i] -= top;
    }
    return prices;
};