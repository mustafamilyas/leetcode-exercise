type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if(n === 0) return arr;
    const stack: Array<[MultiDimensionalArray | number, number]> = arr.map((item)=>[item, 1]);
    let result = []
    while(stack.length) {
        const [item, depth] = stack.pop();
        if(depth > n || typeof item === 'number') {
            result.unshift(item)
        } else {
            for(let e of item) {
                stack.push([e, depth + 1])
            }
        }
    }
    
    return result;
};