function trap(height: number[]): number {
    const stack = [];
    let water = 0;
    for(let i = 0; i < height.length; i++) {
        const top = stack.length - 1;
        if(!stack.length || stack[top][1] >= height[i]) {
            stack.push([i, height[i]])
        } else if(stack[top][1] < height[i]) {
            let [_, bottom] = stack.pop();

            while(stack.length && stack[stack.length - 1][1] <= height[i]) {
                const [left, lH] = stack.pop();
                const h = Math.min(lH, height[i]) - bottom;
                const w = i - left - 1;
                water += w * h;
                bottom = lH
            }
            if(stack.length) {
                const [left, lH] = stack[stack.length - 1];
                const h = Math.min(lH, height[i]) - bottom;
                const w = i - left - 1;
                water += w * h;
                bottom = lH
            }
            stack.push([i, height[i]])
        }
    }
    return water;
};