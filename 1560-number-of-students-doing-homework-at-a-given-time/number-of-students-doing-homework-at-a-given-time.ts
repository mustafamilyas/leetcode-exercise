function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let student = 0;
    for(let i = 0; i < startTime.length; i++) {
        if(startTime[i] <= queryTime && queryTime <= endTime[i]) student++
    }
    return student;
};