function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const curSum = rolls.reduce((a,b)=>a + b, 0);
    const goalSum = (rolls.length + n) * mean
    let nSum = goalSum - curSum;
    if(nSum < n || nSum > n * 6) return []
    const nArray = [];
    for(let i = 0; i < n; i++) {
        const value = Math.ceil(nSum / (n - i))
        nArray.push(value)
        nSum -= value;
    }
    return nArray;
};