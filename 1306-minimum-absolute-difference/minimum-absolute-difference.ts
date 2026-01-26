function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b)=> a - b);
    let result = [];
    let resDiff = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i < arr.length; i++) {
        const curDiff = arr[i] - arr[i - 1]; 
        if(curDiff == resDiff) result.push([arr[i - 1], arr[i]])
        else if (curDiff < resDiff) {
            result = [[arr[i - 1], arr[i]]]
            resDiff = curDiff
        }
    }
    return result;
};