class SeatManager {
    seat: Array<boolean>
    minHeap: typeof MinPriorityQueue;
    constructor(n: number) {
        this.seat = new Array(n).fill(false);
        this.minHeap = new MinPriorityQueue();
        for(let i = 0; i < n; i++) {
            this.minHeap.enqueue(i)
        }
    }

    reserve(): number {
        if(this.minHeap.size() === 0) return -1;
        const { element: seatIndex } = this.minHeap.dequeue();
        this.seat[seatIndex] = true;
        return seatIndex + 1;
    }

    unreserve(seatNumber: number): void {
        this.seat[seatNumber - 1] = false;
        this.minHeap.enqueue(seatNumber - 1)
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */