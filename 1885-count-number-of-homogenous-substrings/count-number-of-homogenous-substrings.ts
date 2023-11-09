function countHomogenous(s: string): number {
    let start = 0;
    let counter = 0;
    for(let i = 1; i <= s.length; i++) {
        if(s[start] !== s[i]) {
            const length = i - start;
            counter += length * (length + 1) / 2
            start = i;
        }
    }

    return counter % (10 ** 9 + 7);
};