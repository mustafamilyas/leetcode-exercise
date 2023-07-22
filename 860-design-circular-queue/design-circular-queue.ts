class MyCircularQueue {
    queue: number[];
    start: number;
    end: number;
    size: number;

    constructor(k: number) {
        this.queue = []
        this.start = 0;
        this.end = 0;
        this.size = k;
    }

    enQueue(value: number): boolean {
        // console.log('enqueue',this.start, this.end, this.queue)
        if(this.isFull()) return false;
        
        if(this.isEmpty()) {
            this.queue[this.end] = value;
            return true;
        }
        
        this.end++
        if(this.end === this.size) {
            this.end = 0;
        }
            
        this.queue[this.end] = value;
        return true;
    }

    deQueue(): boolean {
        // console.log('dequeue',this.start, this.end, this.queue)
        if(this.isEmpty()) return false;
        
        this.queue[this.start] = undefined;
        if(this.start === this.end) return true;
        
        this.start++
        if(this.start === this.size) {
            this.start = 0;
        }
        // console.log('after dequeue',this.start, this.end, this.queue)
        return true;
    }

    Front(): number {
        return this.queue[this.start] ?? -1
    }

    Rear(): number {
        return this.queue[this.end] ?? -1
    }

    isEmpty(): boolean {
        return this.start === this.end && this.queue[this.start] === undefined;
    }

    isFull(): boolean {
        return this.start <= this.end ? (
            (this.end - this.start) + 1 === this.size && this.queue[this.start] !== undefined
        ) : (
            this.end + 1 === this.start
        ); 
    }
}


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */