function minOperations(logs: string[]): number {
    let step = 0;
    for(let i = 0; i < logs.length; i++) {
        if(logs[i] === './') continue;
        if(logs[i] === '../' && step > 0) step--
        if(logs[i] !== '../') step++
    }
    return step;
};