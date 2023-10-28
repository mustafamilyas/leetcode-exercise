function dailyTemperatures(temperatures: number[]): number[] {
    const result = new Array(temperatures.length).fill(0)
    const stack = [[temperatures[temperatures.length - 1], 1]];
    for(let i = temperatures.length - 1; i >= 0; i--) {
        let waitUntil = 1;
        while(stack.length && stack[stack.length - 1][0] <= temperatures[i]) {
            const [, days] = stack.pop()
            waitUntil += days;
        }

        if(stack.length)  {
            stack.push([temperatures[i], waitUntil]);
            result[i] = waitUntil
        } else {
            stack.push([temperatures[i], 1])
        }
    }
    return result;
};