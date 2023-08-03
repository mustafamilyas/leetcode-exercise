function shipWithinDays(weights: number[], days: number): number {
    let start = Number.MIN_SAFE_INTEGER;
    let end = 0;
    let sum = 0;

    function check(capacity: number) {
        let supposedDay = 1;
        let counter = 0;
        for(const w of weights) {
            counter += w;
            if(counter > capacity) {
                counter = w;
                supposedDay++;
            }
        }
        return supposedDay <= days;
    }

    for(const w of weights) {
        start = Math.max(start, w)
        sum += w
    }

    end = sum;
    
    while(start < end) {
        const mid = Math.ceil((start + end) / 2)
        const value = check(mid);
        if(value) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }

    return check(start) ? start : start + 1;
};