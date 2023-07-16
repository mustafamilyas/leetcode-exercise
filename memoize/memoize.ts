type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const memo = {}
    return function(...args) {
        const key = args.join(':');
        if(memo[key] !== undefined) return memo[key];
        memo[key] = fn(...args);
        return memo[key]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */