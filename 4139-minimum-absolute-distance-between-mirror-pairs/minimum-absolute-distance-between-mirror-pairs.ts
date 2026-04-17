function minMirrorPairDistance(nums: number[]): number {
    const map = new Map<number, number>();
    let minDistance = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        const reversed = reverse(nums[i]);
        const reversedIndex = map.get(nums[i]);
        map.set(reversed, i);
        if(reversedIndex == null) continue;
        minDistance = Math.min(minDistance, i - reversedIndex);
    }
    return minDistance == Number.MAX_SAFE_INTEGER ? -1 : minDistance
};

function reverse(n: number): number {
    let i = 0;
    while(n > 0) {
        i = (i * 10) + n % 10;
        n = Math.trunc(n / 10);
    }
    return i;
}