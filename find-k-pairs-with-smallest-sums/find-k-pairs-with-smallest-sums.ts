function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const pq = new MaxPriorityQueue({ priority: (turn) => turn[0] + turn[1] });
    for(const n1 of nums1) {
        for(const n2 of nums2) {
            if(pq.size() === k) {
                const top = pq.front();
                if(n1 + n2 >= top.priority) break;
                pq.enqueue([n1, n2])
                pq.dequeue()
            } else {
                pq.enqueue([n1, n2])
            }
        }
    }
    return pq.toArray().map((item)=>item.element);
};