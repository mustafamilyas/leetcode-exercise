function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const divisionMap: Record<string, Record<string, number>> = {};
    for(let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        if(!divisionMap[a]) divisionMap[a] = {}
        divisionMap[a][b] = value
        if(!divisionMap[b]) divisionMap[b] = {}
        divisionMap[b][a] = 1 / value
    }
    const result = []
    for(const [a, b] of queries) {
        result.push(getValue(a, b, new Set()))
    }
    return result;

    function getValue(a: string, b: string, visited: Set<string>) {
        if(!divisionMap[a] || !divisionMap[b] || visited.has(a)) return -1;
        if(a === b) return 1;
        if(divisionMap?.[a]?.[b] !== undefined) return divisionMap[a][b];
        visited.add(a)
        for(const key in divisionMap[a]) {
            const childValue = getValue(key, b, visited);
            if(childValue !== -1) return divisionMap[a][key] * childValue;
        }
        return -1;
    }
};