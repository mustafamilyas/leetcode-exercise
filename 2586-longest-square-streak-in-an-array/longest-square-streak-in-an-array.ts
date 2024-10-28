function longestSquareStreak(nums: number[]): number {
    const unique = Array.from(new Set(nums));
    unique.sort((a,b)=>a-b);
    const map = new Map<number, number>();
    let max = 1;
    for(let i = 0; i < unique.length; i++) {
        const prev = Math.sqrt(unique[i]);
        const currentStreak = (map.get(prev) ?? 0) + 1;
        map.set(unique[i], currentStreak);
        max = Math.max(currentStreak, max)
    }
    return max === 1 ? -1 : max;
};