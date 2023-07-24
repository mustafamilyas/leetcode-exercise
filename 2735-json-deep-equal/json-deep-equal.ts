function areDeeplyEqual(o1: any, o2: any): boolean {
    if(typeof o1 !== 'object' || typeof o2 !== 'object' || o1 == null || o2 == null) {
        return o1 === o2;
    }
    if(Array.isArray(o1) || Array.isArray(o2)) {
        if(!Array.isArray(o1) || !Array.isArray(o2)) return false;
    }
    const entries1 = Object.entries(o1);
    const entries2 = Object.entries(o2);
    if(entries1.length !== entries2.length) return false;
    for(const [key, value] of entries1) {
        if(!areDeeplyEqual(value, o2[key])) return false;
    }
    return true;
};