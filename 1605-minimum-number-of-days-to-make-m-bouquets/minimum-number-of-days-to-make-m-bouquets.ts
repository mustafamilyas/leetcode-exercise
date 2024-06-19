function minDays(bloomDay: number[], m: number, k: number): number {
    if(bloomDay.length < m * k) return -1;
    let left = Number.MAX_SAFE_INTEGER, right = Number.MIN_SAFE_INTEGER;
    for(const b of bloomDay) {
        left = Math.min(b, left)
        right = Math.max(b, right)
    }
    let res = right;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(getBouquetNum(mid) >= m) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return res;

    function getBouquetNum(bloomMax: number) {
        let consecutive = 0;
        let counter = 0;
        for(const b of bloomDay) {
            if(b <= bloomMax) consecutive++
            else consecutive = 0;
            if(consecutive === k) {
                counter++
                consecutive = 0
            }
        }
        return counter;
    }
};

// 7 7  7   7  12 7 7
// 7  7  12  12 12