function countSeniors(details: string[]): number {
    let senior = 0;
    for(const code of details) {
        const age = parseInt(code.slice(11, 13))
        if(age > 60) senior++
    }
    return senior;
};