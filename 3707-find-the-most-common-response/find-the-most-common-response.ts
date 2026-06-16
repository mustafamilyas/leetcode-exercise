function findCommonResponse(responses: string[][]): string {
    const countMap = new Map();
    let max = '', maxCount = 0;
    for(let i = 0; i < responses.length; i++) {
        const unique = new Set();
        for(let k = 0; k < responses[i].length; k++) {
            const r = responses[i][k]
            if(unique.has(r)) continue;
            unique.add(r)
            countMap.set(r, (countMap.get(r) ?? 0) + 1)
        }
    }
    for(const [key, value] of countMap.entries()) {
        if(maxCount < value || (maxCount == value && max.localeCompare(key) > 0)) {
            maxCount = value;
            max = key;
        }
    }
    return max;
};