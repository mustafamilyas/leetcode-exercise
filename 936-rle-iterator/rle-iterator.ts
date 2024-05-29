class RLEIterator {
    encoding: number[];
    index: number;
    constructor(encoding: number[]) {
        this.encoding = encoding;
        this.index = 0;
    }

    next(n: number): number {
        while(n > 0 && this.index < this.encoding.length) {
            const _n = n
            n -= this.encoding[this.index];
            this.encoding[this.index] -= _n
            if(this.encoding[this.index] < 0) {
                this.index += 2
            }
        }
        return this.encoding[this.index + 1] ?? -1 
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */