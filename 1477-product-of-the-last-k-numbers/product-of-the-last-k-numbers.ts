class ProductOfNumbers {
    stream: number[] = []
    lastK: number[][] = []
    constructor() {}

    add(num: number): void {
        this.stream.push(num)
    }

    getProduct(k: number): number {
        const nextLastK = [];
        let acc = 1;
        while(this.stream.length) {
            nextLastK.push(acc *= this.stream.pop());
        }
        if(nextLastK.length) this.lastK.push(nextLastK)
        acc = 1;
        for(let i = this.lastK.length - 1; i >= 0; i--) {
            const cur = this.lastK[i]
            if(cur.length >= k) return acc * cur[k - 1];
            acc *= cur[cur.length - 1];
            k -= cur.length
        }
        const first = this.lastK?.[0] ?? []
        return first?.[first.length - 1] ?? 0;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */