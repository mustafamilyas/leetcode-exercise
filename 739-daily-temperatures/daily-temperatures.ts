function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    for(let i = n - 1; i >= 0; i--) {
        while(stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) stack.pop()
        answer[i] = (stack?.[stack.length - 1] ?? i) - i;
        stack.push(i);
    }
    return answer;
};