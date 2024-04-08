function countStudents(students: number[], sandwiches: number[]): number {
    const counter = [0,0];
    for(const s of students) {
        counter[s]++
    }
    for(let i = 0; i < sandwiches.length && counter[sandwiches[i]] > 0; i++) {
        counter[sandwiches[i]]--
    }
    return counter[0] + counter[1]
};