function nextBeautifulNumber(n: number): number {
    let digits = n.toString().split('').map((v)=>parseInt(v));
    let max_digit = digits.length;
    let combination = generate_combination(1, max_digit, new Array(10).fill(0));
    let min = Number.MAX_SAFE_INTEGER;
    for(const v of combination) {
        if(v > n) min = Math.min(min, v);
    }
    if(min < Number.MAX_SAFE_INTEGER) return min;
    combination = generate_combination(1, max_digit + 1, new Array(10).fill(0));
    return Math.min(...combination)
};

function generate_combination(d: number, max: number, counter: number[]): number[] {
    const res = [];
    for(let i = 1; i <= 9; i++) {
        if(can_insert(i, max, counter)) {
            counter[i]++;
            if(d == max) {
                if(is_valid_number(counter)) {
                    console.log(counter, i)
                    res.push(i)
                } 
            } else {
                const next = generate_combination(d + 1, max, counter);
                if(next.length > 0) {
                    for(const v of next) {
                        res.push(v * 10 + i);
                    }
                }
            }
            counter[i]--;
        }
    }
    return res;
}

function can_insert(n: number, max: number, counter: number[]) {
    if(n == 0) return false;
    if(n > max) return true;
    if(counter[n] > 0) {
        if(counter[n] + 1 <= n) return true
        return false; 
    }
    return true;
}

function is_valid_number(counter: number[]) {
    return counter.every((item, i) => item == 0 || item == i);
}