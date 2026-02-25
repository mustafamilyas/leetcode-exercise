function sortByBits(arr: number[]): number[] {
    const memo: Record<number, number> = {};
    return arr.map((n) => [n, getKey(n)]).sort((a, b) =>(a[1] == b[1] ? a[0] - b[0] : a[1] - b[1])).map((n)=>n[0])
    function getKey(n: number): number {
        if(typeof memo[n] == 'number') return memo[n]
        let num1 = 0;
        let _n = n;
        while(_n > 0) {
            if((_n & 1) == 1) num1++;
            _n >>= 1;
        }
        memo[n] = num1;
        return num1;
    }
};
