function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let sum = 0;
    for(let i = 0; i < customers.length; i++) {
        if(grumpy[i] === 0) sum += customers[i]
    }
    let l = 0, r = 0, max = sum;
    while(r < customers.length) {
        if(r - l === minutes) {
            if(grumpy[r] === 1) sum += customers[r]
            r++
            if(grumpy[l] === 1) sum -= customers[l]
            l++ 
        } else {
            if(grumpy[r] === 1) sum += customers[r]
            r++
        }
        max = Math.max(max, sum)
    }
    return max
};