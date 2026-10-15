function maxSumOfSquares(num: number, sum: number): string {
    let res = "";
    for(let i = 0; i < num; i++) {
        const cur = Math.min(sum, 9);
        sum -= cur;
        res += cur;
    }
    if(sum > 0) return ""
    return res;
};