function largestRectangleArea(heights: number[]): number {
    let stack: number[] = [];
    let maxArea = 0;
    let n = heights.length;
    for (let i = 0; i <= n; i++) {
        let currentHeight = heights[i] || 0;
        while (stack.length > 0 && heights[stack.at(-1)] > currentHeight) {
            let h = heights[stack.pop()]; 
            let left = stack.length > 0 ? stack.at(-1) : -1;
            let width = i - left - 1;
            maxArea = Math.max(maxArea, h * width);
        }

        stack.push(i);
    }

    return maxArea;
};


/*
1 2 3 5 6 6 4-> 
- [[1,0],[2,1],[3,2],[5,3],[6,4]]
- [[1,0],[2,1],[3,2],[4,3]]
5 4 3 2 1 -> [[5,0]], [[4,0]], [[3,0]]

*/

/*
1 2 3 1
[]


*/