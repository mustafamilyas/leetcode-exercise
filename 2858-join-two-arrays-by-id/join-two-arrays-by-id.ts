function join(arr1: any[], arr2: any[]): any[] {
    const map = {};
    for(const {id, ...res} of arr1) {
        map[id] = {
            id,
            ...res
        }
    }
    for(const {id, ...res} of arr2) {
        map[id] = {
            ...map?.[id],
            id,
            ...res
        }
    }
    return Object.values(map).sort((a: any,b: any)=>a.id - b.id);
};