class NumberContainers {
    containerValueMap: Map<number, number>;
    valueDistribution: Map<number, number[]>;
    constructor() {
        this.containerValueMap = new Map();
        this.valueDistribution = new Map();
    }

    change(index: number, number: number): void {
        const oldValue = this.containerValueMap.get(index);
        if(oldValue === number) return;
        if(oldValue !== undefined) {
            const oldValueDistribution = this.valueDistribution.get(oldValue) ?? []
            const oldValueIdx = this.binarySearch(oldValueDistribution, index);
            if(oldValueIdx > -1) oldValueDistribution.splice(oldValueIdx, 1);
        }
        this.containerValueMap.set(index, number)
        const curValueDistribution = this.valueDistribution.get(number)
        if(curValueDistribution == null) {
            this.valueDistribution.set(number, [index])
        } else {
            const nextNumberIdx = this.binarySearch(curValueDistribution, index);
            curValueDistribution.splice(nextNumberIdx, 0, index)
        }
    }

    find(number: number): number {
        const indices = this.valueDistribution.get(number);
        if(!indices || indices.length == 0) return -1;
        return indices[0];
    }

    binarySearch(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length - 1;
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            const midValue = nums[mid]
            if(midValue === target) return mid;
            if(midValue > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return nums[end] > target ? end : start
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */