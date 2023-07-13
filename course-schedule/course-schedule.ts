function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const courses = new Array(numCourses);
    const visited = new Set();
    const done = new Array(numCourses);

    for(const [from, to] of prerequisites) {
        if(courses[from]) courses[from].push(to)
        else courses[from] = [to]
    }

    function checkCyclic(visited: Set<number>, target: number) : boolean{
        const nextNodes = courses[target];
        if(visited.has(target)) return false;
        if(!nextNodes) return true;
        if(typeof done[target] === 'boolean') return done[target];

        visited.add(target)
        for(const nextCourse of nextNodes) {
            const localRes = checkCyclic(visited, nextCourse)
            if(!localRes) {
                done[target] = false;
                return false;
            };
        }
        visited.delete(target);
        done[target] = true;
        return true;
    }

    for(let i = 0; i < numCourses; i++) {
        const localRes = checkCyclic(new Set(), i);
        if(!localRes) return false;
    }

    return true;
};