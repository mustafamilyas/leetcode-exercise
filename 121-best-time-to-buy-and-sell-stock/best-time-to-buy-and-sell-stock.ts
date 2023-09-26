function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minBuy = prices[0];
    
    for(let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minBuy);
        
        if(minBuy > prices[i]) {
            minBuy = prices[i]
        }
    }
    
    return maxProfit;
};