function kthGrammar(n: number, k: number): number {
    function recursive(s: string, i: number, ith: number) {
        if(i === 1) {
            return parseInt(s[ith - 1]);
        }
        const curS = s[0] === '0' ? '01' : '10';
        const num = Math.pow(2, i - 2)
        const isFirstHalf = ith <= num;
        const nextIth = isFirstHalf ? ith : ith - num;
        const nextS = isFirstHalf ? curS[0] : curS[1];
        return recursive(nextS, i - 1, nextIth)
    }
    return recursive('0', n, k)
};