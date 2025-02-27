function lenLongestFibSubseq(arr: number[]): number {
    let longest = 0;
    const counter = new Map<string, number>()
    const set = new Set(arr);
    for(let i = 1; i < arr.length - 1; i++) {
        for(let k = i + 1; k < arr.length; k++) {
            const prev = arr[k] - arr[i];
            if(!set.has(prev) || prev >= arr[i]) continue;
            const key = `${prev}:${arr[i]}`;
            if(!counter.has(key)) counter.set(key, 2)
            const nextKey = `${arr[i]}:${arr[k]}`;
            counter.set(nextKey, counter.get(key) + 1)
            longest = Math.max(longest, counter.get(nextKey))
        }
    }
    return longest
};