/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    nums: number[];
    cur: number;

    constructor(nestedList: NestedInteger[]) {
        this.nums = []
        for(const nl of nestedList) {
            this.nums.push(...this.flatten(nl))
        }
        this.cur = 0;
    }

    flatten(ni: NestedInteger): number[] {
        const result = [];
        if(ni.isInteger()) {
            result.push(ni.getInteger())
        } else {
            const list = ni.getList();
            if(list.length > 0) {
                for(const i of list) {
                    result.push(...this.flatten(i))
                }
            } 
        }
        return result;
    }

    hasNext(): boolean {
		return this.cur < this.nums.length;
    }

	next(): number {
		return this.nums[this.cur++]
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */