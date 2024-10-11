function smallestChair(times: number[][], targetFriend: number): number {
    const friends = times.map((interval, i)=>[...interval, i])
    friends.sort((a,b)=>a[0]-b[0]);
    const intervalQueue = new MinPriorityQueue({ priority: ([, end]) => end });
    const availableQueue = new MinPriorityQueue();
    let maxChair = 0;
    for(const [start, end, index] of friends) {
        while(!intervalQueue.isEmpty()) {
            const {element: interval} = intervalQueue.front();
            if(interval[1] <= start) {
                const {element} = intervalQueue.dequeue();
                availableQueue.enqueue(element[2])
            } else {
                break;
            }
        }
        if(availableQueue.isEmpty()) {
            if(index === targetFriend) return maxChair;
            intervalQueue.enqueue([start, end, maxChair++])
        } else if(availableQueue.size() === maxChair) {
            availableQueue.clear();
            maxChair = 0;
            if(index === targetFriend) return maxChair;
            intervalQueue.enqueue([start, end, maxChair++])
        } else {
            const {element} = availableQueue.dequeue();
            if(index === targetFriend) return element;
            intervalQueue.enqueue([start, end, element])
        }
    }

    return -1;
};