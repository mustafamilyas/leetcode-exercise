function curry(fn: Function): Function {
    let allArgs = [];
    return function curried(...args) {
        allArgs = [...allArgs, ...args]
        if(allArgs.length >= fn.length) {
            return fn(...allArgs)
        } else {
            return curried
        }
    };
};


function curryUsingApply(fn: Function): Function {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */