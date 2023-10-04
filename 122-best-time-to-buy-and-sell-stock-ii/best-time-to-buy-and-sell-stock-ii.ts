function maxProfit(prices: number[]): number {
  let profit = 0;
    
  for(let i = 1; i <= prices.length; i++) {
    const curProfit = prices[i] - prices[i-1];
    if(curProfit > 0) {
      profit += curProfit;
    }
  }

  return profit;
};