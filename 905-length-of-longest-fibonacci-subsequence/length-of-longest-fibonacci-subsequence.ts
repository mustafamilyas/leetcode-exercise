function lenLongestFibSubseq(arr: number[]): number {
    let longest = 0;
    const counter = new Map<string, number>()
    const set = new Set(arr);
    for(let i = 1; i < arr.length - 1; i++) {
        for(let k = i + 1; k < arr.length; k++) {
            const prev = arr[k] - arr[i];
            if(!set.has(prev) || prev >= arr[i]) continue;
            const prevKey = `${prev}:${arr[i]}`;
            const prevValue = counter.get(prevKey) ?? 2
            const nextKey = `${arr[i]}:${arr[k]}`;
            const nextValue = prevValue + 1
            counter.set(nextKey, nextValue)
            longest = Math.max(longest, nextValue)
        }
    }
    return longest
};