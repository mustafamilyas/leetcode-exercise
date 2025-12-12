function countMentions(numberOfUsers: number, events: string[][]): number[] {
    events.sort((a, b) => {
        const a1 = Number(a[1]);
        const b1 = Number(b[1]);
        if(a1 == b1) {
            if(a[0] == 'OFFLINE') return -1
            if(b[0] == 'OFFLINE') return 1
        }
        return Number(a[1]) - Number(b[1])
    })
    // console.log(events);
    const userOnline = Array.from({ length: numberOfUsers }, () => 0);
    const mention = Array.from({ length: numberOfUsers }, () => 0);
    let curTimestamp = 0;
    for(const [event, timestamp, user] of events) {
        let parsedTs = Number(timestamp);
        curTimestamp = parsedTs;
        if(event == 'OFFLINE') {
            userOnline[Number(user)] = parsedTs + 60;
        } else if(event == 'MESSAGE') {
            if(user == 'HERE') {
                for(let i = 0; i < numberOfUsers; i++) {
                    if(userOnline[i] <= curTimestamp) mention[i]++;
                }
            } else if(user == 'ALL') {
                for(let i = 0; i < numberOfUsers; i++) {
                    mention[i]++;
                }
            } else {
                const indices = user.split(' ').map((s)=>parseInt(s.slice(2)))
                for(const index of indices) {
                    mention[index]++;
                }
            }
        }
        // console.log(event, mention)
    }
    return mention;
};