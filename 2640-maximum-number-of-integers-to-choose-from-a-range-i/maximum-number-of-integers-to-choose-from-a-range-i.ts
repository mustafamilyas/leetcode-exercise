function maxCount(banned: number[], n: number, maxSum: number): number {
    const bannedSet = new Set(banned);
    let chosen = 0, sum = 0;
    for(let i = 1; i <= n && sum + i <= maxSum; i++) {
        if(bannedSet.has(i)) continue;
        sum += i
        chosen++
    }
    return chosen;
};