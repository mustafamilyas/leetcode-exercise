function numSteps(s: string): number {
    let step = 0;
    let carry = 0;
    for(let i = s.length - 1; i > 0; i--) {
        if(carry) {
            if(s[i] == '1') step++;
            else step += 2;
        } else {
            if(s[i] == '0') step++;
            else {
                step += 2;
                carry = 1;
            }
        }
    }
    return step + carry;
};