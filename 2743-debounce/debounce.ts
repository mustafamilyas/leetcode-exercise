type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let lastTOID = null;
    return function(...args) {
        if(lastTOID) {
            clearTimeout(lastTOID)
            lastTOID = null;
        }
        lastTOID = setTimeout(()=>{
            fn.apply(this, args);
            lastTOID = null
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */