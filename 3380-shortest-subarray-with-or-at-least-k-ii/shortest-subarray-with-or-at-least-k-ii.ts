function minimumSubarrayLength(nums: number[], k: number): number {
    let l = 0, min = Number.MAX_SAFE_INTEGER;
    const counter = new ORCounter();
    for(let r = 0; r < nums.length; r++) {
        counter.insert(nums[r])
        while(counter.orValue >= k && l <= r) {
            min = Math.min(min, r - l + 1)
            counter.remove(nums[l++])
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};

class ORCounter {
    private counter: Array<number>;
    orValue: number;
    constructor() {
        this.counter = new Array(31).fill(0)
        this.orValue = 0;
    }
    insert(num: number) {
        const nstr = num.toString(2);
        for(let i = 0; i < nstr.length; i++) {
            if(nstr[nstr.length - 1 - i] === '1') {
                if(this.counter[i] == 0) this.orValue += 2 ** i
                this.counter[i] ++
            }
        }
    }
    remove(num: number) {
        const nstr = num.toString(2);
        for(let i = 0; i < nstr.length; i++) {
            if(nstr[nstr.length - 1 - i] === '1') {
                this.counter[i]--
                if(this.counter[i] == 0) this.orValue -= 2 ** i
            }
        }
    }
}