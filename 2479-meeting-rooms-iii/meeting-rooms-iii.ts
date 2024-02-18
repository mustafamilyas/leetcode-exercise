function mostBooked(n: number, meetings: number[][]): number {
    meetings.sort((a, b)=>a[0] - b[0])
    const room = new Array(n);
    let maxIdx = 0;
    for(let m = 0; m < meetings.length; m++) {
        const [start, end] = meetings[m]
        let soomEmptyRoomIdx = -1;
        for(let i = 0; i < n; i++) {
            if(room[i] == null) {
                room[i] = [end];
                soomEmptyRoomIdx = -1;
                break;
            }
            const curRoom = room[i]
            if(curRoom[curRoom.length - 1] <= start) {
                curRoom.push(end);
                if(room[maxIdx].length < curRoom.length || (room[maxIdx].length === curRoom.length && i < maxIdx)) maxIdx = i
                soomEmptyRoomIdx = -1;
                break;
            }
            const soonEmptyRoom = room[soomEmptyRoomIdx];
            if(soomEmptyRoomIdx == -1 || curRoom[curRoom.length - 1] < soonEmptyRoom[soonEmptyRoom.length - 1]) {
                soomEmptyRoomIdx = i;
            }
        }
        if(soomEmptyRoomIdx > -1) {
            const soonEmptyRoom = room[soomEmptyRoomIdx];
            const nextStart = soonEmptyRoom[soonEmptyRoom.length - 1];
            soonEmptyRoom.push(nextStart + end - start);
            if(room[maxIdx].length < soonEmptyRoom.length || (room[maxIdx].length === soonEmptyRoom.length && soomEmptyRoomIdx < maxIdx)) maxIdx = soomEmptyRoomIdx
        }
    }
    return maxIdx
};