function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    const counter: Record<number, number[]> = {};
    const numbersQueue = new MinPriorityQueue();
    for(let i = 0; i < nums.length; i++) {
        addNumber(nums[i], i)
    }
    for(let i = 0; i < k; i++) {
        const node = numbersQueue.front();
        const idx = counter?.[node.element]?.shift();
        if(!counter?.[node.element]?.length) numbersQueue.dequeue()
        nums[idx ?? 0] *= multiplier
        addNumber(node.element * multiplier, idx ?? 0)
    }
    return nums;
    function addNumber(n: number, i: number) {
        if(counter[n] == null || counter[n].length == 0) {
            counter[n] = [i] 
            numbersQueue.enqueue(n)
        } else {
            const idx = counter[n].findIndex((v)=>v >= i)
            if(idx === -1) counter[n].push(i)
            else counter[n].splice(idx, 0, i)
        }
    }
};