function canThreePartsEqualSum(arr: number[]): boolean {
    const sum = arr.reduce((a,b)=>a+b, 0);
    const part = sum / 3
    let l = 0, r = arr.length - 1, lSum = 0, rSum = 0;
    for(; l < arr.length && (l === 0 || lSum !== part); l++) {
        lSum += arr[l];
    }
    for(; r >= 0 && (r === arr.length - 1 || rSum !== part); r--) {
        rSum += arr[r];
    }
    return (r + 1) - (l - 1) > 1;
};