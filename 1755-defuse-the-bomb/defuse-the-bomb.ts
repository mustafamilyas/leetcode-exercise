function decrypt(code: number[], k: number): number[] {
    const length = code.length;
    const result = new Array(length)
    if(k === 0) return result.fill(0);
    if(k > 0) {
        let l = 1, r = 1, sum = 0;
        for(; r <= k; r++) {
            sum += code[r]
        }
        r %= length;
        for(let i = 0; i < length; i++) {
            result[i] = sum;
            sum += code[r++] - code[l++] 
            r %= length;
            l %= length;
        }
    } else {
        let l = length - 2, r = length - 2, sum = 0;
        for(let i = 0; i < Math.abs(k) && l >= 0; i++) {
            sum += code[l--]
        }
        if(l < 0) l = length - 1;
        for(let i = length - 1; i >= 0; i--) {
            result[i] = sum;
            sum += code[l--] - code[r--] 
            if(l < 0) l = length - 1;
            if(r < 0) r = length - 1;
        }
    }
    return result;
};