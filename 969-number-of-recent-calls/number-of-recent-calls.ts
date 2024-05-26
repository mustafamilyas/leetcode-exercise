class RecentCounter {
    requests: Array<number>
    constructor() {
        this.requests = []
    }

    ping(t: number): number {
        this.requests.push(t);
        let n = 1;
        while(n <= this.requests.length && this.requests[this.requests.length - n] >= t - 3000) {
            n++
        }
        return n - 1
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */