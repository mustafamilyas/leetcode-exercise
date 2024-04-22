const NEXT = {'0': '1','1': '2','2': '3','3': '4','4': '5','5': '6','6': '7','7': '8','8': '9','9': '0'}
const PREV = {'0': '9','1': '0','2': '1','3': '2','4': '3','5': '4','6': '5','7': '6','8': '7','9': '8'}
function openLock(deadends: string[], target: string): number {
    const visited = new Set<string>();
    const deadendSet = new Set<string>(deadends)
    let queue = ['0000'];
    let turn = 0;
    do {
        const nextQueue = []
        for(const combination of queue) {
            if(visited.has(combination) || deadendSet.has(combination)) continue;
            if(combination === target) return turn;
            visited.add(combination)
            nextQueue.push(...generateNext(combination))
        }
        turn++;
        queue = nextQueue
    } while(queue.length)
    return -1
};

function generateNext(combine: string) {
    const combinations = []
    for(let i = 0; i < combine.length; i++) {
        combinations.push(combine.slice(0,i) + NEXT[combine[i]] + combine.slice(i + 1))
        combinations.push(combine.slice(0,i) + PREV[combine[i]] + combine.slice(i + 1))
    }
    return combinations
}

// 1112
// deadends 1110 1100
// 1000
// 1001
// 1002
// 1102
// 1112