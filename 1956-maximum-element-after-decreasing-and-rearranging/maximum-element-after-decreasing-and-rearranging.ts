function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a,b)=>a-b);
    for(let i = 0; i < arr.length; i++) {
        const prev = arr[i - 1] ?? 0;
        const cur = arr[i]
        if((cur - prev) > 1) {
            arr[i] = prev + 1
        }
    }
    return arr[arr.length - 1];
};