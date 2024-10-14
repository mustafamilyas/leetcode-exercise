function maxKelements(nums: number[], k: number): number {
    const pq = new MaxPriorityQueue();
    for(let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i])
    }
    let score = 0;
    for(let i = 0; i < k; i++) {
        const {element} = pq.dequeue();
        score += element;
        pq.enqueue(Math.ceil(element / 3))
    }
    return score;
};