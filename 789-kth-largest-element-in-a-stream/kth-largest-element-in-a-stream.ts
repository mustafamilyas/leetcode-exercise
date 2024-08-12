class KthLargest {
    arrs: number[]
    k: number;
    constructor(k: number, nums: number[]) {
        nums.sort((a,b)=>b-a);
        this.arrs = nums.slice(0, k);
        this.k = k;
    }

    add(val: number): number {
        const firstLess = this.arrs.findIndex((num) => num < val);
        if(firstLess > -1) {
            this.arrs.splice(firstLess, 0, val)
        } else if (this.arrs.length < this.k) {
            this.arrs.push(val)
        }
        if(this.arrs.length > this.k) this.arrs.pop();
        return this.arrs[this.arrs.length - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */