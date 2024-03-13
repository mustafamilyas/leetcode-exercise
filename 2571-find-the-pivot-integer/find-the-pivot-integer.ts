function pivotInteger(n: number): number {
    let sum = 0;
    let left = 0;
    for(let i = 1; i <= n; i++) sum+= i;
    for(let i = 1; i <= n; i++) {
        left += i;
        if(left === sum) return i;
        sum -= i
    }
    return -1;
};