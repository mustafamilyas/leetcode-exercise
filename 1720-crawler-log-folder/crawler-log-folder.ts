function minOperations(logs: string[]): number {
    let step = 0;
    for(const command of logs) {
        if(command === './') continue;
        if(command === '../' && step > 0) step--
        if(command !== '../') step++
    }
    return step;
};