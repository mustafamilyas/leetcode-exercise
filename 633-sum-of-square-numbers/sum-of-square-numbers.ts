function judgeSquareSum(c: number): boolean {
    let l = 0, r = Math.floor(Math.sqrt(c))
    while(l <= r) {
        const cur = l * l + r * r;
        if(cur === c) return true;
        if(cur < c) l++
        else r--
    }
    return false;
};