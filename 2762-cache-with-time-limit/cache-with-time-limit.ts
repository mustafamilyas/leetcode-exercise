interface CacheItem {
    value: number;
    dieAt: number;
}
class TimeLimitedCache {
    memo: Map<number, CacheItem> 
    constructor() {
        this.memo = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        const selectedKey = this.memo.get(key)
        const curTimestamp = new Date().getTime();
        const nextTimestamp = curTimestamp + duration;
        this.memo.set(key, {
            value,
            dieAt: nextTimestamp
        })
        if(!selectedKey || selectedKey.dieAt < curTimestamp) {
            return false;
        } else {
            return true;
        }
    }

    get(key: number): number {
        const selectedKey = this.memo.get(key)
        const curTimestamp = new Date().getTime();
        if(!selectedKey || selectedKey.dieAt < curTimestamp) {
            this.memo.delete(key)
            return -1;
        } else {
            return selectedKey.value;
        }
    }

	count(): number {
        let counter = 0;
        const curTimestamp = new Date().getTime();
        this.memo.forEach((value, key, map) => {
            if(curTimestamp < value.dieAt) {
                counter++
            } else {
                this.memo.delete(key)
            }
        })
        return counter;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */