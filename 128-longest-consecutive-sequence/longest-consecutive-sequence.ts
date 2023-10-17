function longestConsecutive(nums: number[]): number {
    if(!nums.length) return 0;
    const map = new Map<number, number>();
    for(const n of nums) {
        map.set(n, -1)
    }
    let longest = 1;
    for(const n of map.keys()) {
        const curValue = map.get(n);
        if(curValue === -1) {
            let start = n;
            let end = n + 1;
            while(map.get(end)) {
                const endValue = map.get(end);
                if(endValue !== -1) {
                    end += endValue;
                    break;
                }
                end++
            }
            while(start < end && map.get(start) === -1) {
                map.set(start, end - start);
                start++
            }
        }
        longest = Math.max(longest, map.get(n))
    }
    return longest;
};