function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = [];
    
    for(let i = 0; i < nums.length; i++) {
        while(deque.length && deque[0] <= i - k) {
            // shift the sliding window
            deque.shift();
        }
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            // pop if the top is less than cur number
            deque.pop();
        }
        deque.push(i)
        if(i >= k - 1) {
            result.push(nums[deque[0]])
        }
    }
    
    return result;
};