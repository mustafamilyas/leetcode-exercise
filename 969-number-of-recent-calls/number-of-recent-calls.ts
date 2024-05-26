class RecentCounter {
    requests: Array<number>
    tLimit: number
    constructor() {
        this.requests = []
        this.tLimit = 3000
    }

    ping(t: number): number {
        this.requests.push(t);
        while(this.requests.length && this.requests[0] < t - this.tLimit) {
            this.requests.shift();
        }
        return this.requests.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */