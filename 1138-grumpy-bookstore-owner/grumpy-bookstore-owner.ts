function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let sum = 0;
    for(let i = 0; i < customers.length; i++) {
        if(grumpy[i] === 0) sum += customers[i]
    }
    let max = sum;
    for(let r = 0, l = 0; r < customers.length; r++) {
        if(grumpy[r] === 1) sum += customers[r]
        if(r - l === minutes) {
            if(grumpy[l] === 1) sum -= customers[l]
            l++ 
        }
        max = Math.max(max, sum)
    }
    return max
};