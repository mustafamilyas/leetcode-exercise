function judgeSquareSum(c: number): boolean {
    for(let l = 0; l <= Math.trunc(Math.sqrt(c)); l++) {
        const a = l * l
        const b = Math.sqrt(c - a);
        if(b === Math.trunc(b)) return true;
    }
    return false;
};