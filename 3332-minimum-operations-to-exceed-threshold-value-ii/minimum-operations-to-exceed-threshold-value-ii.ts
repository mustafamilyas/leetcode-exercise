function minOperations(nums: number[], k: number): number {
    const numbersQueue = new MinPriorityQueue();
    let operation = 0;
    for(const n of nums) {
        numbersQueue.enqueue(n);
    }
    while(numbersQueue.size() > 1 && numbersQueue.front().element < k) {
        const x = numbersQueue.dequeue().element;
        const y = numbersQueue.dequeue()?.element ?? 0;
        numbersQueue.enqueue(Math.min(x, y) * 2 + Math.max(x, y))
        operation++;
    }
    return operation;
};