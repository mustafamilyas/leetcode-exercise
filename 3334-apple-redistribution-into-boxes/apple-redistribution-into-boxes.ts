function minimumBoxes(apple: number[], capacity: number[]): number {
    capacity.sort((a, b)=> b - a);
    let appleNum = apple.reduce((a, b)=> a + b, 0);
    let left = 0, right = apple.length - 1;
    for(let i = 0; i < capacity.length; i++) {
        appleNum -= capacity[i];
        if(appleNum <= 0) return i + 1;
    }
    return capacity.length;
};