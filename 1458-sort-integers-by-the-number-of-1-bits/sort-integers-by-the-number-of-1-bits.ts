function sortByBits(arr: number[]): number[] {
    const map = new Map<number, number[]>()
    for(const num of arr) {
        const key = getKey(num);
        const cur = map.get(key) || []
        cur.push(num)
        map.set(key, cur)
    }

    const result = [];
    for(let i = 0; i <= 14; i++) {
        const cur = map.get(i);
        if(cur) {
            cur.sort((a,b)=>a-b);
            result.push(...cur)
        }
    }
    return result;
};

function getKey(n: number): number {
    let num1 = 0;
    for(let i = 1; i <= 14 && n > 0; i++) {
        num1 += (n & 1)
        n = n >> 1
    }
    return num1;
}