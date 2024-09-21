function lexicalOrder(n: number): number[] {
    const result = [];
    let cur = 1;
    while(result.length < n) {
        result.push(cur)
        cur = getNext(cur)
    }
    return result;

    function getNext(num: number) {
        if(num * 10 <= n) return num * 10;
        let nextNum = num + 1;
        if(nextNum > n) nextNum = Math.ceil(nextNum / 10)
        while(nextNum % 10 === 0) {
            nextNum /= 10;
        }
        return nextNum
    }
};