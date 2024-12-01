function checkIfExist(arr: number[]): boolean {
    const set = new Set();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0 && !set.has(0)) {
            set.add(arr[i])
            continue;
        }
        if(set.has(arr[i] / 2) || set.has(arr[i] * 2)) return true;
        set.add(arr[i]);
    }
    return false;
};