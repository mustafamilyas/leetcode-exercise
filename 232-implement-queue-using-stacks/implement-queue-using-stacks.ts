class MyQueue {
    stack: Array<number>
    constructor() {
        this.stack = []
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        const temp = []
        while(this.stack.length > 1) {
            temp.push(this.stack.pop())
        }
        const removed = this.stack.pop();
        while(temp.length) {
            this.stack.push(temp.pop())
        }
        return removed;
    }

    peek(): number {
        return this.stack[0]
    }

    empty(): boolean {
        return this.stack.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */