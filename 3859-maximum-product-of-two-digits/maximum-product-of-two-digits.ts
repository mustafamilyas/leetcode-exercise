function maxProduct(n: number): number {
    const digits = new Array(10).fill(0);
    while(n > 0){
        const digit = n % 10;
        digits[digit]++;
        n = Math.trunc(n / 10);
    }
    let a = null, b = null;
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] && a == null) {
            a = i;
            digits[i]--;
        }
        if(digits[i] && b == null) {
            b = i;
            digits[i]--;
        }
        if(a != null && b != null) break;
    }
    return a * b;
};