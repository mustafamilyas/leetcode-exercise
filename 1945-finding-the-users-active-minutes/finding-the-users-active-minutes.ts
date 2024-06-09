function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    const users: Record<number, Set<number>> = {};
    for(const [id, time] of logs) {
        if(users[id] === undefined) users[id] = new Set();
        users[id].add(time)
    }
    const actions = new Array(k).fill(0);
    for(const v of Object.values(users)) {
        actions[v.size - 1]++
    }
    return actions;
};