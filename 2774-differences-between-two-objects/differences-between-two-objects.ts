function objDiff(obj1: any, obj2: any): any {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return {};
    const diff = {};
    const keys = Object.keys(obj1);
    for(const k of keys) {
        if(obj2[k] !== undefined && obj1[k] !== obj2[k]) {
            if(typeof obj1[k] === 'object' && typeof obj2[k] === 'object' &&
            (
                (Array.isArray(obj1[k]) && Array.isArray(obj2[k])) ||
                (obj1[k] !== null && !Array.isArray(obj1[k]) && !Array.isArray(obj2[k]) && obj2[k] !== null)
            )
            ) {
                const res = objDiff(obj1[k], obj2[k])
                if(Object.keys(res).length) {
                    diff[k] = res;
                }
            } else {
                diff[k] = [obj1[k], obj2[k]]
            }
        }
    }
    return diff
};