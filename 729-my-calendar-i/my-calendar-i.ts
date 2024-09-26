class MyCalendar {
    private bookedRange: [number, number][]
    constructor() {
        this.bookedRange = []
    }

    book(start: number, end: number): boolean {
        let left = 0, right = this.bookedRange.length - 1;
        while(left <= right) {
            const mid = Math.floor((right + left) / 2)
            const [s, e] = this.bookedRange[mid];
            if(
                (start < e && end >= e) ||
                (end > s && start <= s) ||
                (start >= s && end <= e)
            ) return false;

            if(start >= s) left = mid + 1
            else right = mid - 1;
        }
        this.bookedRange.splice(left, 0, [start, end])
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */