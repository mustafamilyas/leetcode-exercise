function missingRolls(rolls: number[], mean: number, n: number): number[] {
    let diff = 0;
    for(let i = 0; i < rolls.length; i++) {
        diff += rolls[i] - mean;
    }
    if(diff === 0) return new Array(n).fill(mean)
    const result = []
    if(diff > 0) {
        const maxDiff = mean - 1;
        let avgInc = diff / n;
        if(avgInc > maxDiff) return []
        for(let i = 0; i < n; i++) {
            avgInc = diff / (n - i)
            const curValue = Math.ceil(avgInc)
            result.push(mean - curValue)
            diff -= curValue
        }
    } else if (diff < 0) {
        diff *= -1
        const maxDiff = 6 - mean;
        let avgInc = diff / n;
        if(avgInc > maxDiff) return []
        for(let i = 0; i < n; i++) {
            avgInc = diff / (n - i)
            const curValue = Math.ceil(avgInc)
            result.push(curValue + mean)
            diff -= curValue
        }
    }
    return result;
};