function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a,b)=>a-b);
    let res = []
    let minDiff = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if(diff === minDiff) {
            res.push([arr[i - 1], arr[i]])
        } else if(diff < minDiff) {
            minDiff = diff;
            res = [[arr[i - 1], arr[i]]]
        }
    }
    return res
};