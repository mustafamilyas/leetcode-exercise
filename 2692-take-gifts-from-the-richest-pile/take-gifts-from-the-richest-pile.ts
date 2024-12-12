function pickGifts(gifts: number[], k: number): number {
    const numbersQueue = new MaxPriorityQueue();
    let sum = 0;
    for(const gift of gifts) {
        numbersQueue.enqueue(gift)
        sum += gift
    }
    for(let i = 0; i < k; i++) {
        const {element} = numbersQueue.dequeue();
        const sqrt = Math.floor(Math.sqrt(element));
        const taken = element - sqrt;
        numbersQueue.enqueue(sqrt);
        sum -= taken
    }
    return sum  
};