function findItinerary(tickets: string[][]): string[] {
    tickets.sort((a,b)=>{
        if(a[0] === b[0]) {
            return a[1] > b[1] ? 1 : -1
        } else {
            return a[0] > b[0] ? 1 : -1
        }
    })
    const map: Record<string, string[]> = {};
    for(const [from, to] of tickets) {
        if(map[from]) map[from].push(to)
        else map[from] = [to]
    }
    const result = []
    const dfs = (ticket: string): void => {
        const destinations: string[] = map[ticket] || [];
        while (destinations.length > 0)  dfs(destinations.shift())
        result.push(ticket);
    }

    dfs('JFK');
    return result.reverse()
};