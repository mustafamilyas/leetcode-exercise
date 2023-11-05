function buildArray(target: number[], n: number): string[] {
    let current = 0;
    let result = []
    for(const num of target) {
        const operationNeeded = num - current;
        const pushPopOperation = operationNeeded - 1;
        for(let i = 0; i < pushPopOperation; i++) {
            result.push('Push', 'Pop')
        }
        result.push('Push')
        current = num;
    }
    return result;
};