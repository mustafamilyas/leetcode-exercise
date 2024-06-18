function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const diffProfit = new Map<number, number>()
    for(let i = 0; i < difficulty.length; i++) {
        diffProfit.set(difficulty[i], Math.max(profit[i], (diffProfit.get(difficulty[i]) ?? 0)) )
    }
    const diffProfitPair = Array.from(diffProfit.entries())
    diffProfitPair.sort((a,b)=>a[0] - b[0]);
    for(let i = 1; i < diffProfitPair.length; i++) {
        diffProfitPair[i][1] = Math.max(diffProfitPair[i][1], diffProfitPair[i - 1][1])
    }
    let profitFromWorker = 0;
    for(const w of worker) {
        profitFromWorker += maxProfitByWorker(w)
    }
    return profitFromWorker;
    // ========================== UTILITY ==========================
    function maxProfitByWorker(work: number) {
        let left = 0, right = diffProfitPair.length - 1;
        while(left <= right && right > 0 && left < diffProfitPair.length - 1) {
            const mid = Math.trunc((left + right) / 2);
            const midValue = diffProfitPair[mid][0]
            if(midValue === work) return diffProfitPair[mid][1]
            if(midValue > work) right = mid - 1
            else left = mid + 1
        }
        return diffProfitPair?.[left]?.[0] <= work ? diffProfitPair[left][1] :
                diffProfitPair?.[right]?.[0] <= work ? diffProfitPair[right][1] : 
                diffProfitPair?.[right - 1]?.[0] <= work ? diffProfitPair[right - 1][1] : 0
    }
};