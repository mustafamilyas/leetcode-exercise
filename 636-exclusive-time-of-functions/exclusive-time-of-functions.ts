function exclusiveTime(n: number, logs: string[]): number[] {
    const result = new Array(n).fill(0);
    let cur = null;
    const paused = [];
    let topUsed = 0;
    for(const log of logs) {
        const [idStr, action, tsStr] = log.split(':');
        const id = parseInt(idStr)
        const ts = parseInt(tsStr)
        if(action == 'start') {
            if(cur == null) {
                cur = [id, ts];
                continue;
            };
            const [curId, curTs] = cur;
            result[curId] += ts - curTs; // exclusive end
            paused.push(curId);
            cur = [id, ts]
        } else {
            const [curId, curTs] = cur;
            result[curId] += ts - curTs + 1; // inclusive
            if(paused.length) {
                const conId = paused.pop();
                cur = [conId, ts + 1]
            } else {
                cur = null
            }
        }
    }
    return result;
};