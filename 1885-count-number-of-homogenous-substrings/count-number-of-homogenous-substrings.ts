function countHomogenous(s: string): number {
    let counter = 1;
    let res = 0;
    for(let i = 1; i <= s.length; i++) {
        if(s[i - 1] === s[i]) counter ++
        else counter = 1
        res += counter;
    }

    return res % (10 ** 9 + 7);
};