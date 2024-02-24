function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
    meetings.sort((a,b)=>a[2] - b[2]);
    const canStartGossiping = new Array(n).fill(Infinity);
    const knowSecretSet = new Set<number>([0, firstPerson]);
    canStartGossiping[0] = 0;
    canStartGossiping[firstPerson] = 0;
    const stack: number[][] = [];

    for(let i = 0; i < meetings.length; i++) {
        const [a, b, time] = meetings[i]

        if(canStartGossiping[b] <= time) talkSecret(a, time)
        else if(canStartGossiping[a] <= time) talkSecret(b, time)
        else stack.push([a, b])

        if(meetings[i][2] !== meetings?.[i + 1]?.[2]) {
            const adjacency: Record<number, number[]> = {};
            const localStack = []
            while(stack.length) {
                const [x, y] = stack.pop();
                if(adjacency[x] === undefined) adjacency[x] = [y]
                else adjacency[x].push(y)
                if(adjacency[y] === undefined) adjacency[y] = [x]
                else adjacency[y].push(x)

                if(knowSecretSet.has(x)) localStack.push(x)
                else if(knowSecretSet.has(y)) localStack.push(y)
            }
            const seen = new Set();
            while(localStack.length) {
                const cur = localStack.pop();
                if(seen.has(cur)) continue;
                talkSecret(cur, time);
                seen.add(cur)
                if(adjacency[cur]) localStack.push(...adjacency[cur])
            }
        };
    }
    return Array.from(knowSecretSet.values())

    function talkSecret(person: number, time: number) {
        canStartGossiping[person] = Math.min(canStartGossiping[person], time)
        knowSecretSet.add(person)
    }
};