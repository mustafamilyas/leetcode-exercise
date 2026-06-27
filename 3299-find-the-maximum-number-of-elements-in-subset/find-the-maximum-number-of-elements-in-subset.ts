function maximumLength(nums: number[]): number {
    const map = new Map();
    const visited = new Set();
    let max = 1;
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
    }
    for(const [key, value] of map) {
        if(visited.has(key)) continue;
        if(key == 1) {
            max = Math.max(max, value % 2 ? value : value - 1);
            continue;
        }
        let cur = key;
        let curCount = 0;
        while(map.get(cur) >= 2) {
            visited.add(key)
            cur *= cur;
            curCount += 2;
        }
        if(map.get(cur) >= 1) {
            curCount += 1;
        } else if(curCount > 0) {
            curCount -= 1;
        }
        max = Math.max(max, curCount)
    }
    return max;
};