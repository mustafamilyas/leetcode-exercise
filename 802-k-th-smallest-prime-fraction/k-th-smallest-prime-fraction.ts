function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    const fractionQueue = new MinPriorityQueue();
    const last = arr.length - 1

    for(let i = 0; i < last; i++) {
        fractionQueue.enqueue([i, last], arr[i] / arr[last])
    }
    for(let i = 1; i < k; i++) {
        const {element} = fractionQueue.dequeue();
        const [l, r] = element;
        fractionQueue.enqueue([l, r - 1], arr[l] / arr[r - 1])
    }
    const [l, r] = fractionQueue.front().element;
    return [arr[l], arr[r]]
};