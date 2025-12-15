function getDescentPeriods(prices: number[]): number {
    let continuos = 1;
    let descentPeriods = 0;
    for(let i = 0; i < prices.length; i++) {
        if(i > 0 && prices[i - 1] - prices[i] == 1) continuos += 1; 
        else continuos = 1;
        descentPeriods += continuos;
    }
    return descentPeriods;
};