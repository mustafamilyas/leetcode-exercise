function maxOperations(s: string): number {
    let ones = 0, sum = 0, space = false;
    for(let i = 0; i <= s.length; i++) {
        if(i == s.length || s[i] == '1') {
            if(space) {
                sum += ones;
                space = false;
            }
            ones += 1;
        } else {
            space = true;
        }
    }
    return sum;
};