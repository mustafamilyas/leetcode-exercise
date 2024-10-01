class CustomStack {
    stack: Array<number>
    incrementOps: Array<number>
    current: number

    constructor(maxSize: number) {
        this.stack = new Array(maxSize);
        this.incrementOps = new Array(maxSize).fill(0);
        this.current = 0;
    }

    push(x: number): void {
        if(this.current === this.stack.length) return;
        this.stack[this.current++] = x;
    }

    pop(): number {
        if(this.current === 0) return -1;
        const index = this.current - 1;
        const curValue = this.stack[index] + this.incrementOps[index]
        if(this.current > 0) this.incrementOps[index - 1] += this.incrementOps[index]
        this.incrementOps[index] = 0;
        this.current--
        return curValue;
    }

    increment(k: number, val: number): void {
        const minIndex = Math.min(k - 1, this.current - 1);
        this.incrementOps[minIndex] = (this.incrementOps[minIndex] ?? 0) + val 
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */