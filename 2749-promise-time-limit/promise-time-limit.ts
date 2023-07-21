type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const rejectPromise = new Promise((_, reject)=> {
            setTimeout(()=>reject('Time Limit Exceeded'), t)
        })
        const fnPromise = fn(...args)
        return Promise.race([rejectPromise, fnPromise])
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */