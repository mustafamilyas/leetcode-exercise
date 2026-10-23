const SIDE_A = [2, 3, 4, 5];
const MID = [4, 5, 6, 7];
const SIDE_B = [6, 7, 8, 9];
function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    reservedSeats.sort((a, b)=>a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    let group = 0, idx = 0, lastSeen = 1;
    let set = new Set();
    while(idx <= reservedSeats.length) {
        const x = reservedSeats?.[idx]?.[0] ?? n + 1;
        const y = reservedSeats?.[idx]?.[1] ?? 0;
        if(x == lastSeen) set.add(y)
        else {
            group += (x - lastSeen - 1) * 2;
            lastSeen = x;
            let mid = false;
            if(!set.has(4) && !set.has(5)) {
                if(!set.has(2) && !set.has(3)) group++
                else if(!set.has(6) && !set.has(7)) {
                    group++
                    mid = true;
                }
            }
            if(!mid && !SIDE_B.some(e=> set.has(e))) group++;
            set = new Set([y]);
        }
        idx++;
    }
    return group;
};