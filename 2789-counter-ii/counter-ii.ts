type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let n = init;
    return {
        increment() {
            return ++n;
        },
        decrement() {
            return --n;
        },
        reset() {
            n = init;
            return n;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */