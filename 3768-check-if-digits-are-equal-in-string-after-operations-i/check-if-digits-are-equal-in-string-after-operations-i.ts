function hasSameDigits(s: string): boolean {
    let digit = s.split("").map((a)=>parseInt(a));
    while(digit.length > 2) {
        const next = [];
        for(let i = 0; i < digit.length - 1; i++) {
            next.push((digit[i] + digit[i + 1]) % 10);
        }
        digit = next;
    }
    return digit[0] == digit[1];
};