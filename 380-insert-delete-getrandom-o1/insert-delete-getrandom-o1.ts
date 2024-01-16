class RandomizedSet {
    valuesIndex: Map<number, number>;
    values: Array<number>
    constructor() {
        this.valuesIndex = new Map();
        this.values = []
    }

    insert(val: number): boolean {
        if(this.valuesIndex.has(val)) return false;
        this.valuesIndex.set(val, this.values.length)
        this.values.push(val);
        return true;
    }

    remove(val: number): boolean {
        if(!this.valuesIndex.has(val)) return false;
        // delete with pop, we need to switch with last value
        const toBeRemovedIndex = this.valuesIndex.get(val);
        this.values[toBeRemovedIndex] = this.values[this.values.length - 1];
        this.valuesIndex.set(this.values[this.values.length - 1], toBeRemovedIndex)

        this.valuesIndex.delete(val)
        this.values.pop();
        return true;
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.values.length)
        return this.values[index]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */