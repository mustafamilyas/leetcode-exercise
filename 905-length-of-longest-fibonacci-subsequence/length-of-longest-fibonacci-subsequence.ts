function lenLongestFibSubseq(arr: number[]): number {
    let longest = 0;
    const counter = new Array(arr.length).fill(null).map(()=>new Array(arr.length).fill(2));
    const valToIdx = new Map(arr.map((e, i)=>[e, i]));
    for(let i = 1; i < arr.length - 1; i++) {
        for(let k = i + 1; k < arr.length; k++) {
            const prev = arr[k] - arr[i];
            const prevIdx = valToIdx.get(prev)
            if(prevIdx == null || prev >= arr[i]) continue;
            const curIdx = valToIdx.get(arr[i])
            const nextIdx = valToIdx.get(arr[k])
            const prevValue = counter[prevIdx][curIdx]
            const nextValue = prevValue + 1
            counter[curIdx][nextIdx] = nextValue
            longest = Math.max(longest, nextValue)
        }
    }
    return longest
};