const MAX_DIGIT = 9;
function sequentialDigits(low: number, high: number): number[] {
    const res = [];
    const low_digit = Math.trunc(Math.log10(low)), high_digit = Math.trunc(Math.log10(high));
    for(let digit = low_digit; digit <= high_digit; digit++) {
        let cur = Math.trunc(123456789 / 10 ** (MAX_DIGIT - digit - 1));
        const adder = Math.trunc(111111111 / 10 ** (MAX_DIGIT - digit - 1));
        for(let i = 0; i < MAX_DIGIT - digit; i++) {
            if(cur >= low && cur <= high) res.push(cur)
            cur += adder;
        }
    }
    return res; 
};
