function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const curSum = rolls.reduce((a,b)=>a + b, 0);
    const goalSum = (rolls.length + n) * mean
    let nSum = goalSum - curSum;
    // nSum < n means that even with the lowest value (1), we can't fill the nArray
    // nSum > n * 6 means that even with the highest value (6), we can't fill the nArray
    if(nSum < n || nSum > n * 6) return []
    const nArray = [];
    for(let i = 0; i < n; i++) {
        const value = Math.ceil(nSum / (n - i))
        nArray.push(value)
        nSum -= value;
    }
    return nArray;
};