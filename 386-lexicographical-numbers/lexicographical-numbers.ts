function lexicalOrder(n: number): number[] {
    const result = [];
    getNext(1)
    return result;

    function getNext(num: number) {
        for(let i = 0; i < 10; i++) {
            const cur = num + i;
            if(cur > n || result.length === n) return;
            result.push(cur)
            getNext(cur * 10)
        }
    }
};