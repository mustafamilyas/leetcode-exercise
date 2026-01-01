function plusOne(digits: number[]): number[] {
    let carry = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        let next = carry + digits[i];
        carry = Math.trunc(next / 10);
        digits[i] = next % 10;
        if(!carry) return digits;
    }
    return carry ? [1, ...digits] : digits
};