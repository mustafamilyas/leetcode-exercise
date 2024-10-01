function canArrange(arr: number[], k: number): boolean {
    const modArray = new Array(k).fill(0);
    for(const n of arr) {
        const mod = n % k;
        const normalize = Math.abs(mod)
        const counterpart = (k - normalize) % k;
        if(mod > 0 || normalize === counterpart) {
            modArray[normalize]++
        } else {
            modArray[counterpart]++
        }
    }
    if(modArray[0] % 2) return false;
    let l = 1, r = k - 1;
    while(l < r) {
        if(modArray[l++] !== modArray[r--]) return false;
    }
    return l === r ? modArray[l] % 2 === 0 : true
};