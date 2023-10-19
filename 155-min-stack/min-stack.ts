class MinStack {
    stack: number[]
    minStack: number[];
    // the idea is to have two stack
    // the first stack the actual stack
    // the second stack keep track the minimum val until that point
    // for example
    // stack    : [2,-3,5,5,3,2,-10]
    // minStack : [2,-3,-3,-3,-3,-3,-10]
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)
        const min = Math.min((this.minStack?.[this.minStack.length - 1] ?? Number.MAX_SAFE_INTEGER), val);
        this.minStack.push(min)
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */