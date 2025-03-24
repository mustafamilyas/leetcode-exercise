function countDays(days: number, meetings: number[][]): number {
    meetings.sort((a, b)=>a[0] - b[0]);
    let available = meetings[0][0] - 1;
    let range = meetings[0]
    for(let i = 1; i < meetings.length; i++) {
        if(range[1] < meetings[i][0]) {
            available += meetings[i][0] - range[1] - 1;
            range = meetings[i]
        } else {
            range[1] = Math.max(range[1], meetings[i][1])
        }
    }
    return available + days - range[1];
};