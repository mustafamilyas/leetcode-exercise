function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const pq = new MaxPriorityQueue();
    let i = 0
    for(; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if(diff <= 0) continue;

        bricks -= diff
        pq.enqueue(diff)

        if(bricks < 0) {
            bricks += pq.dequeue().element
            ladders--;
        }

        if(ladders < 0) break;
    }
    return i;
};