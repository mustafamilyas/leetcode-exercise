type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    return filterFalsy(obj)
};

function filterFalsy(obj: any): any {
    if(Array.isArray(obj)) {
        const newObj = []
        obj.forEach((item)=>{
            const childValue = filterFalsy(item);
            if(Boolean(childValue)) {
                newObj.push(childValue)
            }
        })
        return newObj
    } else if(typeof obj === 'object' && obj !== null) {
        const newObj = {};
        Object.entries(obj).forEach(([key, value])=>{
            const childValue = filterFalsy(value);
            if(Boolean(childValue)) {
                newObj[key] = childValue;
            }
        })
        return newObj
    }
    return obj;
}