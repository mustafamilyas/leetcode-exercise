function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    // create empty graph for nodes and groups (n + m);
    const graph = new Map<number, Set<number>>();
    for (let i = 0; i < n + m; i++) {
        graph.set(i, new Set());
    }

    const indegrees = new Array(n + m).fill(0);
    for (let i = 0; i < beforeItems.length; i++) {
        const items = beforeItems[i];
        const currGroup = n + group[i]; // group index started with offset;

        // Relation between group and current node 
        if (group[i] !== -1) {
            graph.get(currGroup).add(i);
            indegrees[i]++;
        }

        // two types of relation 1) between nodes inside of the group 2) between the groups
        for (const item of items) {
            const itemGroup = n + group[item];
            if (currGroup === itemGroup || group[i] === -1 || group[item] === -1) {
                graph.get(item).add(i);
                indegrees[i]++;
            } else {
                if (!graph.get(itemGroup).has(currGroup)) {
                    graph.get(itemGroup).add(currGroup);
                    indegrees[currGroup]++;
                }
            }
        }
    }

    // Typical topological sort
    const zeroInDegree = [];
    for (let i = 0; i < indegrees.length; i++) {
        if (!indegrees[i]) {
            zeroInDegree.push(i)
        }
    }

    const map = new Map<number, number[]>();
    // keep groups order
    const pushToMap = (item: number ) => {
        if (group[item] === -1) {
            map.set(item + n, [item])
            return;
        } 
        if (map.has(group[item])) {
            map.get(group[item]).push(item); 
        } else {
            map.set(group[item], [item]);
        }
    }

    let count = 0;
    while (zeroInDegree.length) {
        const curr = zeroInDegree.shift();
        if (curr < n) {
            count++;
            pushToMap(curr);
        }
   
        for (const neighbor of graph.get(curr)) {
            indegrees[neighbor]--;
            if (!indegrees[neighbor]) {
                zeroInDegree.push(neighbor);
            }
        }
    }

    // Handle cases with cycles
    if (count !== n) {
        return [];
    }

    return [].concat(...map.values());
};