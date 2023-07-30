function jsonStringify(object: any): string {
    if(object === null) return 'null';
    if(typeof object === 'string') return `"${object}"`;
    if(typeof object === 'boolean' || typeof object === 'number') return object.toString()
    if(Array.isArray(object)) {
        let res = '['
        for(let i = 0; i < object.length; i++) {
            res += jsonStringify(object[i]) + ( i === object.length - 1 ? '': ',')
        }
        return res + ']'
    }
    if(typeof object === 'object') {
        let res = '{'
        const keys = Object.keys(object)
        for(let i = 0; i < keys.length; i++) {
            res += `"${
                keys[i]
            }":${
                jsonStringify(object[keys[i]])
            }${
                i === keys.length - 1 ? '': ','
            }`
        }
        return res + '}'
    }
    return ''
};